<div align="center">
  <img src="https://raw.githubusercontent.com/Chrisalvir1/Argus/main/logo.png" alt="Argus Seguridad de Hogar" width="200" style="border-radius: 20%; box-shadow: 0 10px 20px rgba(0,0,0,0.15); margin-bottom: 20px;">

  # Argus Home Hub

  **El Sistema de Seguridad Premium para Home Assistant**

  [![Versión](https://img.shields.io/badge/Versi%C3%B3n-1.3.3-blue.svg)](https://github.com/Chrisalvir1/Argus/releases)
  [![Home Assistant](https://img.shields.io/badge/Home_Assistant-Compatible-41BDF5.svg?logo=home-assistant)](https://www.home-assistant.io/)
  [![HACS](https://img.shields.io/badge/HACS-Custom_Repository-orange.svg)](https://hacs.xyz/)
  [![GitHub stars](https://img.shields.io/github/stars/Chrisalvir1/Argus?style=social)](https://github.com/Chrisalvir1/Argus/stargazers)

  <br>
  <a href="https://paypal.me/CEstradaAlvir" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-blue.svg?logo=paypal&style=for-the-badge" alt="Donar con PayPal"></a>
  <a href="https://github.com/Chrisalvir1/Argus/issues" target="_blank"><img src="https://img.shields.io/badge/Report_a_Bug_/_Request_Feature-GitHub-black.svg?logo=github&style=for-the-badge" alt="Enviar Sugerencia"></a>
  <br>
</div>
<br>

**Argus Home Hub** es un avanzado sistema de seguridad y panel de control de alarmas para Home Assistant. Construido desde cero para ofrecer una experiencia visual *premium* con una interfaz *Liquid Glass* inspirada en macOS e iOS. Combina la gestión de sensores, sirenas, control de acceso y notificaciones push en un único *Custom Element* sumamente fluido y autoconstruido.

---

## ✨ Novedades y Correcciones Recientes (v1.3.3)

¡Mejoras de seguridad, control de acceso, traducciones dinámicas y diseño Liquid Glass!

**Cambios y Características Nuevas:**
- **Tarjeta Lovelace Premium con Teclado Integrado (v1.3.3)**: La tarjeta personalizada `custom:argus-card` ahora incluye un overlay de teclado numérico (dial) con efecto *Liquid Glass*. Si el PIN Maestro está activo, al intentar desarmar se desplegará de forma automática el teclado numérico.
- **Traducción y Reactividad i18n Completa (v1.3.3)**: Corregidos los textos del gestor de archivos subidos y los registros de auditoría de restablecimiento de PIN para que cambien dinámicamente y al instante al seleccionar cualquiera de los idiomas soportados.
- **Restablecimiento de PIN Maestro por Administrador (v1.3.0)**: Si eres administrador de Home Assistant, ahora puedes restablecer el PIN maestro de Argus de forma segura desde la interfaz, registrando la acción en el historial de auditoría.
- **Gestión Física de Fondos de Pantalla (v1.2.0 - v1.2.2)**: Subida de imágenes de fondo directamente al almacenamiento del servidor de Home Assistant en lugar de guardar cadenas Base64. Incluye un fondo predeterminado oficial de Argus, opción de "Sin fondo" para respetar el tema del usuario, y borrado optimista instantáneo.
- **Contraste Inteligente y Legibilidad (v1.1.47 - v1.1.48)**: Detección automática del brillo del fondo de pantalla seleccionado para adaptar el contraste y color de los textos, garantizando una excelente legibilidad tanto en fondos oscuros como claros.

---

## 🚀 Características Principales

*   **🛡️ Modos de Seguridad Inteligentes**: Soporte completo para *En Casa*, *Ausente*, *Noche*, *Vacaciones* y *Desarmado*. Restricción de armado si hay sensores activos (con opción *Bypass*).
*   **🌤️ Fondos Meteorológicos Animados CSS Puros**: El fondo de las tarjetas cambia dinámicamente según el clima local (lluvia, tormenta, nieve, estrellas, nublado) usando CSS 100% nativo.
*   **🔋 Monitor Dinámico de Baterías**: Escanea automáticamente tus sensores de intrusión (puertas, ventanas, PIR) y muestra alertas visuales en el inicio si alguno baja del 20%.
*   **🔐 Control de Acceso Avanzado**: Teclado numérico (*PIN Pad*) integrado y fluido. Gestión de PIN maestro y usuarios administradores directamente desde el panel, sin tocar YAML.
*   **🔔 Notificaciones y Auditoría en Tiempo Real**: 
    *   Selección visual de dispositivos móviles para enviar Alertas Push críticas.
    *   *Registro de Actividad (Audit Log)*: Ve exactamente quién armó/desarmó y qué sensor desencadenó la alarma.
*   **⚡ Automatizaciones Integradas**: Gestiona y visualiza las reglas de automatización vinculadas a la seguridad sin salir del panel.
*   **🏠 HomeKit & Matter**: Sección dedicada para la administración del puente y la integración nativa con Apple Home.
*   **🌐 Pantalla Completa & Multi-Instancia**: Soporte nativo para modo *fullscreen* (ideal para tablets de pared) y manejo de múltiples instancias de alarma en un solo panel.

---

## 📦 Instalación Rápida

### HACS (Recomendado)
1. Abre Home Assistant y dirígete a **HACS** -> **Integraciones**.
2. Haz clic en los tres puntos (arriba a la derecha) -> **Repositorios Personalizados**.
3. Añade la URL del repositorio: `https://github.com/Chrisalvir1/Argus`
4. Selecciona la categoría: `Integration` y haz clic en **Añadir**.
5. Descarga **Argus** y reinicia tu Home Assistant.
6. Ve a **Ajustes > Dispositivos y servicios > Añadir integración**, busca **Argus** y sigue el asistente para configurarlo.

---

## ⚙️ Configuración del Dashboard (Lovelace)

Argus te ofrece dos tarjetas personalizadas que puedes usar en tus tableros de Home Assistant:

### Opción A: Tarjeta Premium de Alarma (`argus-card`)
Una tarjeta de control compacta con diseño *Liquid Glass*, clima dinámico en el fondo y dial numérico integrado para desarmar.
Para añadirla, edita tu tablero, añade una tarjeta **Manual** y escribe:
```yaml
type: custom:argus-card
entity: alarm_control_panel.argus
title: Panel de Seguridad Argus
```

### Opción B: Panel de Control e Instancia Completa (`argus-panel`)
Para incrustar el panel completo de administración y control de Argus en una pestaña de tu dashboard:
```yaml
type: custom:argus-panel
```

---

## 💡 Soporte y Sugerencias

Si tienes alguna duda, sugerencia o encuentras algún error, puedes escribirme directamente a: **[chrisalvir01@gmail.com](mailto:chrisalvir01@gmail.com)**

---

<div align="center">
  <b>Desarrollado con pasión por Christopher Alvir (@Chrisalvir1)</b><br>
  <i>Diseñado para la comunidad de Home Assistant en Costa Rica y el mundo.</i>
</div>