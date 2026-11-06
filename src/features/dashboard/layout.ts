import type {
  ArgusBreakpoint,
  DashboardLayoutStorage,
  Layout,
  Layouts,
  StoredDashboardLayout,
  DashboardLayoutBreakpoint,
  StoredDashboardLayoutV3,
  StoredDashboardLayoutV5,
} from './types';

export const BREAKPOINTS = { lg:1200, md:996, sm:768, xs:480, xxs:0 } as const;
// Dense grid: each column/row is about 12 CSS px, so dragging and resizing
// feels continuous while keeping deterministic, collision-free placement.
export const COLS = { lg: 96, md: 80, sm: 64, xs: 40, xxs: 32 } as const;
const LEGACY_COLS: Record<ArgusBreakpoint, number> = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 };

export const V3_BREAKPOINTS = { desktop: 12, tablet: 8, mobile: 2 } as const;
export const GRID_ROW_HEIGHT = 10;
export const GRID_MARGIN = 2;
const MAX_LAYOUT_ROWS = 480;

/** Compact other widgets around the item the user just placed. */
export function compactLayoutAroundAnchor(layout: readonly Layout[], anchorId: string | undefined): Layout[] {
  const items = layout.map(value => ({ ...value, moved: false }));
  const anchors = items.filter(value => value.static || value.i === anchorId);
  const placed = [...anchors];
  const movable = items.filter(value => !value.static && value.i !== anchorId)
    .sort((a, b) => a.y - b.y || a.x - b.x);

  for (const item of movable) {
    // A resize can leave an item already intersecting the anchored card. First
    // move it below every collision, then compact it upward into the nearest
    // free slot; only checking the previous row would preserve the overlap.
    let collisions = placed.filter(other =>
      item.x < other.x + other.w && item.x + item.w > other.x &&
      item.y < other.y + other.h && item.y + item.h > other.y
    );
    while (collisions.length) {
      item.y = Math.max(...collisions.map(other => other.y + other.h));
      collisions = placed.filter(other =>
        item.x < other.x + other.w && item.x + item.w > other.x &&
        item.y < other.y + other.h && item.y + item.h > other.y
      );
    }
    while (item.y > 0) {
      const candidateY = item.y - 1;
      const collision = placed.some(other =>
        item.x < other.x + other.w && item.x + item.w > other.x &&
        candidateY < other.y + other.h && candidateY + item.h > other.y
      );
      if (collision) break;
      item.y = candidateY;
    }
    placed.push(item);
  }

  return items.map(item => ({ ...(placed.find(value => value.i === item.i) || item), moved: false }));
}

/** Replace only the layout explicitly edited at this viewport breakpoint. */
export function replaceBreakpointLayout(layouts: Layouts, breakpoint: ArgusBreakpoint, layout: readonly Layout[]): Layouts {
  return { ...layouts, [breakpoint]: layout.map(item => ({ ...item })) };
}

function normalizeV3Items(items: unknown, cols: number): Layout[] {
  const source = Array.isArray(items) ? items : [];
  const accepted: Layout[] = [];
  const ids = new Set<string>();
  for (const value of source) {
    if (!value || typeof value !== 'object') continue;
    const item = value as Partial<Layout>;
    if (typeof item.i !== 'string' || !item.i || ids.has(item.i)) continue;
    if (![item.x, item.y, item.w, item.h].every(Number.isFinite)) continue;
    const w = Math.min(cols, Math.max(1, Math.round(item.w!)));
    const candidate: Layout = {
      ...item,
      i: item.i,
      x: Math.max(0, Math.min(Math.round(item.x!), cols - w)),
      y: Math.max(0, Math.round(item.y!)),
      w,
      h: Math.min(12, Math.max(1, Math.round(item.h!))),
      minW: 1,
      maxW: cols,
      minH: 1,
      maxH: 12,
    } as Layout;
    // Deterministically place malformed/overlapping items below the valid ones.
    const safe = hasCollision(accepted, candidate)
      ? firstFreePosition(accepted, candidate, cols)
      : candidate;
    accepted.push(safe);
    ids.add(item.i);
  }
  return accepted;
}

