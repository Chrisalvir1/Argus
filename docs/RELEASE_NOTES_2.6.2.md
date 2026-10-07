# Argus Home Hub v2.6.2 — Emblemas y respuesta visual

Fecha: 7 de octubre de 2026.

## Cambios

- Mejorar cabecera: nombre de hogar proporcionado, indicador de conexión Argus en línea/desconectado y ajuste de pantalla completa horizontal.
- Añadir núcleo de seguridad como emblema predeterminado y opciones Escudo de cristal / Emblema Argus por perfil.
- Animar el núcleo con anillo lento, respiración leve y cambio 3D del símbolo. Paleta: verde desarmado, naranja casa, rojo ausente, azul noche.
- Añadir respuesta háptica visual breve al abrir sensor y un pulso marcado para SOS, sin repetir con cada actualización HA.
- Simplificar ajustes del modo nocturno y explicar condiciones que impiden activarlo.
- Añadir sensor AmbientLightSensor del dispositivo cuando el navegador lo soporte y selector de varias luces como fuentes para modo nocturno.
- Respetar alto contraste, movimiento reducido y modo de rendimiento esencial.

## Compatibilidad y validación

La vibración del emblema es visual. La vibración física de iOS requiere un contenedor nativo que use Core Haptics/UIKit; no se incluye en esta versión. AmbientLightSensor depende de soporte, permisos y contexto seguro del navegador. No se ha comprobado el sensor del Echo Show con LineageOS/Free Kiosk en hardware real.

Validación local: TypeScript, compilación frontend, sintaxis Python e integridad del ZIP. Prueba en HA/dispositivos físicos pendiente.
