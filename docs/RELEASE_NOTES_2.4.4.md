# Argus Home Hub v2.4.4 — Parche Global de Activos de Marca para HACS y Cero FOUC

## 🚀 Lo Nuevo en v2.4.4

Argus v2.4.4 soluciona definitivamente el problema del logo en HACS y la carga sin estilos (pantalla en blanco y negro) en arranques en frío:

### 🛡️ Redirección Global de Marca para HACS (`argus-brand-patch.js`)
- **Bypass del CDN Externo de HACS**: El frontend de HACS solicita de forma codificada `https://brands.home-assistant.io/_/argus/dark_icon.png` directamente a los servidores externos de Home Assistant (los cuales no aceptan PRs para componentes personalizados desde HA 2026.3).
- **Intercepción de Imagen en Tiempo de Ejecución**: Argus registra globalmente `argus-brand-patch.js` a través de `add_extra_js_url` y recursos de Lovelace. El script intercepta en tiempo real las asignaciones de `src` en prototipos de imagen (`HTMLImageElement.prototype.src`), `setAttribute`, `fetch` y `MutationObserver`, redirigiendo cualquier petición de marca de Argus hacia `/api/argus_static/brand/dark_icon.png` (o `icon.png`, `logo.png`, `dark_logo.png`).
- **Visualización Inmediata del Escudo**: El escudo oficial de Argus se muestra de manera nativa en el panel de HACS sin esperar a parches externos ni a upstream PRs.

### ⚡ Eliminación de FOUC (Carga sin Estilos) en Inicio
- **Eliminación de Fuentes Bloqueantes en Shadow DOM**: Se retiró la directiva `@import` externa dentro del `<style>` de Shadow DOM, evitando bloqueos de renderizado y pausas de 1 a 2 segundos con textos en blanco y negro.
- **Protección Inline de Elementos**: Los contenedores principales cuentan con estilos inline directos (`style="display:none !important;"` y cortina oscura `#080d1a`), asegurando que jamás se muestre texto crudo o sin diseño durante el arranque en frío.

---

## 📦 Actualización

### Mediante HACS
1. En **HACS → Integraciones → Argus Home Hub**, pulsa en los tres puntos (⋮) y selecciona **Actualizar información**.
2. Pulsa en los tres puntos (⋮), selecciona **Volver a descargar** y elige **v2.4.4**.
3. Reinicia Home Assistant (**Ajustes → Sistema → Reiniciar**).