export function migrateToV3(saved: unknown, visibility: Record<string, boolean> = {}): StoredDashboardLayoutV3 {
  const source = (saved && typeof saved === 'object' ? saved : {}) as Partial<StoredDashboardLayout> & { layouts?: Layouts };
  const layouts = source.layouts || {};
  return {
    layoutVersion: 3,
    layouts: {
      desktop: normalizeV3Items(layouts.lg, V3_BREAKPOINTS.desktop),
      tablet: normalizeV3Items(layouts.md, V3_BREAKPOINTS.tablet),
      mobile: normalizeV3Items(layouts.xs || layouts.xxs || layouts.sm, V3_BREAKPOINTS.mobile),
    },
    visibility: { ...visibility },
    updatedAt: new Date().toISOString(),
    revision: 0,
  };
}

export function v3ToLegacyLayouts(value: StoredDashboardLayoutV3): Layouts {
  return { lg: value.layouts.desktop, md: value.layouts.tablet, xs: value.layouts.mobile, xxs: value.layouts.mobile };
}

const item = (i: string, x: number, y: number, w: number, h: number): Layout => ({
  i,
  x,
  y,
  w,
  h,
  minW: 1,
  minH: 1,
  maxW: 96,
  maxH: MAX_LAYOUT_ROWS,
});

export const defaultLayouts: Layouts = {
  lg: [
    item('activity-history', 0, 0, 48, 36),
    item('automations', 48, 0, 48, 36),
    item('backup-restore', 0, 36, 48, 36),
    item('access-control', 48, 36, 48, 36),
    item('alarm-configuration', 0, 72, 96, 45),
    item('security-status', 0, 117, 96, 18),
  ],
  md: [
    item('activity-history', 0, 0, 40, 36),
    item('automations', 40, 0, 40, 36),
    item('backup-restore', 0, 36, 40, 36),
    item('access-control', 40, 36, 40, 36),
    item('alarm-configuration', 0, 72, 80, 45),
    item('security-status', 0, 117, 80, 18),
  ],
  sm: [
    item('activity-history', 0, 0, 64, 36),
    item('automations', 0, 36, 64, 36),
    item('backup-restore', 0, 72, 64, 36),
    item('access-control', 0, 108, 64, 36),
    item('alarm-configuration', 0, 144, 64, 45),
    item('security-status', 0, 189, 64, 18),
  ],
  xs: [
    item('activity-history', 0, 0, 40, 36),
    item('automations', 0, 36, 40, 36),
    item('backup-restore', 0, 72, 40, 36),
    item('access-control', 0, 108, 40, 36),
    item('alarm-configuration', 0, 144, 40, 45),
    item('security-status', 0, 189, 40, 18),
  ],
  xxs: [
    item('activity-history', 0, 0, 32, 36),
    item('automations', 0, 36, 32, 36),
    item('backup-restore', 0, 72, 32, 36),
    item('access-control', 0, 108, 32, 36),
    item('alarm-configuration', 0, 144, 32, 45),
    item('security-status', 0, 189, 32, 18),
  ],
};

const MIN_WIDTHS: Record<string, number> = {
  'activity-history': 12, automations: 12, 'backup-restore': 12,
  'access-control': 16, 'alarm-configuration': 18, 'security-status': 12,
};
// Preserve content usability but allow cards to become much squarer/smaller.
const MIN_HEIGHTS: Record<string, number> = {
  'activity-history': 20, automations: 14, 'backup-restore': 14,
  'access-control': 24, 'alarm-configuration': 28, 'security-status': 12,
};

function applyWidgetBounds(value: Layout, bp: ArgusBreakpoint): Layout {
  const cols = COLS[bp];
  const minW = Math.min(cols, MIN_WIDTHS[value.i] || 12);
  const w = Math.min(cols, Math.max(minW, Math.round(value.w)));
  const h = Math.min(MAX_LAYOUT_ROWS, Math.max(MIN_HEIGHTS[value.i] || 2, Math.round(value.h)));
  return {
    ...value,
    x: Math.max(0, Math.min(Math.round(value.x), cols - w)),
    y: Math.max(0, Math.round(value.y)),
    w, h, minW, maxW: cols,
    minH: MIN_HEIGHTS[value.i] || 2,
    maxH: MAX_LAYOUT_ROWS,
  };
}

