# Argus Home Hub v2.6.1 — Correcciones de consola y pantalla nocturna

Fecha: 7 de octubre de 2026.

## Cambios

- Corregir la paleta: Casa naranja, Ausente rojo y Noche azul en controles y estado de armado.
- Corregir texto del modo seleccionado, nombre del hogar y superficies en alto contraste.
- Unificar la forma de la cabecera, reducir el nombre del hogar y mostrar «Argus en línea» / «Argus desconectado» según conexión HA.
- Mostrar sensores del modo activo, incluidos los omitidos, sin sustituir listas vacías por todos los modos; exponer triggered_mode para conservar el contexto de alarma.
- Renovar el SVG del escudo con capas, símbolos por estado y animaciones finitas que respetan movimiento reducido.
- Aclarar el contador de la prueba de sensores y que esta prueba abarca todos los modos.
- Simplificar ajustes nocturnos y plegar opciones avanzadas.
- Añadir varias luces como fuente nocturna: todas deben estar apagadas y disponibles.
- Intentar leer AmbientLightSensor del dispositivo cuando el navegador lo permita; alternativas mediante sensor HA, luces o horario y limpieza del sensor al salir.

## Compatibilidad y validación

No cambia Node, Python ni dependencias. La lectura del sensor propio requiere API web disponible, contexto seguro, permisos y soporte del dispositivo. No garantiza acceso al sensor del Echo Show con LineageOS/Free Kiosk. Sin entidad de brillo físico, se atenúa la interfaz. Verificación local de TypeScript, compilación frontend y sintaxis Python; validación en HA real pendiente.
