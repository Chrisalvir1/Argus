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

