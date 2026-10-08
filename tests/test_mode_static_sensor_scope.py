"""Static sensor lists belong to one arm mode and never leak across modes."""
import ast
from pathlib import Path
from types import SimpleNamespace
import unittest

SOURCE = Path(__file__).resolve().parents[1] / "custom_components/argus/alarm_control_panel.py"
TREE = ast.parse(SOURCE.read_text(encoding="utf-8"))
PANEL = next(node for node in TREE.body if isinstance(node, ast.ClassDef) and node.name == "ArgusAlarmPanel")
METHOD = next(node for node in PANEL.body if isinstance(node, ast.FunctionDef) and node.name == "_sensors_for_state")

class _AlarmState:
    def __init__(self, value):
        self.value = value

class AlarmControlPanelState:
    ARMED_HOME = _AlarmState("armed_home")
    ARMED_AWAY = _AlarmState("armed_away")
    ARMED_NIGHT = _AlarmState("armed_night")

NAMESPACE = {"AlarmControlPanelState": AlarmControlPanelState, "_LOGGER": SimpleNamespace(debug=lambda *args: None)}
exec(compile(ast.Module(body=[METHOD, next(node for node in PANEL.body if isinstance(node, ast.FunctionDef) and node.name == "_mode_config")], type_ignores=[]), str(SOURCE), "exec"), NAMESPACE)
sensors_for_state = NAMESPACE["_sensors_for_state"]

class TestStaticModeSensorScope(unittest.TestCase):
    def panel(self):
        panel = SimpleNamespace(
            _ui_config={"modes": {}}, entity_id="alarm_control_panel.argus",
            _sensors_home=[], _sensors_away=["binary_sensor.patio"],
            _sensors_night=[],
        )

        panel._mode_config = lambda mode: NAMESPACE["_mode_config"](panel, mode)
        return panel

    def test_empty_home_does_not_inherit_away(self):
        self.assertEqual(sensors_for_state(self.panel(), AlarmControlPanelState.ARMED_HOME), [])

    def test_empty_night_does_not_inherit_away(self):
        self.assertEqual(sensors_for_state(self.panel(), AlarmControlPanelState.ARMED_NIGHT), [])

    def test_away_keeps_its_configured_sensors(self):
        self.assertEqual(sensors_for_state(self.panel(), AlarmControlPanelState.ARMED_AWAY), ["binary_sensor.patio"])

    def test_empty_entity_config_overrides_stale_legacy_home(self):
        panel = self.panel()
        panel._ui_config = {"modes": {"home": {"sensors": ["binary_sensor.old"]}, "__by_entity__": {panel.entity_id: {"home": {}}}}}
        self.assertEqual(sensors_for_state(panel, AlarmControlPanelState.ARMED_HOME), [])

    def test_missing_home_in_entity_scope_does_not_inherit_yaml_or_legacy(self):
        panel = self.panel()
        panel._sensors_home = ["binary_sensor.old"]
        panel._ui_config = {"modes": {"home": {"sensors": ["binary_sensor.old"]}, "__by_entity__": {panel.entity_id: {"away": {"sensors": ["binary_sensor.patio"]}}}}}
        self.assertEqual(sensors_for_state(panel, AlarmControlPanelState.ARMED_HOME), [])
        self.assertEqual(sensors_for_state(panel, AlarmControlPanelState.ARMED_AWAY), ["binary_sensor.patio"])

if __name__ == "__main__":
    unittest.main()
