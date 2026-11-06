import type React from 'react';
import type { LayoutItem, ResponsiveLayouts } from 'react-grid-layout/legacy';

/** Kept only to read old widget definitions; editing no longer uses size presets. */
export type ArgusWidgetSize = 'S' | 'M' | 'L' | 'XL';
export type ArgusBreakpoint = 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
export type ArgusWidgetKind =
  | 'activity-history'
  | 'automations'
  | 'backup-restore'
  | 'access-control'
  | 'alarm-configuration'
  | 'security-status'
  | 'custom';

export interface Layout extends LayoutItem {
  /** Legacy field, ignored by the freeform editor. */
  size?: ArgusWidgetSize;
}

export type Layouts = ResponsiveLayouts<ArgusBreakpoint>;

export interface ArgusWidgetDefinition {
  id: string;
  nativeId?: string;
  kind: ArgusWidgetKind;
  title: string;
  icon?: React.ReactNode;
  size: ArgusWidgetSize;
  minSize?: ArgusWidgetSize;
  maxSize?: ArgusWidgetSize;
  locked?: boolean;
  visible: boolean;
  t?: (key: string) => string;
  content?: React.ReactNode;
}

export interface StoredWidgetLayout {
  userId: string;
  dashboardId: string;
  breakpoint: ArgusBreakpoint;
  widgetId: string;
  x: number;
  y: number;
  w: number;
  h: number;
  size: ArgusWidgetSize;
  updatedAt: string;
}

export interface StoredDashboardLayout {
  layoutVersion: 1 | 4 | 5;
  layouts: Layouts;
  visibility?: Record<string, boolean>;
  updatedAt: string;
}

export type DashboardLayoutBreakpoint = 'desktop' | 'tablet' | 'mobile';

export interface StoredDashboardLayoutV3 {
  layoutVersion: 3;
  layouts: Record<DashboardLayoutBreakpoint, Layout[]>;
  visibility: Record<string, boolean>;
  updatedAt: string;
  revision: number;
}

/** Full React Grid breakpoint state; V4 preserves every responsive layout. */
export interface StoredDashboardLayoutV4 {
  layoutVersion: 4;
  layouts: Layouts;
  visibility: Record<string, boolean>;
  updatedAt: string;
  revision: number;
}

/** Dense geometry used by the freeform editor (small spatial steps, no presets). */
export interface StoredDashboardLayoutV5 {
  layoutVersion: 5;
  layouts: Layouts;
  visibility: Record<string, boolean>;
  updatedAt: string;
  revision: number;
}

export interface DashboardLayoutStorage {
  load(userId: string, dashboardId: string): Promise<Layouts | null>;
  save(userId: string, dashboardId: string, layouts: Layouts, visibility?: Record<string, boolean>): Promise<void>;
  reset(userId: string, dashboardId: string): Promise<void>;
  loadVisibility?(userId: string, dashboardId: string): Promise<Record<string, boolean> | null>;
  saveVisibility?(userId: string, dashboardId: string, visibility: Record<string, boolean>): Promise<void>;
}

export type { LayoutItem, ResponsiveLayouts };
