import json
import os
import unittest


class TestVersionContracts(unittest.TestCase):
    def setUp(self):
        self.project_root = os.path.dirname(os.path.dirname(__file__))
        self.version = "2.0.56"

    def test_manifest_version(self):
        path = os.path.join(self.project_root, "custom_components", "argus", "manifest.json")
        with open(path, "r", encoding="utf-8") as handle:
            manifest = json.load(handle)
        self.assertEqual(manifest["version"], self.version)

    def test_const_version(self):
        path = os.path.join(self.project_root, "custom_components", "argus", "const.py")
        with open(path, "r", encoding="utf-8") as handle:
            lines = handle.readlines()
        version_lines = [line.strip() for line in lines if line.startswith("VERSION = ")]
        self.assertEqual(version_lines, [f'VERSION = "{self.version}"'])

    def test_release_notes_exist(self):
        path = os.path.join(self.project_root, "docs", f"RELEASE_NOTES_{self.version}.md")
        self.assertTrue(os.path.exists(path))

    def test_changelog_version(self):
        path = os.path.join(self.project_root, "CHANGELOG.md")
        with open(path, "r", encoding="utf-8") as handle:
            content = handle.read()
        self.assertIn(f"## [{self.version}]", content)

    def test_frontend_bootstrap_version(self):
        path = os.path.join(self.project_root, "custom_components", "argus", "www", "argus-bootstrap.js")
        with open(path, "r", encoding="utf-8") as handle:
            content = handle.read()
        self.assertIn(f"v={self.version}", content)


if __name__ == "__main__":
    unittest.main()
