import React from 'react';
import {createRoot,type Root} from 'react-dom/client';
import gridCss from 'react-grid-layout/css/styles.css?inline';
import resizeCss from 'react-resizable/css/styles.css?inline';
import localCss from './style.css?inline';
import {ArgusDashboard} from './ArgusDashboard';
import {LocalStorageDashboardLayoutStorage,defaultLayouts,hasLayoutCollisions,mergeLayouts,migrateToV5,v3ToLegacyLayouts} from './layout';
import type {ArgusWidgetDefinition,Layouts,StoredDashboardLayoutV3,StoredDashboardLayoutV4,StoredDashboardLayoutV5} from './types';
import { mountSecurityConsole } from './components';
import { ArgusEngine } from '../../engine';
import type { HomeAssistant } from '../../core/home-assistant';
import { injectDisplayStyles } from '../premium';

if (typeof window !== 'undefined') {
  (window as any).mountSecurityConsole = mountSecurityConsole;
}

type Panel=HTMLElement&{
 shadowRoot:ShadowRoot;_currentProfile?:{id?:string;role?:string};_hass?:HomeAssistant;
 _dashboard?:{entry_id?:string;entries?:Array<{entry_id?:string}>};_ui?:{dashboard?:Record<string,unknown>};
 _argusDashboardStorage?:PanelDashboardStorage;_argusEngine?:ArgusEngine;_argusZonesLoaded?:string;_widgetEditing?:boolean;_argusReactRoot?:Root;_argusReactSetEditing?:(v:boolean)=>void;
 _argusWidgetNodes?:Map<string,HTMLElement>;
 _send?:(type:string,payload:Record<string,unknown>)=>Promise<any>;
 _t?:(key:string)=>string;
};

function buildWidgetDefs(panel: Panel): ArgusWidgetDefinition[] {
  const t = (k: string) => (panel as any)._t?.(k) || k;
  return [
    {id:'activity-history',nativeId:'w-activity',kind:'activity-history',title:t('activity_log') || 'Historial de actividad',size:'M',visible:true,t},
    {id:'automations',nativeId:'w-automations',kind:'automations',title:t('automations') || 'Automatizaciones',size:'M',visible:true,t},
    {id:'backup-restore',nativeId:'w-backup',kind:'backup-restore',title:t('backup_title') || 'Respaldo y restauración',size:'M',visible:true,t},
    {id:'access-control',nativeId:'w-access',kind:'access-control',title:t('users_title') || 'Control de acceso y usuarios',size:'L',visible:true,t},
    {id:'alarm-configuration',nativeId:'w-modes',kind:'alarm-configuration',title:t('modes_sos') || 'Modos / SOS',size:'XL',visible:true,t},
    {id:'security-status',nativeId:'w-github',kind:'security-status',title:t('support_title') || 'Estado y soporte',size:'S',visible:true,t},
  ];
}

