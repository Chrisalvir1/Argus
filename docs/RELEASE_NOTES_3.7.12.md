# Argus v3.7.12

Candidato de mantenimiento basado en v3.7.11. Sincroniza el manifiesto, la versión de Python y la URL del bundle. Consulta el [PR #64](https://github.com/Chrisalvir1/Argus/pull/64) para el estado de las comprobaciones.

## Distribución y frontend

- Usa pnpm con lockfile congelado en CI. El workflow de publicación exige la misma versión en el manifiesto de Home Assistant, `package.json` y el tag.
- Limpia artefactos y scripts temporales. El panel y la tarjeta activos se trasladan de `src/legacy` a `src/panel`.
- Reduce el logo del panel a 40.661 bytes. Vite carga Three.js bajo demanda y el menú de perfil ofrece Modo Lite, que usa SVG y CSS. La preferencia del sistema de reducir movimiento evita iniciar WebGL.
- El JS inicial hasta el selector de perfiles ocupa 398.435 bytes en crudo, incluidos bootstrap, script de marca e imports estáticos. Vite impone el límite de 400.000 bytes. El tablero React y la exportación de historial usan módulos diferidos.

## Protección de PIN

- Conserva los intentos y bloqueos por instancia entre reinicios de Home Assistant. Los bloqueos repetidos aumentan de forma exponencial hasta una hora.
- Migra los PIN heredados al arrancar, incluidos los códigos maestro, de acceso, de invitado y de coacción. La verificación requiere un hash almacenado.

Consulta la [validación por archivo y las métricas del paquete](VALIDACION_3.7.12.md). El ZIP de instalación pasa de 8,23 MB a 2,80 MB.
