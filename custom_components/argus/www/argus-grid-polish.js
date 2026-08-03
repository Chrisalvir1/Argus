function installGridPolish(panel){if(panel.shadowRoot?.getElementById('argus-grid-polish-style'))return;const style=document.createElement('style');style.id='argus-grid-polish-style';style.textContent=`
#widget-grid.grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;grid-auto-flow:dense!important;grid-auto-rows:clamp(150px,18vw,220px)!important;align-items:stretch!important;gap:clamp(10px,1.5vw,20px)!important}
#widget-grid>.panel:not(.dashboard-instances){min-width:0!important;min-height:0!important;height:auto!important;overflow:auto!important;align-self:stretch!important}
#widget-grid>.panel[data-size="S"]{grid-column:span 1!important;grid-row:span 1!important}
#widget-grid>.panel[data-size="M"]{grid-column:span 2!important;grid-row:span 1!important}
#widget-grid>.panel[data-size="L"]{grid-column:span 2!important;grid-row:span 2!important}
#widget-grid>.panel[data-size="XL"]{grid-column:span 4!important;grid-row:span 2!important}
#widget-grid>.dashboard-instances{grid-column:1/-1!important;grid-row:auto!important;height:auto!important}
#widget-grid.editing .panel.widget-hidden-preview{opacity:.48!important}
#widget-grid>.panel[data-size="S"]{padding:clamp(10px,1.2vw,16px)!important}
#widget-grid>.panel[data-size="S"] .panel-head{margin-bottom:8px!important;gap:6px!important;flex-wrap:nowrap!important}
#widget-grid>.panel[data-size="S"] h2{font-size:clamp(9px,1vw,12px)!important;line-height:1.15!important}
#widget-grid>.panel[data-size="S"] .tabs{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;gap:5px!important;overflow-x:auto!important}
#w-modes[data-size="S"] #mode-tabs{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;grid-auto-flow:column!important;gap:5px!important;overflow-x:auto!important}
#w-modes[data-size="S"] #mode-tabs>*{min-width:0!important;width:auto!important;padding:7px 4px!important}
#w-modes[data-size="S"] #mode-view{min-height:0!important;max-height:calc(100% - 58px)!important;overflow:auto!important}
@media(max-width:900px){#widget-grid.grid{grid-template-columns:repeat(4,minmax(0,1fr))!important;grid-auto-rows:clamp(130px,25vw,190px)!important;gap:10px!important}#widget-grid>.panel[data-size="S"]{grid-column:span 1!important;grid-row:span 1!important}#widget-grid>.panel[data-size="M"]{grid-column:span 2!important;grid-row:span 1!important}#widget-grid>.panel[data-size="L"]{grid-column:span 2!important;grid-row:span 2!important}#widget-grid>.panel[data-size="XL"]{grid-column:span 4!important;grid-row:span 2!important}}
@media(max-width:480px){#widget-grid.grid{grid-auto-rows:120px!important;gap:8px!important}#widget-grid>.panel[data-size="S"]{padding:8px!important}.widget-controls{padding:9px!important;gap:6px!important}.widget-size-btn{padding:5px 7px!important}}
`;panel.shadowRoot?.appendChild(style)}
export function applyGridPolish(ArgusPanel){if(!ArgusPanel||ArgusPanel.__gridPolish)return;ArgusPanel.__gridPolish=true;const proto=ArgusPanel.prototype,connected=proto.connectedCallback,init=proto._initWidgetGrid;proto.connectedCallback=function(){installGridPolish(this);return connected?.call(this)};proto._initWidgetGrid=function(){const result=init?.call(this);installGridPolish(this);return result}}
