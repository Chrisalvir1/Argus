"""Regression contracts for Access Control scrolling and real notifications."""
from __future__ import annotations

from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
FRONTEND = ROOT / "src" / "legacy" / "argus-panel.ts"
DASHBOARD = ROOT / "src" / "features" / "dashboard"
PANEL = ROOT / "custom_components" / "argus" / "alarm_control_panel.py"


class TestAccessNotificationsContract(unittest.TestCase):
    def test_access_widget_has_one_deterministic_scroll_owner(self) -> None:
        dashboard = (DASHBOARD / "ArgusDashboard.tsx").read_text(encoding="utf-8")
        mount = (DASHBOARD / "index.tsx").read_text(encoding="utf-8")
        self.assertIn("argus-widget__content--access", dashboard)
        self.assertIn("argus-access-scroll-fix", mount)
        self.assertIn("#access-workspace{display:block!important;flex:1 1 auto!important", mount)
        self.assertIn("overflow-y:auto!important", mount)

    def test_notification_configuration_is_rendered_and_supports_notify_entities(self) -> None:
        frontend = FRONTEND.read_text(encoding="utf-8")
        self.assertIn('id="access-notifications-section"', frontend)
        for element_id in ("h-notifications", "notif-targets", "notif-select", "btn-add-notif", "btn-save-notif"):
            self.assertIn(f'id="{element_id}"', frontend)
        self.assertIn("startsWith('notify.')", frontend)
        self.assertIn("value: `entity:${state.entity_id}`", frontend)
        self.assertIn("this._renderNotifChips();", frontend)
        self.assertIn("this._populateNotifSelect();", frontend)
        self.assertNotIn("_renderNotifications() {\n    return;", frontend)

    def test_server_delivers_events_from_argus_not_the_browser(self) -> None:
        panel = PANEL.read_text(encoding="utf-8")
        self.assertIn("async def _async_notify_configured", panel)
        self.assertIn('"notify", "send_message"', panel)
        self.assertIn('"🔒 ARGUS — Armado"', panel)
        self.assertIn('"🔓 ARGUS — Desarmado"', panel)
        self.assertIn('"🔒 ARGUS — No se pudo armar"', panel)
        self.assertIn('"🚨 ARGUS — ALARMA DISPARADA"', panel)

    def test_sos_outputs_are_saved_when_selected(self) -> None:
        bridge = (ROOT / "src" / "legacy" / "bridge.ts").read_text(encoding="utf-8")
        runtime = (ROOT / "src" / "legacy" / "argus-sos-output-persistence.ts").read_text(encoding="utf-8")
        self.assertIn("applySosOutputPersistence(C)", bridge)
        self.assertIn("argus/save_panic_output_profile", runtime)
        self.assertIn("this._selectorTarget!=='panic'", runtime)
        self.assertIn("No se pudieron guardar las acciones SOS", runtime)


if __name__ == "__main__":
    unittest.main()
