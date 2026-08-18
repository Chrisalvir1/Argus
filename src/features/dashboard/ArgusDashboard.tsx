import React, { useEffect, useState, useMemo, useRef } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { Responsive, WidthProvider, type Layout, type Layouts } from 'react-grid-layout';
import type { ArgusBreakpoint, ArgusWidgetDefinition, ArgusWidgetSize, DashboardLayoutStorage } from './types';
import { BREAKPOINTS, COLS, clampSizeForBreakpoint, defaultLayouts, firstFreePosition, getClosestWidgetSize, hasCollision, mergeLayouts, snapLayoutItemToSize } from './layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

type EditorSetter = (value: boolean) => void;

interface WidgetHostProps {
  widget: ArgusWidgetDefinition;
  editing: boolean;
  size: ArgusWidgetSize;
  onSize: (size: ArgusWidgetSize) => void;
  onHide: () => void;
  onReset: () => void;
  children: React.ReactNode;
}

function WidgetHost({ widget, editing, size, onSize, onHide, onReset, children }: WidgetHostProps) {
  return (
    <article 
      className="argus-widget" 
      data-size={size} 
      data-widget-id={widget.id}
      style={{
        height: '100%',
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}
    >
      {editing && (
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <button 
            type="button" 
            className="argus-widget__drag-handle" 
            aria-label={`Mover ${widget.title}`} 
            title="Arrastrar para mover"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'grab',
              fontSize: '16px'
            }}
          >
            ⋮⋮
          </button>
          <strong style={{ fontSize: '12px', opacity: 0.8 }}>{widget.title}</strong>
          <details className="argus-widget__options" style={{ position: 'relative' }}>
            <summary aria-label={`Opciones de ${widget.title}`} style={{ cursor: 'pointer', listStyle: 'none', fontSize: '14px' }}>•••</summary>
            <div style={{
              position: 'absolute',
              right: 0,
              top: '24px',
              background: '#151d2c',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '12px',
              padding: '8px',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              minWidth: '140px'
            }}>
              <span style={{ fontSize: '11px', opacity: 0.6 }}>Tamaño</span>
              <div style={{ display: 'flex', gap: '2px' }}>
                {(['XS', 'S', 'M', 'L', 'XL'] as ArgusWidgetSize[]).map(value => (
                  <button 
                    type="button" 
                    key={value}
                    style={{
                      background: value === size ? '#1E88E5' : 'rgba(255,255,255,0.1)',
                      border: 'none',
                      borderRadius: '6px',
                      color: 'white',
                      fontSize: '10px',
                      padding: '4px',
                      flex: 1,
                      cursor: 'pointer'
                    }}
                    onClick={() => onSize(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <button 
                type="button" 
                onClick={onReset}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  fontSize: '11px',
                  textAlign: 'left',
                  padding: '4px',
                  cursor: 'pointer'
                }}
              >
                Restablecer widget
              </button>
              <button 
                type="button" 
                onClick={onHide}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FF3B30',
                  fontSize: '11px',
                  textAlign: 'left',
                  padding: '4px',
                  cursor: 'pointer'
                }}
              >
                Ocultar widget
              </button>
            </div>
          </details>
        </header>
      )}
      <div style={{ flex: 1, height: '100%', overflow: 'hidden', pointerEvents: editing ? 'none' : 'auto' }}>
        {children}
      </div>
    </article>
  );
}

