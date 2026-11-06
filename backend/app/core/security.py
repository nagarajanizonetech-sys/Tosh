import os
from datetime import UTC, datetime, timedelta
from typing import Any

import jwt
from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError

from app.core.config import settings

# Argon2id password hasher with production-grade parameters
_hasher = PasswordHasher(
    time_cost=3,
    memory_cost=65536,  # 64 MB
    parallelism=4,
    hash_len=32,
    salt_len=16,
)


def hash_password(password: str) -> str:
    """Hash a password using argon2id."""
    return _hasher.hash(password)


def verify_password(password: str, hashed_password: str) -> bool:
    """Verify a password against an argon2id hash."""
    try:
        return _hasher.verify(hashed_password, password)
    except VerifyMismatchError:
        return False
    except Exception:  # noqa: BLE001
        return False


def create_access_token(data: dict[str, Any], expires_delta: timedelta | None = None) -> str:
    """Create a signed JWT access token."""
    to_encode = data.copy()
    now = datetime.now(UTC)
    if expires_delta:
        expire = now + expires_delta
    else:
        expire = now + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire, "iat": now})
    secret_key = (
        settings.JWT_SECRET_KEY
        or os.getenv("JWT_SECRET_KEY")
        or "change-this-to-a-very-secure-random-secret-key-in-production"
    )
    return jwt.encode(to_encode, secret_key, algorithm=settings.JWT_ALGORITHM)


def decode_access_token(token: str) -> dict[str, Any]:
    """Decode and validate a JWT access token."""
    secret_key = (
        settings.JWT_SECRET_KEY
        or os.getenv("JWT_SECRET_KEY")
        or "change-this-to-a-very-secure-random-secret-key-in-production"
    )
    return jwt.decode(
        token,
        secret_key,
        algorithms=[settings.JWT_ALGORITHM],
        options={"require": ["exp", "iat"]},
    )
