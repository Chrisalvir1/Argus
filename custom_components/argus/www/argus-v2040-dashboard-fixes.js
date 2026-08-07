const DEFAULT_LAYOUT=[{id:'activity',size:'M',hidden:false},{id:'modes',size:'M',hidden:false},{id:'automations',size:'M',hidden:false},{id:'access',size:'M',hidden:false},{id:'backup',size:'S',hidden:false},{id:'github',size:'S',hidden:false}];
const VALID_SIZES=new Set(['S','M','L','XL']);
const clone=value=>JSON.parse(JSON.stringify(value));
function normalize(value){if(!Array.isArray(value))return null;const seen=new Set(),out=[];for(const item of value){const id=String(item?.id||'');if(!id||seen.has(id))continue;seen.add(id);out.push({id,size:VALID_SIZES.has(item?.size)?item.size:'M',hidden:Boolean(item?.hidden)})}for(const item of DEFAULT_LAYOUT)if(!seen.has(item.id))out.push({...item});return out.length?out:null}
function key(panel){return `argus-widgets-v3:${panel._dashboard?.entry_id||'default'}`}
function read(panel){try{return normalize(JSON.parse(localStorage.getItem(key(panel))||localStorage.getItem('argus-widgets-v2')||'null'))}catch(_){return null}}
function write(panel,layout){try{const text=JSON.stringify(layout);localStorage.setItem(key(panel),text);localStorage.setItem('argus-widgets-v2',text);localStorage.setItem('argus-widgets-v1',text)}catch(_){}}
function capture(panel){const grid=panel.shadowRoot?.getElementById('widget-grid');if(!grid)return normalize(panel._widgetConfig)||clone(DEFAULT_LAYOUT);const previous=new Map((panel._widgetConfig||[]).map(item=>[item.id,item]));return normalize([...grid.children].filter(node=>node.classList.contains('panel')&&!node.classList.contains('dashboard-instances')).map(node=>{const id=node.id.replace(/^w-/,'');const old=previous.get(id)||{};return{id,size:VALID_SIZES.has(node.dataset.size)?node.dataset.size:(VALID_SIZES.has(old.size)?old.size:'M'),hidden:Boolean(old.hidden)||node.classList.contains('widget-hidden-preview')||node.style.display==='none'}}))||clone(DEFAULT_LAYOUT)}
function apply(panel,layout){panel._widgetConfig=clone(layout);panel._widgetConfigLoaded=true;panel._renderWidgetLayout?.()}
function installStyles(panel){if(panel.shadowRoot?.getElementById('argus-v2040-dashboard-fixes'))return;const style=document.createElement('style');style.id='argus-v2040-dashboard-fixes';style.textContent=`
#w-modes,#w-access{display:flex!important;flex-direction:column!important;min-height:0!important;overflow:hidden!important}
#w-modes .panel-head,#w-access .panel-head{flex:0 0 auto!important}
#w-modes #mode-tabs,#w-access .tabs{flex:0 0 auto!important;overflow-x:auto!important;overflow-y:hidden!important;scrollbar-width:thin!important}
#w-modes #mode-view,#w-modes .mode-view,#w-modes .mode-config,#w-modes .mode-content,
#w-access #access-view,#w-access .access-view,#w-access .access-content,#w-access .users-list,#w-access .user-list,#w-access .users-grid,#w-access .access-list{
 flex:1 1 auto!important;min-height:0!important;max-height:none!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important;-webkit-overflow-scrolling:touch!important
}
#w-modes #mode-view::-webkit-scrollbar,#w-access #access-view::-webkit-scrollbar,#w-access .access-content::-webkit-scrollbar,#w-access .users-list::-webkit-scrollbar,#w-access .user-list::-webkit-scrollbar{width:7px}
#w-modes #mode-view::-webkit-scrollbar-thumb,#w-access #access-view::-webkit-scrollbar-thumb,#w-access .access-content::-webkit-scrollbar-thumb,#w-access .users-list::-webkit-scrollbar-thumb,#w-access .user-list::-webkit-scrollbar-thumb{background:rgba(255,255,255,.28);border-radius:999px}
@media(max-width:760px){#w-modes,#w-access{min-height:420px!important;max-height:70dvh!important}#w-modes #mode-view,#w-access #access-view,#w-access .access-content{padding-bottom:28px!important}}
`;panel.shadowRoot?.appendChild(style)}
export function applyV2040DashboardFixes(ArgusPanel){if(!ArgusPanel||ArgusPanel.__argusV2040DashboardFixes)return;ArgusPanel.__argusV2040DashboardFixes=true;const proto=ArgusPanel.prototype,connected=proto.connectedCallback,load=proto._load,init=proto._initWidgetGrid,save=proto._saveWidgetLayout,render=proto._renderEntries;
proto.connectedCallback=function(){installStyles(this);return connected?.call(this)};
proto._initWidgetGrid=function(){const local=read(this);if(local){this._ui=this._ui||{};this._ui.dashboard={...(this._ui.dashboard||{}),widget_layout:clone(local)}}const result=init?.call(this);if(local)apply(this,local);return result};
proto._load=async function(){const result=await load?.call(this);installStyles(this);const local=read(this);if(local)apply(this,local);return result};
proto._renderEntries=function(){const result=render?.call(this);installStyles(this);return result};
proto._saveWidgetLayout=function(){const result=save?.call(this);const layout=capture(this);apply(this,layout);write(this,layout);this._ui=this._ui||{};const dashboard={...(this._ui.dashboard||{}),widget_layout:clone(layout)};this._ui.dashboard=dashboard;const payload={dashboard};if(this._dashboard?.entry_id)payload.entry_id=this._dashboard.entry_id;this._v2040SaveChain=(this._v2040SaveChain||Promise.resolve()).catch(()=>{}).then(()=>this._send('argus/save_ui',payload)).catch(error=>console.error('Argus layout server save failed; local copy retained',error));return result};
}
