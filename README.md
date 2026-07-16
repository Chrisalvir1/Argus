<div align="center">
  <img src="https://raw.githubusercontent.com/Chrisalvir1/Argus/main/logo.png" alt="Argus Seguridad de Hogar" width="200" style="border-radius: 20%; box-shadow: 0 10px 20px rgba(0,0,0,0.15); margin-bottom: 20px;">

  # Argus Home Hub

  **El Sistema de Seguridad Premium para Home Assistant**

  [![Versión](https://img.shields.io/badge/Versi%C3%B3n-1.4.3-blue.svg)](https://github.com/Chrisalvir1/Argus/releases)
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

## ✨ Novedades y Correcciones Recientes (v1.4.2)

¡Mejoras de UI premium, validación inteligente de bypass, sensores vivos y accesibilidad total!

**Cambios y Características Nuevas:**
- **Sensores Premium Vivos:** Los chips de sensores ahora obtienen dinámicamente y muestran de forma nativa la batería restante (🔋%) y su estado real (Abierto/Cerrado).
- **Alerta 'Buzz Orange':** Sistema proactivo de interfaz que hará latir (`buzz-orange`) al botón del estado armado en tu Hub si algún sensor se abre mientras la seguridad perimetral está activa.
- **Historial de Orbes Liquid Glass:** Renovado diseño de logs. Sustituimos íconos estáticos por orbes vibrantes (verde para desarmado, naranja y rojo para disparo).
- **Omisión Segura de Sensores (Bypass):** El panel de control asegura al 100% que la directiva de omitir sensores funcionará *exclusivamente* para el modo donde fue asignado, manteniendo tu seguridad firme.
- **Internacionalización Dinámica Instantánea:** Todas las fechas y el historial se adaptarán a la ubicación (locale) del idioma seleccionado en tiempo real. Trascendencia completa de traducciones sin estática.
- **Refinamiento UI (Modo Claro):** Soporte mejorado para modo claro en Home Assistant que realza la visibilidad de las capas y fuentes usando fondos vivos o brillantes.
- **MQTT Sincronizado e Inmediato:** Broker topic de comandos cambiado a `argus/alarm/set`, recarga dinámica, publicación inmediata del estado al activarse y en cada transición, y comandos JSON/plain text.
- **Correcciones Finales de Idioma:** Traducción de textos dinámicos fijos (como la confirmación de guardado, error de PIN no coincidente, y notificaciones de armado/desarmado) en los siete idiomas.

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

### Instalación vía HACS

> **Nota:** Argus está optimizado para funcionar mediante HACS, lo que garantiza actualizaciones automáticas y sin fricciones.

1. Abre tu panel de Home Assistant y dirígete a **HACS** -> **Integraciones**.
2. Haz clic en los tres puntos (arriba a la derecha) -> **Repositorios Personalizados**.
3. Añade la URL del repositorio: `https://github.com/Chrisalvir1/Argus`
4. Selecciona la categoría: **Integración** y haz clic en **Añadir**.
5. Busca "Argus Home Hub" en HACS y descárgalo.
6. **Reinicia tu servidor de Home Assistant**.
7. Ve a **Ajustes > Dispositivos y servicios > Añadir integración**, busca **Argus** y sigue el asistente interactivo de configuración inicial.

### Instalación Manual

1. Descarga el archivo `.zip` del último *Release* en GitHub.
2. Descomprímelo y copia la carpeta `argus` dentro de tu directorio `/config/custom_components/` en Home Assistant.
3. Reinicia Home Assistant.
4. Dirígete a **Ajustes > Dispositivos y servicios > Añadir integración**, busca **Argus** y sigue los pasos de configuración.

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