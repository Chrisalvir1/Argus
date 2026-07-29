"""Argus Hierarchical Spatial Model & Master Alarm Aggregator."""
from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Dict, List, Optional

from .state_machine import (
    ARMED_STATES,
    STATE_ARMED_AWAY,
    STATE_ARMED_HOME,
    STATE_ARMED_NIGHT,
    STATE_ARMED_VACATION,
    STATE_DISARMED,
    STATE_PENDING,
    STATE_TRIGGERED,
    is_armed_state,
)


class ZoneType(str, Enum):
    PERIMETER = "perimeter"
    CRITICAL = "critical"
    ENTRY_ROUTE = "entry_route"
    INTERIOR = "interior"


@dataclass
class Room:
    id: str
    name: str
    sensors: List[str] = field(default_factory=list)
    sirens: List[str] = field(default_factory=list)
    zone_type: ZoneType = ZoneType.INTERIOR


@dataclass
class Area:
    id: str
    name: str
    floor_id: str = "default_floor"
    rooms: List[Room] = field(default_factory=list)
    state: str = STATE_DISARMED
    dependencies: List[str] = field(default_factory=list)  # Area IDs this area depends on
    mode_override: Optional[str] = None

    def get_all_sensors(self) -> List[str]:
        sensors = []
        for room in self.rooms:
            sensors.extend(room.sensors)
        return sensors


@dataclass
class Floor:
    id: str
    name: str
    building_id: str = "main_building"
    areas: List[Area] = field(default_factory=list)


@dataclass
class Building:
    id: str
    name: str
    property_id: str = "main_property"
    floors: List[Floor] = field(default_factory=list)


@dataclass
class Property:
    id: str
    name: str
    buildings: List[Building] = field(default_factory=list)


class MasterAlarm:
    """Master Alarm state aggregator for spatial areas across a property."""

    def __init__(self, property_obj: Property) -> None:
        self.property = property_obj

    def get_all_areas(self) -> List[Area]:
        areas = []
        for b in self.property.buildings:
            for f in b.floors:
                areas.extend(f.areas)
        return areas

    def set_area_state(self, area_id: str, state: str) -> None:
        for area in self.get_all_areas():
            if area.id == area_id:
                area.state = state
                break

    def get_combined_state(self) -> str:
        areas = self.get_all_areas()
        if not areas:
            return STATE_DISARMED

        states = [area.state for area in areas]

        # 1. Any area triggered -> Master alarm is triggered
        if STATE_TRIGGERED in states:
            return STATE_TRIGGERED

        # 2. Any area pending -> Master alarm is pending
        if STATE_PENDING in states:
            return STATE_PENDING

        # 3. All areas disarmed -> Master alarm is disarmed
        if all(s == STATE_DISARMED for s in states):
            return STATE_DISARMED

        # 4. If all armed areas share the same mode, master alarm takes that state
        active_armed_states = {s for s in states if s != STATE_DISARMED}
        if len(active_armed_states) == 1:
            return next(iter(active_armed_states))

        # 5. Composite mode (e.g. house in Night, garage in Away, study disarmed)
        return "armed_composite"

    def get_summary(self) -> Dict[str, Any]:
        areas = self.get_all_areas()
        area_breakdown = {area.id: {"name": area.name, "state": area.state} for area in areas}
        return {
            "master_state": self.get_combined_state(),
            "total_areas": len(areas),
            "armed_areas": sum(1 for a in areas if a.state != STATE_DISARMED),
            "area_breakdown": area_breakdown,
        }
