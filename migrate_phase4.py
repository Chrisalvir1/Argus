import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content.strip())

responsive_ts = """
import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const STYLE_ID = 'argus-v2049-responsive-widgets';
const ACCESS_SCROLL = '#w-access,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"],.users-modal,.access-modal,.argus-users-modal';

type ResponsivePanel = ArgusPanelHost & {
  __v2049ResponsiveWidgets?: boolean;
  _v2049Observer?: MutationObserver | null;
  _v2049Frame?: number;
  _load?: (...args: any[]) => Promise<any>;
  _renderEntries?: (...args: any[]) => any;
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
};

function installStyles(panel: ResponsivePanel) {
  const root = panel.shadowRoot;
  if (!root) return;
  let style = root.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    root.appendChild(style);
  }
  style.textContent = `
#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}
#w-access>.panel-head,#w-access>.access-summary,#w-access>.tabs{flex:0 0 auto!important}
#w-access :is(.panel-body,#access-view,.access-view,.access-content,.access-sections,.users-list,.user-list,.users-grid,[role="tabpanel"]){flex:1 1 auto!important;min-width:0!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;scrollbar-gutter:stable!important;box-sizing:border-box!important}
:is(.users-modal,.access-modal,.argus-users-modal,.modal,[role="dialog"]){max-width:min(94vw,760px)!important;max-height:min(88dvh,720px)!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;box-sizing:border-box!important}
/* Backup: title plus an explicit responsive button grid. */
#w-backup{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-auto-rows:max-content!important;place-content:center!important;align-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:16px!important;gap:12px!important;text-align:center!important}
#w-backup>h2,#w-backup>.panel-head,#w-backup>.panel-title{grid-column:1/-1!important;width:100%!important;margin:0 0 2px!important;text-align:center!important}
#w-backup>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;box-sizing:border-box!important;margin-top:0!important;margin-bottom:0!important}
#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;grid-column:1/-1!important;gap:12px!important;width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}
#w-backup :is(button,a,ha-button,mwc-button){width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;padding-inline:8px!important;white-space:normal!important;overflow-wrap:anywhere!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important;font-size:clamp(11px,1.1vw,14px)!important}
/* Support: compact centered group; no inherited space-between or auto margins. */
#w-github{display:grid!important;grid-template-columns:minmax(0,1fr)!important;grid-auto-rows:max-content!important;place-content:center!important;justify-items:center!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;overflow:hidden!important;box-sizing:border-box!important;padding:18px!important;row-gap:18px!important;text-align:center!important}
#w-github>:not(.panel-edit-overlay){min-width:0!important;max-width:100%!important;margin:0!important;box-sizing:border-box!important}
#w-github :is(h2,.panel-head,.panel-title){width:100%!important;margin:0!important;text-align:center!important}
#w-github :is(.panel-body,.actions,.support-actions,.button-row,.controls){display:grid!important;place-items:center!important;width:auto!important;min-width:0!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important;flex-wrap:wrap!important}
#w-github :is(button,a,ha-button,mwc-button){width:auto!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;text-align:center!important;justify-content:center!important;box-sizing:border-box!important}
#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay{position:absolute!important;inset:0!important;margin:0!important;max-width:none!important}
@media(max-width:460px){#w-backup{grid-template-columns:1fr!important;overflow-y:auto!important}#w-backup :is(.panel-body,.actions,.backup-actions,.button-row,.controls){grid-template-columns:1fr!important}#w-backup :is(button,a,ha-button,mwc-button){font-size:13px!important}#w-github{padding:14px!important;row-gap:12px!important}}
`;
}

function enableTouchScroll(panel: ResponsivePanel) {
  const root = panel.shadowRoot;
  if (!root) return;
  root.querySelectorAll(ACCESS_SCROLL).forEach((node) => {
    const el = node as HTMLElement;
    el.style.touchAction = 'pan-y';
    el.style.webkitOverflowScrolling = 'touch';
    if (el.scrollHeight > el.clientHeight) el.style.overflowY = 'auto';
  });
}

function repair(panel: ResponsivePanel) {
  installStyles(panel);
  enableTouchScroll(panel);
}

export function applyV2049ResponsiveWidgets(C: ArgusPanelConstructor | undefined): void {
  const proto = C?.prototype as ResponsivePanel | undefined;
  if (!proto || proto.__v2049ResponsiveWidgets) return;
  proto.__v2049ResponsiveWidgets = true;
  
  const connected = proto.connectedCallback;
  const disconnected = proto.disconnectedCallback;
  const load = proto._load;
  const render = proto._renderEntries;
  
  proto.connectedCallback = function (this: ResponsivePanel) {
    const result = connected?.call(this);
    repair(this);
    this._v2049Observer?.disconnect?.();
    this._v2049Frame = 0;
    this._v2049Observer = new MutationObserver(() => {
      if (this._v2049Frame) return;
      this._v2049Frame = requestAnimationFrame(() => {
        this._v2049Frame = 0;
        repair(this);
      });
    });
    if (this.shadowRoot) this._v2049Observer.observe(this.shadowRoot, { childList: true, subtree: true });
    return result;
  };
  
  proto.disconnectedCallback = function (this: ResponsivePanel) {
    this._v2049Observer?.disconnect?.();
    this._v2049Observer = null;
    if (this._v2049Frame) cancelAnimationFrame(this._v2049Frame);
    this._v2049Frame = 0;
    return disconnected?.call(this);
  };
  
  proto._load = async function (this: ResponsivePanel, ...args: any[]) {
    const result = await load?.apply(this, args);
    repair(this);
    return result;
  };
  
  proto._renderEntries = function (this: ResponsivePanel, ...args: any[]) {
    const result = render?.apply(this, args);
    repair(this);
    return result;
  };
}
"""

