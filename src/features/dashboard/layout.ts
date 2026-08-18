import type {
  ArgusBreakpoint,
  ArgusWidgetSize,
  DashboardLayoutStorage,
  Layout,
  Layouts,
  StoredDashboardLayout
} from './types';

// contract-tokens: lg:1200 md:996 sm:768 xs:480 xxs:0
export const BREAKPOINTS = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 } as const;
export const COLS = { lg: 12, md: 8, sm: 4, xs: 2, xxs: 2 } as const;

// contract-tokens: XS:{w:2,h:2} S:{w:3,h:3} M:{w:3,h:4} L:{w:6,h:4} XL:{w:6,h:8}
export const ARGUS_WIDGET_SIZES: Record<ArgusWidgetSize, { w: number; h: number }> = {
  XS: { w: 2, h: 2 },
  S:  { w: 3, h: 3 },
  M:  { w: 3, h: 4 },
  L:  { w: 6, h: 4 },
  XL: { w: 6, h: 8 },
};

const item = (i: string, x: number, y: number, w: number, h: number): Layout => ({
  i, x, y, w, h,
  minW: 2, minH: 2, maxW: 12, maxH: 16,
});

/** v2.2.21 — Hero layout matching v2.2.13 visual hierarchy */
export const defaultLayouts: Layouts = {
  lg: [
    item('active-instances', 0,  0,  12, 7),  // hero — full width
    item('history',          0,  7,  6,  6),  // bottom-left
    item('modes',            6,  7,  6,  6),  // bottom-right
    item('automations',      0,  13, 4,  5),
    item('access',           4,  13, 8,  5),
    item('sos',              0,  18, 12, 3),
  ],
  md: [
    item('active-instances', 0,  0,  8,  7),
    item('history',          0,  7,  4,  6),
    item('modes',            4,  7,  4,  6),
    item('automations',      0,  13, 4,  5),
    item('access',           4,  13, 4,  5),
    item('sos',              0,  18, 8,  3),
  ],
  sm: [
    item('active-instances', 0,  0,  4,  9),
    item('history',          0,  9,  4,  6),
    item('modes',            0,  15, 4,  7),
    item('automations',      0,  22, 4,  5),
    item('access',           0,  27, 4,  5),
    item('sos',              0,  32, 4,  3),
  ],
  xs: [
    item('active-instances', 0,  0,  2,  12),
    item('history',          0,  12, 2,  6),
    item('modes',            0,  18, 2,  8),
    item('automations',      0,  26, 2,  5),
    item('access',           0,  31, 2,  5),
    item('sos',              0,  36, 2,  3),
  ],
  xxs: [
    item('active-instances', 0,  0,  2,  12),
    item('history',          0,  12, 2,  6),
    item('modes',            0,  18, 2,  8),
    item('automations',      0,  26, 2,  5),
    item('access',           0,  31, 2,  5),
    item('sos',              0,  36, 2,  3),
  ],
};

export function getClosestWidgetSize(w: number, h: number, cols: number): ArgusWidgetSize {
  return (
    Object.entries(ARGUS_WIDGET_SIZES)
      .map(([size, d]) => ({
        size: size as ArgusWidgetSize,
        distance: Math.abs(Math.min(d.w, cols) - w) + Math.abs(d.h - h),
      }))
      .sort((a, b) => a.distance - b.distance)[0]?.size ?? 'S'
  );
}

export function clampSizeForBreakpoint(size: ArgusWidgetSize, cols: number) {
  const d = ARGUS_WIDGET_SIZES[size];
  return { w: Math.min(d.w, cols), h: d.h };
}

export function snapLayoutItemToSize(value: Layout, cols: number) {
  const size = getClosestWidgetSize(value.w, value.h, cols);
  const d = clampSizeForBreakpoint(size, cols);
  return {
    ...value,
    w: d.w,
    h: d.h,
    x: Math.max(0, Math.min(value.x, cols - d.w)),
    size,
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
      const next = { ...candidate, x, y };
      if (!hasCollision(layout, next)) return next;
    }
  }
  return { ...candidate, x: 0, y: Math.max(0, ...layout.map(x => x.y + x.h)) };
}

export function mergeLayouts(saved: Layouts | null): Layouts {
  const result: Layouts = {};
  (Object.keys(COLS) as ArgusBreakpoint[]).forEach(bp => {
    const cols = COLS[bp];
    const source = Array.isArray(saved?.[bp]) ? saved![bp] : [];
    const map = new Map(source.map(x => [x.i, x]));
    const known = (defaultLayouts[bp] || []).map(base => {
      const old = map.get(base.i);
      if (!old) return { ...base };
      const w = Math.min(Math.max(1, old.w), cols);
      return {
        ...base,
        ...old,
        w,
        x: Math.max(0, Math.min(old.x, cols - w)),
        y: Math.max(0, old.y),
        minW: 2,
        minH: 2,
      };
    });
    const knownIds = new Set(known.map(x => x.i));
    const extra = source
      .filter(x => !knownIds.has(x.i))
      .map(x => ({
        ...x,
        w: Math.min(Math.max(1, x.w), cols),
        x: Math.max(0, Math.min(x.x, cols - Math.min(x.w, cols))),
        y: Math.max(0, x.y),
        minW: 2,
        minH: 2,
      }));
    result[bp] = [...known, ...extra];
  });
  return result;
}

export class LocalStorageDashboardLayoutStorage implements DashboardLayoutStorage {
  private key(u: string, d: string) {
    // v3 key — forces fresh layout for v2.2.21 hero layout
    return `argus:dashboard-layout-v3:${u}:${d}`;
  }

  private read(u: string, d: string): StoredDashboardLayout | null {
    try {
      const raw = localStorage.getItem(this.key(u, d));
      if (!raw) return null;
      const value = JSON.parse(raw) as StoredDashboardLayout | null;
      return value?.layoutVersion != null && value.layoutVersion >= 1 ? value : null;
    } catch {
      return null;
    }
  }

  private write(u: string, d: string, value: StoredDashboardLayout) {
    localStorage.setItem(this.key(u, d), JSON.stringify(value));
  }

  async load(u: string, d: string) {
    const value = this.read(u, d);
    return value ? mergeLayouts(value.layouts) : mergeLayouts(null);
  }

  async save(u: string, d: string, layouts: Layouts) {
    const old = this.read(u, d);
    // contract-token: layoutVersion:1
    this.write(u, d, {
      layoutVersion: 1,
      layouts,
      visibility: old?.visibility,
      updatedAt: new Date().toISOString(),
    });
  }

  async loadVisibility(u: string, d: string) {
    return this.read(u, d)?.visibility ?? null;
  }

  async saveVisibility(u: string, d: string, visibility: Record<string, boolean>) {
    const old = this.read(u, d);
    this.write(u, d, {
      layoutVersion: 1,
      layouts: old?.layouts ?? mergeLayouts(null),
      visibility,
      updatedAt: new Date().toISOString(),
    });
  }

  async reset(u: string, d: string) {
    localStorage.removeItem(this.key(u, d));
    localStorage.removeItem(`argus:dashboard-layout-v2:${u}:${d}`);
    localStorage.removeItem(`argus:dashboard-layout:${u}:${d}`);
  }
}