# Argus 2.0.51

## Prioridad
Implementación de internacionalización (i18n) completa para los eventos hablados (TTS) de Argus, y estabilización gráfica de las animaciones WebGL en dispositivos Apple (iOS/Safari) y móviles en general.

## Nuevas Características y Mejoras
- **Internacionalización y TTS Dinámico:** Argus ahora soporta y procesa 7 idiomas de forma nativa para todas las notificaciones por voz (eventos de seguridad, disparos, armados, etc.). El backend (Home Assistant) detecta automáticamente el idioma elegido en tu interfaz web sin necesidad de modificar plantillas YAML complejas.
- **Sincronización de Idioma UI-Servidor:** Al cambiar el idioma tocando el icono del mundo (🌐) en la interfaz, se actualiza automáticamente el estado en el servidor (`argus/save_ui`).
- **Arquitectura de Frontend Modernizada:**
  - TypeScript entrypoint real unificado en `src/app/index.ts` con compilación mediante Vite.
  - Tipado fuerte para websockets y validación estructurada.
  - Implementación tipada modular para `security/client.ts` y `media/client.ts`.

## Correcciones de Errores (Fixes)
- **Fallo WebGL en iOS/Safari (Blur Fix):** Eliminada la propiedad `mix-blend-mode: screen` del canvas WebGL y subida la precisión de shaders a `highp` para garantizar lluvia y tormentas eléctricas nítidas y estables (antes colapsaban en un fondo difuminado "blur" en ciertos móviles).
- **Protección de Cancelación (Master PIN):** Cancelar una alarma desde el estado intermedio de "Armado en Espera" (Arming Wait) ahora respeta y exige correctamente el PIN Maestro, sincronizando la interfaz web y HomeKit.
- **Armado Atascado en Sensores Abiertos:** Se corrigió el motor interno de Argus para que al cerrar los sensores Aqara/HomeKit pendientes, el armado continúe automáticamente en lugar de requerir interacción manual. Re-armar fuerza la finalización correctamente (Force-Complete).
- **Control de Accesos (Scroll Táctil):** Las listas de usuarios y configuración del PIN maestro en el menú de acceso operan con scroll fluido y natural (`-webkit-overflow-scrolling: touch`) sin estar constreñidas a submenús.

## Versión y Compatibilidad
- `manifest.json` / `const.py` / card / build / contratos de test → **2.0.51**
- Tag y Release: **v2.0.51**

> **Nota para nuevos instaladores:** El TTS ahora toma automáticamente el idioma de tu UI de Argus. Simplemente define tu `media_player` y `tts_service` en el `configuration.yaml` y la locución fluirá en tu idioma elegido.
