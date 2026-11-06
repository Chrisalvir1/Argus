# Argus 2.9.158 — Fondo estable durante el scroll en Safari

## Corrección

- El fondo de la vista principal se pinta ahora en la capa fija `#argus-canvas-bg`, en vez de usar `background-attachment: fixed` sobre el host de Home Assistant.
- Se conserva la misma imagen, el encuadre y la órbita del núcleo. El fondo sigue fijo a la ventana; la capa se oculta en modo compacto y pantalla completa, donde ya prevalecen sus fondos propios.
- La vista compacta mantiene el fondo asignado al host y usa attachment normal.

## Verificación

- TypeScript: aprobado.
- Build Vite: aprobado.
- Pruebas frontend: 80 aprobadas (18 archivos).
- En `http://127.0.0.1:8123`, bootstrap y bundle servidos coinciden byte a byte con los locales. SHA-256 bootstrap: `9d447bde5af1ae1a89f62a6c8a79eaad5a0362e9d29ddfb47deb961d28d34056`; bundle: `f806e82e591b783f33bb606e869d223db1a00cb20be9f6287228a0d0d2ae0955`.
- **Pendiente:** observar scroll rápido y rebote al inicio/final en Safari nativo con el perfil Argus abierto. La coincidencia del bundle prueba que el código está servido, no que el parpadeo haya desaparecido visualmente.
