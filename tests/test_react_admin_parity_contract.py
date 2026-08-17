"""Contracts for the typed React administration surface."""
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "app" / "ArgusApp.tsx"
API = ROOT / "custom_components" / "argus" / "websocket_api.py"
OUTPUT_PROFILES = ROOT / "custom_components" / "argus" / "output_profiles.py"


class ReactAdminParityContractTests(unittest.TestCase):
    def test_typed_mode_editor_covers_runtime_fields(self) -> None:
        source = APP.read_text(encoding="utf-8")
        for field in (
            "bypassed_sensors", "entry_sensors", "external_panels",
            "light_siren_settings", "require_closed", "arming_time", "entry_delay",
        ):
            self.assertIn(field, source)
        self.assertIn("argus/save_mode_config", source)

    def test_automations_are_read_only_native_home_assistant_links(self) -> None:
        source = APP.read_text(encoding="utf-8")
        self.assertIn("config/automation/config", source)
        self.assertIn("findRelatedAutomations", source)
        self.assertIn("automationReferenceKeys", source)
        self.assertIn("device_id", source)
        self.assertIn("area_id", source)
        self.assertIn("/config/automation/edit/", source)
        self.assertIn("/config/automation/dashboard", source)
        self.assertNotIn("argus/save_automations", source)
        self.assertNotIn("argus/get_automations", source)
        self.assertNotIn("AutomationEditor", source)
        self.assertIn("entry_id:entryId", source)
        api = API.read_text(encoding="utf-8")
        self.assertNotIn("ws_argus_save_automations", api)
        self.assertNotIn("ws_argus_get_automations", api)

    def test_sos_selection_is_staged_and_saved_for_the_active_entry(self) -> None:
        source = APP.read_text(encoding="utf-8")
        self.assertIn("t('sos.save')", source)
        self.assertIn("argus/save_panic_output_profile", source)
        self.assertIn("entry_id:entryId", source)
        self.assertIn("t('sos.permission')", source)
        backend = OUTPUT_PROFILES.read_text(encoding="utf-8")
        self.assertIn('_require_permission(hass, connection, entry_id, "manage_sos")', backend)
        self.assertIn('"panic_outputs": outputs', backend)
        self.assertIn('"panic_output_settings": settings', backend)

    def test_no_legacy_source_is_left_for_the_runtime(self) -> None:
        self.assertFalse((ROOT / "src" / "legacy").exists())
        source = APP.read_text(encoding="utf-8")
        self.assertNotIn("legacy/", source)


if __name__ == "__main__":
    unittest.main()
