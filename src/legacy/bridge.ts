import{applyUiAuditFixes}from'../../custom_components/argus/www/argus-ui-audit-fixes.js';
import{applyGridPolish}from'../../custom_components/argus/www/argus-grid-polish.js';
import{applyFullscreenPolish}from'../../custom_components/argus/www/argus-fullscreen-polish.js';
import{applyV2012AuditFixes}from'../../custom_components/argus/www/argus-v2013-audit-fixes.js';
import{applyPerformanceProfile}from'../../custom_components/argus/www/argus-performance-profile.js';
import{applyVisualContainerFixes}from'../../custom_components/argus/www/argus-visual-container-fixes.js';
import{applyCompleteContentFixes}from'../../custom_components/argus/www/argus-complete-content-fixes.js';
import{applyRuntimeVisualFixes}from'../../custom_components/argus/www/argus-runtime-visual-fixes.js';
import{applyBgSensorAvailabilityFixes}from'../../custom_components/argus/www/argus-bg-sensor-availability-fixes.js';
import{applyBatteryUiFixes}from'../../custom_components/argus/www/argus-battery-ui-fixes.js';
import{applyDeepRepair}from'../../custom_components/argus/www/argus-deep-repair.js';
import{applyLightCapabilityFixes}from'../../custom_components/argus/www/argus-light-capability-fixes.js';
import{applyPersonalizationToggleFix}from'../../custom_components/argus/www/argus-personalization-toggle-fix.js';
import{applyDashboardScrollFixes}from'../../custom_components/argus/www/argus-dashboard-scroll-fixes.js';
import{applyV2041AuditRepair}from'../../custom_components/argus/www/argus-v2041-audit-repair.js';
import{applyV2042Stability}from'../../custom_components/argus/www/argus-v2042-stability.js';
import{applyV2043VisualFix}from'../../custom_components/argus/www/argus-v2043-visual-fix.js';
import{applyV2045TriggerSensors}from'../../custom_components/argus/www/argus-v2045-trigger-sensors.js';
import{applyV2046ActiveVisuals}from'../../custom_components/argus/www/argus-v2046-active-visuals.js';
import{applyV2049ResponsiveWidgets}from'../../custom_components/argus/www/argus-v2049-responsive-widgets.js';
import{applyMotionSystem}from'../../custom_components/argus/www/argus-motion-system.js';
import{applyStableInstancesRender}from'../../custom_components/argus/www/argus-v2050-stable-render.js';
import{applyV2050AlarmVisuals}from'../../custom_components/argus/www/argus-v2050-alarm-visuals.js';
import{applyV2050WidgetLayouts}from'../../custom_components/argus/www/argus-v2050-widget-layouts.js';
import type{ArgusPanelConstructor}from'../core/panel';

export function applyLegacyBeforeTypedClients(C:ArgusPanelConstructor):void{applyUiAuditFixes(C)}
export function applyLegacyAfterTypedClients(C:ArgusPanelConstructor):void{
 applyGridPolish(C);applyFullscreenPolish(C);applyV2012AuditFixes(C);applyPerformanceProfile(C);applyVisualContainerFixes(C);applyCompleteContentFixes(C);applyRuntimeVisualFixes(C);applyBgSensorAvailabilityFixes(C);applyBatteryUiFixes(C);applyDeepRepair(C);applyLightCapabilityFixes(C);applyPersonalizationToggleFix(C);applyDashboardScrollFixes(C);applyV2041AuditRepair(C);applyV2042Stability(C);applyV2043VisualFix(C);applyV2045TriggerSensors(C);applyV2046ActiveVisuals(C);applyV2049ResponsiveWidgets(C);applyMotionSystem(C);applyStableInstancesRender(C);applyV2050AlarmVisuals(C);applyV2050WidgetLayouts(C);
}
