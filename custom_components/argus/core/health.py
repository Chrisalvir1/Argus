"""Argus System Health, Coverage & Readiness Diagnostic Engine."""
from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional


@dataclass
class HealthIssue:
    issue_id: str
    severity: str  # critical, warning, info
    category: str  # sensor, battery, siren, mqtt, schedule, media
    message: str
    entity_id: Optional[str] = None
    recommendation: str = ""


@dataclass
class HealthReport:
    readiness_score: int  # 0 to 100
    status: str  # optimal, degraded, critical
    issues: List[HealthIssue] = field(default_factory=list)
    checked_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    recommendations: List[str] = field(default_factory=list)


def evaluate_system_health(
    states_dict: Dict[str, Any],
    configured_sensors: List[str],
    siren_entity: Optional[str] = None,
    mqtt_enabled: bool = False,
    mqtt_connected: bool = True,
) -> HealthReport:
    """Evaluate system readiness score (0-100) and identify health issues."""
    issues: List[HealthIssue] = []
    score = 100
    recommendations: List[str] = []

    # 1. Evaluate Sensor Availability
    if not configured_sensors:
        score -= 25
        issues.append(HealthIssue(
            issue_id="no_sensors",
            severity="warning",
            category="sensor",
            message="No hay sensores configurados para protección",
            recommendation="Agrega al menos un sensor de puerta, ventana o movimiento.",
        ))
        recommendations.append("Configura sensores en tus áreas o modos de seguridad.")

    for sid in configured_sensors:
        st = states_dict.get(sid)
        if not st or st.get("state") in ("unavailable", "unknown"):
            score -= 15
            issues.append(HealthIssue(
                issue_id=f"sensor_unavailable_{sid}",
                severity="critical",
                category="sensor",
                message=f"El sensor {sid} no está disponible",
                entity_id=sid,
                recommendation=f"Verifica la batería o conexión de {sid}.",
            ))
            recommendations.append(f"Revisa el estado de red o batería del sensor {sid}.")

        # Check Low Battery
        if st and isinstance(st.get("attributes"), dict):
            bat = st["attributes"].get("battery_level") or st["attributes"].get("battery")
            try:
                if bat is not None and float(bat) < 20.0:
                    score -= 10
                    issues.append(HealthIssue(
                        issue_id=f"low_battery_{sid}",
                        severity="warning",
                        category="battery",
                        message=f"Batería baja en {sid} ({bat}%)",
                        entity_id=sid,
                        recommendation=f"Reemplaza la batería de {sid} pronto.",
                    ))
                    recommendations.append(f"Reemplaza la batería baja de {sid}.")
            except (ValueError, TypeError):
                pass

    # 2. Evaluate Siren Configuration
    if not siren_entity:
        score -= 10
        issues.append(HealthIssue(
            issue_id="no_siren",
            severity="warning",
            category="siren",
            message="No hay sirena principal configurada",
            recommendation="Asigna una entidad de sirena para disuasión sonora.",
        ))
        recommendations.append("Asigna una sirena o altavoz disuasorio.")
    else:
        st = states_dict.get(siren_entity)
        if not st or st.get("state") in ("unavailable", "unknown"):
            score -= 15
            issues.append(HealthIssue(
                issue_id=f"siren_unavailable_{siren_entity}",
                severity="critical",
                category="siren",
                message=f"La sirena {siren_entity} no está disponible",
                entity_id=siren_entity,
                recommendation=f"Verifica la alimentación y conexión de la sirena {siren_entity}.",
            ))

    # 3. Evaluate MQTT Connectivity
    if mqtt_enabled and not mqtt_connected:
        score -= 15
        issues.append(HealthIssue(
            issue_id="mqtt_disconnected",
            severity="warning",
            category="mqtt",
            message="El broker MQTT está desconectado",
            recommendation="Verifica las credenciales y estado del servidor MQTT.",
        ))
        recommendations.append("Restablece la conexión con el broker MQTT.")

    score = max(0, min(100, score))
    if score >= 90:
        status = "optimal"
    elif score >= 60:
        status = "degraded"
    else:
        status = "critical"

    return HealthReport(
        readiness_score=score,
        status=status,
        issues=issues,
        recommendations=recommendations,
    )
