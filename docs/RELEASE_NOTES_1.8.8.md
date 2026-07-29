### Mejoras Visuales y de Interfaz
- **Alineación de Tarjetas a Pantalla Completa:** Se ha eliminado un límite rígido de anchura y desbordamiento en CSS que estaba recortando las tarjetas de los sensores en el lado izquierdo cuando el panel se ponía en pantalla completa en modo horizontal (`ios-fullscreen`). Ahora las tarjetas se adaptan al ancho dinámicamente sin cortar los indicadores LED ni el nombre.

### Historial de Actividad
- **Nota de uso:** El historial de actividad integrado (auditoría forense) se encuentra dentro de la sección **Usuarios y Control de Acceso** del propio panel Argus. Para verlo, haz clic en la pestaña "Usuarios" o en la rueda de configuración de la interfaz para desplegar el panel derecho, donde aparecerá el registro completo de quién armó, desarmó, y los errores de PIN. El registro está diseñado para no saturar la pantalla principal (Home).
