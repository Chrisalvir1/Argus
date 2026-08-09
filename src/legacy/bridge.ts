import{applyUiAuditFixes}from'./argus-ui-audit-fixes';
import{applyGridPolish}from'./argus-grid-polish';
import{applyFullscreenPolish}from'./argus-fullscreen-polish';
import{applyV2012AuditFixes}from'./argus-v2013-audit-fixes';
import{applyPerformanceProfile}from'./argus-performance-profile';
import{applyVisualContainerFixes}from'./argus-visual-container-fixes';
import{applyCompleteContentFixes}from'./argus-complete-content-fixes';
import{applyRuntimeVisualFixes}from'./argus-runtime-visual-fixes';
import{applyBgSensorAvailabilityFixes}from'./argus-bg-sensor-availability-fixes';
import{applyBatteryUiFixes}from'./argus-battery-ui-fixes';
import{applyDeepRepair}from'./argus-deep-repair';
import{applyLightCapabilityFixes}from'./argus-light-capability-fixes';
import{applyPersonalizationToggleFix}from'./argus-personalization-toggle-fix';
import{applyDashboardScrollFixes}from'./argus-dashboard-scroll-fixes';
import{applyV2041AuditRepair}from'./argus-v2041-audit-repair';
import{applyV2042Stability}from'./argus-v2042-stability';
import{applyV2043VisualFix}from'./argus-v2043-visual-fix';
import{applyV2045TriggerSensors}from'./argus-v2045-trigger-sensors';
import{applyV2046ActiveVisuals}from'./argus-v2046-active-visuals';
import type{ArgusPanelConstructor}from'../core/panel';

export function applyLegacyBeforeTypedClients(C:ArgusPanelConstructor):void{applyUiAuditFixes(C)}
export function applyLegacyAfterTypedClients(C:ArgusPanelConstructor):void{
 applyGridPolish(C);applyFullscreenPolish(C);applyV2012AuditFixes(C);applyPerformanceProfile(C);applyVisualContainerFixes(C);applyCompleteContentFixes(C);applyRuntimeVisualFixes(C);applyBgSensorAvailabilityFixes(C);applyBatteryUiFixes(C);applyDeepRepair(C);applyLightCapabilityFixes(C);applyPersonalizationToggleFix(C);applyDashboardScrollFixes(C);applyV2041AuditRepair(C);applyV2042Stability(C);applyV2043VisualFix(C);applyV2045TriggerSensors(C);applyV2046ActiveVisuals(C);
}
