"""Repository hygiene guarantees for reproducible Argus releases."""
from __future__ import annotations

from pathlib import Path
import unittest

ROOT = Path(__file__).parents[1]


class TestRepositoryHygiene(unittest.TestCase):
    def test_one_shot_publishers_patch_scripts_and_dead_card_are_absent(self) -> None:
        forbidden = (
            ".github/workflows/publish-v2055-once.yml",
            ".github/workflows/prepare-v2056-once.yml",
            "fix_changelog.py",
            "patch_js.py",
            "update_versions.py",
            "scripts/publish.py",
            "src/legacy/argus-card.ts",
        )
        for relative in forbidden:
            with self.subTest(path=relative):
                self.assertFalse((ROOT / relative).exists())

    def test_release_artifacts_are_not_tracked_at_repository_root(self) -> None:
        self.assertFalse((ROOT / "argus.zip").exists())
        self.assertFalse((ROOT / "argus.zip.sha256").exists())
        ignored = (ROOT / ".gitignore").read_text(encoding="utf-8")
        self.assertIn("argus.zip\n", ignored)
        self.assertIn("argus.zip.sha256\n", ignored)

    def test_only_supported_workflows_remain(self) -> None:
        workflows = {path.name for path in (ROOT / ".github" / "workflows").glob("*.yml")}
        self.assertEqual(workflows, {"release.yml", "validate.yml"})

    def test_release_documentation_forbids_direct_main_publication(self) -> None:
        documentation = (ROOT / "scripts" / "README.md").read_text(encoding="utf-8")
        self.assertIn("validate.yml", documentation)
        self.assertIn("release.yml", documentation)
        self.assertIn("push directo a `main`", documentation)


if __name__ == "__main__":
    unittest.main()