/** Convert the former 12/8/4/2-column, 54px-step layout to dense freeform geometry. */
export function migrateToV5(saved: unknown, visibility: Record<string, boolean> = {}): StoredDashboardLayoutV5 {
  const source = (saved && typeof saved === 'object' ? saved : {}) as {
    layoutVersion?: number;
    layouts?: Layouts | Record<string, Layout[]>;
    visibility?: Record<string, boolean>;
    revision?: number;
  };
  const savedLayouts = source.layouts || {};
  const legacy = source.layoutVersion !== 5;
  const next: Partial<Layouts> = {};
  const sourceFor = (bp: ArgusBreakpoint): Layout[] | undefined => {
    const values = (savedLayouts as any)[bp];
    if (Array.isArray(values) && values.length) return values;
    if (source.layoutVersion === 3) {
      const key = bp === 'lg' ? 'desktop' : bp === 'md' ? 'tablet' : (bp === 'xs' || bp === 'xxs') ? 'mobile' : '';
      const legacyValues = key ? (savedLayouts as any)[key] : undefined;
      if (Array.isArray(legacyValues) && legacyValues.length) return legacyValues;
    }
    return undefined;
  };

  (Object.keys(COLS) as ArgusBreakpoint[]).forEach(bp => {
    const values = sourceFor(bp);
    if (!legacy && values) {
      next[bp] = values.map(item => applyWidgetBounds(item, bp));
      return;
    }
    if (!values) {
      next[bp] = defaultLayouts[bp];
      return;
    }

    const oldCols = LEGACY_COLS[bp];
    const oldLayout = new Map(values.map(value => [value.i, value]));
    const defaults = defaultLayouts[bp] || [];
    const baseById = new Map(defaults.map(base => [base.i, base]));
    const candidates = [
      ...defaults.map(base => {
        const old = oldLayout.get(base.i);
        if (!old) return base;
        const x = Math.round(old.x * COLS[bp] / oldCols);
        const w = Math.max(1, Math.round(old.w * COLS[bp] / oldCols));
        const rowScale = source.layoutVersion === 3 ? 9 : 4.5;
        return { ...base, ...old, x, w, y: Math.round(old.y * rowScale), h: Math.round(old.h * rowScale) } as Layout;
      }),
      ...values.filter(value => !baseById.has(value.i)).map(old => {
        const rowScale = source.layoutVersion === 3 ? 9 : 4.5;
        return {
          ...old,
          x: Math.round(old.x * COLS[bp] / oldCols),
          w: Math.max(1, Math.round(old.w * COLS[bp] / oldCols)),
          y: Math.round(old.y * rowScale),
          h: Math.round(old.h * rowScale),
        } as Layout;
      }),
    ];
    const accepted: Layout[] = [];
    for (const candidate of candidates) {
      const bounded = applyWidgetBounds(candidate, bp);
      accepted.push(hasCollision(accepted, bounded) ? firstFreePosition(accepted, bounded, COLS[bp]) : bounded);
    }
    next[bp] = accepted;
  });
  return {
    layoutVersion: 5,
    layouts: next as Layouts,
    visibility: { ...(source.visibility || {}), ...visibility },
    updatedAt: new Date().toISOString(),
    revision: Number(source.revision || 0),
  };
}

export function hasCollision(layout: Layout[], candidate: Layout) {
  return layout.some(
    x =>
      x.i !== candidate.i &&
      candidate.x < x.x + x.w &&
      candidate.x + candidate.w > x.x &&
      candidate.y < x.y + x.h &&
      candidate.y + candidate.h > x.y
  );
}

export function firstFreePosition(layout: Layout[], candidate: Layout, cols: number): Layout {
  for (let y = 0; y < 240; y++) {
    for (let x = 0; x <= cols - candidate.w; x++) {
      const next: Layout = { ...candidate, x, y };
      if (!hasCollision(layout, next)) return next;
    }
  }
  return { ...candidate, x: 0, y: Math.max(0, ...layout.map(x => x.y + x.h)) };
}

