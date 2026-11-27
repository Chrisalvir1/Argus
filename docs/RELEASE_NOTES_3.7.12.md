# Argus v3.7.12

Candidato de mantenimiento basado en v3.7.11. Sincroniza el manifiesto, la versión de Python y la URL del bundle. Consulta el [PR #64](https://github.com/Chrisalvir1/Argus/pull/64) para el estado de las comprobaciones.

## Distribución y frontend

- Usa pnpm con lockfile congelado en CI. El workflow de publicación exige la misma versión en el manifiesto de Home Assistant, `package.json` y el tag.
- Limpia artefactos y scripts temporales. El panel y la tarjeta activos se trasladan de `src/legacy` a `src/panel`.
- Reduce el logo del panel a 40.661 bytes. Vite carga Three.js bajo demanda y el menú de perfil ofrece Modo Lite, que usa SVG y CSS. La preferencia del sistema de reducir movimiento evita iniciar WebGL.
- En la primera medición el JS inicial ocupa aproximadamente 1,24 MB en crudo y 298 kB con gzip, incluidos los imports estáticos. Three.js y su renderer quedan fuera de esa transferencia inicial en Modo Lite.
