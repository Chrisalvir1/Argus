"""An explicitly empty mode sensor list must not inherit other modes."""
import ast
from pathlib import Path
from types import SimpleNamespace
import unittest

SOURCE = Path(__file__).resolve().parents[1] / "custom_components/argus/sensor_state_runtime.py"
TREE = ast.parse(SOURCE.read_text(encoding="utf-8"))
FUNCTION = next(node for node in TREE.body if isinstance(node, ast.FunctionDef) and node.name == "open_blocking_sensors")
NAMESPACE = {"is_sensor_active": lambda hass, entity_id: hass.states.get(entity_id).state == "on"}
exec(compile(ast.Module(body=[FUNCTION], type_ignores=[]), str(SOURCE), "exec"), NAMESPACE)
open_blocking_sensors = NAMESPACE["open_blocking_sensors"]


class _States:
    def get(self, entity_id):
        return SimpleNamespace(state="on")


class _Panel:
    hass = SimpleNamespace(states=_States())

    def _mode_config(self, mode):
        return {"sensors": []} if mode == "home" else {"sensors": ["binary_sensor.away_window"]}

    def _sensors_for_state(self, target):
        return ["binary_sensor.away_window"]


class TestExplicitEmptyModeSensors(unittest.TestCase):
    def test_empty_home_mode_does_not_fall_back_to_open_away_sensor(self):
        self.assertEqual(open_blocking_sensors(_Panel(), SimpleNamespace(value="armed_home")), [])

    def test_away_mode_still_checks_its_own_open_sensors(self):
        self.assertEqual(open_blocking_sensors(_Panel(), SimpleNamespace(value="armed_away")), ["binary_sensor.away_window"])


if __name__ == "__main__":
    unittest.main()
