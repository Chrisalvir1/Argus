"""Zone saves must preserve legacy coverage and reject ambiguous assignments."""
import unittest
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location("argus_zones_under_test", Path(__file__).resolve().parents[1] / "custom_components" / "argus" / "zones.py")
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
project_zone_modes = module.project_zone_modes
sanitize_zones = module.sanitize_zones
condition_matches = module.condition_matches
default_zones = module.default_zones


def zone(number, sensor, modes=("home",), delay=0):
    return {
        "id": f"zone_{number}", "number": number, "name": f"Zona {number}",
        "area": "Cocina", "modes": list(modes), "entity_ids": [sensor],
        "device_ids": [], "enabled": True,
        "sensor_settings": {sensor: {"condition": "open", "delay": delay}},
    }


class ZoneConfigurationTests(unittest.TestCase):
    def test_three_fixed_number_zones_are_available_by_default(self):
        zones = default_zones()
        self.assertEqual([zone["number"] for zone in zones], [1, 2, 3])
        self.assertTrue(all(zone["enabled"] and not zone["entity_ids"] and not zone["modes"] for zone in zones))

    def test_zone_name_is_derived_from_its_number_and_area_may_be_empty(self):
        saved = sanitize_zones([{**zone(2, "binary_sensor.door"), "name": "Otro nombre", "area": ""}])
        self.assertEqual(saved[0]["name"], "Zona 2")
        self.assertEqual(saved[0]["area"], "")

    def test_numbers_modes_and_delays_survive_save(self):
        saved = sanitize_zones([zone(3, "binary_sensor.door", ("home", "night"), 15)])
        self.assertEqual(saved[0]["number"], 3)
        self.assertEqual(saved[0]["area"], "Cocina")
        self.assertEqual(saved[0]["sensor_settings"]["binary_sensor.door"]["delay"], 15)

    def test_sensor_delay_unit_is_persisted_separately_from_seconds(self):
        configured = zone(1, "binary_sensor.door", delay=120)
        configured["sensor_settings"]["binary_sensor.door"]["delay_unit"] = "minutes"
        saved = sanitize_zones([configured])
        self.assertEqual(saved[0]["sensor_settings"]["binary_sensor.door"], {
            "condition": "open", "delay": 120, "delay_unit": "minutes",
        })

    def test_sensor_delay_rejects_unknown_unit(self):
        configured = zone(1, "binary_sensor.door")
        configured["sensor_settings"]["binary_sensor.door"]["delay_unit"] = "hours"
        with self.assertRaises(ValueError):
            sanitize_zones([configured])

    def test_legacy_sos_zone_assignment_is_removed(self):
        saved = sanitize_zones([zone(1, "binary_sensor.door", ("home", "sos"))])
        self.assertEqual(saved[0]["modes"], ["home"])

    def test_zone_sensor_is_removed_from_legacy_sos_projection(self):
        previous = sanitize_zones([zone(1, "binary_sensor.door", ("sos",))])
        config = {"sos": {"sensors": ["binary_sensor.door", "binary_sensor.panic_button"],
                           "sensor_settings": {"binary_sensor.door": {"delay": 5}},
                           "bypassed_sensors": ["binary_sensor.door"]}}
        updated = project_zone_modes(config, previous, [])
        self.assertEqual(updated["sos"]["sensors"], ["binary_sensor.panic_button"])
        self.assertNotIn("binary_sensor.door", updated["sos"]["sensor_settings"])
        self.assertEqual(updated["sos"]["bypassed_sensors"], [])

    def test_reject_eleventh_zone_and_duplicate_sensor(self):
        with self.assertRaises(ValueError):
            sanitize_zones([zone(n, f"binary_sensor.{n}") for n in range(1, 12)])
        with self.assertRaises(ValueError):
            sanitize_zones([zone(1, "binary_sensor.door"), zone(2, "binary_sensor.door")])

    def test_projection_preserves_unassigned_legacy_sensor(self):
        old = {"__by_entity__": {"alarm_control_panel.argus": {
            "home": {"sensors": ["binary_sensor.old", "binary_sensor.door"],
                     "sensor_settings": {"binary_sensor.old": {"delay": 20}}},
            "away": {"sensors": ["binary_sensor.old"]},
        }}}
        projected = project_zone_modes(old, [], sanitize_zones([zone(1, "binary_sensor.door", ("away",), 5)]))
        modes = projected["__by_entity__"]["alarm_control_panel.argus"]
        self.assertEqual(modes["home"]["sensors"], ["binary_sensor.old"])
        self.assertEqual(modes["away"]["sensors"], ["binary_sensor.old", "binary_sensor.door"])
        self.assertEqual(modes["away"]["sensor_settings"]["binary_sensor.door"]["delay"], 5)
        self.assertEqual(modes["home"]["sensor_settings"]["binary_sensor.old"]["delay"], 20)
        self.assertEqual(old["__by_entity__"]["alarm_control_panel.argus"]["home"]["sensors"],
                         ["binary_sensor.old", "binary_sensor.door"])

    def test_deleting_zone_removes_its_managed_sensor(self):
        previous = sanitize_zones([zone(1, "binary_sensor.door")])
        updated = project_zone_modes({"home": {"sensors": ["binary_sensor.door"]}}, previous, [])
        self.assertEqual(updated["home"]["sensors"], [])

    def test_sensor_conditions_are_transition_specific(self):
        self.assertTrue(condition_matches("close", "on", "off", "window"))
        self.assertFalse(condition_matches("close", "off", "off", "window"))
        self.assertFalse(condition_matches("close", "on", "on", "window"))
        self.assertTrue(condition_matches("motion", "off", "on", "motion"))
        self.assertFalse(condition_matches("motion", "off", "on", "window"))
        self.assertTrue(condition_matches("detected", "clear", "detected", "smoke"))
        self.assertFalse(condition_matches("detected", "clear", "on", "window"))


if __name__ == "__main__":
    unittest.main()
