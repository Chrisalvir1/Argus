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
        for module in COMPONENT.glob("*.py"):
            with self.subTest(module=module.name):
                ast.parse(module.read_text(encoding="utf-8"), filename=str(module))

    def test_dashboard_does_not_serialize_config_entry(self) -> None:
        source = (COMPONENT / "websocket_api.py").read_text(encoding="utf-8")
        self.assertIn('"pin_configured"', source)
        self.assertNotIn('"config": dict(entry.data)', source)
        self.assertNotIn('"options": dict(entry.options)', source)

    def test_frontend_does_not_read_the_master_pin(self) -> None:
        source = (COMPONENT / "www" / "argus-panel.js").read_text(encoding="utf-8")
        self.assertIn("pin_configured", source)
        self.assertNotIn("entries?.[0]?.options?.code", source)

    def test_sos_service_is_declared_and_bound_once(self) -> None:
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
        const = (COMPONENT / "const.py").read_text(encoding="utf-8")
        switch = (COMPONENT / "switch.py").read_text(encoding="utf-8")
        self.assertIn('"switch"', const)
        self.assertIn("async_stop_panic", switch)
        self.assertIn('_attr_name = "Argus Panic"', switch)
        self.assertIn("self._unsub_dispatcher = None", switch)

    def test_frontend_language_refresh_covers_all_supported_languages(self) -> None:
        frontend = (COMPONENT / "www" / "argus-panel.js").read_text(encoding="utf-8")
        for language in ("es", "en", "fr", "pt", "it", "zh", "ru"):
            self.assertIn(f"{language}: {{", frontend)
        self.assertIn("use_ha_language", frontend)
        self.assertIn("_refreshLocalizedUi()", frontend)
        self.assertIn("this._renderNotifications();", frontend)
        self.assertIn("this._renderSosOutputs();", frontend)
        self.assertIn("toLocaleString(this._getLocale())", frontend)
        self.assertIn("this._populateWeatherSources();", frontend)
        for language in ("es", "en", "fr", "pt", "it", "zh", "ru"):
            self.assertIn(f"Object.assign(TEXTS.{language}", frontend)

    def test_config_flow_has_all_panel_languages(self) -> None:
        for language in ("es", "en", "fr", "pt", "it", "zh", "ru"):
            path = COMPONENT / "translations" / f"{language}.json"
            with self.subTest(language=language):
                data = json.loads(path.read_text(encoding="utf-8"))
                self.assertIn("user", data["config"]["step"])
                self.assertIn("options", data)
                self.assertIn("init", data["options"]["step"])

    def test_current_release_contract(self) -> None:
        """Verify the version string is current and exact."""
        manifest = json.loads((COMPONENT / "manifest.json").read_text(encoding="utf-8"))
        self.assertEqual(manifest["version"], "2.0.0")
        self.assertEqual(manifest["integration_type"], "hub")

        const = (COMPONENT / "const.py").read_text(encoding="utf-8")
        self.assertIn('VERSION = "2.0.0"', const)
        self.assertIn('DEFAULT_MQTT_TOPIC_COMMAND = "argus/alarm/set"', const)
        self.assertIn("DEFAULT_NAME = NAME", const)

        security = (COMPONENT / "security.py").read_text(encoding="utf-8")
        self.assertIn("def validate_pin", security)
        self.assertIn("def needs_rehash", security)
        self.assertIn("hashlib.scrypt", security)

        panel = (COMPONENT / "alarm_control_panel.py").read_text(encoding="utf-8")
        self.assertIn('payload_str = str(msg.payload or "").strip()', panel)
        self.assertIn("json.loads(payload_str)", panel)
        self.assertIn("fallback to raw string command", panel.lower())
        self.assertIn("self.hass.async_create_task(self._async_mqtt_publish())", panel)
        self.assertIn("if not isinstance(entry_list, list):", panel)

        frontend = (COMPONENT / "www" / "argus-panel.js").read_text(encoding="utf-8")
        self.assertIn("formattedDate", frontend)
        self.assertIn("toLocaleString(this._getLocale())", frontend)

    def test_local_first_and_forensic_contract(self) -> None:
        storage = (COMPONENT / "storage.py").read_text(encoding="utf-8")
        panel = (COMPONENT / "alarm_control_panel.py").read_text(encoding="utf-8")
        api = (COMPONENT / "websocket_api.py").read_text(encoding="utf-8")
        frontend = (COMPONENT / "www" / "argus-panel.js").read_text(encoding="utf-8")

        self.assertIn("async_save_alarm_runtime_state", storage)
        self.assertIn("_async_reconcile_state_schedule", panel)
        self.assertIn("schedule_recovery", panel)
        self.assertIn("argus/get_forensic_timeline", api)
        self.assertIn("AES-GCM", frontend)
        self.assertIn("PBKDF2", frontend)
        self.assertIn("prefers-reduced-motion", frontend)
