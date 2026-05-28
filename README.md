<div align="center">
  <img src="https://raw.githubusercontent.com/Chrisalvir1/Argus/main/logo.png" alt="Argus Seguridad de Hogar" width="200" style="border-radius: 20%; box-shadow: 0 10px 20px rgba(0,0,0,0.15); margin-bottom: 20px;">

  # Argus Home Hub

  **El Sistema de Seguridad Premium para Home Assistant**

  [![Versión](https://img.shields.io/badge/Versi%C3%B3n-1.1.33-blue.svg)](https://github.com/Chrisalvir1/Argus/releases)
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

## ✨ Novedades y Correcciones Críticas (v1.1.33)

¡Actualización estética y de localización!

**Cambios:**
- **Rediseño Liquid Glass Premium (v1.1.33)**: Nueva interfaz ultra-lúcida con efectos de desenfoque incrementados, sombras ambientales con tintes de color y micro-animaciones físicas en clics de botones.
- **Transición de Pestañas de Modo Elástica (v1.1.33)**: Indicador de burbuja líquida estilo iOS con deslizamiento y cambio de color adaptativo elástico al alternar los modos.
- **Formularios Colapsables Fluidos (v1.1.33)**: Animaciones suaves de apertura/cierre de formularios para configuraciones de usuarios y PIN.
- **Correcciones de i18n (v1.1.33)**: Localización completa al cambiar de idioma de todos los textos y botones fijos (modales de SOS, nombre de hogar, idioma).
- **Compatibilidad con HomeKit (v1.1.32)**: Se aplicó un parche para solucionar problemas de sincronización de estado y validación de códigos de seguridad en cadenas vacías con HomeKit.
- **Restauración de Estabilidad (v1.1.31)**: Reversión al núcleo estable de la v1.1.10, removiendo las funciones experimentales de simulacro y trigger para asegurar el correcto funcionamiento de los botones de armado.
- **Sincronización HomeKit (Apple Home) (v1.1.0)**: Solucionado el error crítico donde la app de Apple Home revertía el modo Ausente o Noche a "Desactivado". Argus ahora fuerza la re-sincronización del estado de HomeKit al usar el ARM-LOCK v2.
- **Sugerencias de Armado Inteligente**: Argus AI monitoreará si todas las personas han salido de casa. Si detecta la casa vacía pero la alarma sigue desarmada, te enviará una notificación push sugiriendo armar la alarma.
- **Integración de Cámaras IA**: ¡Nuevo analizador de cámaras usando Google Gemini! Si configuras una cámara en las acciones, Argus la analizará al dispararse la alarma y te dirá exactamente qué ve mediante TTS (ej. *"Se detectó una persona en el jardín"*).
- **Soporte de Wildcards y Estadísticas**: Las acciones de automatización ahora soportan variables como `{{sensor}}` y `{{entity_id}}` para mensajes TTS personalizados. Se han preparado las bases para un próximo dashboard de estadísticas.
- **Fix HACS Version**: Corregido el manifiesto interno para que HACS detecte correctamente las actualizaciones a partir de v1.1.0.
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
2. Clic en los tres puntos (arriba a la derecha) -> **Repositorios Personalizados**.
3. Añade la URL: `https://github.com/Chrisalvir1/argus`
4. Selecciona categoría: `Integration` y clic en **Añadir**.
5. Descarga **Argus**, reinicia Home Assistant y ve a **Ajustes > Dispositivos** para configurarlo.

---

## ⚙️ Configuración del Dashboard

Para ver la interfaz, edita tu panel de Lovelace (Dashboard), añade una tarjeta Manual y escribe:

```yaml
type: custom:argus-panel
```

Listo, **no necesitas YAML extra**. Argus incluye un buscador visual de entidades en su pestaña de **Ajustes** para que elijas tus sensores, sirenas y usuarios con checkboxes.

---

## 💡 Sugerencias y Soporte

¿Tienes una idea para mejorar Argus o encontraste un bug? 
Escríbeme directamente: **[chrisalvir01@gmail.com](mailto:chrisalvir01@gmail.com)**

### ☕ Apoya el Desarrollo
Argus es un proyecto de código abierto desarrollado para la comunidad. Si te ha sido útil para proteger tu hogar o simplificar tu instalación, considera invitarme un café:

<a href="https://paypal.me/CEstradaAlvir" target="_blank">
  <img src="https://www.paypalobjects.com/es_XC/i/btn/btn_donateCC_LG.gif" alt="Donar con PayPal" />
</a>

---

<div align="center">
  <b>Desarrollado con pasión por Christopher Alvir (@Chrisalvir1)</b><br>
  <i>Diseñado para la comunidad de Home Assistant en Costa Rica y el mundo.</i>
</div>