"""Contracts for React-only language selection and safe fallbacks."""
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
I18N = ROOT / "src" / "app" / "i18n.tsx"
APP = ROOT / "src" / "app" / "ArgusApp.tsx"
INDEX = ROOT / "src" / "app" / "index.ts"


class ReactI18nContractTests(unittest.TestCase):
    def test_declared_argus_languages_use_key_catalogs_not_a_dom_translation_bridge(self) -> None:
        source = I18N.read_text(encoding="utf-8")
        self.assertIn("['es','en','fr','pt','it','zh-Hans','zh-Hant','hi','ar','ko','ja','uk']", source)
        self.assertIn("const catalog:Record<ArgusLocale,Catalog>", source)
        self.assertNotIn("localizeTree", source)
        self.assertNotIn("MutationObserver", source)
        for locale in ("fr", "pt", "it", "zhHans", "zhHant", "hi", "ar", "ko", "ja", "uk"):
            self.assertIn(f"const {locale}", source)

    def test_react_root_has_provider_and_per_entry_persistence(self) -> None:
        index = INDEX.read_text(encoding="utf-8")
        app = APP.read_text(encoding="utf-8")
        self.assertIn("I18nProvider", index)
        self.assertIn("useI18n", app)
        self.assertIn("argus/save_ui',{language:locale}", app)
        self.assertIn("localeReady.current=entryId", app)
        self.assertIn("localizedWidgets", app)
        self.assertIn("dashboard?.ui.language==='zh'?'zh-Hans'", app)
        self.assertIn("dir={locale==='ar'?'rtl':'ltr'}", I18N.read_text(encoding="utf-8"))

    def test_catalog_covers_the_main_dashboard_and_admin_surfaces(self) -> None:
        source = I18N.read_text(encoding="utf-8")
        for visible in ("Acciones SOS", "Configuración avanzada", "Guardar modo", "Apoya a Argus", "Automatizaciones de Home Assistant"):
            self.assertIn(visible, source)

    def test_every_supported_catalog_is_declared_against_the_source_keys(self) -> None:
        source = I18N.read_text(encoding="utf-8")
        self.assertIn("type Catalog=Record<string,string>", source)
        self.assertIn("const catalog:Record<ArgusLocale,Catalog>", source)
        for locale in ("es", "en", "fr", "pt", "it", "zhHans", "zhHant", "hi", "ar", "ko", "ja", "uk"):
            self.assertIn(f"const {locale}", source)

    def test_backend_errors_are_mapped_to_safe_localized_keys(self) -> None:
        source = I18N.read_text(encoding="utf-8")
        self.assertIn("const errorKeys", source)
        self.assertIn("localizeError", source)
        self.assertIn("unauthorized:'error.permission'", source)


if __name__ == "__main__":
    unittest.main()
