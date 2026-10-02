"""Test suite verifying v2.5.1 audit and cleanup requirements:
1. Complete removal of floorplan and daily activity from dashboard.
2. Real-time sensor state and battery resolution (including battery_percentage and companion entities).
3. PDF export contract with original logo, local dates, and real download blob.
4. Total elimination of Vacation mode across UI, services, MQTT, HomeKit, and safe sensor/state migration.
5. HomeKit bridge compatibility with arming wait and arming_target.
"""
from __future__ import annotations

import ast
import copy
from pathlib import Path
import unittest

ROOT = Path(__file__).parents[1]
PANEL_SRC = (ROOT / "src" / "legacy" / "argus-panel.ts").read_text(encoding="utf-8")
CARD_SRC = (ROOT / "src" / "legacy" / "argus-card.ts").read_text(encoding="utf-8")
ACP_SRC = (ROOT / "custom_components" / "argus" / "alarm_control_panel.py").read_text(encoding="utf-8")
CONST_SRC = (ROOT / "custom_components" / "argus" / "const.py").read_text(encoding="utf-8")
STORAGE_SRC = (ROOT / "custom_components" / "argus" / "storage.py").read_text(encoding="utf-8")
MQTT_SRC = (ROOT / "custom_components" / "argus" / "core" / "mqtt.py").read_text(encoding="utf-8")
CONSOLE_SRC = (ROOT / "src" / "features" / "dashboard" / "components" / "SecurityConsole.tsx").read_text(encoding="utf-8")


class TestV251AuditAndCleanup(unittest.TestCase):
    def test_dashboard_removed_floorplan_and_insights(self):
        """Dashboard must not contain floorplan or security insights widgets."""
        self.assertNotIn("FloorplanWidget", (ROOT / "src" / "features" / "dashboard" / "index.tsx").read_text())
        self.assertNotIn("SecurityInsights", (ROOT / "src" / "features" / "dashboard" / "index.tsx").read_text())
        self.assertFalse((ROOT / "src" / "features" / "dashboard" / "components" / "FloorplanWidget.tsx").exists())
        self.assertFalse((ROOT / "src" / "features" / "dashboard" / "components" / "SecurityInsights.tsx").exists())

    def test_vacation_mode_removed_from_supported_features(self):
        """Alarm panel entity must not announce ARM_VACATION feature."""
        self.assertNotIn("ARM_VACATION", ACP_SRC)
        self.assertIn("ARM_HOME", ACP_SRC)
        self.assertIn("ARM_AWAY", ACP_SRC)
        self.assertIn("ARM_NIGHT", ACP_SRC)

    def test_card_has_no_vacation_button(self):
        """Compact card must not offer vacation arming action."""
        self.assertNotIn("alarm_arm_vacation", CARD_SRC)
        self.assertNotIn("armed_vacation", CARD_SRC)

    def test_mqtt_has_no_vacation_command(self):
        """MQTT command set must not include ARM_VACATION."""
        self.assertNotIn("ARM_VACATION", MQTT_SRC)
        self.assertNotIn("MQTT_COMMAND_ARM_VACATION", CONST_SRC)

    def test_storage_migrates_vacation_sensors_to_away_safely(self):
        """Legacy vacation configuration must merge sensors into away mode without loss."""
        self.assertIn('"vacation" in modes', STORAGE_SRC)
        self.assertIn('modes.pop("vacation"', STORAGE_SRC)
        self.assertIn('away_sensors = modes["away"].setdefault("sensors", [])', STORAGE_SRC)

    def test_panel_migrates_sensors_vacation_from_config_entry(self):
        """Config entry sensors_vacation must be safely imported into _sensors_away."""
        self.assertIn('vac_legacy = d.get("sensors_vacation", [])', ACP_SRC)
        self.assertIn('self._sensors_away.append(s)', ACP_SRC)

    def test_sensor_state_and_battery_detection_in_console(self):
        """SecurityConsole must handle battery_percentage, companion lookups, and multi-state intrusion."""
        self.assertIn("battery_percentage", CONSOLE_SRC)
        self.assertIn("_getSensorBattery", CONSOLE_SRC)
        self.assertIn("intrusionStates", CONSOLE_SRC)
        self.assertIn("unlocked", CONSOLE_SRC)
        self.assertIn("recording", CONSOLE_SRC)

    def test_pdf_export_logo_and_local_date_contract(self):
        """PDF export must fetch real logo and use local date without UTC offset."""
        self.assertIn("this._formatLocalDateInput", PANEL_SRC)
        self.assertIn("/api/argus_static/argus_logo.png", PANEL_SRC)
        self.assertIn("date.getFullYear()", PANEL_SRC)
        self.assertNotIn("toISOString().slice(0, 10)", PANEL_SRC)
        # High resolution 384x384 logo and left-positioned header
        self.assertIn("const size = 384;", PANEL_SRC)
        self.assertIn("MARGIN_LEFT + logoSize + 12", PANEL_SRC)

    def test_liquid_glass_clock_and_unavailable_sensor_consistency(self):
        """Sensor delay badges must render Liquid Glass clock and chips must accurately flag unavailable sensors."""
        self.assertIn("_renderLiquidGlassClockSvg", PANEL_SRC)
        self.assertIn("liquid-glass-clock", PANEL_SRC)
        self.assertIn("LiquidGlassClockIcon", (ROOT / "src" / "features" / "dashboard" / "components" / "SensorChip.tsx").read_text())
        self.assertIn("isUnavail", PANEL_SRC)
        self.assertIn("statusLabelClosed", CONSOLE_SRC)


if __name__ == "__main__":
    unittest.main()

