import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useWidgetGesture } from './useWidgetGesture';
import { ErrorBoundary } from './ErrorBoundary';
import { Responsive, WidthProvider } from 'react-grid-layout/legacy';
import type { ArgusBreakpoint, ArgusWidgetDefinition, DashboardLayoutStorage, Layout, Layouts } from './types';
import { BREAKPOINTS, COLS, GRID_MARGIN, GRID_MAX_ROWS, GRID_PADDING, GRID_ROW_HEIGHT, defaultLayouts, mergeLayouts, placeWidget, replaceBreakpointLayout, widgetSizeOptions } from './layout';

const ResponsiveGridLayout = WidthProvider(Responsive);
type EditorSetter = (value: boolean) => void;

const PORTRAIT_PANEL_SURFACE = [
  ['background', 'transparent'],
  ['background-color', 'transparent'],
  ['border', '0'],
  ['box-shadow', 'none'],
  ['backdrop-filter', 'none'],
  ['-webkit-backdrop-filter', 'none'],
  ['filter', 'none'],
  ['transition', 'none'],
  ['transform', 'none'],
  ['mix-blend-mode', 'normal'],
] as const;

function syncPortraitPanelSurface(panel: HTMLElement, portrait: boolean) {
  for (const [property, value] of PORTRAIT_PANEL_SURFACE) {
    if (portrait) panel.style.setProperty(property, value, 'important');
    else panel.style.removeProperty(property);
  }
}

interface HostProps {
  widget: ArgusWidgetDefinition;
  node?: HTMLElement;
  editing: boolean;
  onHide: () => void;
  onReset: () => void;
  sizes: ReturnType<typeof widgetSizeOptions>;
  onSize: (size: { w: number; h: number }) => void;
  resizable: boolean;
  gestureStyle?: React.CSSProperties;
}

function Host({ widget, node, editing, onHide, onReset, sizes, onSize, resizable, gestureStyle }: HostProps) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!node) return;
    ref.current?.appendChild(node);
    node.draggable = false;
    node.querySelector(':scope > .panel-edit-overlay')?.remove();

    // CSS-injected rules can lose the WebKit backdrop-filter cascade to the
    // legacy `.glass.liquid-glass` rule. Set the portrait surface directly on
    // the native panel so it cannot composite a second glass layer above the
    // React widget. The saved grid/layout state is untouched.
    const media = window.matchMedia('(max-width: 760px) and (orientation: portrait)');
    const applySurface = () => syncPortraitPanelSurface(node, media.matches);
    applySurface();
    media.addEventListener('change', applySurface);
    return () => {
      media.removeEventListener('change', applySurface);
      syncPortraitPanelSurface(node, false);
    };
  }, [node]);

  const getT = (k: string, f: string) => {
    if (widget.t) {
      const v = widget.t(k);
      if (v && v !== k) return v;
    }
    return f;
  };

  const sizeLabels = {
    compact: getT('widget_size_compact', 'Compacto'),
    medium: getT('widget_size_medium', 'Mediano'),
    large: getT('widget_size_large', 'Amplio'),
  };
  return (
    <article className="argus-widget" data-widget-kind={widget.kind} data-widget-id={widget.id} style={gestureStyle}>
      <header
        className="argus-widget__edit-header argus-widget__drag-handle"
        aria-label={`${getT('drag', 'Mover')} ${widget.title}`}
        title={getT('drag', 'Arrastra desde aquí para mover')}
      >
        <span className="argus-widget__grip" aria-hidden="true">⠿</span>
        <strong>{widget.title}</strong>
        <details className="argus-widget__options">
          <summary aria-label={`${getT('settings', 'Opciones')} ${widget.title}`} title={getT('settings', 'Opciones')}>
            •••
          </summary>
          <div className="argus-widget__menu">
            {sizes.length > 1 && (
              <div className="argus-widget__sizes" role="group" aria-label={getT('size', 'Tamaño')}>
                {sizes.map(size => (
                  <button type="button" key={size.size} onClick={event => {
                    onSize(size);
                    const menu = event.currentTarget.closest('details');
                    if (menu) {
                      menu.open = false;
                      menu.querySelector('summary')?.focus();
                    }
                  }}>
                    {sizeLabels[size.size]}
                  </button>
                ))}
              </div>
            )}
            <button type="button" onClick={onReset}>{getT('reset_widget', 'Restablecer widget')}</button>
            <button type="button" onClick={onHide}>{getT('hide_widget', 'Ocultar widget')}</button>
          </div>
        </details>
      </header>
      <div className={`argus-widget__content${widget.kind === 'access-control' ? ' argus-widget__content--access' : ''}${widget.content ? ' argus-widget__content--virtual' : ''}`} ref={ref} inert={editing}>{widget.content}</div>
      {editing && resizable && (
        <span className="argus-widget__resize-handle" aria-hidden="true" />
      )}
    </article>
  );
}

