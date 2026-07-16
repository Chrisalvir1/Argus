"""Fast regression checks that do not require a running Home Assistant."""
from __future__ import annotations

import ast
import json
from pathlib import Path
import unittest


ROOT = Path(__file__).parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


class TestSecurityContract(unittest.TestCase):
    def test_python_modules_parse(self) -> None:
        """Every integration module remains syntactically valid."""
        for module in COMPONENT.glob("*.py"):
            with self.subTest(module=module.name):
                ast.parse(module.read_text(encoding="utf-8"), filename=str(module))

    def test_dashboard_does_not_serialize_config_entry(self) -> None:
        """The dashboard response must not leak the master PIN."""
        source = (COMPONENT / "websocket_api.py").read_text(encoding="utf-8")
        self.assertIn('"pin_configured"', source)
        self.assertNotIn('"config": dict(entry.data)', source)
        self.assertNotIn('"options": dict(entry.options)', source)

    def test_frontend_does_not_read_the_master_pin(self) -> None:
        """PIN verification belongs to the backend or alarm service."""
        source = (COMPONENT / "www" / "argus-panel.js").read_text(encoding="utf-8")
        self.assertIn("pin_configured", source)
        self.assertNotIn("entries?.[0]?.options?.code", source)

    def test_sos_service_is_declared_and_bound_once(self) -> None:
        """Home Assistant must expose the trigger service used by the SOS slider."""
        panel = (COMPONENT / "alarm_control_panel.py").read_text(encoding="utf-8")
        frontend = (COMPONENT / "www" / "argus-panel.js").read_text(encoding="utf-8")
        self.assertIn("AlarmControlPanelEntityFeature.TRIGGER", panel)
        self.assertIn("if (this._sosBound) return;", frontend)
        self.assertIn("argus_panic_active", panel)
        self.assertIn("_stopSOS", frontend)
        self.assertIn("panic_outputs", panel)
        self.assertIn("panic_outputs", frontend)
        self.assertNotIn("hass.components.persistent_notification", panel)

    def test_panic_switch_is_available_for_home_assistant_exports(self) -> None:
        """The external, stateful SOS control must remain part of the integration."""
        const = (COMPONENT / "const.py").read_text(encoding="utf-8")
        switch = (COMPONENT / "switch.py").read_text(encoding="utf-8")
        self.assertIn('"switch"', const)
        self.assertIn("async_stop_panic", switch)
        self.assertIn('_attr_name = "Argus Panic"', switch)

    def test_frontend_language_refresh_covers_all_supported_languages(self) -> None:
        """Changing language must refresh every dynamic Argus view."""
        frontend = (COMPONENT / "www" / "argus-panel.js").read_text(encoding="utf-8")
        for language in ("es", "en", "fr", "pt", "it", "zh", "ru"):
            self.assertIn(f"{language}: {{", frontend)
        self.assertIn("use_ha_language", frontend)
        self.assertIn("_refreshLocalizedUi()", frontend)
        self.assertIn("this._renderNotifications();", frontend)
        self.assertIn("this._renderSosOutputs();", frontend)
        self.assertIn("toLocaleString(this._getLocale())", frontend)

    def test_config_flow_has_all_panel_languages(self) -> None:
        """The setup flow must not fall back to a different language."""
        for language in ("es", "en", "fr", "pt", "it", "zh", "ru"):
            path = COMPONENT / "translations" / f"{language}.json"
            with self.subTest(language=language):
                data = json.loads(path.read_text(encoding="utf-8"))
                self.assertIn("user", data["config"]["step"])
                self.assertIn("options", data)
                self.assertIn("init", data["options"]["step"])

    def test_v1_4_4_features(self) -> None:
        """Verify new version versioning, MQTT topic updates, and new features."""
        # 1. Check version is bumped consistently
        manifest = json.loads((COMPONENT / "manifest.json").read_text(encoding="utf-8"))
        self.assertEqual(manifest["version"], "1.4.4")

        const = (COMPONENT / "const.py").read_text(encoding="utf-8")
        self.assertIn('VERSION = "1.4.4"', const)
        self.assertIn('DEFAULT_MQTT_TOPIC_COMMAND = "argus/alarm/set"', const)

        # 2. Check MQTT commands/handling
        panel = (COMPONENT / "alarm_control_panel.py").read_text(encoding="utf-8")
        self.assertIn("payload_str = str(msg.payload or \"\").strip()", panel)
        self.assertIn("json.loads(payload_str)", panel)
        self.assertIn("fallback to raw string command", panel.lower())
        self.assertIn("self.hass.async_create_task(self._async_mqtt_publish())", panel)

        # 3. Check entry_list type checking safety in panel
        self.assertIn("if not isinstance(entry_list, list):", panel)

        # 4. Check date/time localization formatting in panel users list
        frontend = (COMPONENT / "www" / "argus-panel.js").read_text(encoding="utf-8")
        self.assertIn("formattedDate", frontend)
        self.assertIn("toLocaleString(this._getLocale())", frontend)
