import '../legacy/argus-panel';
import '../legacy/argus-card';
import{applyReactDashboardLayout}from'../features/dashboard';
import { applyReactSecurityConsole } from '../features/dashboard/components';
import{applyMediaClient}from'../features/media/client';
import{applySecurityClient}from'../features/security/client';
import{applyPremiumExperience}from'../features/premium';
import { applyMotionSystem } from '../features/motion';
import { applyStableInstancesRender } from '../features/render/stable';
import { applyV2050AlarmVisuals } from '../features/render/alarm';
import { applySlideToAction } from '../features/safety/slide-action';
import { applyV2049ResponsiveWidgets } from '../features/widgets/responsive';
import { applyV2050WidgetLayouts } from '../features/widgets/layouts';
import { applyMoreInfoHook } from '../features/more-info/hook';


import{applyLegacyAfterTypedClients,applyLegacyBeforeTypedClients}from'../legacy/bridge';
import type{ArgusPanelConstructor}from'../core/panel';

 export function applyArgusFrontend(value?:CustomElementConstructor|undefined):void{
   if(!value) value = customElements.get('argus-panel-v2018');
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
   applySlideToAction(C);
   applyV2049ResponsiveWidgets(C);
   applyV2050WidgetLayouts(C);
   applyMoreInfoHook(C);
  applyLegacyAfterTypedClients(C);
  applyReactDashboardLayout(C);
  applyReactSecurityConsole(C);
 }
