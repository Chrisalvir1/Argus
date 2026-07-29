"""Regression contracts for Argus security hardening."""
from pathlib import Path
import unittest

ROOT = Path(__file__).parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


class TestHardeningContract(unittest.TestCase):
    def test_websocket_uses_validated_storage_and_actor(self) -> None:
        source = (COMPONENT / "websocket_api.py").read_text(encoding="utf-8")
        self.assertIn("async_restore_ui_data", source)
        self.assertIn("async_clear_audit_log", source)
        self.assertIn("validate_pin", source)
        self.assertIn("PinAttemptLimiter", source)
        self.assertIn('vol.Required("entry_id")', source)
        self.assertNotIn("connection.context", source)
        self.assertNotIn("force_reset", source)
        self.assertNotIn("from .storage import Store", source)
        self.assertNotIn('"error": str(err)', source)

    def test_dashboard_redacts_reusable_credentials(self) -> None:
        source = (COMPONENT / "websocket_api.py").read_text(encoding="utf-8")
        self.assertIn("def _redact_ui_data", source)
        self.assertIn('user.pop("pin", None)', source)
        self.assertIn('advanced.pop("guest_code", None)', source)
        self.assertIn('redacted.pop("runtime", None)', source)

    def test_storage_restore_is_atomic_and_preserves_runtime(self) -> None:
        source = (COMPONENT / "storage.py").read_text(encoding="utf-8")
        self.assertIn("async def async_restore_ui_data", source)
        self.assertIn("async with _storage_lock(hass)", source)
        self.assertIn('restored["runtime"]', source)
        self.assertIn("_preserve_redacted_user_pins", source)
        self.assertIn('_STORAGE_VERSION = 1', source)

    def test_modular_frontend_matches_hardened_contract(self) -> None:
        bootstrap = (COMPONENT / "www" / "argus-bootstrap.js").read_text(encoding="utf-8")
        security = (COMPONENT / "www" / "security-client.js").read_text(encoding="utf-8")
        panel = (COMPONENT / "panel.py").read_text(encoding="utf-8")
        self.assertIn("entry_id: entry.entry_id", security)
        self.assertNotIn("force_reset", security)
        self.assertIn("applySecurityClient", bootstrap)
        self.assertIn("argus-bootstrap.js", panel)
        self.assertIn("cache_headers=True", panel)

    def test_release_archive_path_is_verified(self) -> None:
        release = (ROOT / ".github" / "workflows" / "release.yml").read_text(encoding="utf-8")
        validate = (ROOT / ".github" / "workflows" / "validate.yml").read_text(encoding="utf-8")
        self.assertIn('"../../argus.zip"', release)
        self.assertIn("unzip -t argus.zip", release)
        self.assertIn("Build release artifact", validate)


if __name__ == "__main__":
    unittest.main()
