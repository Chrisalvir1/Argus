"""Regression contracts for the Argus v1.9.4 panel entry flow."""
from pathlib import Path
import unittest


ROOT = Path(__file__).parents[1]
PANEL = ROOT / "custom_components" / "argus" / "www" / "argus-panel.js"
WEBSOCKET = ROOT / "custom_components" / "argus" / "websocket_api.py"
PANEL_REGISTRATION = ROOT / "custom_components" / "argus" / "panel.py"


class TestV194PanelFlow(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.panel = PANEL.read_text(encoding="utf-8")
        cls.websocket = WEBSOCKET.read_text(encoding="utf-8")
        cls.panel_registration = PANEL_REGISTRATION.read_text(encoding="utf-8")

    def test_missing_config_entry_has_explicit_bootstrap_state(self) -> None:
        self.assertIn('"configuration_missing": True', self.websocket)
        self.assertIn("if (bootstrap.configuration_missing)", self.panel)
        self.assertIn("_renderMissingConfigurationScreen()", self.panel)

    def test_intermediate_screens_do_not_trigger_retry_loop(self) -> None:
        self.assertNotIn("throw new Error('dashboard unavailable')", self.panel)
        self.assertIn("if (!this._dashboard) return;", self.panel)

    def test_reopening_panel_forgets_local_profile(self) -> None:
        disconnected = self.panel.split("disconnectedCallback()", 1)[1].split(
            "_startClock()", 1
        )[0]
        self.assertIn("this._dashboard = null", disconnected)
        self.assertIn("this._currentProfile = null", disconnected)
        self.assertIn("this._profileSelectedThisMount = false", disconnected)

    def test_profile_and_welcome_are_initialized_from_dashboard(self) -> None:
        self.assertIn(
            "this._currentProfile = dashboard.current_profile || null", self.panel
        )
        self.assertIn("this._showProfileWelcome()", self.panel)
        self.assertIn("welcome_profile", self.panel)

    def test_standard_ha_users_can_open_panel(self) -> None:
        self.assertIn("require_admin=False", self.panel_registration)

    def test_uses_home_assistant_authenticated_websocket(self) -> None:
        self.assertIn("this._hass.callWS({ type, ...data })", self.panel)
        self.assertNotIn("hass?.auth?.data?.access_token", self.panel)
        self.assertNotIn("new WebSocket(", self.panel)

    def test_empty_dashboard_is_not_rendered_before_initialization(self) -> None:
        self.assertIn(
            "if (this._dashboard && (now.getSeconds() === 0",
            self.panel,
        )
        self.assertIn("_renderInitializationError(err)", self.panel)

    def test_versioned_custom_element_prevents_stale_definition(self) -> None:
        self.assertIn("customElements.define('argus-panel-v195'", self.panel)
        self.assertIn(
            'webcomponent_name=f"argus-panel-v{VERSION.replace(\'.\', \'\')}"',
            self.panel_registration,
        )


if __name__ == "__main__":
    unittest.main()
