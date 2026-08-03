# Argus v2.0.11 — UI Audit, Fullscreen, Widgets & I18N Fixes

## 🚀 Mejoras y Correcciones
- **Rendimiento de Fullscreen:** Se corrigió el rendimiento conservando el DOM y contextos WebGL; ya no se reconstruye la UI completa al entrar o salir de fullscreen.
- **Layout:** Corrección del layout cortado/comprimido mediante una nueva cuadrícula responsive y determinística.
- **Widgets Arrastrables:** Los widgets ahora son arrastrables en una cuadrícula con tamaños funcionales (S/M/L/XL) y posibilidad de mostrar/ocultar.
- **Persistencia de Interfaz:** La configuración de los widgets (`widget_layout`) ahora se guarda y persiste en el backend de Home Assistant de manera confiable.
- **Traducciones:** Traducción de las funciones nuevas de edición de widgets cubierta en siete idiomas (ES, EN, FR, PT, IT, ZH, RU).
- **Calidad de Código:** Se añadieron pruebas de regresión estáticas para verificar estas correcciones de UI y asegurar que el layout y la persistencia no vuelvan a fallar.
