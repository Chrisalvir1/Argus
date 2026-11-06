import { applyNightMode } from '../features/night';
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
import { applyMoreInfoHook } from '../features/more-info/hook';


import type{ArgusPanelConstructor}from'../core/panel';

 export function applyArgusFrontend(value?:CustomElementConstructor|undefined):void{
   if(!value) value = customElements.get('argus-panel-v2018');
  const C=value as ArgusPanelConstructor|undefined;
  if(!C||C.__argusTypedFrontend)return;
  C.__argusTypedFrontend=true;
  applySecurityClient(C);
  applyMediaClient(C);
  applyPremiumExperience(C);
   applyMotionSystem(C);
   applyStableInstancesRender(C);
   applyV2050AlarmVisuals(C);
   applyMoreInfoHook(C);
  applyReactDashboardLayout(C);
  applyReactSecurityConsole(C);
  applyNightMode(C);
 }
