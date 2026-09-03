# Argus Home Hub 🛡️

**Sistema de seguridad residencial inteligente, local y profesional para Home Assistant**

[![Release](https://img.shields.io/github/v/release/Chrisalvir1/Argus?style=for-the-badge&color=blue)](https://github.com/Chrisalvir1/Argus/releases)
[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/default)
[![Donate](https://img.shields.io/badge/Donate-PayPal-00457C.svg?style=for-the-badge&logo=paypal)](https://paypal.me/CEstradaAlvir)
[![GitHub Stars](https://img.shields.io/github/stars/Chrisalvir1/Argus?style=for-the-badge&logo=github&color=gold)](https://github.com/Chrisalvir1/Argus)

Argus convierte tu Home Assistant en un centro de seguridad profesional, local, multiinstancia y visualmente impecable con **React 18 + TypeScript**, estética *Liquid Glass* y el nuevo **Modo Alto Contraste / OLED Dark Mode**.

---

### ✨ Características Principales

- 🖤 **Nuevo Modo Alto Contraste & OLED:** Selector manual en el perfil para disfrutar de fondos oscuros profundos, textos de máximo contraste y contornos nítidos para una legibilidad perfecta en cualquier pantalla.
- 📱 **Deslizador de Seguridad iOS (Slide-to-Action):** Prevención de desarmes o activaciones de pánico accidentales mediante gestos táctiles de deslizamiento continuo.
- ⚛️ **Dashboard Modular React 18:** Tarjetas y widgets organizables y redimensionables con memoria adaptativa para móvil, tablet y escritorio.
- 🗣️ **Asistente de Voz y TTS Dinámico:** Anuncios automáticos por voz en altavoces de tu hogar para estados de armado, desarmado, sensores que impiden el armado y alarmas activadas.
- 🔑 **Separación Criptográfica de PINs:** Distinción segura entre el Pin de Armado (Master PIN) y el Pin de Perfil (Access PIN) protegidos con PBKDF2/scrypt.
- 🚨 **Gestión de Salidas de Emergencia SOS:** Botón de pánico reversible con llamada rápida a emergencias y activación de sirenas y luces de auxilio.
- 🤖 **Blueprints Nativos:** Alertas críticas con botones interactivos para iOS y clips de video de 15 segundos de tus cámaras para bots de Telegram.
- 📦 **Copias de Seguridad Cifradas (.argus):** Respaldo completo de usuarios, sensores y configuraciones protegido con clave AES-GCM.

---

### 🔊 Cómo Activar el Asistente de Voz (TTS)

Agrega lo siguiente en tu `configuration.yaml` de Home Assistant:

```yaml
argus:
  arming_voice:
    media_player: media_player.altavoces_salon
    tts_service: tts.google_translate_say
```

El motor de voz anunciará automáticamente en el idioma configurado en tu panel.

---

### ☕ Apoya el Proyecto

Si Argus te resulta útil para proteger tu hogar:

- ⭐ **Dale una estrella en GitHub:** [https://github.com/Chrisalvir1/Argus](https://github.com/Chrisalvir1/Argus)
- ☕ **Donación por PayPal:** [https://paypal.me/CEstradaAlvir](https://paypal.me/CEstradaAlvir)
- ✉️ **Correo para sugerencias y soporte:** [chrisalvir01@gmail.com](mailto:chrisalvir01@gmail.com)

