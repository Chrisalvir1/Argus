"""Argus Instance Runtime State Manager."""
from __future__ import annotations

from datetime import datetime, timezone
import logging
from typing import Any

_LOGGER = logging.getLogger(__name__)


def build_runtime_state_record(
    entry_id: str, state: str, source: str = "system"
) -> dict[str, Any]:
    """Build isolated runtime record per entry_id."""
    return {
        "entry_id": entry_id,
        "state": state,
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "source": str(source)[:64],
    }
