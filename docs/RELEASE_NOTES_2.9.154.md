# Argus 2.9.154 — estabilidad de scroll Safari

Fecha: 5 de noviembre de 2026.

## Cambios

- Se retira la máscara radial WebKit redundante de las tarjetas `.entry`; el radio y `overflow` existentes siguen recortando el vidrio y se evita una superficie de composición potencialmente innecesaria.
- El observador del núcleo mantiene el renderizador activo hasta 160 px fuera del viewport para evitar suspender y reanudar repetidamente al cruzar el borde durante scroll rápido.
- Se conserva el blur, la apariencia premium, la órbita y el ahorro de recursos cuando el panel queda fuera del margen.

## Verificación

- TypeScript aprobado.
- 80 pruebas frontend aprobadas (18 archivos).
- Build aprobado.
- Bundle servido en `http://127.0.0.1:8123` coincide byte a byte con el bundle local; el bootstrap servido referencia `2.9.154`.
- La fluidez debe comprobarse visualmente en Safari nativo con scroll real; no se afirma como validada solo por las pruebas automatizadas.

Versionado local; no es una publicación ni un despliegue.
