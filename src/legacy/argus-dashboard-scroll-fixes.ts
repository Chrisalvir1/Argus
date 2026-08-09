// @ts-nocheck
function installStyles(panel){
  if(panel.shadowRoot?.getElementById('argus-dashboard-scroll-fixes'))return;
  const style=document.createElement('style');
  style.id='argus-dashboard-scroll-fixes';
  style.textContent=`
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
`;
  panel.shadowRoot?.appendChild(style);
}

export function applyDashboardScrollFixes(ArgusPanel){
  if(!ArgusPanel||ArgusPanel.__argusDashboardScrollFixes)return;
  ArgusPanel.__argusDashboardScrollFixes=true;
  const proto=ArgusPanel.prototype;
  const connected=proto.connectedCallback;
  const load=proto._load;
  const render=proto._renderEntries;
  proto.connectedCallback=function(){installStyles(this);return connected?.call(this)};
  proto._load=async function(){const result=await load?.call(this);installStyles(this);return result};
  proto._renderEntries=function(){const result=render?.call(this);installStyles(this);return result};
}
