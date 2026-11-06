# Argus 2.9.153 — fluidez del núcleo y fullscreen

Fecha: 5 de noviembre de 2026.

## Cambios

- La calidad adaptativa y los cambios de tamaño se aplican antes del siguiente render WebGL. Evita borrar el fotograma recién dibujado al cambiar el buffer.
- El panel conserva una identidad React estable al entrar/salir de pantalla completa, evitando desmontar y reconstruir el núcleo en paneles seleccionados.
- Se agrega una regresión dirigida para la identidad del panel y el destino fullscreen.

## Verificación

- TypeScript, build y 79 pruebas frontend aprobadas.
- Bundle reconstruido y servido por `http://127.0.0.1:8123`.
- La fluidez visual sostenida en Safari aún requiere verificación directa en esa pestaña.

Versionado local; no es una publicación ni un despliegue.
