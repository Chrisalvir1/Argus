# Release Notes: Argus Home Hub v2.0.25

Version 2.0.25 includes several user interface refinements and robustness improvements for mobile devices, originally introduced as experimental fixes and now integrated natively into the core dashboard.

## Improvements & Fixes
- **Mobile Dashboard Polish**: The main dashboard hero section and security control layouts have been redesigned to adapt much better to small mobile screens, eliminating horizontal scroll and overlap issues.
- **Improved Clock Precision**: The dashboard clock and date components now render with pixel-perfect alignment and wrap gracefully on small displays.
- **Activity History Enhancements**: The activity log on mobile now correctly limits its maximum height, enabling smooth vertical scrolling without expanding the dashboard unnecessarily.
- **Enhanced PIN Visibility**: Contrast for text inside the PIN pad (both labels and input fields) has been significantly improved.
- **Native SVG Rendering**: The glowing shield animation filters are now computed using native boundaries, preventing cut-offs on the edges of the SVG viewBox.
- **Background Upload Flexibility**: Custom background uploads now explicitly accept video and image types (including HEIC, HEIF, GIF, MP4, and WEBM) natively in the file selection dialog without relying on camera capture fallback.
- **HomeKit Arming Flow**: Verified that during the arming delay, HomeKit will remain in the "Arming" state and not prematurely transition to "Away". (This relies on the pre-existing `code_arm_required` fix ensuring the integration doesn't bounce immediately back to disarmed).

## Technical Changes
- Deprecated and removed the runtime UI patch `argus-runtime-visual-fixes.js`. All of its logic is now built directly into the `argus-panel.js` Web Component.

_Special thanks to Notion AI and Chrisalvir for contributing the initial mobile UX refinements via MCP._

## Nuevas Funciones
- **Personalización de Fondos por Perfil**: Ahora cada perfil puede decidir de manera independiente si usa el fondo predeterminado o uno personalizado, sin afectar al resto de los perfiles de Argus.
- **Batería Real en Sensores (Liquid Glass)**: Los sensores activos en la consola muestran el estado de batería en tiempo real. Cuando la batería baja al 10% o menos, el icono parpadea en rojo, y si llega al 0% mostrará 🔋 ❌.
- **Sincronización con Alarmas Externas**: Argus ahora puede configurarse (desde Configuración -> Opciones en HA) para disparar automáticamente paneles externos o sirenas en caso de intrusión o pánico (SOS). Al desarmarse Argus o detener el SOS, se detendrán los paneles vinculados también.
