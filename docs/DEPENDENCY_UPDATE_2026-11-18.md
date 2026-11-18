# Actualización de dependencias — Argus

Estado: cambios incorporados a la candidata v3.7.10, con publicación por GitHub Actions al crear el tag. Base: 5ba7a836468f73ae6257088d917f69b50dd137a3

## Cambios

Vite8.3.8 y plugin React6.3.0; Node 26.13.1; uv0.13.9, HA2026.11.2 y acciones estables. Se conservaron y sincronizaron ambos lockfiles existentes.

## Validación

TypeScript 7.0.2,79 pruebas frontend, compilación;299 pruebas backend aisladas sin módulos fallidos;4 pruebas con HA2026.11.2. npm ci y lock pnpm congelado correctos.

## Manifiestos modificados

| Archivo | Grupo | Dependencia | Antes | Ahora |
|---|---|---|---|---|
| `package.json` | devDependencies | @vitejs/plugin-react | `^6.2.1` | `^6.3.0` |
| `package.json` | devDependencies | vite | `^8.3.6` | `^8.3.8` |
| `package.json` | engines | node | `>=26.13.0 <27` | `>=26.13.1 <27` |

## Alcance

No se modificaron Chrisalvir Pro, Omni Broadlink, Fan BLE Home ni brands. No se actualizó el Node del host Camera.UI ni se modificaron instalaciones de producción. Los plugins requieren que su host cumpla Node>=26.13.1<27 antes de instalar esta actualización.
