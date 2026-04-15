# 🛡️ Argus Home Hub para Home Assistant

![Versión](https://img.shields.io/badge/Versi%C3%B3n-0.9.6-blue.svg)
![Home Assistant](https://img.shields.io/badge/Home_Assistant-Compatible-41BDF5.svg?logo=home-assistant)
![HACS](https://img.shields.io/badge/HACS-Custom_Repository-orange.svg)

**Argus Home Hub** es un avanzado sistema de seguridad y panel de control de alarmas para Home Assistant. Construido desde cero para ofrecer una experiencia visual *premium* con una interfaz *Liquid Glass* inspirada en macOS e iOS. Combina la gestión de sensores, sirenas, control de acceso y notificaciones push en un único *Custom Element* sumamente fluido y autoconstruido.

---

## ✨ Novedades Recientes (v0.9.6)

*   **💎 Interfaz Liquid Glass**: Contenedores translúcidos con efecto *blur* y *saturate*, sombras suaves y bordes refinados integrados al ecosistema visual de Apple.
*   **🚨 Botón de Pánico (SOS) con Gestos**: Nuevo botón de emergencia con un modal de confirmación deslizante interactivo (slider estilo iOS) para disparar la alarma al instante evitando toques accidentales.
*   **🔋 Monitor Dinámico de Baterías**: Argus escanea inteligentemente tus sensores de intrusión (puertas, ventanas, movimiento) y lanza alertas visuales automáticas en la pantalla principal si algún dispositivo baja del 20% de batería.

---

## 🚀 Características Principales

*   **🛡️ Modos de Seguridad**: Soporte completo para los modos *En Casa*, *Ausente*, *Noche*, *Vacaciones* y estado *Desarmado*.
*   **🌤️ Fondos Meteorológicos Animados**: El fondo de las tarjetas de instancia cambia dinámicamente (animaciones CSS puras: lluvia, tormenta, nieve, estrellas, luna, sol) basado en el estado del clima y la hora.
*   **🔐 Control de Acceso Avanzado**: Teclado numérico (*PIN Pad*) integrado y minimalista. Gestión de múltiples usuarios con roles de Administrador y códigos PIN individuales directos desde el panel.
*   **🔔 Notificaciones y Auditoría**: 
    *   Selección visual de dispositivos móviles de HA para enviar alertas Push.
    *   *Registro de Actividad (Audit Log)* en tiempo real: Entérate exactamente quién armó o desarmó el sistema, o qué sensor disparó la alarma.
*   **⚡ Automatizaciones Integradas**: Gestiona y visualiza las reglas de automatización vinculadas a la seguridad de la casa sin salir del panel.
*   **🏠 HomeKit & Matter**: Sección dedicada a la administración del puente e integración nativa con el ecosistema de Apple.
*   **🌐 Diseño Bilingüe e Inteligente**: Soporte nativo y automático para inglés y español. Diseño altamente responsivo con opción de pantalla completa (*fullscreen*) independiente por instancia.

---

## 📦 Instalación

### Opción A: HACS (Recomendado)
1. Abre tu panel de Home Assistant y dirígete a **HACS** -> **Integraciones**.
2. Haz clic en el menú superior derecho (tres puntos) -> **Repositorios Personalizados** (*Custom repositories*).
3. Añade la URL de este repositorio: `https://github.com/Chrisalvir1/argus`
4. Selecciona la categoría: `Integration` y haz clic en **Añadir**.
5. Busca "Argus" en HACS, descárgalo y **reinicia Home Assistant**.

### Opción B: Manual
1. Descarga el último [Release](https://github.com/Chrisalvir1/Argus/releases) (v0.9.6).
2. Extrae el contenido en la carpeta `/config/custom_components/argus` de tu instancia de Home Assistant.
3. Reinicia Home Assistant.

---

## ⚙️ Configuración

### 1. Inicializar la integración
Una vez instalado y reiniciado, ve a **Ajustes** -> **Dispositivos y servicios** -> **Añadir integración**. Busca **Argus** y sigue el flujo rápido de configuración para establecer tu PIN Maestro.

### 2. Añadir al Dashboard (Lovelace)
Para ver la hermosa interfaz de usuario, edita tu panel de Lovelace, añade una tarjeta manual y utiliza el *custom element*:

```yaml
type: custom:argus-panel
```

Listo, no necesitas complicados archivos YAML para los sensores, Argus incluye un buscador visual de entidades en su pestaña de **Ajustes**.

---

## 👨‍💻 Autor y Desarrollo

Desarrollado y diseñado por **Christopher Alvir** (@Chrisalvir1).
Diseñado para la comunidad de Home Assistant en Costa Rica y el mundo.
