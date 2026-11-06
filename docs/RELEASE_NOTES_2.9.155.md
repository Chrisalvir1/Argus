# Argus 2.9.155 — reducción de repintado en Safari

## Cambio

- En navegadores WebKit como Safari, las tarjetas grandes conservan el vidrio y la iluminación, pero dejan de desplazarse con `transform` al pasar el cursor.
- La capa de brillo de `.entry` conserva su gradiente con composición normal y ya no usa `mix-blend-mode: soft-light`.
- Se busca evitar la recomposición repetida de la tarjeta durante el scroll y el rebote elástico en los extremos.

## Verificación local

- Build Vite aprobado y TypeScript sin errores.
- `git diff --check` aprobado.
- Se debe confirmar el resultado visual con scroll rápido en Safari nativo; la terminal no automatiza ni demuestra esa percepción visual.
- El bootstrap local referencia `2.9.155`; no es una publicación ni despliegue.