/** Repair persisted overlaps without changing each widget's column or pulling
 * an item toward the top: colliding cards are pushed just below the blockers. */
export function repairLayoutCollisions(layout: readonly Layout[]): Layout[] {
  const accepted: Layout[] = [];
  const ordered = layout.map(item => ({ ...item, moved: false }))
    .sort((a, b) => a.y - b.y || a.x - b.x);
  for (const item of ordered) {
    let collisions = accepted.filter(other => hasCollision([other], item));
    while (collisions.length) {
      item.y = Math.max(...collisions.map(other => other.y + other.h));
      collisions = accepted.filter(other => hasCollision([other], item));
    }
    accepted.push(item);
  }
  return accepted;
}

export function hasLayoutCollisions(layouts: Layouts): boolean {
  return (Object.keys(COLS) as ArgusBreakpoint[]).some(bp => {
    const items = layouts[bp] || [];
    return items.some((item, index) => items.slice(index + 1).some(other => hasCollision([item], other)));
  });
}

export function mergeLayouts(saved: Layouts | null): Layouts {
  const result: Layouts = {};
  (Object.keys(COLS) as ArgusBreakpoint[]).forEach(bp => {
    const cols = COLS[bp];
    const source: Layout[] = Array.isArray(saved?.[bp]) ? (saved![bp] as Layout[]) : [];
    const clean = new Map<string, Layout>();
    for (const value of source) {
      if (!value || typeof value !== 'object' || typeof value.i !== 'string' || !value.i) continue;
      if (![value.x, value.y, value.w, value.h].every(Number.isFinite)) continue;
      clean.set(value.i, applyWidgetBounds(value as Layout, bp));
    }
    const defaults = (defaultLayouts[bp] || []) as Layout[];
    const known = defaults.map(base => applyWidgetBounds({ ...base, ...clean.get(base.i), maxW: cols }, bp));
    const knownIds = new Set(known.map(x => x.i));
    // Drop widget IDs removed in the corrective release even from old saved layouts.
    const removed = new Set(['security-insights', 'floorplan', 'zone-crystals']);
    const extra = [...clean.values()].filter(x => !knownIds.has(x.i) && !removed.has(x.i));
    result[bp] = repairLayoutCollisions([...known, ...extra]);
  });
  return result;
}

export class LocalStorageDashboardLayoutStorage implements DashboardLayoutStorage {
  private key(u: string, d: string) {
    return `argus:dashboard-layout:${u}:${d}`;
  }
  private read(u: string, d: string): StoredDashboardLayout | null {
    try {
      const value = JSON.parse(localStorage.getItem(this.key(u, d)) || 'null') as StoredDashboardLayout | null;
      return value?.layoutVersion != null && value.layoutVersion >= 1 ? value : null;
    } catch {
      return null;
    }
  }
  private write(u: string, d: string, value: StoredDashboardLayout) {
    try { localStorage.setItem(this.key(u, d), JSON.stringify(value)); } catch { /* Recovery cache is optional. */ }
  }
  async load(u: string, d: string) {
    const value = this.read(u, d);
    return value ? mergeLayouts(value.layoutVersion === 5 ? value.layouts : migrateToV5(value).layouts) : null;
  }
  async save(u: string, d: string, layouts: Layouts, visibility?: Record<string, boolean>) {
    const old = this.read(u, d);
    this.write(u, d, {
      layoutVersion:5,
      layouts: migrateToV5({ layoutVersion: 5, layouts }).layouts,
      visibility: visibility ?? old?.visibility,
      updatedAt: new Date().toISOString(),
    });
  }
  async loadVisibility(u: string, d: string) {
    return this.read(u, d)?.visibility ?? null;
  }
  async saveVisibility(u: string, d: string, visibility: Record<string, boolean>) {
    const old = this.read(u, d);
    this.write(u, d, {
      layoutVersion: 5,
      layouts: old ? migrateToV5(old).layouts : mergeLayouts(null),
      visibility,
      updatedAt: new Date().toISOString(),
    });
  }
  async reset(u: string, d: string) {
    try { localStorage.removeItem(this.key(u, d)); } catch { /* Recovery cache is optional. */ }
  }
}
