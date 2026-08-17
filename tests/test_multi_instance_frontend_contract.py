"""Regression contracts for React-only, instance-scoped panel traffic."""
from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
API = ROOT / "custom_components" / "argus" / "websocket_api.py"
APP = ROOT / "src" / "app" / "index.ts"
REACT_APP = ROOT / "src" / "app" / "ArgusApp.tsx"
BUNDLE = ROOT / "custom_components" / "argus" / "www" / "react-dist" / "argus-frontend.js"


class TestMultiInstanceFrontendContract(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.api = API.read_text(encoding="utf-8")
        cls.react_app = REACT_APP.read_text(encoding="utf-8")

    def test_only_entry_listing_is_unscoped(self) -> None:
        self.assertIn('vol.Required("type"): "argus/list_entries"', self.api)
        self.assertNotIn('vol.Optional("entry_id")', self.api)
        self.assertIn("async_register_command(hass, ws_argus_list_entries)", self.api)

    def test_dashboard_uses_only_the_requested_instance(self) -> None:
        dashboard = self.api.split("async def ws_argus_dashboard", 1)[1].split(
            "_SAVE_UI_SCHEMA", 1
        )[0]
        self.assertIn('vol.Required("entry_id"): str', self.api)
        self.assertIn("entry = _entry_by_id(hass, entry_id)", dashboard)
        self.assertIn("entries = [{", dashboard)
        self.assertNotIn("for entry in hass.config_entries", dashboard)

    def test_react_panel_selects_and_persists_one_entry_before_bootstrap(self) -> None:
        self.assertIn("argus/list_entries", self.react_app)
        self.assertIn("argus:selected-entry:", self.react_app)
        self.assertIn("localStorage.setItem(keyFor(userId),entryId)", self.react_app)
        self.assertIn("entry_id:entryId", self.react_app.replace(" ", ""))

    def test_react_layout_persists_against_the_selected_entry(self) -> None:
        self.assertIn("new RemoteLayoutStorage(entryId,()=>uiRef.current,scoped)", self.react_app)
        self.assertIn("useRef<UiData>", self.react_app)
        self.assertIn("await this.send('argus/save_ui',{dashboard})", self.react_app)
        self.assertNotIn("entries?.[0]", self.react_app)

    def test_runtime_does_not_load_the_legacy_patch_bridge(self) -> None:
        source = APP.read_text(encoding="utf-8")
        self.assertFalse((ROOT / "src" / "legacy" / "bridge.ts").exists())
        self.assertIn("customElements.define('argus-panel-v2018',ArgusReactPanel)", source)
        self.assertNotIn("legacy/argus-panel", source)
        self.assertNotIn("legacy/bridge", source)
        self.assertNotIn("applyLegacy", source)

    def test_compiled_runtime_contains_no_legacy_panel(self) -> None:
        bundle = BUNDLE.read_text(encoding="utf-8")
        self.assertNotIn("Argus Home Hub", bundle)
        self.assertNotIn("applyLegacy", bundle)
        self.assertIn("customElements.define(\"argus-panel-v2018\"", bundle)


if __name__ == "__main__":
    unittest.main()
