"""Argus has Spanish and English language support only."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import re
import unittest


ROOT = Path(__file__).resolve().parents[1]
COMPONENT = ROOT / "custom_components" / "argus"


def _load_module(name: str, path: Path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    assert spec.loader is not None
    spec.loader.exec_module(module)
    return module


class SupportedLanguagesContractTests(unittest.TestCase):
    def test_user_language_selector_only_offers_auto_spanish_and_english(self):
        source = (ROOT / "src/legacy/argus-panel.ts").read_text()
        match = re.search(r"const LANG_LIST = \[(.*?)\];", source, re.DOTALL)
        self.assertIsNotNone(match)
        codes = re.findall(r"code:'([^']+)'", match.group(1))
        self.assertEqual(codes, ["auto", "es", "en"])

    def test_backend_translation_and_sos_catalogues_only_have_spanish_and_english(self):
        i18n = _load_module("argus_supported_i18n", COMPONENT / "i18n.py")
        panic = _load_module("argus_supported_panic", COMPONENT / "core/panic.py")

        self.assertEqual(set(i18n._TRANSLATIONS), {"es", "en"})
        self.assertEqual(set(panic.SOS_TEXT), {"es", "en"})
        self.assertEqual(i18n.translate("es-MX", "msg_start"), i18n._TRANSLATIONS["es"]["msg_start"])
        self.assertEqual(i18n.translate("pt-BR", "msg_start"), i18n._TRANSLATIONS["en"]["msg_start"])


if __name__ == "__main__":
    unittest.main()
