import React from 'react';
import {createRoot,type Root} from 'react-dom/client';
import gridCss from 'react-grid-layout/css/styles.css?inline';
import resizeCss from 'react-resizable/css/styles.css?inline';
import localCss from './style.css?inline';
import {ArgusDashboard} from './ArgusDashboard';
import {LocalStorageDashboardLayoutStorage,mergeLayouts} from './layout';
import type {ArgusWidgetDefinition,Layouts} from './types';

type Panel=HTMLElement&{
 shadowRoot:ShadowRoot;_currentProfile?:{id?:string};_hass?:{user?:{id?:string}};
 _dashboard?:{entry_id?:string;entries?:Array<{entry_id?:string}>};_ui?:{dashboard?:Record<string,unknown>};
 _widgetEditing?:boolean;_argusReactRoot?:Root;_argusReactSetEditing?:(v:boolean)=>void;
 _send?:(type:string,payload:Record<string,unknown>)=>Promise<any>;
};
const widgets:ArgusWidgetDefinition[]=[
 {id:'activity-history',nativeId:'w-activity',kind:'activity-history',title:'Historial de actividad',size:'M',visible:true},
 {id:'automations',nativeId:'w-automations',kind:'automations',title:'Automatizaciones',size:'M',visible:true},
 {id:'backup-restore',nativeId:'w-backup',kind:'backup-restore',title:'Respaldo y restauración',size:'M',visible:true},
 {id:'access-control',nativeId:'w-access',kind:'access-control',title:'Control de acceso y usuarios',size:'L',visible:true},
 {id:'alarm-configuration',nativeId:'w-modes',kind:'alarm-configuration',title:'Configuración de alarma',size:'XL',visible:true},
 {id:'security-status',nativeId:'w-github',kind:'security-status',title:'Estado y soporte',size:'S',visible:true},
];
class PanelDashboardStorage extends LocalStorageDashboardLayoutStorage{
 constructor(private panel:Panel){super()}
 private record(){return (this.panel._ui?.dashboard?.react_layout_v2||{}) as {layouts?:Layouts;visibility?:Record<string,boolean>}}
 private async remote(patch:Record<string,unknown>){
  if(!this.panel._send)return;
  const current=this.record();const react_layout_v2={...current,...patch,layoutVersion:2,updatedAt:new Date().toISOString()};
  const dashboard={...(this.panel._ui?.dashboard||{}),react_layout_v2};
  const entry_id=this.panel._dashboard?.entry_id||this.panel._dashboard?.entries?.[0]?.entry_id;
  await this.panel._send('argus/save_ui',{dashboard,...entry_id?{entry_id}:{}});
  this.panel._ui=this.panel._ui||{};this.panel._ui.dashboard=dashboard;
 }
 async load(u:string,d:string){const remote=this.record().layouts;if(remote)return mergeLayouts(remote);return super.load(u,d)}
 async save(u:string,d:string,layouts:Layouts){await super.save(u,d,layouts);await this.remote({layouts})}
 async loadVisibility(u:string,d:string){return this.record().visibility||await super.loadVisibility(u,d)}
 async saveVisibility(u:string,d:string,visibility:Record<string,boolean>){await super.saveVisibility(u,d,visibility);await this.remote({visibility})}
 async reset(u:string,d:string){await super.reset(u,d);await this.remote({layouts:mergeLayouts(null),visibility:{}})}
}
function removeLegacyEditor(panel:Panel){
 const label=panel.shadowRoot?.getElementById('edit-widgets-label');
 (label?.closest('button')||label)?.remove();
 panel.shadowRoot?.querySelectorAll('.panel-edit-overlay,.widget-drag-handle').forEach(node=>node.remove());
 let style=panel.shadowRoot?.getElementById('argus-react-editor-only') as HTMLStyleElement|null;
 if(!style){style=document.createElement('style');style.id='argus-react-editor-only';style.textContent='#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}';panel.shadowRoot.appendChild(style)}
}
function mount(panel:Panel){
 removeLegacyEditor(panel);
 const grid=panel.shadowRoot?.getElementById('widget-grid');
 const dashboardId=panel._dashboard?.entry_id||panel._dashboard?.entries?.[0]?.entry_id;
 if(!grid||!dashboardId||panel._argusReactRoot)return;
 let style=panel.shadowRoot.getElementById('argus-react-dashboard-style') as HTMLStyleElement|null;
 if(!style){style=document.createElement('style');style.id='argus-react-dashboard-style';style.textContent=gridCss+resizeCss+localCss;panel.shadowRoot.appendChild(style)}
 if(!panel.shadowRoot.getElementById('argus-access-scroll-fix')){const accessStyle=document.createElement('style');accessStyle.id='argus-access-scroll-fix';accessStyle.textContent=`.argus-widget__content--access{display:flex;min-height:0;overflow:hidden}.argus-widget__content--access>#w-access{display:flex!important;flex-direction:column!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;overflow:hidden!important}.argus-widget__content--access>#w-access>.panel-head{flex:0 0 auto!important}.argus-widget__content--access>#w-access>#access-workspace{display:block!important;flex:1 1 auto!important;min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;-webkit-overflow-scrolling:touch!important;touch-action:pan-y!important;padding-right:4px}`;panel.shadowRoot.appendChild(accessStyle)}
 const nodes=new Map<string,HTMLElement>();widgets.forEach(w=>{const node=panel.shadowRoot.getElementById(w.nativeId);if(node)nodes.set(w.id,node)});
 const rootNode=document.createElement('div');rootNode.id='argus-react-dashboard-root';grid.appendChild(rootNode);
 const root=createRoot(rootNode);panel._argusReactRoot=root;
 root.render(<ArgusDashboard widgets={widgets} nodes={nodes} storage={new PanelDashboardStorage(panel)} userId={panel._currentProfile?.id||panel._hass?.user?.id||'anonymous'} dashboardId={dashboardId} onEditing={value=>{panel._widgetEditing=value;grid.classList.toggle('editing',value)}} registerEditor={setter=>{panel._argusReactSetEditing=setter}}/>);
}
export function applyReactDashboardLayout(C:CustomElementConstructor|undefined){
 if(!C||(C as any).__argusReactDashboard)return;(C as any).__argusReactDashboard=true;
 const p=(C as any).prototype,connected=p.connectedCallback,load=p._load;
 p.connectedCallback=function(){const result=connected?.call(this);removeLegacyEditor(this);return result};
 p._load=async function(){const result=await load?.call(this);mount(this);return result};
 p._toggleWidgetEditing=function(){this._argusReactSetEditing?.(!this._widgetEditing)};
}
