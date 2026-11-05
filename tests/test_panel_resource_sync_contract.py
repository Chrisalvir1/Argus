from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]


class TestPanelResourceSyncContract(unittest.TestCase):
    def test_lovelace_storage_is_loaded_before_reading_items(self):
        source = (ROOT / "custom_components/argus/panel.py").read_text(encoding="utf-8")
        load = source.index("await resources.async_get_info()")
        read = source.index("items = resources.async_items()")
        self.assertLess(load, read)

    def test_argus_resource_urls_are_versioned_and_deduplicated(self):
        source = (ROOT / "custom_components/argus/panel.py").read_text(encoding="utf-8")
        self.assertIn('await ensure_resource("argus-bootstrap.js")', source)
        self.assertIn('await ensure_resource("argus-brand-patch.js")', source)
        self.assertIn("async_update_item(canonical[\"id\"]", source)
        self.assertIn("async_delete_item(duplicate[\"id\"])", source)
        self.assertIn('f"/api/{DOMAIN}_static/{filename}?v={VERSION}"', source)


if __name__ == "__main__":
    unittest.main()
