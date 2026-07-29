"""Tests for Stage 3 Spatial Model and Master Alarm Aggregator."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


def load_module(name: str, file_path: Path):
    spec = importlib.util.spec_from_file_location(name, file_path)
    assert spec and spec.loader
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod
    spec.loader.exec_module(mod)
    return mod


spatial = load_module("argus.core.spatial", COMPONENT / "core" / "spatial.py")


class TestStage3SpatialModel(unittest.TestCase):
    def test_spatial_hierarchy_creation(self) -> None:
        # Create Rooms
        living_room = spatial.Room("rm_living", "Living Room", sensors=["binary_sensor.motion_living"], zone_type=spatial.ZoneType.INTERIOR)
        front_door = spatial.Room("rm_front_door", "Front Door", sensors=["binary_sensor.door_front"], zone_type=spatial.ZoneType.ENTRY_ROUTE)
        garage_door = spatial.Room("rm_garage_door", "Garage Door", sensors=["binary_sensor.door_garage"], zone_type=spatial.ZoneType.PERIMETER)

        # Create Areas
        main_house = spatial.Area("area_house", "Main House", floor_id="floor_1", rooms=[living_room, front_door])
        garage = spatial.Area("area_garage", "Garage", floor_id="floor_1", rooms=[garage_door])
        study = spatial.Area("area_study", "Study", floor_id="floor_2", rooms=[])

        # Create Floor & Building
        floor1 = spatial.Floor("floor_1", "Ground Floor", areas=[main_house, garage])
        floor2 = spatial.Floor("floor_2", "Upper Floor", areas=[study])
        building = spatial.Building("bld_main", "Main Residence", floors=[floor1, floor2])
        prop = spatial.Property("prop_home", "My House", buildings=[building])

        # Create Master Alarm
        master = spatial.MasterAlarm(prop)
        self.assertEqual(len(master.get_all_areas()), 3)

    def test_required_composite_example(self) -> None:
        """Test exact required prompt example:
        - house in armed_night
        - garage in armed_away
        - study disarmed
        - master alarm showing composite state
        """
        main_house = spatial.Area("area_house", "Main House", state="armed_night")
        garage = spatial.Area("area_garage", "Garage", state="armed_away")
        study = spatial.Area("area_study", "Study", state="disarmed")

        floor = spatial.Floor("floor_1", "Main Floor", areas=[main_house, garage, study])
        bld = spatial.Building("bld_1", "House", floors=[floor])
        prop = spatial.Property("prop_1", "Residence", buildings=[bld])

        master = spatial.MasterAlarm(prop)
        summary = master.get_summary()

        self.assertEqual(summary["master_state"], "armed_composite")
        self.assertEqual(summary["total_areas"], 3)
        self.assertEqual(summary["armed_areas"], 2)
        self.assertEqual(summary["area_breakdown"]["area_house"]["state"], "armed_night")
        self.assertEqual(summary["area_breakdown"]["area_garage"]["state"], "armed_away")
        self.assertEqual(summary["area_breakdown"]["area_study"]["state"], "disarmed")

    def test_master_alarm_triggered_override(self) -> None:
        main_house = spatial.Area("area_house", "Main House", state="armed_home")
        garage = spatial.Area("area_garage", "Garage", state="triggered")

        floor = spatial.Floor("floor_1", "Main Floor", areas=[main_house, garage])
        bld = spatial.Building("bld_1", "House", floors=[floor])
        prop = spatial.Property("prop_1", "Residence", buildings=[bld])

        master = spatial.MasterAlarm(prop)
        self.assertEqual(master.get_combined_state(), "triggered")


if __name__ == "__main__":
    unittest.main()
