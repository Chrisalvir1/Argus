import{applyReactDashboardLayout}from'../features/dashboard';
import{applyMediaClient}from'../features/media/client';
import{applySecurityClient}from'../features/security/client';
import{applyPremiumExperience}from'../features/premium';
import { applyMotionSystem } from '../features/motion';
import { applyStableInstancesRender } from '../features/render/stable';
import { applyV2050AlarmVisuals } from '../features/render/alarm';
import { applyV2049ResponsiveWidgets } from '../features/widgets/responsive';
import { applyV2050WidgetLayouts } from '../features/widgets/layouts';


import{applyLegacyAfterTypedClients,applyLegacyBeforeTypedClients}from'../legacy/bridge';
import type{ArgusPanelConstructor}from'../core/panel';

export function applyArgusFrontend(value:CustomElementConstructor|undefined):void{
 const C=value as ArgusPanelConstructor|undefined;
 if(!C||C.__argusTypedFrontend)return;
 C.__argusTypedFrontend=true;
 applyLegacyBeforeTypedClients(C);
 applySecurityClient(C);
 applyMediaClient(C);
 applyPremiumExperience(C);
  applyMotionSystem(C);
  applyStableInstancesRender(C);
  applyV2050AlarmVisuals(C);
  applyV2049ResponsiveWidgets(C);
  applyV2050WidgetLayouts(C);
 applyLegacyAfterTypedClients(C);
 applyReactDashboardLayout(C);
}
