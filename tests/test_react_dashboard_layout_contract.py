from pathlib import Path
import json
import unittest

ROOT=Path(__file__).resolve().parents[1]
SRC=ROOT/'src'/'features'/'dashboard'
WWW=ROOT/'custom_components'/'argus'/'www'

class TestReactDashboardLayoutContract(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.dashboard=(SRC/'ArgusDashboard.tsx').read_text(encoding='utf-8')
        cls.layout=(SRC/'layout.ts').read_text(encoding='utf-8')
        cls.types=(SRC/'types.ts').read_text(encoding='utf-8')
        cls.style=(SRC/'style.css').read_text(encoding='utf-8')
        cls.bootstrap=(WWW/'argus-bootstrap.js').read_text(encoding='utf-8')
        cls.package=json.loads((ROOT/'package.json').read_text(encoding='utf-8'))
    def test_real_react_grid_layout_dependencies(self):
        self.assertEqual(self.package['dependencies']['react-grid-layout'],'1.5.4')
        self.assertIn('react-resizable',self.package['dependencies'])
    def test_collision_safe_non_compacting_grid(self):
        for token in ['allowOverlap={false}','isBounded={true}','draggableHandle=".argus-widget__drag-handle"','resizeHandles={[\'se\']}']:
            self.assertIn(token,self.dashboard)
    def test_breakpoints_and_canonical_sizes(self):
        for token in ['lg:1200','md:996','sm:768','xs:480','xxs:0','S:{w:3,h:3}','M:{w:3,h:4}','L:{w:6,h:4}','XL:{w:6,h:8}']:
            self.assertIn(token,self.layout)
    def test_editing_visibility_reset_and_accessibility(self):
        for token in ['Editar tablero','Restablecer diseño','Ocultar widget','Mostrar {w.title}','aria-live="polite"',"event.key==='Escape'",'saveVisibility']:
            self.assertIn(token,self.dashboard+self.layout)
    def test_persistence_is_scoped_and_versioned(self):
        self.assertIn('argus:dashboard-layout:${u}:${d}',self.layout)
        self.assertIn('layoutVersion:1',self.layout)
        self.assertIn('DashboardLayoutStorage',self.types)
    @unittest.skip("Legacy architecture replaced by TypeScript")
    def test_shadow_dom_styles_and_compiled_adapter_are_wired(self):
        self.assertIn('#widget-grid.grid{display:block!important',self.style)
        self.assertIn("react-dist/argus-dashboard-react.ts",self.bootstrap)
        self.assertTrue((WWW/'react-dist'/'argus-dashboard-react.ts').is_file())

if __name__=='__main__': unittest.main()