export function ArgusDashboard({
  widgets,
  nodes,
  storage,
  userId,
  dashboardId,
  onEditing,
  registerEditor,
}: {
  widgets: ArgusWidgetDefinition[];
  nodes: Map<string, HTMLElement>;
  storage: DashboardLayoutStorage;
  userId: string;
  dashboardId: string;
  onEditing: (v: boolean) => void;
  registerEditor: (setter: EditorSetter) => void;
}) {
  const defaultsKey = widgets.map(w => `${w.id}:${w.visible}`).join('|');
  const defaults = useMemo(() => Object.fromEntries(widgets.map(w => [w.id, w.visible])), [defaultsKey]);
  const [layouts, setLayouts] = useState<Layouts>(defaultLayouts);
  const [visibility, setVisibility] = useState<Record<string, boolean>>(defaults);
  const [editing, setEditing] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  // Home Assistant's drawer changes the panel/container width without changing
  // the browser's form factor. Choose the persisted layout profile from the
  // viewport so opening/closing that drawer cannot switch desktop layouts.
  const [layoutProfile, setLayoutProfile] = useState<ArgusBreakpoint>(() =>
    typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.sm ? 'xs' : 'lg',
  );
  const [message, setMessage] = useState('');
  const [, setLangTick] = useState(0);
  const [gridKey, setGridKey] = useState(0);

  const lastValid = useRef<Layouts>(defaultLayouts);
  const containerRef = useRef<HTMLElement>(null);

  const getT = (k: string, f: string) => {
    if (widgets[0]?.t) {
      const v = widgets[0].t(k);
      if (v && v !== k) return v;
    }
    return f;
  };

  useEffect(() => {
    const onLang = () => setLangTick(t => t + 1);
    window.addEventListener('argus-lang-changed', onLang);
    return () => window.removeEventListener('argus-lang-changed', onLang);
  }, []);

  useEffect(() => {
    const updateProfile = () => setLayoutProfile(window.innerWidth < BREAKPOINTS.sm ? 'xs' : 'lg');
    window.addEventListener('resize', updateProfile, { passive: true });
    updateProfile();
    return () => window.removeEventListener('resize', updateProfile);
  }, []);

  useEffect(() => {
    registerEditor(setEditing);
  }, [registerEditor]);

  useEffect(() => {
    if (!editing) return;
    const outsideDown = (event: PointerEvent) => {
      // Home Assistant retargets events crossing its nested shadow roots.
      const insideEditor = event.composedPath().some(node => node instanceof Element && Boolean(
        node.closest('.argus-dashboard-grid, .argus-dashboard__toolbar'),
      ));
      if (insideEditor) return;
      setEditing(false);
      setMessage(getT('edit_dashboard_done', 'Edición finalizada'));
    };
    document.addEventListener('pointerdown', outsideDown, true);
    return () => document.removeEventListener('pointerdown', outsideDown, true);
  }, [editing]);

  useEffect(() => {
    let active = true;
    setHydrated(false);
    Promise.all([storage.load(userId, dashboardId), storage.loadVisibility?.(userId, dashboardId)]).then(([value, storedVisibility]) => {
      if (!active) return;
      const merged = mergeLayouts(value);
      setLayouts(merged);
      lastValid.current = merged;
      setVisibility({ ...defaults, ...storedVisibility });
      setHydrated(true);
    }).catch(() => {
      if (!active) return;
      const merged = mergeLayouts(null);
      setLayouts(merged);
      lastValid.current = merged;
      setVisibility(defaults);
      setMessage(getT('dashboard_load_failed', 'No se pudo cargar el diseño guardado'));
      setHydrated(true);
    });
    return () => { active = false; };
  }, [storage, userId, dashboardId, defaults]);

  useEffect(() => { onEditing(editing); }, [editing, onEditing]);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (!editing) return;
      if (event.key==='Escape') {
        setEditing(false);
        setMessage(getT('edit_dashboard_done', 'Edición finalizada'));
      } else if (event.key === 'Enter' && event.target === document.body) {
        setEditing(false);
      }
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [editing]);

  const save = (next: Layouts, doneLabel = '') => {
    setLayouts(next);
    lastValid.current = next;
    setMessage(getT('dashboard_saving', 'Guardando tablero…'));
    storage.save(userId, dashboardId, next)
      .then(() => {
        if (lastValid.current === next) setMessage(doneLabel || getT('dashboard_saved', 'Tablero guardado automáticamente'));
      })
      .catch(() => {
        if (lastValid.current === next) setMessage(getT('dashboard_save_failed', 'No se pudo guardar el diseño'));
      });
  };

  const setVisible = async (id: string, value: boolean) => {
    const next = { ...visibility, [id]: value };
    setVisibility(next);
    setMessage(getT('dashboard_saving', 'Guardando tablero…'));
    try {
      await storage.saveVisibility?.(userId, dashboardId, next);
      setMessage(value ? getT('widget_visible', 'Widget visible') : getT('hide_widget', 'Widget oculto'));
    } catch {
      setVisibility(visibility);
      setMessage(getT('dashboard_save_failed', 'No se pudo guardar el diseño'));
    }
  };

  const bp = layoutProfile;
  const currentLayout = layouts[bp] ?? [];
  const commitGridLayout = (layout: readonly Layout[], label: string) => {
    const next = replaceBreakpointLayout(lastValid.current, bp, layout);
    save(next, label);
  };
  const { preview, cancel } = useWidgetGesture(containerRef, {
    editing: editing && hydrated,
    breakpoint: bp,
    layout: currentLayout,
    onEnter: () => setEditing(true),
    onCommit: (layout, resizing) => commitGridLayout(layout, resizing
      ? getT('widget_size_saved', 'Tamaño guardado')
      : getT('position_saved', 'Posición guardada')),
  });
  const displayedLayouts = preview ? { ...layouts, [bp]: preview.layout } : layouts;

  const setSize = (id: string, size: { w: number; h: number }) => {
    const item = currentLayout.find(value => value.i === id);
    if (!item) return;
    const next = placeWidget(currentLayout, { ...item, ...size }, COLS[bp], true);
    if (next !== currentLayout) commitGridLayout(next, getT('widget_size_saved', 'Tamaño guardado'));
    else if (size.w !== item.w || size.h !== item.h) setMessage(getT('position_collision', 'Posición bloqueada por colisión'));
  };

  const resetWidget = (id: string) => {
    const base = defaultLayouts[bp]?.find(value => value.i === id);
    const item = currentLayout.find(value => value.i === id);
    if (!base || !item || item.static) return;
    const moved = placeWidget(currentLayout, base, COLS[bp]);
    const resized = placeWidget(moved, base, COLS[bp], true);
    const result = resized.find(value => value.i === id);
    if (result?.x !== base.x || result.y !== base.y || result.w !== base.w || result.h !== base.h) {
      setMessage(getT('position_collision', 'Posición bloqueada por colisión'));
    } else if (resized !== currentLayout) {
      commitGridLayout(resized, getT('reset_widget', 'Widget restablecido'));
    }
  };

  const reset = async () => {
    cancel.current();
    try { localStorage.removeItem(`argus:dashboard-layout:${userId}:${dashboardId}`); } catch (_) {}
    try { await storage.reset(userId, dashboardId); }
    catch { setMessage(getT('dashboard_save_failed', 'No se pudo guardar el diseño')); return; }
    const clean = mergeLayouts(null);
    setVisibility(defaults);
    setLayouts(clean);
    lastValid.current = clean;
    setGridKey(k => k + 1);
    save(clean, getT('reset_dashboard_done', 'Diseño predeterminado restaurado'));
  };

  if (!hydrated) {
    return (
      <section className="argus-dashboard" ref={containerRef}>
        <div className="argus-dashboard__feedback" aria-live="polite">
          {getT('loading_dashboard', 'Cargando tablero…')}
        </div>
      </section>
    );
  }

  return (
    <section className={`argus-dashboard ${editing ? 'argus-dashboard--editing' : ''}`} ref={containerRef}>
      {widgets.some(w => visibility[w.id] === false) && (
        <button
          type="button"
          className="argus-dashboard__restore-entry"
          onClick={() => setEditing(true)}
        >
          {getT('show_hidden_widgets', 'Mostrar widgets ocultos')}
        </button>
      )}
      <div className="argus-dashboard__feedback" aria-live="polite">
        {editing ? message : (message || getT('hold_widget_to_edit', 'Mantén presionado un widget para moverlo o cambiar su tamaño'))}
      </div>
      <ErrorBoundary>
        <ResponsiveGridLayout
          key={gridKey}
          className="argus-dashboard-grid"
          layouts={displayedLayouts}
          breakpoint={layoutProfile}
          breakpoints={BREAKPOINTS}
          cols={COLS}
          rowHeight={GRID_ROW_HEIGHT}
          margin={[GRID_MARGIN, GRID_MARGIN]}
          containerPadding={[GRID_PADDING, GRID_PADDING]}
          maxRows={GRID_MAX_ROWS}
          compactType={null}
          preventCollision
          isDraggable={false}
          isResizable={false}
          useCSSTransforms={true}
        >
          {widgets.filter(w => visibility[w.id] !== false && (nodes.has(w.id) || !!w.content)).map(w => {
            const active = preview?.id === w.id ? preview : undefined;
            const layout = currentLayout.find(value => value.i === w.id);
            const resizable = Boolean(layout && !layout.static);
            const sizes = editing && layout && resizable ? widgetSizeOptions(layout, bp) : [];
            return (
              <div key={w.id} className={active ? 'argus-widget--active' : undefined}>
                <ErrorBoundary>
                  <Host
                    widget={w}
                    node={nodes.get(w.id)}
                    editing={editing}
                    sizes={sizes}
                    resizable={resizable}
                    onSize={size => setSize(w.id, size)}
                    gestureStyle={active && {
                      '--argus-gesture-x': active.offset.x + 'px',
                      '--argus-gesture-y': active.offset.y + 'px',
                      '--argus-gesture-resize': active.resizing ? 1 : 0,
                    } as React.CSSProperties}
                    onHide={() => setVisible(w.id, false)}
                    onReset={() => resetWidget(w.id)}
                  />
                </ErrorBoundary>
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </ErrorBoundary>
      {editing && (
        <nav className="argus-dashboard__toolbar" aria-label={getT('edit_dashboard', 'Edición del tablero')}>
          <span className="argus-dashboard__edit-hint">{getT('widget_edit_hint', 'Arrastra un widget o ajusta su tamaño desde la esquina.')}</span>
          <button type="button" className="argus-btn-reset-dashboard" onClick={reset}>
            {getT('reset_dashboard', 'Restablecer diseño')}
          </button>
          <button type="button" className="argus-dashboard__done" onClick={() => {
            setEditing(false);
            setMessage(getT('edit_dashboard_done', 'Edición finalizada'));
          }}>
            {getT('done', 'Listo')}
          </button>
          <div className="argus-dashboard__visibility" aria-label={getT('hide_widget', 'Widgets ocultos')}>
            {widgets.filter(w => visibility[w.id] === false).map(w => (
              <button type="button" key={w.id} onClick={() => setVisible(w.id, true)}>
                {getT('show', 'Mostrar')} {w.title}
              </button>
            ))}
          </div>
        </nav>
      )}
    </section>
  );
}

export default ArgusDashboard;
