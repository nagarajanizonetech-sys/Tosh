import asyncio
import json
from datetime import UTC, datetime
from typing import Any

import structlog
from fastapi import WebSocket, WebSocketDisconnect

logger = structlog.get_logger("tosh.websocket")


class ConnectionManager:
    """Manages active WebSocket connections and broadcasts real-time clinic updates."""

    def __init__(self) -> None:
        self.active_connections: set[WebSocket] = set()
        self._lock = asyncio.Lock()

    async def connect(self, websocket: WebSocket) -> None:
        await websocket.accept()
        async with self._lock:
            self.active_connections.add(websocket)
        logger.info("websocket_client_connected", active_clients=len(self.active_connections))

    async def disconnect(self, websocket: WebSocket) -> None:
        async with self._lock:
            self.active_connections.discard(websocket)
        logger.info("websocket_client_disconnected", active_clients=len(self.active_connections))

    async def broadcast(self, event_type: str, data: Any = None) -> None:
        """Broadcast an event payload to all currently connected WebSocket clients."""
        async with self._lock:
            if not self.active_connections:
                return
            connections = list(self.active_connections)

        message = json.dumps(
            {
                "event": event_type,
                "data": data or {},
                "timestamp": datetime.now(UTC).isoformat(),
            },
            default=str,
        )

        dead_connections: set[WebSocket] = set()
        for ws in connections:
            try:
                await ws.send_text(message)
            except (WebSocketDisconnect, RuntimeError, ConnectionError, OSError) as ws_err:
                logger.debug("websocket_client_send_failed", error=str(ws_err))
                dead_connections.add(ws)

        if dead_connections:
            async with self._lock:
                self.active_connections.difference_update(dead_connections)


ws_manager = ConnectionManager()


async def broadcast_event(event_type: str, data: Any = None) -> None:
    """Convenience helper to broadcast an event safely without blocking endpoint responses."""
    try:
        await ws_manager.broadcast(event_type, data)
    except (RuntimeError, OSError, ConnectionError, ValueError, TypeError) as exc:
        logger.warning("broadcast_failed", event=event_type, error=str(exc))
