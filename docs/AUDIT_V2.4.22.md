# Auditoría y reparación de Argus v2.4.22

Fecha: 1 de octubre de 2026. Revisión del tag `v2.4.22` (`cae39d82`) en la integración de Home Assistant, API WebSocket, autenticación, persistencia, dashboard React, controles de alarma, dependencias y workflows de GitHub Actions.

## Hallazgos corregidos

- **Alto — bloqueo al guardar un PIN de acceso.** El endpoint llamaba a `_authenticate_profile`, símbolo inexistente. Usa ahora la sesión Argus autenticada y conserva la invalidación de sesiones luego del cambio.
- **Alto — rechazo de PIN informado como éxito.** El panel de alarma devolvía sin error ante PIN inválido, PIN omitido o límite de intentos. Home Assistant podía responder como si la orden hubiera terminado bien. Ahora la acción informa el rechazo y el frontend muestra el error.
- **Alto — PIN de coacción activaba SOS audible.** La antigua ruta invocaba el disparador de pánico, que enciende sirenas y envía la alerta sonora SOS. La ruta corregida conserva el desarmado, genera el evento `argus_duress_activated`, registra auditoría crítica y envía un aviso prioritario sin encender sirenas.
- **Medio — verificación y compatibilidad de PIN.** El verificador del PIN maestro no limitaba intentos; ahora comparte el bloqueo tras cinco fallos durante cinco minutos. Se reconocen hashes PBKDF2 de instalaciones sin soporte scrypt, incluidos hashes antiguos incorrectamente etiquetados, y los nuevos hashes declaran su algoritmo.
- **Medio — cambio de nombre de usuario podía separar el perfil de sus hashes PIN.** La conservación de credenciales redacted ahora se vincula al ID estable del perfil. Los campos explícitamente vacíos siguen permitiendo retirar un PIN.
- **Medio — comandos WebSocket de archivos multimedia no se registraban ni verificaban administrador.** Se registran los comandos compatibles con el cliente antiguo y se verifica el rol de Home Assistant antes de consultar o modificar archivos.
- **Medio — selector de perfil llamaba a un tipo WebSocket que no existía.** Ahora usa `argus/login_bootstrap`; las llamadas del panel también incluyen el `entry_id` actual cuando el contrato lo requiere.
- **Medio — gestión del PIN al armar.** El backend rechazaba el PIN erróneo, pero el panel ocultaba ese rechazo y tampoco abría el teclado cuando se había configurado PIN al armar. Se expone una marca propia de Argus sin cambiar la señal `code_arm_required` que usa HomeKit y el panel solicita y envía el PIN.
- **Medio — persistencia de diseños.** Los cambios de visibilidad y de distribución podían pisar el estado más reciente del servidor; errores al guardar quedaban sin presentar y datos locales malformados podían generar posiciones inválidas. La combinación se fusiona ahora en el servidor, se serializa cada escritura, se filtran layouts corruptos y la UI presenta errores de guardado y carga.
- **Medio — estados de sensores y pantallas angostas.** Sensores sin estado podían aparecer cerrados y la grilla comprimía los nombres hasta separarlos letra a letra. Ahora se muestran como no disponibles; se probaron anchos de 390 y 1440 píxeles. Las acciones de modo se desactivan cuando la conexión se pierde o la alarma no está disponible.
- **Bajo — ciclo de vida del panel.** Tareas de presencia antiguas podían limpiar una tarea nueva del mismo tipo; el panel dejaba raíces React y listeners táctiles conectados al cerrarse. Ambas rutas ahora limpian los recursos correctos.
- **Bajo — errores estáticos y de build.** Se corrigió un nombre indefinido para los modos de color, se importó `Any` faltante, se retiró una implementación duplicada del callback de armado y se sustituyó la opción de bundling deprecada.

## Dependencias y CI

El inventario de npm no encuentra paquetes desactualizados en el manifiesto: las demás dependencias ya están en sus versiones estables publicadas. Se fijaron Vite `8.3.2` y Vitest `5.0.3`, se regeneró el lockfile y `npm audit` no reporta vulnerabilidades. Dependabot ahora también vigila npm semanalmente. Los workflows usan las versiones principales estables actuales de GitHub Actions; el workflow de validación cubre Python 3.12, 3.13 y 3.14, que son las versiones aceptadas por `pyproject.toml`.

## Validación y alcance

- Python 3.12.14: 114 pruebas; todas pasan y 13 pruebas antiguas quedan omitidas porque cubren la arquitectura previa sustituida por TypeScript.
- TypeScript 7.0.2: comprobación estricta correcta.
- Vitest: 3 archivos, 8 pruebas correctas.
- Vite: bundle de producción correcto, 958 kB sin comprimir y 231 kB gzip.
- Bandit: ningún hallazgo medio o alto; seis avisos de severidad baja, principalmente excepciones capturadas intencionalmente.
- `npm audit --audit-level=high`: cero vulnerabilidades; `git diff --check`: sin errores.
- La consola se comprobó en navegador con estados desarmada, armando, vacaciones y no disponible, también sin conexión. Sin errores de consola.

HACS y hassfest se ejecutan en GitHub Actions y no se han confirmado en un servidor Home Assistant instalado. La auditoría estática de Bandit cubrió los 6.764 renglones de Python medidos por la herramienta. Los trece tests omitidos se conservan y sus áreas requieren regresión bajo la arquitectura actual.