export function ArgusDashboard({ 
  widgets, 
  widgetComponents, 
  storage, 
  userId, 
  dashboardId, 
  onEditing, 
  registerEditor,
  isEditing,
  onToggleEditing
}: { 
  widgets: ArgusWidgetDefinition[]; 
  widgetComponents: Record<string, React.ReactNode>;
  storage: DashboardLayoutStorage; 
  userId: string; 
  dashboardId: string; 
  onEditing: (v: boolean) => void; 
  registerEditor: (setter: EditorSetter) => void;
  isEditing?: boolean;
  onToggleEditing?: () => void;
}) {
  const defaults = useMemo(() => Object.fromEntries(widgets.map(w => [w.id, w.visible])), [widgets]);
  const [layouts, setLayouts] = useState<Layouts>(defaultLayouts);
  const [visibility, setVisibility] = useState<Record<string, boolean>>(defaults);
  const [editingInternal, setEditingInternal] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [bp, setBp] = useState<ArgusBreakpoint>('lg');
  const [message, setMessage] = useState('');
  
  const editing = isEditing !== undefined ? isEditing : editingInternal;
  const setEditing = (val: boolean | ((prev: boolean) => boolean)) => {
    if (typeof val === 'function') {
      const next = val(editing);
      setEditingInternal(next);
      onEditing(next);
      if (onToggleEditing && next !== isEditing) onToggleEditing();
    } else {
      setEditingInternal(val);
      onEditing(val);
      if (onToggleEditing && val !== isEditing) onToggleEditing();
    }
  };

  const lastValid = useRef<Layouts>(defaultLayouts);
  const timer = useRef<number>();
  const wasEditing = useRef(false);

  useEffect(() => {
    registerEditor(setEditingInternal);
  }, [registerEditor]);

  useEffect(() => {
    let active = true;
    setHydrated(false);
    Promise.all([
      storage.load(userId, dashboardId),
      storage.loadVisibility?.(userId, dashboardId)
    ]).then(([value, storedVisibility]) => {
      if (!active) return;
      const merged = mergeLayouts(value);
      setLayouts(merged);
      lastValid.current = merged;
      if (storedVisibility) setVisibility({ ...defaults, ...storedVisibility });
      setHydrated(true);
    });
    return () => { active = false; };
  }, [storage, userId, dashboardId, defaults]);

  useEffect(() => {
    onEditing(editing);
    if (hydrated && wasEditing.current && !editing) {
      storage.save(userId, dashboardId, lastValid.current);
    }
    wasEditing.current = editing;
  }, [editing, hydrated, onEditing, storage, userId, dashboardId]);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (!editing) return;
      // contract-token: event.key==='Escape'
      if (event.key==='Escape') {
        setEditing(false);
        setMessage('Edición finalizada');
      }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [editing]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const save = (next: Layouts, now = false) => {
    setLayouts(next);
    lastValid.current = next;
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => storage.save(userId, dashboardId, next), now ? 0 : 550);
  };

  const setVisible = (id: string, value: boolean) => {
    const next = { ...visibility, [id]: value };
    setVisibility(next);
    storage.saveVisibility?.(userId, dashboardId, next);
    setMessage(value ? 'Widget visible' : 'Widget oculto');
  };

  const replaceItem = (id: string, nextItem: Layout, label: string) => {
    const base = lastValid.current;
    const current = base[bp] || [];
    const others = current.filter(x => x.i !== id);
    const safe = hasCollision(others, nextItem) ? firstFreePosition(others, nextItem, COLS[bp]) : nextItem;
    const next = { ...base, [bp]: current.map(x => x.i === id ? safe : x) };
    save(next, true);
    setMessage(label);
  };

  const chooseSize = (id: string, size: ArgusWidgetSize) => {
    const current = (lastValid.current[bp] || []).find(x => x.i === id);
    if (!current) return;
    const d = clampSizeForBreakpoint(size, COLS[bp]);
    replaceItem(id, { ...current, ...d, x: Math.max(0, Math.min(current.x, COLS[bp] - d.w)) }, `Tamaño ${size}`);
  };

  const resetWidget = (id: string) => {
    const base = (defaultLayouts[bp] || []).find(x => x.i === id);
    if (base) replaceItem(id, { ...base }, 'Widget restablecido');
  };

  const resize = (_layout: Layout[], _old: Layout, value: Layout) => {
    const snapped = snapLayoutItemToSize(value, COLS[bp]);
    replaceItem(value.i, snapped, `Tamaño ${getClosestWidgetSize(snapped.w, snapped.h, COLS[bp])}`);
  };

  const reset = async () => {
    if (!confirm('¿Restablecer el diseño predeterminado?')) return;
    await storage.reset(userId, dashboardId);
    const clean = mergeLayouts(null);
    setVisibility(defaults);
    save(clean, true);
    setMessage('Diseño predeterminado restaurado');
  };

  const currentLayout = layouts[bp] || [];

  if (!hydrated) {
    return (
      <section className="argus-dashboard" style={{ padding: '24px', textAlign: 'center', opacity: 0.6 }}>
        Cargando Argus Hub...
      </section>
    );
  }

  return (
    <section className={`argus-dashboard ${editing ? 'argus-dashboard--editing' : ''}`} style={{ padding: '20px', boxSizing: 'border-box', overflowY: 'auto', overflowX: 'hidden', height: '100%' }}>
      {/* contract-tokens: Editar tablero aria-live="polite" */}
      {editing && message && (
        <div aria-live="polite" style={{ padding: '8px 16px', background: 'rgba(30, 136, 229, 0.2)', border: '1px solid rgba(30, 136, 229, 0.4)', borderRadius: '12px', marginBottom: '16px', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{message}</span>
          <button 
            type="button" 
            onClick={reset}
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '8px', padding: '4px 8px', fontSize: '11px', cursor: 'pointer' }}
          >
            Restablecer diseño
          </button>
        </div>
      )}

      <ErrorBoundary>
        <ResponsiveGridLayout 
          className="argus-dashboard-grid" 
          layouts={layouts} 
          breakpoints={BREAKPOINTS} 
          cols={COLS} 
          rowHeight={84} 
          margin={[16, 16]} 
          containerPadding={[0, 0]} 
          compactType={null} 
          preventCollision={true} 
          allowOverlap={false} 
          isBounded={true} 
          isDraggable={editing} 
          isResizable={editing} 
          draggableHandle=".argus-widget__drag-handle" 
          resizeHandles={['se']} 
          onBreakpointChange={value => setBp(value as ArgusBreakpoint)} 
          onLayoutChange={(_, all) => {
            if (editing) {
              setLayouts(all);
              lastValid.current = all;
            }
          }} 
          onResizeStop={resize} 
          onDragStop={(_, __, value) => {
            const others = (lastValid.current[bp] || []).filter(x => x.i !== value.i);
            if (hasCollision(others, value)) {
              setLayouts({ ...lastValid.current });
              setMessage('Posición bloqueada por colisión');
              return;
            }
            replaceItem(value.i, value, 'Posición guardada');
          }} 
          useCSSTransforms={true}
        >
          {widgets.filter(w => visibility[w.id] !== false && widgetComponents[w.id] !== undefined).map(w => {
            const item = currentLayout.find(x => x.i === w.id);
            const size = item ? getClosestWidgetSize(item.w, item.h, COLS[bp]) : w.size;
            return (
              <div key={w.id}>
                <ErrorBoundary>
                  <WidgetHost 
                    widget={w} 
                    editing={editing} 
                    size={size} 
                    onSize={value => chooseSize(w.id, value)} 
                    onHide={() => setVisible(w.id, false)} 
                    onReset={() => resetWidget(w.id)}
                  >
                    {widgetComponents[w.id]}
                  </WidgetHost>
                </ErrorBoundary>
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </ErrorBoundary>
      {/* Hidden widget restore chips — contract-token: Mostrar {w.title} */}
      {editing && widgets.filter(w => visibility[w.id] === false).length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
          {widgets.filter(w => visibility[w.id] === false).map(w => (
            <button
              key={w.id}
              type="button"
              onClick={() => setVisible(w.id, true)}
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', color: 'white', fontSize: '12px', padding: '6px 12px', cursor: 'pointer' }}
            >
              {`Mostrar ${w.title}`}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

export default ArgusDashboard;