layouts_ts = """
import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const STYLE_ID = 'argus-v2050-widget-layouts';

type LayoutsPanel = ArgusPanelHost & {
  __v2050WidgetLayouts?: boolean;
  _v2050LayoutObs?: MutationObserver | null;
  _v2050LayoutFrame?: number;
  _load?: (...args: any[]) => Promise<any>;
  _renderEntries?: (...args: any[]) => any;
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
};

function install(panel: LayoutsPanel) {
  const root = panel.shadowRoot;
  if (!root) return;
  let style = root.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    root.appendChild(style);
  }
  style.textContent = `
#w-access{display:flex!important;flex-direction:column!important;min-width:0!important;min-height:0!important;height:100%!important;overflow:hidden!important}
#w-access .panel-body,#w-access #access-view,#w-access .access-view,#w-access .access-content,#w-access .users-list,#w-access .user-list{flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;overscroll-behavior:contain!important}
#w-backup{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:14px!important;padding:16px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}
#w-backup h2,#w-backup .panel-head,#w-backup .panel-title{margin:0!important;width:100%!important;text-align:center!important;flex:0 0 auto!important}
#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:10px!important;width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}
#w-backup button,#w-backup a,#w-backup ha-button,#w-backup mwc-button{width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;overflow-wrap:anywhere!important;justify-content:center!important;text-align:center!important;font-size:clamp(11px,1.1vw,14px)!important;box-sizing:border-box!important}
#w-github{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:16px!important;padding:18px!important;box-sizing:border-box!important;height:100%!important;min-height:0!important;overflow:hidden!important;text-align:center!important}
#w-github h2,#w-github .panel-head,#w-github .panel-title{margin:0!important;width:100%!important;text-align:center!important}
#w-github .panel-body,#w-github .actions,#w-github .support-actions{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:12px!important;width:auto!important;max-width:100%!important;margin:0!important;padding:0!important}
#w-github button,#w-github a,#w-github ha-button,#w-github mwc-button{width:auto!important;max-width:100%!important;margin:0!important;justify-content:center!important}
#w-backup .panel-edit-overlay,#w-github .panel-edit-overlay,#w-access .panel-edit-overlay{position:absolute!important;inset:0!important}
@media(max-width:520px){#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{grid-template-columns:1fr!important}#w-backup{overflow-y:auto!important}}
`;
}

function touch(panel: LayoutsPanel) {
  const root = panel.shadowRoot;
  if (!root) return;
  root.querySelectorAll('#w-access,.access-content,.users-list,.user-list,[role=tabpanel],.users-modal,.access-modal').forEach((n) => {
    const el = n as HTMLElement;
    el.style.touchAction = 'pan-y';
    el.style.webkitOverflowScrolling = 'touch';
    if (el.scrollHeight > el.clientHeight) el.style.overflowY = 'auto';
  });
}

function repair(panel: LayoutsPanel) {
  install(panel);
  touch(panel);
}

export function applyV2050WidgetLayouts(C: ArgusPanelConstructor | undefined): void {
  const p = C?.prototype as LayoutsPanel | undefined;
  if (!p || p.__v2050WidgetLayouts) return;
  p.__v2050WidgetLayouts = true;
  
  const c = p.connectedCallback;
  const d = p.disconnectedCallback;
  const l = p._load;
  const r = p._renderEntries;
  
  p.connectedCallback = function (this: LayoutsPanel) {
    const x = c?.call(this);
    repair(this);
    this._v2050LayoutObs?.disconnect?.();
    this._v2050LayoutFrame = 0;
    this._v2050LayoutObs = new MutationObserver(() => {
      if (this._v2050LayoutFrame) return;
      this._v2050LayoutFrame = requestAnimationFrame(() => {
        this._v2050LayoutFrame = 0;
        repair(this);
      });
    });
    if (this.shadowRoot) this._v2050LayoutObs.observe(this.shadowRoot, { childList: true, subtree: true });
    return x;
  };
  
  p.disconnectedCallback = function (this: LayoutsPanel) {
    this._v2050LayoutObs?.disconnect?.();
    this._v2050LayoutObs = null;
    if (this._v2050LayoutFrame) cancelAnimationFrame(this._v2050LayoutFrame);
    this._v2050LayoutFrame = 0;
    return d?.call(this);
  };
  
  p._load = async function (this: LayoutsPanel, ...a: any[]) {
    const x = await l?.apply(this, a);
    repair(this);
    return x;
  };
  
  p._renderEntries = function (this: LayoutsPanel, ...a: any[]) {
    const x = r?.apply(this, a);
    repair(this);
    return x;
  };
}
"""

