# Argus 2.9.156 — pausa estable del núcleo durante scroll

## Cambio

- El render del núcleo tolera salidas breves del viewport durante el scroll antes de pausar la animación.
- El ajuste adaptativo de calidad conserva su historial entre esos cambios rápidos de visibilidad.
- Si el núcleo permanece fuera de pantalla, la animación sigue pausándose para liberar trabajo gráfico.

## Verificación local

- Build Vite generado para `custom_components/argus/www/react-dist/argus-frontend.js`.
- El bootstrap local referencia la versión `2.9.156` para evitar que el navegador reutilice el bundle anterior.
- No se modificó la geometría ni la política de seguridad del núcleo.
- El servidor de Home Assistant local sigue en el puerto `8123`.
