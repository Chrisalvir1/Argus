import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { COLS, GRID_MARGIN, GRID_PADDING, GRID_ROW_HEIGHT, placeWidget } from './layout';
import type { ArgusBreakpoint, Layout } from './types';

type Point = { x: number; y: number };
type Preview = {
  id: string;
  layout: readonly Layout[];
  resizing: boolean;
  offset: Point;
};
type Gesture = {
  id: number;
  touch: boolean;
  widget: HTMLElement;
  grid: HTMLElement;
  origin: Point;
  pointer: Point;
  gridOrigin: Point;
  layout: readonly Layout[];
  item: Layout;
  bp: ArgusBreakpoint;
  resizing: boolean;
  active: boolean;
  timer?: number;
  frame?: number;
  preview?: Preview;
};

type Editor = {
  editing: boolean;
  breakpoint: ArgusBreakpoint;
  layout: readonly Layout[];
  onEnter: () => void;
  onCommit: (layout: readonly Layout[], resizing: boolean) => void;
};

const interactive = 'button,input,select,textarea,a,summary,label,[contenteditable],[role="button"],[role="switch"],[role="slider"],[role="checkbox"]';
const point = (event: MouseEvent | Touch): Point => ({ x: event.clientX, y: event.clientY });
const gridOrigin = (grid: HTMLElement): Point => {
  const rect = grid.getBoundingClientRect();
  return { x: rect.left, y: rect.top };
};

function scrollNearEdge(grid: HTMLElement, y: number) {
  let parent: Element | null = grid;
  while (parent) {
    if (/(auto|scroll)/.test(getComputedStyle(parent).overflowY) && parent.scrollHeight > parent.clientHeight + 2) {
      const rect = parent.getBoundingClientRect();
      const edge = Math.min(72, rect.height * .15);
      if (y < rect.top + edge) parent.scrollTop -= 12;
      else if (y > rect.bottom - edge) parent.scrollTop += 12;
      return;
    }
    parent = parent.parentElement ?? (parent.getRootNode() as ShadowRoot).host ?? null;
  }
  if (y < 56) window.scrollBy(0, -12);
  else if (y > window.innerHeight - 56) window.scrollBy(0, 12);
}

function calculatePreview(gesture: Gesture): Preview {
  const { item, grid, origin, pointer, layout, resizing, bp } = gesture;
  const cols = COLS[bp];
  const column = (grid.clientWidth - 2 * GRID_PADDING + GRID_MARGIN) / cols;
  const row = GRID_ROW_HEIGHT + GRID_MARGIN;
  const position = gridOrigin(grid);
  const dx = pointer.x - origin.x + gesture.gridOrigin.x - position.x;
  const dy = pointer.y - origin.y + gesture.gridOrigin.y - position.y;
  const requested = resizing
    ? { ...item, w: item.w + dx / column, h: item.h + dy / row }
    : { ...item, x: item.x + dx / column, y: item.y + dy / row };
  let next = placeWidget(layout, requested, cols, resizing);
  if (!resizing && next === layout && Math.abs(dy) >= row) {
    // In a packed mobile column, an exact neighbor boundary can be legal
    // even when the position between two widgets would block both of them.
    const nearby = layout
      .filter(other => other.i !== item.i && other.x < requested.x + item.w &&
        other.x + other.w > requested.x && Math.abs(other.y - requested.y) <= item.h / 3)
      .sort((a, b) => Math.abs(a.y - requested.y) - Math.abs(b.y - requested.y));
    for (const other of nearby) {
      next = placeWidget(layout, { ...requested, y: other.y }, cols);
      if (next !== layout) break;
    }
  }
  const placed = next.find(value => value.i === item.i)!;
  const residualX = resizing ? (requested.w - placed.w) * column : (requested.x - placed.x) * column;
  const residualY = resizing ? (requested.h - placed.h) * row : (requested.y - placed.y) * row;
  const elastic = (px: number) => px / (1 + Math.abs(px) / 12);
  return { id: item.i, layout: next, resizing, offset: { x: elastic(residualX), y: elastic(residualY) } };
}

