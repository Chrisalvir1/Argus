"""Argus Audit Logging Structure and Event Severities."""
from __future__ import annotations

import copy
from datetime import datetime, timezone
from typing import Any

AUDIT_LOG_MAX = 500

SEVERITY_INFO = "info"
SEVERITY_WARNING = "warning"
SEVERITY_CRITICAL = "critical"

VALID_SEVERITIES = {SEVERITY_INFO, SEVERITY_WARNING, SEVERITY_CRITICAL}


def format_audit_entry(
    action: str,
    detail: str = "",
    user: str = "Argus",
    *,
    severity: str = SEVERITY_INFO,
    metadata: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Format standard audit record."""
    sev = severity if severity in VALID_SEVERITIES else SEVERITY_INFO
    return {
        "ts": datetime.now(timezone.utc).isoformat(),
        "action": str(action)[:64],
        "detail": str(detail)[:1000],
        "user": str(user)[:128],
        "severity": sev,
        "metadata": copy.deepcopy(metadata or {}),
    }
