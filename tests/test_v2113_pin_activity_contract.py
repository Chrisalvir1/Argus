from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
REACT_DASHBOARD = (ROOT / 'src/features/dashboard/ArgusDashboard.tsx').read_text(encoding='utf-8')
LEGACY = (ROOT / 'src/legacy/argus-panel.ts').read_text(encoding='utf-8')
STYLE = (ROOT / 'src/features/dashboard/style.css').read_text(encoding='utf-8')
CONSOLE = (ROOT / 'src/features/dashboard/components/ConsoleBalance.css').read_text(encoding='utf-8')
EMBLEM = (ROOT / 'src/features/dashboard/components/SecurityEmblem3D.tsx').read_text(encoding='utf-8')


class PinAndActivityRegressionContract(unittest.TestCase):
    def test_unlock_validation_failure_keeps_pin_dial_open(self):
        fullscreen = LEGACY[LEGACY.index('async _exitFullscreenView()'):LEGACY.index('  _requestKioskUnlock()')]
        kiosk = LEGACY[LEGACY.index('  _requestKioskUnlock()'):LEGACY.index('  _toggleFullscreen(')]
        submit = LEGACY[LEGACY.index('  async _submitPin()'):LEGACY.index('  /* ── Selector modal')]
        self.assertIn('return false;', fullscreen)
        self.assertIn('return false;', kiosk)
        self.assertIn('if (success !== false)', submit)
        self.assertIn("pin-rejected", submit)
        self.assertNotIn('user_pin_configured === true', fullscreen)

    def test_activity_rows_are_reconciled_and_keep_single_scroll_owner(self):
        render = LEGACY[LEGACY.index('  _renderActivityLog() {'):LEGACY.index('  /* ── Selector modal')]
        self.assertIn('document.createElement(\'template\')', render)
        self.assertIn('existing.get(key)', render)
        self.assertIn('el.insertBefore(row, atIndex || null)', render)
        self.assertIn('data-activity-key="${this._escapeHtml(activityKey)}"', render)
        self.assertIn('>.argus-widget__content>.panel{overflow:hidden!important', STYLE)
        self.assertIn('#activity-log{height:auto!important', STYLE)
        self.assertIn('overscroll-behavior-y:auto;-webkit-overflow-scrolling:touch;touch-action:pan-y', STYLE)

    def test_portrait_history_avoids_mobile_compositor_seams(self):
        portrait = STYLE[STYLE.index('@media(max-width:760px) and (orientation:portrait)'):]
        self.assertIn('#argus-dashboard-root-v3 .argus-widget{', portrait)
        self.assertIn('background:linear-gradient(145deg,rgb(38,52,69),rgb(24,37,53))!important', portrait)
        self.assertIn('backdrop-filter:none!important;-webkit-backdrop-filter:none!important', portrait)
        self.assertIn('#argus-dashboard-root-v3:not(.editing) .argus-dashboard-grid .react-grid-item{transition:none!important}', portrait)
        self.assertIn('scrollbar-gutter:auto!important', portrait)
        self.assertIn('#activity-log::-webkit-scrollbar{display:none;width:0;height:0}', portrait)
        self.assertIn('box-shadow:none!important;filter:none!important;isolation:isolate!important', portrait)
        self.assertIn('mix-blend-mode:normal!important', portrait)
        self.assertIn('transition:none!important', portrait)
        self.assertIn('backdrop-filter:none!important;-webkit-backdrop-filter:none!important', portrait)
        self.assertIn('background:linear-gradient(145deg,rgb(92,107,124),rgb(55,70,88))!important', portrait)
        self.assertIn('border-color:rgba(190,210,232,.2)!important', portrait)
        self.assertIn('isolation:isolate!important', portrait)
        self.assertIn('transition:none!important;transform:none!important', portrait)
        self.assertIn('transition:none!important;transform:none!important;filter:none!important;will-change:auto!important', portrait)

    def test_portrait_widgets_have_one_glass_surface(self):
        portrait = STYLE[STYLE.index('@media(max-width:760px) and (orientation:portrait)'):]
        self.assertIn('#argus-dashboard-root-v3 .argus-widget__content>.panel.glass.liquid-glass{', portrait)
        self.assertIn('background:transparent!important;background-color:transparent!important', portrait)
        self.assertIn('border:0!important;box-shadow:none!important', portrait)
        self.assertIn('backdrop-filter:none!important;-webkit-backdrop-filter:none!important', portrait)

    def test_portrait_native_panel_backdrop_is_reset_inline(self):
        self.assertIn("window.matchMedia('(max-width: 760px) and (orientation: portrait)')", REACT_DASHBOARD)
        self.assertIn("panel.style.setProperty(property, value, 'important')", REACT_DASHBOARD)
        self.assertIn("['backdrop-filter', 'none']", REACT_DASHBOARD)
        self.assertIn("['-webkit-backdrop-filter', 'none']", REACT_DASHBOARD)
        self.assertIn('media.addEventListener(\'change\', applySurface)', REACT_DASHBOARD)
        self.assertIn('syncPortraitPanelSurface(node, false)', REACT_DASHBOARD)

    def test_emblem_pointer_motion_is_scoped_to_the_core_viewport(self):
        self.assertIn('const interactionSurface = emblemViewport || el;', EMBLEM)
        self.assertNotIn('const interactionSurface = surface;', EMBLEM)

    def test_pin_dial_is_responsive_and_has_cancel_feedback_motion(self):
        self.assertIn('grid-template-columns:repeat(3,56px)', LEGACY)
        for digit in range(10):
            self.assertIn(f'data-pin-digit="{digit}"', LEGACY)
        self.assertIn('id="pin-backspace"', LEGACY)
        self.assertIn('id="pin-confirm"', LEGACY)
        self.assertIn('dialElasticOut', LEGACY)
        self.assertIn('pin-closing', LEGACY)
        self.assertIn("if (e.key === 'Escape') this._closePinModal()", LEGACY)
        self.assertIn("m.dataset.disarmPresentation = inline ? 'context' : 'dialog'", LEGACY)
        self.assertIn('data-disarm-presentation="dialog"].open', CONSOLE)
        self.assertIn('data-disarm-presentation="context"].pin-closing', CONSOLE)
        self.assertIn('prefers-reduced-motion: reduce', CONSOLE)


if __name__ == '__main__':
    unittest.main()
