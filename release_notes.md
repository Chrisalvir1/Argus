# Argus v1.4.4 — Estabilidad del panel y recuperación de secciones

### 🐛 Correcciones y Mejoras de Estabilidad

- **Resiliencia ante Datos Heredados:** Corregido un fallo crítico en el cual datos antiguos, incompletos o malformados en `ui.audit_log`, `ui.users` o `ui.modes` causaban excepciones de JavaScript que detenían el renderizado del panel, dejando secciones en blanco.
- **Historial de Actividad Protegido:** Validación estricta para garantizar que `audit_log` sea un array de objetos válidos. Se realiza una conversión segura a string de campos sensibles (`action`, `detail`, `user`) y se validan las marcas de tiempo antes de su visualización. En caso de error, el panel muestra sutilmente el mensaje localizado *"Sin eventos recientes."*
- **Carga de Secciones Aislada:** Cada módulo del panel (Instancias, Historial, Automatizaciones, Modos, Notificaciones y Usuarios) ahora carga en un bloque `try/catch` individual. Si una sección falla al dibujar, las demás continuarán renderizándose sin problemas, y se registrará detalladamente el error en la consola del navegador.
- **Configuración de Modos Robustecida:** Validación exhaustiva durante la lectura y migración de configuraciones antiguas para asegurar que arrays como `sensors`, `bypassed_sensors`, `sirens` y `entry_sensors` se inicialicen vacíos si están dañados, y se respetan los parámetros funcionales existentes.
- **Usuarios y Fechas Seguras:** Limpieza de la colección de usuarios heredados ignorando valores nulos, y robustecimiento en el cálculo y formateo de expiraciones del PIN de acceso.
- **Automatizaciones Tolerantes:** Acceso seguro al estado de automatizaciones en Home Assistant para prevenir crashes cuando no hay entidades asociadas.
