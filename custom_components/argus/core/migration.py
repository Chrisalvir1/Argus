"""Argus Safe Alarmo Importer & Migration Wizard Helper."""
from __future__ import annotations

import copy
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional


@dataclass
class MigrationPreview:
    supported_areas: List[str] = field(default_factory=list)
    supported_sensors: List[str] = field(default_factory=list)
    supported_modes: List[str] = field(default_factory=list)
    conflicts: List[str] = field(default_factory=list)
    incompatible_items: List[str] = field(default_factory=list)
    safe_to_import: bool = True


class AlarmoImporter:
    """Safe Alarmo Configuration Importer."""

    @staticmethod
    def preview_import(alarmo_data: Dict[str, Any]) -> MigrationPreview:
        preview = MigrationPreview()
        if not isinstance(alarmo_data, dict):
            preview.safe_to_import = False
            preview.conflicts.append("Alarmo payload invalid")
            return preview

        # Process sensors
        sensors = alarmo_data.get("sensors", [])
        if isinstance(sensors, list):
            for s in sensors:
                if isinstance(s, dict) and "entity_id" in s:
                    preview.supported_sensors.append(s["entity_id"])

        # Process areas
        areas = alarmo_data.get("areas", [])
        if isinstance(areas, list):
            for a in areas:
                if isinstance(a, dict) and "name" in a:
                    preview.supported_areas.append(a["name"])

        # Check credentials notice (never extract plaintext PINs)
        if "users" in alarmo_data:
            preview.incompatible_items.append("Alarmo user PIN hashes excluded for security")

        return preview

    @staticmethod
    def generate_argus_config(alarmo_data: Dict[str, Any]) -> Dict[str, Any]:
        """Convert Alarmo storage dictionary into sanitized Argus UI config."""
        preview = AlarmoImporter.preview_import(alarmo_data)
        modes_config = {"home": {}, "away": {}, "night": {}, "vacation": {}}

        # Map sensors to modes
        sensors = alarmo_data.get("sensors", [])
        away_sensors = []
        home_sensors = []
        if isinstance(sensors, list):
            for s in sensors:
                if isinstance(s, dict) and "entity_id" in s:
                    eid = s["entity_id"]
                    modes = s.get("modes", [])
                    if "away" in modes:
                        away_sensors.append(eid)
                    if "home" in modes:
                        home_sensors.append(eid)

        modes_config["away"] = {"sensors": away_sensors, "require_closed": True}
        modes_config["home"] = {"sensors": home_sensors, "require_closed": True}

        return {
            "modes": modes_config,
            "siren_entity": alarmo_data.get("siren_entity"),
            "alarmo_migrated": True,
            "migrated_sensors_count": len(preview.supported_sensors),
        }
