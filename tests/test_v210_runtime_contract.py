from pathlib import Path
import tomllib
import unittest

ROOT = Path(__file__).resolve().parents[1]


class TestV210RuntimeContract(unittest.TestCase):
    def test_python_314_is_pinned_and_supported(self):
        self.assertEqual((ROOT / ".python-version").read_text().strip(), "3.14.7")
        project = tomllib.loads((ROOT / "pyproject.toml").read_text())
        self.assertEqual(project["project"]["requires-python"], ">=3.14.2,<3.15")
        for workflow in ("validate.yml", "release.yml"):
            source = (ROOT / ".github" / "workflows" / workflow).read_text()
            self.assertIn("python-version: '3.14'", source)
            self.assertIn("(3, 14, 2)", source)

    def test_node_24_lts_and_typescript_702_are_enforced(self):
        package = (ROOT / "package.json").read_text()
        self.assertIn('"typescript":"7.0.2"', package)
        for workflow in ("validate.yml", "release.yml"):
            source = (ROOT / ".github" / "workflows" / workflow).read_text()
            self.assertIn("node-version: '24'", source)
            self.assertIn("Version 7.0.2", source)

    def test_ecmascript_2025_strict_contract(self):
        tsconfig = (ROOT / "tsconfig.json").read_text()
        self.assertIn('"target": "ES2025"', tsconfig)
        self.assertIn('"noUncheckedIndexedAccess": true', tsconfig)
        self.assertIn('"exactOptionalPropertyTypes": true', tsconfig)

    def test_typed_websocket_contract_has_security_commands(self):
        source = (ROOT / "src" / "core" / "websocket.ts").read_text()
        for command in (
            "argus/dashboard",
            "argus/login_bootstrap",
            "argus/perform_alarm_action",
            "argus/update_master_pin",
            "argus/verify_access_pin",
        ):
            self.assertIn(command, source)
        self.assertNotIn(":any", source.replace(" ", ""))


if __name__ == "__main__":
    unittest.main()
