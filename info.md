# Argus Home Hub 🛡️

**Sistema de seguridad residencial inteligente y local para Home Assistant**

[![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)](https://github.com/Chrisalvir1/Argus/releases)
[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/default)
[![Donate](https://img.shields.io/badge/Donate-PayPal-00457C.svg)](https://paypal.me/CEstradaAlvir)

Argus convierte tu Home Assistant en un centro de seguridad profesional, local, multiinstancia y visualmente impecable impulsado por **React 19 + TypeScript**.

---

### ✨ Novedades de la versión 2.2.0

- ⚛️ **Arquitectura 100% React 19 + Vite:** Rendimiento ultrarrápido, cero código legado, sin parches DOM y con tipado estricto de extremo a extremo.
- 🏢 **Aislamiento Multiinstancia Estricto:** Si tienes varias instancias o particiones de alarma en tu hogar, cada una opera con datos y comandos completamente aislados mediante `entry_id`.
- 🗣️ **Asistente de Voz y TTS Dinámico:** Anuncios automáticos por voz en altavoces de tu hogar para estados de armado, desarmado, sensores que impiden el armado y eventos de alarma.
- ⚡ **Rendimiento y Estabilidad Máxima:** Se eliminaron los fondos personalizados y sombreadores pesados de clima en favor de una interfaz sólida, fluida y con fondo fijo optimizado.
- 🔗 **Integración con Automatizaciones de Home Assistant:** Vista en vivo (solo lectura) de las automatizaciones de HA vinculadas a la instancia con acceso directo al editor nativo de Home Assistant.
- 🚨 **Gestión de Salidas de Emergencia SOS:** Configuración protegida por permisos para activar luces estroboscópicas, sirenas o conmutadores dedicados.
- 🌐 **Soporte para 12 Idiomas:** Español, Inglés, Francés, Portugués, Italiano, Chino Simplificado, Chino Tradicional, Hindi, Árabe (con soporte RTL nativo), Coreano, Japonés y Ucraniano (nuevos idiomas en fase de pruebas).

---

### 🔊 Cómo Activar y Configurar el Asistente de Voz (TTS)

Argus puede hablar a través de tus altavoces inteligentes (Media Players) cuando el sistema cambia de estado o se activa una alarma.

Agrega lo siguiente en tu `configuration.yaml` de Home Assistant:

```yaml
argus:
  arming_voice:
    media_player: media_player.altavoces_salon
    tts_service: tts.google_translate_say
```

El motor de voz anunciará automáticamente en el idioma que tengas configurado en el panel.

---

### ☕ Apoya el Proyecto

Si Argus te resulta útil para proteger tu hogar y deseas apoyar el desarrollo continuo:

- 🌟 **Dale una estrella en GitHub:** [Chrisalvir1/Argus](https://github.com/Chrisalvir1/Argus)
- ☕ **Donación por PayPal:** [paypal.me/CEstradaAlvir](https://paypal.me/CEstradaAlvir)
