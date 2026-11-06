import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { Responsive, WidthProvider } from 'react-grid-layout/legacy';
import type { ArgusBreakpoint, ArgusWidgetDefinition, DashboardLayoutStorage, Layout, Layouts } from './types';
import { BREAKPOINTS, COLS, compactLayoutAroundAnchor, GRID_MARGIN, GRID_ROW_HEIGHT, defaultLayouts, mergeLayouts, replaceBreakpointLayout } from './layout';

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
}

function Host({ widget, node, editing, onHide, onReset }: HostProps) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!node) return;
    ref.current?.appendChild(node);
    node.draggable = false;
    node.querySelector(':scope > .panel-edit-overlay')?.remove();
    if (editing) node.setAttribute('inert', '');
    else node.removeAttribute('inert');

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
  }, [node, editing]);

  const getT = (k: string, f: string) => {
    if (widget.t) {
      const v = widget.t(k);
      if (v && v !== k) return v;
    }
    return f;
  };

  return (
    <article className="argus-widget" data-widget-kind={widget.kind}>
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
            <button type="button" onClick={onReset}>{getT('reset_widget', 'Restablecer widget')}</button>
            <button type="button" onClick={onHide}>{getT('hide_widget', 'Ocultar widget')}</button>
          </div>
        </details>
      </header>
      <div className={`argus-widget__content${widget.kind === 'access-control' ? ' argus-widget__content--access' : ''}${widget.content ? ' argus-widget__content--virtual' : ''}`} ref={ref}>{widget.content}</div>
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
  const [bp, setBp] = useState<ArgusBreakpoint>('lg');
  // Home Assistant's drawer changes the panel/container width without changing
  // the browser's form factor. Choose the persisted layout profile from the
  // viewport so opening/closing that drawer cannot switch desktop layouts.
  const [layoutProfile, setLayoutProfile] = useState<ArgusBreakpoint>(() =>
    typeof window !== 'undefined' && window.innerWidth < BREAKPOINTS.sm ? 'xs' : 'lg',
  );
  const [message, setMessage] = useState('');
  const [, setLangTick] = useState(0);
  const [gridKey, setGridKey] = useState(0);
  const bpRef = useRef<ArgusBreakpoint>('lg');

  const lastValid = useRef<Layouts>(defaultLayouts);
  const timer = useRef<number | undefined>(undefined);
  const wasEditing = useRef(false);
  const containerRef = useRef<HTMLElement>(null);
  const holdGesture = useRef<{ pointerId: number; x: number; y: number; timer: number } | null>(null);
  const suppressHoldClick = useRef(false);

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

  // iOS-style entry: hold a non-control area of a widget to enter edit mode.
  // A short press remains a normal interaction; moving the pointer cancels the hold.
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const clearHold = () => {
      if (holdGesture.current) window.clearTimeout(holdGesture.current.timer);
      holdGesture.current = null;
    };
    const down = (event: PointerEvent) => {
      if (editing) return;
      if (event.button !== 0) return;
      const target = event.target as Element | null;
      const widget = target?.closest('.argus-dashboard-grid .argus-widget');
      if (!widget || target?.closest('button,input,select,textarea,a,summary,[role="button"]')) return;
      clearHold();
      const pointerId = event.pointerId;
      const timerId = window.setTimeout(() => {
        holdGesture.current = null;
        suppressHoldClick.current = true;
        setEditing(true);
        window.setTimeout(() => { suppressHoldClick.current = false; }, 900);
      }, 560);
      holdGesture.current = { pointerId, x: event.clientX, y: event.clientY, timer: timerId };
    };
    const move = (event: PointerEvent) => {
      const hold = holdGesture.current;
      if (hold && hold.pointerId === event.pointerId && Math.hypot(event.clientX - hold.x, event.clientY - hold.y) > 10) clearHold();
    };
    const up = () => clearHold();
    const click = (event: MouseEvent) => {
      if (!suppressHoldClick.current) return;
      suppressHoldClick.current = false;
      event.preventDefault();
      event.stopPropagation();
    };
    const contextMenu = (event: Event) => {
      if ((event.target as Element | null)?.closest('.argus-dashboard-grid .argus-widget')) event.preventDefault();
    };
    const outsideDown = (event: PointerEvent) => {
      if (!editing) return;
      // Home Assistant nests this panel in several shadow roots. Classify the
      // actual composed event path instead of treating the whole panel host as
      // "inside"; clicks on the panel background should finish editing too.
      const path = event.composedPath();
      const insideEditor = path.some(node => node instanceof Element && Boolean(
        node.closest('.argus-dashboard-grid, .argus-dashboard__toolbar'),
      ));
      if (insideEditor) return;
      setEditing(false);
      setMessage(getT('edit_dashboard_done', 'Edición finalizada'));
    };
    root.addEventListener('pointerdown', down, true);
    root.addEventListener('pointermove', move, true);
    root.addEventListener('pointerup', up, true);
    root.addEventListener('pointercancel', up, true);
    root.addEventListener('click', click, true);
    root.addEventListener('contextmenu', contextMenu, true);
    document.addEventListener('pointerdown', outsideDown, true);
    return () => {
      clearHold();
      root.removeEventListener('pointerdown', down, true);
      root.removeEventListener('pointermove', move, true);
      root.removeEventListener('pointerup', up, true);
      root.removeEventListener('pointercancel', up, true);
      root.removeEventListener('click', click, true);
      root.removeEventListener('contextmenu', contextMenu, true);
      document.removeEventListener('pointerdown', outsideDown, true);
    };
  }, [editing]);

  useEffect(() => {
    let active = true;
    clearTimeout(timer.current);
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

  useEffect(() => {
    onEditing(editing);
    if (hydrated && wasEditing.current && !editing) storage.save(userId, dashboardId, lastValid.current).catch(() => setMessage(getT('dashboard_save_failed', 'No se pudo guardar el diseño')));
    wasEditing.current = editing;
  }, [editing, hydrated, onEditing, storage, userId, dashboardId]);

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

  useEffect(() => () => clearTimeout(timer.current), []);

  const save = (next: Layouts, now = false, doneLabel = '') => {
    setLayouts(next);
    lastValid.current = next;
    clearTimeout(timer.current);
    setMessage(getT('dashboard_saving', 'Guardando tablero…'));
    timer.current = window.setTimeout(() => {
      storage.save(userId, dashboardId, next)
        .then(() => setMessage(doneLabel || getT('dashboard_saved', 'Tablero guardado automáticamente')))
        .catch(() => setMessage(getT('dashboard_save_failed', 'No se pudo guardar el diseño')));
    }, now ? 0 : 550);
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

  const resetWidget = (id: string) => {
    const base = ((defaultLayouts[bp] as Layout[] | undefined) || []).find((x: Layout) => x.i === id);
    if (!base) return;
    const current = (lastValid.current[bp] as Layout[] | undefined) || [];
    commitGridLayout(current.map(value => value.i === id ? { ...base } : value), getT('reset_widget', 'Widget restablecido'));
  };

  const commitGridLayout = (layout: readonly Layout[], label: string) => {
    const next = replaceBreakpointLayout(lastValid.current, bpRef.current, layout);
    save(next, true, label);
  };

  const autoScrollDuringDrag = (_layout: readonly Layout[], _old: Layout | null, _item: Layout | null, _placeholder: Layout | null, event: Event) => {
    const pointerEvent = event as MouseEvent | TouchEvent;
    const pointerY = 'touches' in pointerEvent ? pointerEvent.touches[0]?.clientY : pointerEvent.clientY;
    if (pointerY == null) return;
    const grid = containerRef.current?.querySelector('.argus-dashboard-grid');
    let current: Element | null = grid ?? null;
    while (current) {
      const style = getComputedStyle(current);
      const canScroll = /(auto|scroll)/.test(style.overflowY) && current.scrollHeight > current.clientHeight + 2;
      if (canScroll) {
        const rect = current.getBoundingClientRect();
        const edge = Math.min(84, Math.max(48, rect.height * 0.12));
        if (pointerY < rect.top + edge) current.scrollTop -= 14;
        else if (pointerY > rect.bottom - edge) current.scrollTop += 14;
        break;
      }
      current = current.parentElement ?? (current.getRootNode() as ShadowRoot).host ?? null;
    }
    if (!current) {
      const scrolling = document.scrollingElement;
      const edge = 72;
      if (pointerY < edge) window.scrollBy(0, -14);
      else if (pointerY > window.innerHeight - edge) window.scrollBy(0, 14);
      else if (scrolling) void scrolling;
    }
  };

  const reset = async () => {
    try { localStorage.removeItem(`argus:dashboard-layout:${userId}:${dashboardId}`); } catch (_) {}
    clearTimeout(timer.current);
    try { await storage.reset(userId, dashboardId); }
    catch { setMessage(getT('dashboard_save_failed', 'No se pudo guardar el diseño')); return; }
    const clean = mergeLayouts(null);
    setVisibility(defaults);
    setLayouts(clean);
    lastValid.current = clean;
    setGridKey(k => k + 1);
    save(clean, true);
    setMessage(getT('reset_dashboard_done', 'Diseño predeterminado restaurado'));
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
      {!editing && widgets.some(w => visibility[w.id] === false) && (
        <button
          type="button"
          className="argus-dashboard__restore-entry"
          onClick={() => setEditing(true)}
        >
          {getT('show_hidden_widgets', 'Mostrar widgets ocultos')}
        </button>
      )}
      {editing && (
        <nav className="argus-dashboard__toolbar" aria-label={getT('edit_dashboard', 'Edición del tablero')}>
          <span className="argus-dashboard__edit-hint">{getT('hold_to_move', 'Arrastra los widgets; se guarda cada cambio. Toca fuera para terminar.')}</span>
          <button type="button" className="argus-btn-reset-dashboard" onClick={reset}>
            {getT('reset_dashboard', 'Restablecer diseño')}
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
      <div className="argus-dashboard__feedback" aria-live="polite">
        {editing ? message : (message || getT('hold_widget_to_edit', 'Mantén presionado un widget para moverlo o cambiar su tamaño'))}
      </div>
      <ErrorBoundary>
        <ResponsiveGridLayout
          key={gridKey}
          className="argus-dashboard-grid"
          layouts={layouts}
          breakpoint={layoutProfile}
          breakpoints={BREAKPOINTS}
          cols={COLS}
          rowHeight={GRID_ROW_HEIGHT}
          margin={[GRID_MARGIN, GRID_MARGIN]}
          containerPadding={[16, 16]}
          maxRows={480}
          // Keep RGL from compacting the dragged item upward on every tick.
          // Repack the remaining widgets around its final cell on release.
          compactType={null}
          preventCollision={false}
          allowOverlap={false}
          isBounded={true}
          isDraggable={editing}
          isResizable={editing}
          allowMobileScroll={false}
          draggableHandle=".argus-widget__drag-handle"
          draggableCancel=".argus-widget__options, .argus-widget__menu, .argus-widget__resize-handle"
          resizeHandles={['e', 's', 'se']}
          onBreakpointChange={(value: any) => {
            bpRef.current = value as ArgusBreakpoint;
            setBp(value as ArgusBreakpoint);
          }}
          onLayoutChange={(_: any, all: any) => {
            if (editing) {
              // RGL can return generated/interpolated layouts for every width.
              // Persist only the active breakpoint so arranging the phone view
              // never rewrites the web/tablet arrangement (and vice versa).
              const active = all?.[bpRef.current];
              if (Array.isArray(active)) {
                lastValid.current = replaceBreakpointLayout(lastValid.current, bpRef.current, active);
              }
            }
          }}
          onDrag={autoScrollDuringDrag}
          onResizeStop={(layout: readonly Layout[], _old: Layout | null, value: Layout | null) => value && commitGridLayout(compactLayoutAroundAnchor(layout, value.i), `${getT('size', 'Tamaño')}: ${value.w}x${value.h}`)}
          onDragStop={(layout: readonly Layout[], _old: Layout | null, item: Layout | null) => commitGridLayout(compactLayoutAroundAnchor(layout, item?.i), getT('position_saved', 'Posición guardada'))}
          useCSSTransforms={true}
        >
          {widgets.filter(w => visibility[w.id] !== false && (nodes.has(w.id) || !!w.content)).map(w => {
            return (
              <div key={w.id}>
                <ErrorBoundary>
                  <Host
                    widget={w}
                    node={nodes.get(w.id)}
                    editing={editing}
                    onHide={() => setVisible(w.id, false)}
                    onReset={() => resetWidget(w.id)}
                  />
                </ErrorBoundary>
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </ErrorBoundary>
    </section>
  );
}

export default ArgusDashboard;