class PanelDashboardStorage extends LocalStorageDashboardLayoutStorage{
 private writes:Promise<void>=Promise.resolve();
 private desired:{layouts:Layouts;visibility:Record<string,boolean>}|null=null;
 constructor(private panel:Panel){super()}
 private v5(){return (this.panel._ui?.dashboard?.react_layout_v5||null) as StoredDashboardLayoutV5|null}
 private v4(){return (this.panel._ui?.dashboard?.react_layout_v4||null) as StoredDashboardLayoutV4|null}
 private v3(){return (this.panel._ui?.dashboard?.react_layout_v3||null) as StoredDashboardLayoutV3|null}
 private async persist(u:string,d:string,patch:{layouts?:Layouts;visibility?:Record<string,boolean>}){
  const current=this.desired||{
   layouts:this.v4()?.layouts||mergeLayouts(this.v3()?v3ToLegacyLayouts(this.v3()!):null),
   visibility:this.v4()?.visibility||this.v3()?.visibility||{},
  };
  this.desired={layouts:patch.layouts||current.layouts,visibility:patch.visibility||current.visibility};
  const write=this.writes.then(async()=>{
   const current=this.v5();
   const {layouts,visibility}=this.desired!;
   const snapshot=migrateToV5({layoutVersion:5,layouts,visibility,revision:Number(current?.revision||0)+1},visibility);
   const dashboard={...(this.panel._ui?.dashboard||{}),react_layout_v5:snapshot};
   const entry_id=this.panel._dashboard?.entry_id||this.panel._dashboard?.entries?.[0]?.entry_id;
   if(this.panel._send){
    const response=await this.panel._send('argus/save_ui',{dashboard:{react_layout_v5:snapshot},...(entry_id?{entry_id}:{})});
    this.panel._ui=this.panel._ui||{};this.panel._ui.dashboard=response.ui?.dashboard||dashboard;
   }
   await super.save(u,d,layouts,visibility);
  });
  this.writes=write.catch(()=>{});
  return write;
 }
 async load(u:string,d:string){
  const current=this.v5();
  if(current?.layoutVersion===5&&current.layouts){const layouts=mergeLayouts(current.layouts);if(hasLayoutCollisions(current.layouts))await this.persist(u,d,{layouts,visibility:current.visibility||{}});return layouts}
  const remote=this.v4();
  if(remote?.layoutVersion===4&&remote.layouts){const migrated=migrateToV5(remote,remote.visibility);const layouts=mergeLayouts(migrated.layouts);await this.persist(u,d,{layouts,visibility:migrated.visibility});return layouts}
  const oldRemote=this.v3();
  if(oldRemote?.layoutVersion===3&&oldRemote.layouts){
   const migrated=migrateToV5({layoutVersion:3,layouts:v3ToLegacyLayouts(oldRemote),visibility:oldRemote.visibility,revision:oldRemote.revision},oldRemote.visibility);
   const layouts=mergeLayouts(migrated.layouts);await this.persist(u,d,{layouts,visibility:migrated.visibility});return layouts;
  }
  const legacy=await super.load(u,d);
  if(legacy){const storedVisibility=await super.loadVisibility(u,d)||{};const migrated=migrateToV5({layoutVersion:5,layouts:legacy,visibility:storedVisibility},storedVisibility);const layouts=mergeLayouts(migrated.layouts);await this.persist(u,d,{layouts,visibility:migrated.visibility});return layouts}
  return null;
 }
 async save(u:string,d:string,layouts:Layouts,visibility?:Record<string,boolean>){
  const currentVisibility=visibility||this.v5()?.visibility||this.v4()?.visibility||this.v3()?.visibility||await super.loadVisibility(u,d)||{};
  await this.persist(u,d,{layouts,visibility:currentVisibility});
 }
 async loadVisibility(u:string,d:string){return this.v5()?.visibility||this.v4()?.visibility||this.v3()?.visibility||await super.loadVisibility(u,d)}
 async saveVisibility(u:string,d:string,visibility:Record<string,boolean>){
  const layouts=this.desired?.layouts||this.v5()?.layouts||(this.v4()?.layouts?migrateToV5(this.v4()).layouts:mergeLayouts(this.v3()?v3ToLegacyLayouts(this.v3()!):await super.load(u,d)));
  await this.persist(u,d,{layouts,visibility});
 }
 async reset(u:string,d:string){
  await super.reset(u,d);
  await this.persist(u,d,{layouts:mergeLayouts(defaultLayouts),visibility:{}});
 }
}

function removeLegacyEditor(panel:Panel){
 const label=panel.shadowRoot?.getElementById('edit-widgets-label');
 (label?.closest('button')||label)?.remove();
 panel.shadowRoot?.querySelectorAll('.panel-edit-overlay,.widget-drag-handle').forEach(node=>node.remove());
 let style=panel.shadowRoot?.getElementById('argus-react-editor-only') as HTMLStyleElement|null;
 if(!style){style=document.createElement('style');style.id='argus-react-editor-only';style.textContent='#edit-widgets-label,.panel-edit-overlay,.widget-drag-handle{display:none!important}';panel.shadowRoot.appendChild(style)}
}

