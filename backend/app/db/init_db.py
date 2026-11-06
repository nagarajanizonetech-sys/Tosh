import socket

import structlog
from sqlalchemy import select, text
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio import create_async_engine

import app.db.all_models  # noqa: F401 - Register all models with Base.metadata
from app.core.config import settings
from app.db import session as db_session
from app.db.base import Base

logger = structlog.get_logger("tosh.db")


def _is_database_port_reachable(url: str) -> bool:
    """Fast non-blocking port check to avoid long TCP hangs when PostgreSQL is not running."""
    if not url or url.startswith("sqlite"):
        return True
    try:
        netloc = (
            url.split("@")[-1].split("/")[0] if "@" in url else url.split("://")[-1].split("/")[0]
        )
        host = "127.0.0.1"
        port = 5432
        if ":" in netloc:
            parts = netloc.split(":")
            host = parts[0] or "127.0.0.1"
            port = int(parts[1]) if parts[1].isdigit() else 5432
        else:
            host = netloc or "127.0.0.1"
        if host in ("localhost", "0.0.0.0"):
            host = "127.0.0.1"
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(0.6)
            return s.connect_ex((host, port)) == 0
    except (OSError, ValueError):
        return False


async def init_database() -> None:
    """Verify DB connection, create missing tables, and auto-seed initial data.
    If PostgreSQL is unreachable, automatically fall back to local SQLite to ensure
    zero-setup uninterrupted operation.
    """
    is_sqlite = settings.DATABASE_URL.startswith("sqlite")
    connected = False

    # Attempt 1: Test connection to configured DATABASE_URL
    if not is_sqlite and not _is_database_port_reachable(settings.DATABASE_URL):
        logger.info("postgresql_port_not_reachable_falling_back_to_sqlite")
        print(f"\n[INFO] PostgreSQL ({settings.DATABASE_URL}) is not running.")
        print("[INFO] Falling back to local SQLite database (./tosh.db) for instant startup...\n")
        try:
            sqlite_url = "sqlite+aiosqlite:///./tosh.db"
            new_engine = create_async_engine(sqlite_url, echo=False, future=True)
            db_session.engine = new_engine
            from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

            db_session.async_session_factory = async_sessionmaker(
                bind=new_engine,
                class_=AsyncSession,
                expire_on_commit=False,
                autocommit=False,
                autoflush=False,
            )
            connected = True
        except (SQLAlchemyError, OSError) as e2:
            logger.error("sqlite_fallback_failed", error=str(e2))
    else:
        try:
            async with db_session.engine.connect() as conn:
                await conn.execute(text("SELECT 1"))
            connected = True
            logger.info(
                "database_connected",
                target=settings.DATABASE_URL.split("@")[-1]
                if "@" in settings.DATABASE_URL
                else settings.DATABASE_URL,
            )
        except (SQLAlchemyError, OSError) as exc:
            logger.warning("primary_database_connection_failed", error=str(exc))
            if not is_sqlite:
                print(
                    f"\n[WARNING] Could not connect to PostgreSQL ({settings.DATABASE_URL}): {exc}"
                )
                print(
                    "[INFO] Falling back to local SQLite database (./tosh.db) so the system works immediately...\n"
                )
                try:
                    sqlite_url = "sqlite+aiosqlite:///./tosh.db"
                    new_engine = create_async_engine(sqlite_url, echo=False, future=True)
                    db_session.engine = new_engine
                    from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

                    db_session.async_session_factory = async_sessionmaker(
                        bind=new_engine,
                        class_=AsyncSession,
                        expire_on_commit=False,
                        autocommit=False,
                        autoflush=False,
                    )
                    connected = True
                except (SQLAlchemyError, OSError) as e2:
                    logger.error("sqlite_fallback_failed", error=str(e2))

    if not connected:
        logger.error("database_initialization_aborted_no_connection")
        return

    # Attempt 2: Ensure all tables exist
    try:
        async with db_session.engine.begin() as conn:
            await conn.run_sync(Base.metadata.create_all)
        logger.info("database_tables_verified")
    except (SQLAlchemyError, OSError) as exc:
        logger.error("database_table_creation_failed", error=str(exc))
        return

    # Attempt 3: Automatically seed initial & clinical data on startup
    try:
        if settings.AUTO_SEED:
            logger.info("auto_seeding_database_on_startup")
            print("[INFO] Automatically seeding database from seed data...")
            from app.scripts.seed import seed_database

            await seed_database(clean=False)
            logger.info("database_seeded_successfully")
        else:
            # Sync staff accounts to configured initial password
            from app.core.security import hash_password
            from app.modules.users.models import User

            initial_pw = settings.RECEPTION_INITIAL_PASSWORD or "123456789"
            async with db_session.async_session_factory() as session:
                res = await session.execute(
                    select(User).where(
                        User.email.in_(["reception@gmail.com", "skin@gmail.com", "ortho@gmail.com"])
                    )
                )
                existing_staff = res.scalars().all()
                if existing_staff:
                    for staff in existing_staff:
                        staff.password_hash = hash_password(initial_pw)
                        staff.must_change_password = False
                    await session.commit()
                    logger.info("staff_initial_passwords_synced")
    except (SQLAlchemyError, OSError, ValueError) as exc:
        logger.warning("database_seeding_check_failed", error=str(exc))
