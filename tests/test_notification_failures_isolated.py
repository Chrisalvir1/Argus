"""Offline notification providers must not raise into HA's core service runner."""
import ast
import asyncio
from pathlib import Path
from types import SimpleNamespace
import unittest

SOURCE = Path(__file__).resolve().parents[1] / "custom_components/argus/alarm_control_panel.py"
TREE = ast.parse(SOURCE.read_text(encoding="utf-8"))
FUNCTION = next(node for node in TREE.body if isinstance(node, ast.AsyncFunctionDef) and node.name == "_async_deliver_notify")
NAMESPACE = {"asyncio": asyncio, "_LOGGER": SimpleNamespace(warning=lambda *args: None)}
exec(compile(ast.Module(body=[FUNCTION], type_ignores=[]), str(SOURCE), "exec"), NAMESPACE)
deliver = NAMESPACE["_async_deliver_notify"]

class TestNotificationFailuresIsolated(unittest.TestCase):
    def test_unavailable_echo_is_caught_and_does_not_escape(self):
        calls = []
        class Services:
            async def async_call(self, domain, service, payload, *, target=None, blocking=False):
                calls.append((domain, service, target, blocking))
                raise RuntimeError("device is offline")
        hass = SimpleNamespace(services=Services())
        asyncio.run(deliver(hass, "send_message", {"message": "armed"}, "notify.echo"))
        self.assertEqual(calls, [("notify", "send_message", {"entity_id": "notify.echo"}, True)])

if __name__ == "__main__":
    unittest.main()
