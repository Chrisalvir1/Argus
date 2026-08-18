import type React from 'react';
import type{Layout,Layouts}from'react-grid-layout';

export type ArgusWidgetSize='S'|'M'|'L'|'XL';
export type ArgusBreakpoint='lg'|'md'|'sm'|'xs'|'xxs';
export type ArgusWidgetKind='activity-history'|'automations'|'backup-restore'|'access-control'|'alarm-configuration'|'security-status'|'custom';

export interface ArgusWidgetDefinition{
  id:string;
  nativeId:string;
  kind:ArgusWidgetKind;
  title:string;
  icon?:React.ReactNode;
  size:ArgusWidgetSize;
  minSize?:ArgusWidgetSize;
  maxSize?:ArgusWidgetSize;
  locked?:boolean;
  visible:boolean;
  t?:(key:string)=>string;
}

export interface StoredWidgetLayout{userId:string;dashboardId:string;breakpoint:ArgusBreakpoint;widgetId:string;x:number;y:number;w:number;h:number;size:ArgusWidgetSize;updatedAt:string}
export interface StoredDashboardLayout{layoutVersion:1;layouts:Layouts;visibility?:Record<string,boolean>;updatedAt:string}
export interface DashboardLayoutStorage{load(userId:string,dashboardId:string):Promise<Layouts|null>;save(userId:string,dashboardId:string,layouts:Layouts):Promise<void>;reset(userId:string,dashboardId:string):Promise<void>;loadVisibility?(userId:string,dashboardId:string):Promise<Record<string,boolean>|null>;saveVisibility?(userId:string,dashboardId:string,visibility:Record<string,boolean>):Promise<void>}
export type{Layout,Layouts};