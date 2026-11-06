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
        cls.legacy=(ROOT/'src'/'legacy'/'argus-panel.ts').read_text(encoding='utf-8')
        cls.bootstrap=(WWW/'argus-bootstrap.js').read_text(encoding='utf-8')
        cls.package=json.loads((ROOT/'package.json').read_text(encoding='utf-8'))
    def test_real_react_grid_layout_dependencies(self):
        self.assertEqual(self.package['dependencies']['react-grid-layout'],'^2.3.0')
        self.assertIn('react-resizable',self.package['dependencies'])
    def test_collision_safe_auto_compacting_freeform_grid(self):
        for token in ['allowOverlap={false}','isBounded={true}','compactType={null}','draggableHandle=".argus-widget__drag-handle"','resizeHandles={[\'e\', \'s\', \'se\']}','compactLayoutAroundAnchor(layout, item?.i)','Persist only the active breakpoint','}, 560);','document.addEventListener(\'pointerdown\'','Toca fuera para terminar.','hold_widget_to_edit']:
            self.assertIn(token,self.dashboard)
        self.assertNotIn('✓✓ Listo',self.dashboard)
        self.assertNotIn('Editar tablero</button>',self.dashboard)
    def test_breakpoints_and_dense_freeform_geometry(self):
        for token in ['lg:1200','md:996','sm:768','xs:480','xxs:0','lg: 96, md: 80, sm: 64, xs: 40, xxs: 32','GRID_ROW_HEIGHT = 10','GRID_MARGIN = 2','export function migrateToV5']:
            self.assertIn(token,self.layout)
        for token in ['S:{w:3,h:6}','M:{w:3,h:8}','L:{w:6,h:8}','XL:{w:6,h:16}']:
            self.assertNotIn(token,self.layout)
    def test_unrequested_insights_and_floorplan_widgets_are_removed(self):
        for token in ["security-insights", "floorplan"]:
            self.assertNotIn(f"item('{token}'", self.layout)
        self.assertIn("new Set(['security-insights', 'floorplan', 'zone-crystals'])", self.layout)
    def test_editing_visibility_reset_and_accessibility(self):
        for token in ['Restablecer diseño','Ocultar widget',"getT('show', 'Mostrar')",'aria-live="polite"',"event.key==='Escape'",'saveVisibility']:
            self.assertIn(token,self.dashboard+self.layout)
        self.assertIn('Toca fuera para terminar.',self.dashboard)
    def test_persistence_is_scoped_and_versioned(self):
        self.assertIn('argus:dashboard-layout:${u}:${d}',self.layout)
        self.assertIn('layoutVersion:5',self.layout)
        self.assertIn('react_layout_v5', (ROOT/'src'/'features'/'dashboard'/'index.tsx').read_text(encoding='utf-8'))
        self.assertIn('private writes:Promise<void>=Promise.resolve()', (ROOT/'src'/'features'/'dashboard'/'index.tsx').read_text(encoding='utf-8'))
        self.assertIn('DashboardLayoutStorage',self.types)
    def test_mobile_and_web_layout_writes_are_breakpoint_scoped(self):
        self.assertIn('replaceBreakpointLayout(lastValid.current, bpRef.current, layout)',self.dashboard)
        self.assertIn('const active = all?.[bpRef.current]',self.dashboard)
        self.assertIn('breakpoint={layoutProfile}',self.dashboard)
        self.assertIn('window.innerWidth < BREAKPOINTS.sm',self.dashboard)
        self.assertIn('export function replaceBreakpointLayout',self.layout)
        self.assertIn('never rewrites the web/tablet arrangement',self.dashboard)
    def test_hidden_widgets_have_a_restore_entry_outside_edit_mode(self):
        self.assertIn('Mostrar widgets ocultos',self.dashboard)
        self.assertIn('argus-dashboard__restore-entry',self.dashboard)
        self.assertIn('saveVisibility?.(userId, dashboardId, next)',self.dashboard)
    def test_widget_content_uses_its_own_dimensions_and_motion_is_gesture_safe(self):
        for token in ['container-type:size','container-name:argus-widget','@container argus-widget','#activity-log{height:auto!important','grid-template-columns:repeat(auto-fit','transition:none!important','prefers-reduced-motion:reduce']:
            self.assertIn(token,self.style)
    def test_activity_history_skips_identical_repaints_and_row_entrance_animation(self):
        self.assertIn('renderSignature === this._lastActivityRenderSignature',self.legacy)
        self.assertIn('visibleLog.map(entry => [entry.action, entry.detail, entry.user, entry.actor, entry.ts])',self.legacy)
        self.assertIn('#activity-log .log-item{animation:none!important',self.style)
    def test_activity_history_has_one_mobile_scroll_owner_and_preserves_scroll_anchor(self):
        self.assertIn('#w-activity{max-height:none!important;overflow:visible!important}',self.legacy)
        self.assertIn('.activity-log{max-height:min(58vh,520px)!important;overflow-y:auto!important',self.legacy)
        self.assertIn('touch-action:pan-y',self.legacy)
        self.assertIn('data-activity-key="${this._escapeHtml(activityKey)}"',self.legacy)
        self.assertIn('el.scrollTop = Math.max(0, el.scrollTop + nextOffset - anchor.offset)',self.legacy)
        self.assertIn('backdrop-filter:none!important;-webkit-backdrop-filter:none!important',self.style)
        self.assertIn('overscroll-behavior-y:auto;-webkit-overflow-scrolling:touch;touch-action:pan-y',self.style)
        self.assertIn('>.argus-widget__content>.panel{overflow:hidden!important',self.style)
        self.assertNotIn('overscroll-behavior-y:contain!important',self.legacy)
    def test_mode_tabs_stay_in_one_mobile_row_and_only_disarmed_is_green(self):
        self.assertIn('grid-template-columns:repeat(7,minmax(0,1fr))!important',self.style)
        self.assertIn('rgba(168, 85, 247, 0.96)',self.legacy)
        self.assertIn('bubble-disarmed',self.legacy)
        self.assertIn('bubble-sos',self.legacy)
    def test_each_widget_reflows_to_its_own_width(self):
        self.assertIn('container-type:size;container-name:argus-widget',self.style)
        self.assertIn('@container argus-widget (max-width:760px)',self.style)
        self.assertIn('grid-template-columns:repeat(7,minmax(0,1fr))!important',self.style)
        self.assertIn('grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr))!important',self.style)
        self.assertIn('grid-template-columns:repeat(auto-fit,minmax(min(100%,112px),1fr))',self.style)
        self.assertIn('data-widget-kind="access-control"] #access-workspace .access-section{min-width:0;max-width:100%}',self.style)
        self.assertIn('data-widget-kind="security-status"] #w-github{flex-direction:column!important',self.style)
    def test_mode_cards_balance_height_sirens_fill_row_and_zone_list_scrolls(self):
        self.assertIn('grid-auto-rows:auto!important;align-items:stretch!important',self.style)
        self.assertIn('.mode-grid-layout>.mode-sirens-card{grid-column:1/-1}',self.style)
        self.assertIn('.mode-zone-summary-items.is-scrollable{max-height:190px;overflow-x:hidden;overflow-y:auto',self.style)
        self.assertIn("assigned.length > 1 ? ' is-scrollable' : ''",self.legacy)
    def test_nested_widget_scroll_chains_to_argus_page(self):
        self.assertIn('Nested widget scrollers must hand wheel/touch momentum back to the page',self.style)
        self.assertIn('overscroll-behavior-y:auto!important',self.style)
        for selector in ['#activity-log','#w-access','#mode-view']:
            self.assertIn(selector,self.style)
    @unittest.skip("Legacy architecture replaced by TypeScript")
    def test_shadow_dom_styles_and_compiled_adapter_are_wired(self):
        self.assertIn('#widget-grid.grid{display:block!important',self.style)
        self.assertIn("react-dist/argus-dashboard-react.ts",self.bootstrap)
        self.assertTrue((WWW/'react-dist'/'argus-dashboard-react.ts').is_file())

if __name__=='__main__': unittest.main()