function renderDashboard(panel: Panel) {
  injectDisplayStyles(panel);
  removeLegacyEditor(panel);
  const grid = panel.shadowRoot?.getElementById('widget-grid');
  const dashboardId = panel._dashboard?.entry_id || panel._dashboard?.entries?.[0]?.entry_id || 'default';
  if (!grid) return;

  if (panel._hass?.callWS && panel._hass.states) {
    if (!panel._argusEngine) panel._argusEngine = new ArgusEngine(panel._hass as any);
    else panel._argusEngine.refresh(panel._hass.states as any);
    const entryId = panel._dashboard?.entry_id || panel._dashboard?.entries?.[0]?.entry_id;
    if (panel._argusZonesLoaded !== (entryId || 'default')) {
      panel._argusZonesLoaded = entryId || 'default';
      void panel._argusEngine.loadZones(entryId).catch(error => {
        panel._argusZonesLoaded = undefined;
        console.warn('[Argus] No se pudieron cargar las zonas', error);
      });
    }
  }

  const activeWidgets = buildWidgetDefs(panel);
  const storage = panel._argusDashboardStorage ||= new PanelDashboardStorage(panel);
  const nodes = panel._argusWidgetNodes ||= new Map<string, HTMLElement>();
  activeWidgets.forEach(w => {
    if (!nodes.has(w.id)) {
      const node = w.nativeId ? panel.shadowRoot.getElementById(w.nativeId) : null;
      if (node) nodes.set(w.id, node);
    }
  });

  const mount = panel.shadowRoot?.getElementById('argus-dashboard-root-v3') || (() => {
    const root = document.createElement('div');
    root.id = 'argus-dashboard-root-v3';
    root.setAttribute('data-argus-layout-owner', 'react-v3');
    panel.shadowRoot.appendChild(root);
    return root;
  })();

  if (panel._argusReactRoot) {
    panel._argusReactRoot.render(
      <ArgusDashboard
        widgets={activeWidgets}
        nodes={nodes}
        storage={storage}
        userId={panel._currentProfile?.id || panel._hass?.user?.id || 'anonymous'}
        dashboardId={dashboardId}
        onEditing={value => { panel._widgetEditing = value; mount.classList.toggle('editing', value); }}
        registerEditor={setter => { panel._argusReactSetEditing = setter; }}
      />
    );
    return;
  }

  let style = panel.shadowRoot.getElementById('argus-react-dashboard-style') as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement('style');
    style.id = 'argus-react-dashboard-style';
    style.textContent = gridCss + resizeCss + localCss + '#argus-dashboard-root-v3{display:block;width:100%;min-width:0;contain:layout style;}#argus-dashboard-root-v3>.argus-dashboard{width:100%;min-width:0;}';
    panel.shadowRoot.appendChild(style);
  }
  const rootNode = mount;

  const root = createRoot(rootNode);
  panel._argusReactRoot = root;
  root.render(
    <ArgusDashboard
      widgets={activeWidgets}
      nodes={nodes}
      storage={storage}
      userId={panel._currentProfile?.id || panel._hass?.user?.id || 'anonymous'}
      dashboardId={dashboardId}
      onEditing={value => { panel._widgetEditing = value; mount.classList.toggle('editing', value); }}
      registerEditor={setter => { panel._argusReactSetEditing = setter; }}
    />
  );
}

export function applyReactDashboardLayout(C:CustomElementConstructor|undefined){
 if(!C||(C as any).__argusReactDashboard)return;(C as any).__argusReactDashboard=true;
 const p=(C as any).prototype,connected=p.connectedCallback,load=p._load,refresh=p._refreshLocalizedUi;
 p.connectedCallback=function(){const result=connected?.call(this);removeLegacyEditor(this);return result};
 p._load=async function(){const result=await load?.call(this);renderDashboard(this);return result};
 p._refreshLocalizedUi=function(){const result=refresh?.call(this);renderDashboard(this);return result};
 p._toggleWidgetEditing=function(){this._argusReactSetEditing?.(!this._widgetEditing)};
}
