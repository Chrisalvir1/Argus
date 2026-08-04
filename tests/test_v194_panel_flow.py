"""Regression contracts for the Argus v1.9.4 panel entry flow."""
from pathlib import Path
import re
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
        element_name = "argus-panel-v2018"
        bootstrap = (ROOT / "custom_components" / "argus" / "www" / "argus-bootstrap.js").read_text(encoding="utf-8")
        self.assertIn(f"customElements.define('{element_name}'", self.panel)
        self.assertIn(f"customElements.get('{element_name}')", bootstrap)
        self.assertIn(
            'webcomponent_name="argus-panel-v2018"',
            self.panel_registration,
        )

    def test_dashboard_does_not_duplicate_activity_history_or_lock_fullscreen(self) -> None:
        self.assertNotIn('id="instance-activity-strip"', self.panel)
        self.assertIn("_exitFullscreenView() {", self.panel)
        fullscreen = self.panel.split("_toggleFullscreen(targetEl) {", 1)[1].split(
            "_initWeatherWebGL(canvas)", 1
        )[0]
        self.assertIn("this._kioskLocked = false", fullscreen)
        self.assertIn("document.addEventListener('keydown', this._onEscape)", self.panel)

    def test_live_console_keeps_real_controls_and_personal_disarm_pins(self) -> None:
        alarm = (ROOT / "custom_components" / "argus" / "alarm_control_panel.py").read_text(encoding="utf-8")
        api = (ROOT / "custom_components" / "argus" / "websocket_api.py").read_text(encoding="utf-8")
        self.assertIn("security-console", self.panel)
        self.assertIn("this._showPinModal(async pin => { return await doDisarm(pin); });", self.panel)
        self.assertIn("await doDisarm(null)", self.panel)
        self.assertIn('"user_pin_configured": has_user_disarm_pin', api)
        self.assertIn("def _matching_disarm_user(self, code)", alarm)
        self.assertIn('("master_pin_hash", "pin", "access_pin_hash")', alarm)
        self.assertIn('user.get("permissions", {}).get("disarm", False)', alarm)

    def test_console_feedback_weather_and_uploaded_backgrounds_are_stateful(self) -> None:
        self.assertIn("_weatherPresentation(condition, isNight)", self.panel)
        self.assertIn("const weather = this._weatherPresentation(weatherState, isNight)", self.panel)
        self.assertIn("weather.icon} ${weather.label}", self.panel)
        self.assertIn("pinErr.textContent = '❌ PIN incorrecto", self.panel)
        self.assertIn("hubMode.value = 'image'", self.panel)
        self.assertIn("this._hubBgMode = 'image'", self.panel)
        self.assertIn("this._updateCanvasBackground()", self.panel)
        self.assertIn(".ios-fullscreen .entry-content.security-console", self.panel)

    def test_console_keypad_is_requested_and_fullscreen_has_a_visible_exit(self) -> None:
        self.assertIn("this._showPinModal", self.panel)
        self.assertIn('data-exit-fullscreen', self.panel)
        self.assertIn("async _exitFullscreenView()", self.panel)
        self.assertIn("await document.exitFullscreen()", self.panel)

    def test_access_summary_called_during_bootstrap_is_implemented(self) -> None:
        self.assertIn("_syncAccessSummary() {", self.panel)
        method = self.panel.split("_syncAccessSummary() {", 1)[1].split(
            "\n  }\n", 1
        )[0]
        self.assertIn("if (!this._dashboard)", method)
        self.assertIn("this._t('access_desc')", method)

    def test_profile_selector_does_not_block_home_assistant_navigation(self) -> None:
        self.assertIn(".argus-bootstrap-layer {\n  position: fixed;", self.panel)
        self.assertIn('id="btn-exit-to-ha"', self.panel)
        self.assertIn("window.location.assign('/')", self.panel)
        for language in ("es", "en", "fr", "pt", "it", "zh", "ru"):
            dictionary = self.panel.split(f"{language}: {{", 1)[1].split("\n  },", 1)[0]
            self.assertIn("exit_to_ha:", dictionary)

    def test_activity_history_is_loaded_from_protected_timeline_endpoint(self) -> None:
        self.assertIn(
            "await this._loadActivityTimeline(dashboard.entry_id)",
            self.panel,
        )
        self.assertIn("async _loadActivityTimeline(entryId = null)", self.panel)
        self.assertIn("'argus/get_forensic_timeline'", self.panel)
        self.assertIn("this._ui.audit_log = timeline", self.panel)
        clear_method = self.panel.split("async _clearHistory()", 1)[1].split(
            "\n  }\n", 1
        )[0]
        self.assertIn("await this._loadActivityTimeline(entryId)", clear_method)
        self.assertIn('"entry_id": entry_id', self.websocket)
        self.assertIn("history_unavailable", self.panel)
        self.assertIn('id="btn-refresh-history"', self.panel)

    def test_access_sections_have_a_real_controller(self) -> None:
        self.assertIn("_toggleAccessSection(section) {", self.panel)
        method = self.panel.split("_toggleAccessSection(section) {", 1)[1].split(
            "\n  }\n", 1
        )[0]
        self.assertIn("workspace.classList.toggle('open', shouldOpen)", method)
        self.assertIn("usersSection.classList.toggle", method)
        self.assertIn("pinSection.classList.toggle", method)
        self.assertIn("button.setAttribute('aria-expanded'", method)

    def test_github_and_dynamic_access_copy_are_reactive_i18n(self) -> None:
        for element_id in ("github-title", "github-desc", "github-action"):
            self.assertIn(f'id="{element_id}"', self.panel)
            self.assertIn(f"set('{element_id}'", self.panel)
        for key in (
            "github_title",
            "github_desc",
            "github_action",
            "history_refresh",
            "history_unavailable",
            "user_no_pin",
            "user_role_action",
            "notif_no_services",
        ):
            section = self.panel.split("const UI_AUDIT_TEXTS =", 1)[1].split(
                "\n};", 1
            )[0]
            self.assertEqual(section.count(f"{key}:"), 7)

    def test_access_and_github_controls_use_liquid_glass(self) -> None:
        self.assertIn(".access-workspace.open {", self.panel)
        self.assertIn("backdrop-filter:blur(22px)", self.panel)
        self.assertIn('class="github-star-action"', self.panel)
        self.assertIn(".github-star-action {", self.panel)


if __name__ == "__main__":
    unittest.main()
