# Argus Home Hub v2.4.2 — Eliminación Definitiva de FOUC en Arranque y Optimización de Activos de Marca

## 🚀 Lo Nuevo en v2.4.2

Argus v2.4.2 soluciona definitivamente el parpadeo de contenido sin estilo (FOUC) durante el arranque en frío de Home Assistant y optimiza la distribución de los activos de marca:

### 🛡️ Telón de Cristal Oscuro y Cero FOUC en Arranque en Frío
- **Eliminación total del diseño crudo y apiñado**: Se corrigió el problema donde, al reiniciar Home Assistant y abrir Argus inmediatamente, el navegador mostraba durante 1 a 2 segundos una interfaz en blanco y negro sin estilos con texto y tarjetas apiñadas a la izquierda antes de cargar el selector de perfiles de tvOS.
- **Contenedor `.wrap` oculto por defecto**: El layout principal del panel ahora tiene `display: none !important;` durante la inicialización, activando `display: grid !important;` únicamente cuando la sesión del usuario está autorizada y lista (`.wrap-ready`).
- **Telón de carga integrado en Shadow DOM (`#argus-initial-curtain`)**: Se añadió un telón oscuro de cristal (`#080d1a`) con el escudo de Argus pulsante y barra de progreso animada que se muestra instantáneamente al instanciar el componente y se desvanece de forma suave una vez que los perfiles o el dashboard están listos.

### 🎨 Activos de Marca & Distribución HACS
- **Empaquetado limpio de `argus.zip`**: Se corrigió la estructura interna del archivo comprimido de la release para garantizar que HACS extraiga directamente `manifest.json`, la carpeta `brand/` y la carpeta `www/` en la raíz de `custom_components/argus/`.
- **Rutas de marca estáticas**: Se incorporaron los activos oficiales tanto en `custom_components/argus/brand/` (para el Brands Proxy de Home Assistant) como en `custom_components/argus/www/brand/` (accesible directamente a través de `/api/argus_static/brand/icon.png`).
- **Cache-busting v2.4.2**: Se actualizó `argus-bootstrap.js` a `?v=2.4.2` para asegurar que el navegador cargue inmediatamente la nueva versión sin requerir vaciado manual de caché de scripts.

---

## 📦 Actualización e Instalación

### Mediante HACS (Recomendado)
1. Abre **HACS → Integraciones → Argus Home Hub**.
2. Pulsa en el menú de tres puntos (⋮) en la esquina superior derecha y selecciona **Volver a descargar**.
3. Asegúrate de seleccionar la versión **v2.4.2** y pulsa **Descargar**.
4. Reinicia Home Assistant (**Ajustes → Sistema → Reiniciar**).
5. Abre Argus: comprobarás una pantalla de carga oscura y limpia que da paso directamente al selector de perfiles tvOS sin ningún parpadeo de texto o elementos desordenados.

### Instalación Manual
1. Descarga el archivo `argus.zip` adjunto a esta versión en GitHub.
2. Descomprime su contenido directamente en `/config/custom_components/argus/`.
3. Reinicia Home Assistant.
