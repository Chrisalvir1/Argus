from pathlib import Path
import unittest

ROOT=Path(__file__).parents[1]
WWW=ROOT/'custom_components'/'argus'/'www'
POLISH=(WWW/'argus-fullscreen-polish.js').read_text(encoding='utf-8')
BOOTSTRAP=(WWW/'argus-bootstrap.js').read_text(encoding='utf-8')

class TestFullscreenPolish(unittest.TestCase):
    @unittest.skip("Legacy architecture replaced by TypeScript")
    def test_loaded_after_clients(self):
        self.assertIn('applyFullscreenPolish(ArgusPanel)',BOOTSTRAP)
        self.assertGreater(BOOTSTRAP.index('applyFullscreenPolish(ArgusPanel)'),BOOTSTRAP.index('applyPremiumExperience(ArgusPanel)'))
    def test_independent_liquid_glass_hud(self):
        self.assertIn('.console-hud{display:grid',POLISH)
        self.assertIn('background:transparent!important',POLISH)
        self.assertIn('.console-hud-loc{',POLISH)
        self.assertIn('.console-hud-time,.console-hud-temp,.console-hud-tpill',POLISH)
    def test_live_connectivity_and_orange_offline(self):
        self.assertIn("window.addEventListener('online'",POLISH)
        self.assertIn("window.addEventListener('offline'",POLISH)
        self.assertIn('setInterval(()=>refreshConnection(this),2500)',POLISH)
        self.assertIn("off:'Argus desconectado · HA sin conexión'",POLISH)
        self.assertIn('.argus-connection-pill[data-online="false"]',POLISH)
        self.assertIn('rgba(255,145,43',POLISH)
    def test_connection_centered_over_shield(self):
        self.assertIn('grid-column:2!important',POLISH)
        self.assertIn('justify-self:center!important',POLISH)
        self.assertIn('hud.insertBefore(pill,right||null)',POLISH)
    def test_sensor_list_scrolls_without_overlap(self):
        self.assertIn('grid-auto-rows:minmax(48px,auto)',POLISH)
        self.assertIn('overflow-y:auto!important',POLISH)
        self.assertIn('overscroll-behavior:contain',POLISH)
        self.assertIn('contain:layout paint',POLISH)
        self.assertIn('backdrop-filter:none!important',POLISH)
    def test_shield_is_enlarged(self):
        self.assertIn('width:clamp(280px,34vw,500px)',POLISH)
        self.assertIn('max-width:500px!important',POLISH)

if __name__ == '__main__': unittest.main()
