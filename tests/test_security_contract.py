"""Fast regression checks that do not require a running Home Assistant."""
from __future__ import annotations

import ast
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

    def test_panic_switch_is_available_for_home_assistant_exports(self) -> None:
        """The external, stateful SOS control must remain part of the integration."""
        const = (COMPONENT / "const.py").read_text(encoding="utf-8")
        switch = (COMPONENT / "switch.py").read_text(encoding="utf-8")
        self.assertIn('"switch"', const)
        self.assertIn("async_stop_panic", switch)
