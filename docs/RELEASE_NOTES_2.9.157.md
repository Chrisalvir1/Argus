# Argus 2.9.157 — calidad gráfica estable durante scroll

## Cambio

- Conserva la órbita del núcleo durante el desplazamiento.
- Descarta muestras de cadencia contaminadas por scroll y retrasa los ajustes de calidad hasta que la página se estabilice.
- Evita que una caída temporal de cuadros durante el scroll provoque una reasignación del buffer WebGL.
- No cambia el diseño, la geometría ni la lógica de seguridad.

## Verificación

- `npm run build`: aprobado con Node 26.13 local.
- `npm test`: 80 pruebas aprobadas (18 archivos).
- El SHA-256 del bundle local y el servido por `http://127.0.0.1:8123` coincide: `fee207e707a31932a959c2f6c1eac8fd256987440504f076ee44fa88e57939b5`.
- Safari nativo: verificación visual del scroll rápido pendiente. El cambio evita la reasignación adaptativa del buffer durante scroll, pero no se declara eliminado el parpadeo hasta observarlo en Safari.