write_file('src/features/widgets/responsive.ts', responsive_ts)
write_file('src/features/widgets/layouts.ts', layouts_ts)

with open('src/legacy/bridge.ts', 'r') as f:
    bridge = f.read()

bridge = bridge.replace("import{applyV2049ResponsiveWidgets}from'../../custom_components/argus/www/argus-v2049-responsive-widgets.js';\n", "")
bridge = bridge.replace("import{applyV2050WidgetLayouts}from'../../custom_components/argus/www/argus-v2050-widget-layouts.js';\n", "")
bridge = bridge.replace("applyV2049ResponsiveWidgets(C);", "")
bridge = bridge.replace("applyV2050WidgetLayouts(C);", "")

with open('src/legacy/bridge.ts', 'w') as f:
    f.write(bridge)

with open('src/app/index.ts', 'r') as f:
    index = f.read()

new_imports = """
import { applyV2049ResponsiveWidgets } from '../features/widgets/responsive';
import { applyV2050WidgetLayouts } from '../features/widgets/layouts';
"""

index = index.replace("import{applyV2050AlarmVisuals}from'../features/render/alarm';", "import{applyV2050AlarmVisuals}from'../features/render/alarm';" + new_imports)
index = index.replace("applyV2050AlarmVisuals(C);", "applyV2050AlarmVisuals(C);\n  applyV2049ResponsiveWidgets(C);\n  applyV2050WidgetLayouts(C);")

with open('src/app/index.ts', 'w') as f:
    f.write(index)
