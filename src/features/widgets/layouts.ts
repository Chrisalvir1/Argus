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
#w-backup{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:8px!important;padding:12px 14px!important;box-sizing:border-box!important;height:auto!important;min-height:fit-content!important;align-self:start!important;overflow:hidden!important;text-align:center!important}
#w-backup h2,#w-backup .panel-head,#w-backup .panel-title{margin:0!important;width:100%!important;text-align:center!important;flex:0 0 auto!important}
#w-backup .panel-body,#w-backup .actions,#w-backup .backup-actions,#w-backup .button-row,#w-backup .controls{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;width:100%!important;max-width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}
#w-backup button,#w-backup a,#w-backup ha-button,#w-backup mwc-button{width:100%!important;min-width:0!important;max-width:100%!important;margin:0!important;white-space:normal!important;overflow-wrap:anywhere!important;justify-content:center!important;text-align:center!important;font-size:clamp(11px,1.1vw,13px)!important;padding:6px 8px!important;box-sizing:border-box!important}
#w-github{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:8px!important;padding:12px 14px!important;box-sizing:border-box!important;height:auto!important;min-height:fit-content!important;align-self:start!important;overflow:hidden!important;text-align:center!important}
#w-github h2,#w-github .panel-head,#w-github .panel-title,#w-github h3{margin:0!important;width:100%!important;text-align:center!important}
#w-github .panel-body,#w-github .actions,#w-github .support-actions{display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:center!important;gap:8px!important;width:auto!important;max-width:100%!important;margin:0!important;padding:0!important}
#w-github button,#w-github a,#w-github ha-button,#w-github mwc-button{width:auto!important;max-width:100%!important;margin:0!important;justify-content:center!important;padding:6px 12px!important}
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
    el.style.setProperty('-webkit-overflow-scrolling', 'touch');
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