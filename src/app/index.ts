import{applyReactDashboardLayout}from'../features/dashboard';
import{applyMediaClient}from'../features/media/client';
import{applySecurityClient}from'../features/security/client';
import{applyLegacyAfterTypedClients,applyLegacyBeforeTypedClients}from'../legacy/bridge';
import type{ArgusPanelConstructor}from'../core/panel';

export function applyArgusFrontend(value:CustomElementConstructor|undefined):void{
 const C=value as ArgusPanelConstructor|undefined;
 if(!C||C.__argusTypedFrontend)return;
 C.__argusTypedFrontend=true;
 applyLegacyBeforeTypedClients(C);
 applySecurityClient(C);
 applyMediaClient(C);
 applyLegacyAfterTypedClients(C);
 applyReactDashboardLayout(C);
}
