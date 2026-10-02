from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
PANEL_SOURCE = (ROOT / "src/legacy/argus-panel.ts").read_text(encoding="utf-8")


class TestActivityHistoryExportContract(unittest.TestCase):
    def test_pdf_button_downloads_a_blob_instead_of_opening_print_dialog(self):
        self.assertIn("this._exportHistoryPDF();", PANEL_SOURCE)
        self.assertNotIn("_exportHistoryPrintPdf", PANEL_SOURCE)
        self.assertNotIn("window.print();", PANEL_SOURCE)
        self.assertIn("id=\"btn-do-download-pdf\"", PANEL_SOURCE)
        self.assertIn("new Blob([pdfData], { type: 'application/pdf' })", PANEL_SOURCE)
        self.assertIn("anchor.download = `argus_historial_${dateStr}_${timeStr}.pdf`", PANEL_SOURCE)

    def test_pdf_uses_byte_correct_winansi_and_localized_report_labels(self):
        self.assertIn("/Encoding /WinAnsiEncoding", PANEL_SOURCE)
        self.assertIn("return Uint8Array.from(document, char => char.charCodeAt(0) & 0xff)", PANEL_SOURCE)
        self.assertIn("const xrefOffset = document.length", PANEL_SOURCE)
        for key in ("history_pdf_title", "history_pdf_range", "history_pdf_action", "history_pdf_detail", "history_pdf_page"):
            self.assertEqual(PANEL_SOURCE.count(f"'{key}':"), 2, f"Expected Spanish and English translations for {key}")
        self.assertIn("this._localizeActivityAction(rawAction)", PANEL_SOURCE)


if __name__ == "__main__":
    unittest.main()
