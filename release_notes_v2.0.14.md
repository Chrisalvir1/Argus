# Argus Home Hub v2.0.14 — Performance Profiles & UI Fixes

## 🚀 Mejoras y Correcciones

- **Nombre oficial corregido:** Se actualizó globalmente la marca de "Argus Smart Security" a "Argus Home Hub".
- **Perfiles adaptativos:** Optimizado para Raspberry Pi y dispositivos de diferentes capacidades. Se añadieron los perfiles: `essential`, `light`, `balanced` y `full`.
- **Diagnóstico y selección manual de rendimiento:** Ahora es posible medir y forzar el nivel de rendimiento deseado desde Personalización.
- **Persistencia del perfil:** El nivel de rendimiento se guarda por dispositivo para una experiencia personalizada.
- **Guía de compatibilidad para Raspberry Pi:** El `README.md` incluye recomendaciones claras para distintos modelos.
- **Esquinas exteriores redondeadas:** Se aplicó un parche visual estricto para redondear verdaderamente los contenedores completos (clip-path/border-radius).
- **Contraste de títulos dinámico:** Todos los títulos siguen ahora estrictamente las variables de contraste del tema claro y oscuro de Home Assistant.
- **Instancias activas inamovibles:** El widget de instancias activas permanece estático y visible sin poder ocultarse al editar la disposición de los demás widgets.
- **Nuevas pruebas de regresión:** Cobertura de las correcciones de rendimiento, UI y falso positivo del CI.
