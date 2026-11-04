import socket
from collections.abc import AsyncGenerator
from typing import Any

from sqlalchemy.ext.asyncio import (
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from app.core.config import settings


def _is_pg_available(url: str) -> bool:
    """Fast socket check (0.3s) to ensure PostgreSQL host:port is accepting connections."""
    if not url or url.startswith("sqlite"):
        return True
    try:
        netloc = url.split("@")[-1].split("/")[0] if "@" in url else url.split("://")[-1].split("/")[0]
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
            s.settimeout(0.3)
            return s.connect_ex((host, port)) == 0
    except Exception:
        return False


# Engine configuration
engine_kwargs: dict[str, Any] = {
    "echo": settings.DEBUG,
    "future": True,
}

if not settings.ASYNC_DATABASE_URL.startswith("sqlite") and _is_pg_available(settings.ASYNC_DATABASE_URL):
    engine_kwargs.update({
        "pool_size": 20,
        "max_overflow": 10,
        "pool_pre_ping": True,
    })
    engine = create_async_engine(settings.ASYNC_DATABASE_URL, **engine_kwargs)
else:
    engine = create_async_engine("sqlite+aiosqlite:///./tosh.db", echo=settings.DEBUG, future=True)

async_session_factory = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_factory() as session:
        yield session


async def get_optional_db() -> AsyncGenerator[AsyncSession | None, None]:
    try:
        session = async_session_factory()
    except Exception:
        yield None
        return

    try:
        async with session:
            yield session
    except Exception:
        pass
