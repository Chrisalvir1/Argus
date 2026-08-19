import React,{useEffect,useLayoutEffect,useMemo,useRef,useState}from'react';
import { ErrorBoundary } from './ErrorBoundary';
import{Responsive,WidthProvider,type Layout,type Layouts}from'react-grid-layout';


import type{ArgusBreakpoint,ArgusWidgetDefinition,ArgusWidgetSize,DashboardLayoutStorage}from'./types';
import{BREAKPOINTS,COLS,clampSizeForBreakpoint,defaultLayouts,firstFreePosition,getClosestWidgetSize,hasCollision,mergeLayouts,snapLayoutItemToSize}from'./layout';
const ResponsiveGridLayout=WidthProvider(Responsive);type EditorSetter=(value:boolean)=>void;
interface HostProps{widget:ArgusWidgetDefinition;node:HTMLElement;editing:boolean;size:ArgusWidgetSize;onSize:(size:ArgusWidgetSize)=>void;onHide:()=>void;onReset:()=>void}
function Host({widget,node,editing,size,onSize,onHide,onReset}:HostProps){const ref=useRef<HTMLDivElement>(null);useLayoutEffect(()=>{ref.current?.appendChild(node);node.draggable=false;node.querySelector(':scope > .panel-edit-overlay')?.remove();if(editing)node.setAttribute('inert','');else node.removeAttribute('inert')},[node,editing]);const getT=(k:string,f:string)=>{if(typeof(window as any)._argusT==='function'){const v=(window as any)._argusT(k);if(v&&v!==k)return v}return f};return <article className="argus-widget"><header className="argus-widget__edit-header"><button type="button" className="argus-widget__drag-handle" aria-label={`${getT('drag','Mover')} ${widget.title}`} title={getT('drag','Arrastrar para mover')}>⋮⋮</button><strong>{widget.title}</strong><details className="argus-widget__options"><summary aria-label={`${getT('settings','Opciones')} ${widget.title}`} title={getT('settings','Opciones')}>•••</summary><div className="argus-widget__menu"><span>{getT('size','Tamaño')}</span><div>{(['S','M','L','XL']as ArgusWidgetSize[]).map(value=><button type="button" className={value===size?'active':''} onClick={()=>onSize(value)} key={value}>{value}</button>)}</div><button type="button" onClick={onReset}>{getT('reset_widget','Restablecer widget')}</button><button type="button" onClick={onHide}>{getT('hide_widget','Ocultar widget')}</button></div></details></header><div className={`argus-widget__content${widget.kind==='access-control'?' argus-widget__content--access':''}`} ref={ref}/></article>}
export function ArgusDashboard({widgets,nodes,storage,userId,dashboardId,onEditing,registerEditor}:{widgets:ArgusWidgetDefinition[];nodes:Map<string,HTMLElement>;storage:DashboardLayoutStorage;userId:string;dashboardId:string;onEditing:(v:boolean)=>void;registerEditor:(setter:EditorSetter)=>void}){
 const defaults=useMemo(()=>Object.fromEntries(widgets.map(w=>[w.id,w.visible])),[widgets]);
 const[layouts,setLayouts]=useState<Layouts>(defaultLayouts),[visibility,setVisibility]=useState<Record<string,boolean>>(defaults),[editing,setEditing]=useState(false),[hydrated,setHydrated]=useState(false),[bp,setBp]=useState<ArgusBreakpoint>('lg'),[message,setMessage]=useState(''),[,setLangTick]=useState(0);
 const lastValid=useRef<Layouts>(defaultLayouts),timer=useRef<number|undefined>(undefined),wasEditing=useRef(false),containerRef=useRef<HTMLElement>(null);
 const getT=(k:string,f:string)=>{if(typeof(window as any)._argusT==='function'){const v=(window as any)._argusT(k);if(v&&v!==k)return v}return f};
 useEffect(()=>{const onLang=()=>setLangTick(t=>t+1);window.addEventListener('argus-lang-changed',onLang);return()=>window.removeEventListener('argus-lang-changed',onLang)},[]);
 useEffect(()=>{registerEditor(setEditing)},[registerEditor]);
 useEffect(()=>{let active=true;setHydrated(false);Promise.all([storage.load(userId,dashboardId),storage.loadVisibility?.(userId,dashboardId)]).then(([value,storedVisibility])=>{if(!active)return;const merged=mergeLayouts(value);setLayouts(merged);lastValid.current=merged;if(storedVisibility)setVisibility({...defaults,...storedVisibility});setHydrated(true)});return()=>{active=false}},[storage,userId,dashboardId,defaults]);
 useEffect(()=>{onEditing(editing);if(hydrated&&wasEditing.current&&!editing)storage.save(userId,dashboardId,lastValid.current);wasEditing.current=editing},[editing,hydrated,onEditing,storage,userId,dashboardId]);
 useEffect(()=>{const key=(event:KeyboardEvent)=>{if(!editing)return;if(event.key==='Escape'){setEditing(false);setMessage(getT('edit_dashboard_done','Edición finalizada'))}else if(event.key==='Enter'&&event.target===document.body)setEditing(false)};window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key)},[editing]);
 useEffect(()=>{
  if(typeof ResizeObserver==='undefined'||!containerRef.current)return;
  let raf=0;
  const ro=new ResizeObserver(()=>{
   cancelAnimationFrame(raf);
   raf=requestAnimationFrame(()=>{
    try{window.dispatchEvent(new Event('resize'));}catch(_){}
   });
  });
  ro.observe(containerRef.current);
  return()=>{cancelAnimationFrame(raf);ro.disconnect();};
 },[]);
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 const save=(next:Layouts,now=false)=>{setLayouts(next);lastValid.current=next;clearTimeout(timer.current);timer.current=window.setTimeout(()=>storage.save(userId,dashboardId,next),now?0:550)};
 const setVisible=(id:string,value:boolean)=>{const next={...visibility,[id]:value};setVisibility(next);storage.saveVisibility?.(userId,dashboardId,next);setMessage(value?getT('widget_visible','Widget visible'):getT('hide_widget','Widget oculto'))};
 const replaceItem=(id:string,nextItem:Layout,label:string)=>{const base=lastValid.current,current=base[bp]||[],others=current.filter(x=>x.i!==id),safe=hasCollision(others,nextItem)?firstFreePosition(others,nextItem,COLS[bp]):nextItem;const next={...base,[bp]:current.map(x=>x.i===id?safe:x)};save(next,true);setMessage(label)};
 const chooseSize=(id:string,size:ArgusWidgetSize)=>{const current=(lastValid.current[bp]||[]).find(x=>x.i===id);if(!current)return;const d=clampSizeForBreakpoint(size,COLS[bp]);replaceItem(id,{...current,...d,x:Math.max(0,Math.min(current.x,COLS[bp]-d.w))},`${getT('size','Tamaño')} ${size}`)};
 const resetWidget=(id:string)=>{const base=(defaultLayouts[bp]||[]).find(x=>x.i===id);if(base)replaceItem(id,{...base},getT('reset_widget','Widget restablecido'))};
 const resize=(_layout:Layout[],_old:Layout,value:Layout)=>{const snapped=snapLayoutItemToSize(value,COLS[bp]);replaceItem(value.i,snapped,`${getT('size','Tamaño')} ${getClosestWidgetSize(snapped.w,snapped.h,COLS[bp])}`)};
 const reset=async()=>{if(!confirm(getT('reset_dashboard_confirm','¿Restablecer únicamente posiciones, tamaños y visibilidad del tablero?')))return;await storage.reset(userId,dashboardId);const clean=mergeLayouts(null);setVisibility(defaults);save(clean,true);setMessage(getT('reset_dashboard_done','Diseño predeterminado restaurado'))};

 const currentLayout=layouts[bp]||[];
 if(!hydrated)return <section className="argus-dashboard" ref={containerRef}><div className="argus-dashboard__feedback" aria-live="polite">{getT('loading_dashboard','Cargando tablero…')}</div></section>;
 return <section className={`argus-dashboard ${editing?'argus-dashboard--editing':''}`} ref={containerRef}>
  <nav className="argus-dashboard__toolbar" aria-label={getT('edit_dashboard','Edición del tablero')}>
   <button type="button" onClick={()=>setEditing(v=>!v)}>{editing?('✓ '+getT('edit_dashboard_done','Listo')):('❖ '+getT('edit_dashboard','Editar tablero'))}</button>
   {editing&&<>
    <button type="button" onClick={reset}>{getT('reset_dashboard','Restablecer diseño')}</button>
    <div className="argus-dashboard__visibility" aria-label={getT('hide_widget','Widgets ocultos')}>
     {widgets.filter(w=>visibility[w.id]===false).map(w=><button type="button" key={w.id} onClick={()=>setVisible(w.id,true)}>Mostrar {w.title}</button>)}
    </div>
   </>}
  </nav>
  <div className="argus-dashboard__feedback" aria-live="polite">{editing ? message : ''}</div>
  <ErrorBoundary>
   <ResponsiveGridLayout className="argus-dashboard-grid" layouts={layouts} breakpoints={BREAKPOINTS} cols={COLS} rowHeight={92} margin={[16,16]} containerPadding={[16,16]} compactType={null} preventCollision={true} allowOverlap={false} isBounded={true} isDraggable={editing} isResizable={editing} draggableHandle=".argus-widget__drag-handle" resizeHandles={['se']} onBreakpointChange={value=>setBp(value as ArgusBreakpoint)} onLayoutChange={(_,all)=>{if(editing){setLayouts(all);lastValid.current=all}}} onResizeStop={resize} onDragStop={(_,__,value)=>{const others=(lastValid.current[bp]||[]).filter(x=>x.i!==value.i);if(hasCollision(others,value)){setLayouts({...lastValid.current});setMessage(getT('position_collision','Posición bloqueada por colisión'));return}replaceItem(value.i,value,getT('position_saved','Posición guardada'))}} useCSSTransforms={true}>
    {widgets.filter(w=>visibility[w.id]!==false&&nodes.has(w.id)).map(w=>{const item=currentLayout.find(x=>x.i===w.id);const size=item?getClosestWidgetSize(item.w,item.h,COLS[bp]):w.size;return <div key={w.id}><ErrorBoundary><Host widget={w} node={nodes.get(w.id)!} editing={editing} size={size} onSize={value=>chooseSize(w.id,value)} onHide={()=>setVisible(w.id,false)} onReset={()=>resetWidget(w.id)}/></ErrorBoundary></div>})}
   </ResponsiveGridLayout>
  </ErrorBoundary>
 </section>;
}
export default ArgusDashboard;
