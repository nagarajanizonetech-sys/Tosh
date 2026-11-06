import os
import sys
from logging.config import fileConfig

from sqlalchemy import engine_from_config, pool

from alembic import context

# Ensure app is importable
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.core.config import settings
from app.db.all_models import Base

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config = context.config

# Interpret the config file for Python logging.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)


def normalize_url(url: str) -> str:
    cleaned = url.strip()
    if cleaned.startswith("postgresql+asyncpg://"):
        return cleaned.replace("postgresql+asyncpg://", "postgresql+psycopg2://", 1)
    if cleaned.startswith("postgresql://"):
        return cleaned.replace("postgresql://", "postgresql+psycopg2://", 1)
    if cleaned.startswith("postgres://"):
        return cleaned.replace("postgres://", "postgresql+psycopg2://", 1)
    if cleaned.startswith("sqlite+aiosqlite://"):
        return cleaned.replace("sqlite+aiosqlite://", "sqlite://", 1)
    return cleaned


def get_sync_url() -> str:
    url = (
        getattr(settings, "SYNC_DATABASE_URL", None)
        or getattr(settings, "DATABASE_SYNC_URL", None)
        or os.getenv("DATABASE_SYNC_URL")
        or getattr(settings, "DATABASE_URL", None)
        or os.getenv("DATABASE_URL")
        or ""
    )
    if not url:
        return "sqlite:///./tosh.db"
    return normalize_url(url)


# Set database URL dynamically from settings
config.set_main_option("sqlalchemy.url", get_sync_url())

target_metadata = Base.metadata


def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    raw_url = config.get_main_option("sqlalchemy.url") or get_sync_url()
    url = normalize_url(raw_url)
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
        compare_type=True,
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    configuration = config.get_section(config.config_ini_section, {})
    raw_url = config.get_main_option("sqlalchemy.url") or get_sync_url()
    configuration["sqlalchemy.url"] = normalize_url(raw_url)

    connectable = engine_from_config(
        configuration,
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
            compare_type=True,
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