export function useWidgetGesture(root: RefObject<HTMLElement | null>, editor: Editor) {
  const current = useRef(editor);
  const gesture = useRef<Gesture | null>(null);
  const [preview, setPreview] = useState<Preview | null>(null);
  const cancel = useRef<() => void>(() => {});
  useLayoutEffect(() => {
    const wasEditing = current.current.editing;
    current.current = editor;
    if (gesture.current && ((wasEditing && !editor.editing) || gesture.current.bp !== editor.breakpoint)) cancel.current();
  }, [editor]);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const doc = element.ownerDocument;
    let suppress: { widget: HTMLElement; until: number } | undefined;

    const finish = (commit: boolean) => {
      const active = gesture.current;
      if (!active) return;
      gesture.current = null;
      if (active.touch) doc.removeEventListener('touchmove', touchMove, true);
      window.clearTimeout(active.timer);
      if (active.frame !== undefined) window.cancelAnimationFrame(active.frame);
      if (!active.active) return;
      suppress = { widget: active.widget, until: performance.now() + 450 };
      setPreview(null);
      if (commit && active.preview && active.preview.layout !== active.layout) {
        current.current.onCommit(active.preview.layout, active.resizing);
      }
    };
    cancel.current = () => finish(false);

    const frame = () => {
      const active = gesture.current;
      if (!active?.active) return;
      if (active.preview && !active.resizing &&
          Math.hypot(active.pointer.x - active.origin.x, active.pointer.y - active.origin.y) > 4) {
        scrollNearEdge(active.grid, active.pointer.y);
      }
      const next = calculatePreview(active);
      const prior = active.preview;
      const unchanged = prior && prior.offset.x === next.offset.x && prior.offset.y === next.offset.y &&
        prior.layout.every((item, i) => {
          const other = next.layout[i];
          return item.x === other.x && item.y === other.y && item.w === other.w && item.h === other.h;
        });
      if (!unchanged) {
        active.preview = next;
        setPreview(next);
      }
      active.frame = window.requestAnimationFrame(frame);
    };

    const begin = (target: EventTarget | null, id: number, touch: boolean, start: Point) => {
      if (gesture.current || !(target instanceof Element)) return;
      suppress = undefined;
      const widget = target.closest<HTMLElement>('.argus-widget[data-widget-id]');
      const grid = widget?.closest<HTMLElement>('.argus-dashboard-grid');
      const { layout, breakpoint, editing, onEnter } = current.current;
      const item = layout.find(value => value.i === widget?.dataset.widgetId);
      const resizing = editing && Boolean(target.closest('.argus-widget__resize-handle'));
      if (!widget || !grid || !item || item.static || (!resizing && target.closest(interactive))) return;

      const active: Gesture = {
        id, touch, widget, grid, origin: start, pointer: start, gridOrigin: gridOrigin(grid),
        layout, item, bp: breakpoint, resizing, active: false,
      };
      gesture.current = active;
      if (touch) doc.addEventListener('touchmove', touchMove, { capture: true, passive: false });
      const activate = () => {
        active.active = true;
        if (!editing) onEnter();
        active.frame = window.requestAnimationFrame(() => {
          // The edit toolbar can change the grid origin on entry.
          active.gridOrigin = gridOrigin(grid);
          frame();
        });
      };
      if (editing) activate();
      else active.timer = window.setTimeout(activate, 500);
    };

    const move = (id: number, touch: boolean, next: Point, event: Event) => {
      const active = gesture.current;
      if (!active || active.id !== id || active.touch !== touch) return;
      active.pointer = next;
      if (active.active) {
        if (event.cancelable) event.preventDefault();
      } else if (Math.hypot(next.x - active.origin.x, next.y - active.origin.y) > 10) {
        finish(false);
      }
    };

    const end = (id: number, touch: boolean, commit: boolean, final?: Point) => {
      const active = gesture.current;
      if (!active || active.id !== id || active.touch !== touch) return;
      if (commit && final && active.active) {
        active.pointer = final;
        active.preview = calculatePreview(active);
      }
      finish(commit);
    };

    // Touch events let normal swipes scroll before the hold and reserve the
    // gesture only once editing starts, including on Safari.
    const touchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) { finish(false); return; }
      const touch = event.changedTouches[0];
      if (touch) begin(event.target, touch.identifier, true, point(touch));
    };
    const touchMove = (event: TouchEvent) => {
      for (const touch of event.changedTouches) move(touch.identifier, true, point(touch), event);
    };
    const touchEnd = (event: TouchEvent) => {
      for (const touch of event.changedTouches) end(touch.identifier, true, event.type === 'touchend', point(touch));
    };
    const pointerDown = (event: PointerEvent) => {
      if (event.pointerType !== 'touch' && event.button === 0) begin(event.target, event.pointerId, false, point(event));
    };
    const pointerMove = (event: PointerEvent) => move(event.pointerId, false, point(event), event);
    const pointerEnd = (event: PointerEvent) => end(event.pointerId, false, event.type === 'pointerup', point(event));
    const click = (event: MouseEvent) => {
      if (!suppress || performance.now() > suppress.until || !event.composedPath().includes(suppress.widget)) return;
      suppress = undefined;
      event.preventDefault();
      event.stopPropagation();
    };
    const contextMenu = (event: Event) => {
      if (gesture.current && event.composedPath().includes(gesture.current.widget)) event.preventDefault();
    };
    const blur = () => finish(false);

    element.addEventListener('pointerdown', pointerDown, true);
    element.addEventListener('touchstart', touchStart, { capture: true, passive: true });
    element.addEventListener('click', click, true);
    element.addEventListener('contextmenu', contextMenu, true);
    doc.addEventListener('pointermove', pointerMove, true);
    doc.addEventListener('pointerup', pointerEnd, true);
    doc.addEventListener('pointercancel', pointerEnd, true);
    doc.addEventListener('touchend', touchEnd, true);
    doc.addEventListener('touchcancel', touchEnd, true);
    window.addEventListener('blur', blur);
    return () => {
      finish(false);
      element.removeEventListener('pointerdown', pointerDown, true);
      element.removeEventListener('touchstart', touchStart, true);
      element.removeEventListener('click', click, true);
      element.removeEventListener('contextmenu', contextMenu, true);
      doc.removeEventListener('pointermove', pointerMove, true);
      doc.removeEventListener('pointerup', pointerEnd, true);
      doc.removeEventListener('pointercancel', pointerEnd, true);
      doc.removeEventListener('touchend', touchEnd, true);
      doc.removeEventListener('touchcancel', touchEnd, true);
      window.removeEventListener('blur', blur);
    };
  }, [root]);

  return { preview, cancel };
}
