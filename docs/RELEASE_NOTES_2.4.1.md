# Argus Home Hub v2.4.1 — Activos Oficiales HA 2026.3, Rebote Líquido iOS/macOS y Refinamiento UI

## 🚀 Lo Nuevo en v2.4.1

Argus v2.4.1 introduce mejoras visuales clave en la interfaz, alineación completa con el nuevo estándar de marcas de Home Assistant y optimizaciones de arranque:

### 🛡️ Activos de Marca Oficiales (Home Assistant 2026.3+)
- **Soporte nativo local de marcas**: Se integran los activos en alta resolución (`icon.png`, `logo.png`, `dark_icon.png`, `dark_logo.png` en 512x512) directamente dentro de `custom_components/argus/brand/`.
- **Compatibilidad con el nuevo Brands Proxy API**: Cumple al 100% con la nueva arquitectura de Home Assistant donde las integraciones personalizadas sirven sus propias imágenes locales (`/api/brands/integration/argus/icon.png`), garantizando que el logo oficial se muestre correctamente en HACS y en el panel de integraciones.

### 💧 Selector de Modos / SOS con Rebote Líquido (iOS/macOS Fluid Spring)
- **Física de resorte elástico**: La transición de la píldora indicadora activa ahora utiliza una curva de resorte fluida (`cubic-bezier(0.34, 1.56, 0.64, 1)`), logrando un efecto de deslizamiento orgánico con sutil rebote al posicionarse, idéntico a las interfaces modernas de iOS y macOS.
- **Preservación continua del DOM**: Se elimina la reconstrucción destructiva de las pestañas (`tabs.innerHTML`), permitiendo que el navegador interpole suavemente la posición, ancho y color entre modos sin parpadeos ni saltos bruscos.
- **Gradientes líquidos con brillo especular (Liquid Glass)**:
  - *Desarmado*: Verde esmeralda líquido vibrante (`#22c55e` → `#15803d`) con resplandor superior.
  - *En Casa*: Ámbar cálido solar (`#f59e0b` → `#d97706`).
  - *Ausente*: Carmesí rubí (`#ef4444` → `#b91c1c`).
  - *Noche*: Zafiro real nocturno (`#3b82f6` → `#1d4ed8`).
  - *CONFIGURACIÓN SOS*: Nuevo estilo vibrante con gradiente rojo fuego de emergencia (`#dc2626` → `#991b1b`).

### 📐 Espaciado Equilibrado en Tarjeta de Apoyo
- **Corrección de espaciado vertical**: Se eliminó el estilo restrictivo `flex: 1` inline de la cabecera en `#w-github`, suprimiendo el espacio vacío excesivo entre el texto explicativo y los botones de acción (`⭐ Dar Estrella`, `☕ PayPal`, `✉️ Sugerencias`).

### ⚡ Eliminación de FOUC en Carga en Frío / Reinicio de HA
- **Arranque limpio sin elementos apiñados**: Se protegió el montaje de la consola de seguridad y se ocultó el contenedor principal (`visibility: hidden`) durante el reinicio de Home Assistant hasta que la sesión o el perfil sea seleccionado.
- La pantalla pasa directamente de un fondo oscuro de cristal líquido limpio al selector de perfiles tvOS, sin mostrar layouts crudos a la izquierda mientras el WebSocket se conecta.

---

## 📦 Instalación desde Cero (Quick Start)

### Opción 1: Mediante HACS (Recomendado)
1. Abre **HACS → Integraciones → Explorar y descargar repositorios** (+).
2. Busca **Argus** (o **Argus Home Hub**).
3. Haz clic en **Descargar** la versión **v2.4.1**.
4. Reinicia Home Assistant.
5. Ve a **Ajustes → Dispositivos y servicios → Añadir integración** y busca **Argus**.
6. Realiza una recarga limpia de tu navegador (Ctrl+F5 o vaciar caché en la app móvil).

### Opción 2: Instalación Manual
1. Descarga el archivo comprimido `argus.zip` adjunto en esta release.
2. Descomprime y copia la carpeta `argus` dentro del directorio `custom_components/` de tu instalación de Home Assistant (`/config/custom_components/argus`).
3. Reinicia Home Assistant.
4. Añade la integración desde **Ajustes → Dispositivos y servicios**.
