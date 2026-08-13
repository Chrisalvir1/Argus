from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
WWW = ROOT / "custom_components" / "argus" / "www"


class TestV2051TypeScriptFrontendContract(unittest.TestCase):
    def test_bootstrap_has_one_runtime_bundle(self):
        source = (WWW / "argus-bootstrap.js").read_text()
        executable = source.split("/*", 1)[0]
        self.assertIn("argus-frontend.js?v=2.1.2", executable)
        self.assertIn("import { applyArgusFrontend }", executable)
        self.assertNotIn("from './argus-", executable)

    def test_vite_builds_typescript_application_entry(self):
        config = (ROOT / "vite.config.ts").read_text()
        self.assertIn("entry: 'src/app/index.ts'", config)
        self.assertIn("argus-frontend.js", config)
        self.assertIn("target: 'esnext'", config)

    def test_security_and_media_clients_are_typescript(self):
        for path in (
            SRC / "features" / "security" / "client.ts",
            SRC / "features" / "media" / "client.ts",
            SRC / "core" / "websocket.ts",
        ):
            self.assertTrue(path.is_file(), path)
            self.assertNotIn(":any", path.read_text().replace(" ", ""))

    def test_legacy_modules_are_centralized_in_one_bridge(self):
        bridge = (SRC / "legacy" / "bridge.ts").read_text()
        self.assertIn("applyLegacyBeforeTypedClients", bridge)
        self.assertIn("applyLegacyAfterTypedClients", bridge)
        executable = (WWW / "argus-bootstrap.js").read_text().split("/*", 1)[0]
        self.assertNotIn("applyMotionSystem", executable)
        self.assertNotIn("applyStableInstancesRender", executable)


if __name__ == "__main__":
    unittest.main()
