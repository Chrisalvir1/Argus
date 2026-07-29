### Mejoras Visuales
- **Premium Experience (WebGL):** Se ha corregido la precisión de los shaders matemáticos (`highp float`) para eliminar el defecto visual (patrón Moiré) al escalar el fondo estrellado a pantalla completa en monitores de alta resolución.
- **Tarjetas de Sensores:** Se ha rediseñado la cuadrícula CSS por contenedores Flexbox. Ahora los indicadores LED y los estados de los sensores están perfectamente alineados verticalmente, mejorando la estética del panel derecho.

### Estabilidad y Baterías
- **Filtro Inteligente de Energía AC:** Argus ahora ignorará falsos reportes de "batería baja" provenientes de dispositivos permanentemente conectados a la red eléctrica (enchufes, luces, `dimmers`, e interruptores) resolviendo la falsa alarma con los `Dimmer Café`.

### Sistema de Seguridad
- **Candado Estricto de Modos Ausente/Vacaciones:** Se ha añadido una regla de validación rígida para transiciones de seguridad. Si el sistema está armado en modo **Ausente** o **Vacaciones**, Argus bloqueará automáticamente cualquier automatización (o dispositivo HomeKit) que intente degradar el nivel de seguridad a modos inferiores (`Casa` o `Noche`). Para salir de este nivel, el sistema debe ser **Desarmado explícitamente** primero. 
- **Compatibilidad de Desarmado**: Al salir de un modo estricto, Argus pedirá el PIN solamente si tienes configurado que el PIN es obligatorio para tu perfil; si no tienes PIN, desarmará sin pedirlo, de forma totalmente transparente.
