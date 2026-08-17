<div align="center">
  <img src="https://raw.githubusercontent.com/Chrisalvir1/Argus/main/logo.png" alt="Argus Home Hub" width="180">

# Argus Home Hub

**Sistema de seguridad residencial local, multiinstancia y verificable para Home Assistant**

[![Release](https://img.shields.io/github/v/release/Chrisalvir1/Argus)](https://github.com/Chrisalvir1/Argus/releases)
[![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)](https://github.com/Chrisalvir1/Argus/releases)
[![Validate](https://github.com/Chrisalvir1/Argus/actions/workflows/validate.yml/badge.svg)](https://github.com/Chrisalvir1/Argus/actions/workflows/validate.yml)
[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/default)
[![License](https://img.shields.io/github/license/Chrisalvir1/Argus)](LICENSE)
[![Donate](https://img.shields.io/badge/Donate-PayPal-00457C.svg)](https://paypal.me/CEstradaAlvir)
</div>

Argus reúne alarma, sensores, sirenas, salidas SOS, gestión de usuarios, auditoría forense, MQTT y una interfaz fluida en una integración 100% local construida sobre **React 19 + TypeScript + Vite**.

> [!IMPORTANT]
> Argus no sustituye una alarma certificada ni garantiza comunicación con servicios de emergencia gubernamentales. Prueba sensores, sirenas, PIN, acciones SOS y respaldos antes de depender del sistema en producción.

---

## 🚀 Arquitectura y Novedades de la Versión 2.2.0

### ⚛️ Interfaz 100% React 19 + TypeScript
- **Runtime único:** Toda la interfaz corre de forma nativa en React 19 compilado con Vite.
- **Cero código legado:** Se eliminó físicamente todo el código de parches DOM, librerías antiguas y puentes de traducción antiguos (`src/legacy`).
- **Respuesta instantánea:** Carga rápida, fluidez a 60 FPS y consumo mínimo de recursos de CPU/RAM.

### 🏢 Aislamiento Estricto Multiinstancia
- Soporte para múltiples particiones o instancias independientes de Argus en el mismo Home Assistant.
- Cada consulta WebSocket y acción de panel exige y propaga un `entry_id` explícito.
- Persistencia de instancia seleccionada por usuario en el navegador (`localStorage`) para evitar mezclas involuntarias de datos.

### ⚡ Estabilidad Visual y Rendimiento Superior
- **Fondo Fijo Optimizado:** Se eliminaron las personalizaciones de fondos pesados por usuario y los sombreadores dinámicos de clima WebGL. Esto garantiza que el panel de seguridad responda de inmediato en cualquier dispositivo (Raspberry Pi, tablets de pared, móviles y PCs) sin caídas de cuadros ni saturación gráfica.
- **Widgets Reorganizados:** Tablero interactivo con redimensionamiento y reposicionamiento responsivo guardado local y remotamente.

### 🔗 Integración con Automatizaciones de Home Assistant
- Visualización de las automatizaciones de Home Assistant relacionadas con cada instancia en modo **solo lectura**.
- Enlace directo al editor nativo de automatizaciones de Home Assistant sin duplicar lógica ni crear discrepancias de configuración.

### 🚨 Gestor de Salidas de Emergencia SOS
- Configuración granular de salidas SOS (luces estroboscópicas, sirenas de respaldo, conmutadores) por instancia.
- Control de acceso protegido con el permiso `manage_sos`.

---

## 🔊 Activación y Configuración del Asistente de Voz (TTS)

Argus cuenta con un motor de notificaciones habladas dinámicas para los eventos críticos de seguridad (armado en casa, armado fuera, desarmado, intentos bloqueados por sensores abiertos y disparos de alarma).

### 1. Habilitar TTS en Home Assistant
Para activarlo, define el reproductor multimedia y tu proveedor de TTS en tu archivo `configuration.yaml` bajo la llave `argus`:

```yaml
argus:
  arming_voice:
    media_player: media_player.altavoces_salon
    tts_service: tts.google_translate_say
```

### 2. Comportamiento Inteligente
- **Sincronización de idioma:** Las locuciones se adaptan automáticamente al idioma activo seleccionado en el panel.
- **Detalle de sensores:** Cuando un sensor impide el armado, el asistente anuncia por voz el nombre del sensor específico (ej. *"Armado bloqueado: Ventana principal abierta"*).
- **Anuncios de retardo:** Notificaciones habladas automáticas al iniciar el retardo de salida o de entrada.

---

## 🌐 Soporte Multilingüe (12 Idiomas)

Argus cuenta con un sistema de internacionalización nativo con soporte completo para 12 idiomas:

| Código | Idioma | Estado |
|---|---|---|
| `es` | Español | Base nativa |
| `en` | English | Base nativa |
| `fr` | Français | Fase de pruebas / Preview |
| `pt` | Português | Fase de pruebas / Preview |
| `it` | Italiano | Fase de pruebas / Preview |
| `zh-Hans` | 简体中文 (Simplified Chinese) | Fase de pruebas / Preview |
| `zh-Hant` | 繁體中文 (Traditional Chinese) | Fase de pruebas / Preview |
| `hi` | हिन्दी (Hindi) | Fase de pruebas / Preview |
| `ar` | العربية (Arabic - RTL Nativo) | Fase de pruebas / Preview |
| `ko` | 한국어 (Korean) | Fase de pruebas / Preview |
| `ja` | 日本語 (Japanese) | Fase de pruebas / Preview |
| `uk` | Українська (Ukrainian) | Fase de pruebas / Preview |

*Nota: Los nuevos idiomas añadidos en la v2.2.0 se encuentran en fase de pruebas activas para mejora continua.*

---

## 📦 Instalación

### Método 1: Mediante HACS (Recomendado)

1. Abre **HACS** en tu Home Assistant.
2. Ve a **Integraciones** y pulsa en los 3 puntos de la esquina superior derecha → **Repositorios personalizados**.
3. Añade la URL: `https://github.com/Chrisalvir1/Argus` con categoría **Integration**.
4. Haz clic en **Descargar**.
5. Reinicia Home Assistant.
6. Ve a **Ajustes → Dispositivos y servicios → Añadir integración** y busca **Argus**.
7. Realiza una recarga limpia de la caché del navegador (`Ctrl + Shift + R` o `Cmd + Shift + R`).

### Método 2: Instalación Manual

1. Descarga el archivo `argus.zip` desde la última [Release de GitHub](https://github.com/Chrisalvir1/Argus/releases).
2. Descomprime y copia la carpeta `argus` dentro de `custom_components/` en tu directorio de configuración de Home Assistant.
3. Reinicia Home Assistant y configura la integración desde la interfaz web.

---

## 🎛️ Tarjeta Lovelace

Puedes agregar la tarjeta de Argus directamente en tus tableros de Lovelace:

```yaml
type: custom:argus-card
entity: alarm_control_panel.argus
title: Seguridad del Hogar
```

---

## 🔒 Seguridad y Privacidad

- **Almacenamiento Local:** Todos los estados, registros y códigos se procesan dentro de tu red local en Home Assistant.
- **Protección de Códigos:** Los PINs maestros y de usuario se almacenan con algoritmos de hashing seguro (`scrypt`/PBKDF2) y nunca se exponen al frontend.
- **Control de Permisos:** Los usuarios estándar sólo tienen acceso a las áreas y acciones asignadas por el administrador.
- **Auditoría Forense:** Registro inmutable de eventos con opción de exportación y restauración segura de configuración en formato JSON.

---

## ☕ Apoyo y Donaciones

El desarrollo de Argus requiere incontables horas de trabajo y dedicación para ofrecerte una solución de seguridad moderna, libre y de código abierto.

Si Argus te resulta útil y quieres apoyar el mantenimiento del proyecto:

- 🌟 **Dale una estrella al repositorio en GitHub:** [Chrisalvir1/Argus](https://github.com/Chrisalvir1/Argus)
- ☕ **Donación mediante PayPal:** [paypal.me/CEstradaAlvir](https://paypal.me/CEstradaAlvir)

---

## 💡 Sugerencias, Contacto y Comunidad

- **GitHub Issues:** [Abre un Issue](https://github.com/Chrisalvir1/Argus/issues) para reportar errores o solicitar nuevas funciones.
- **Correo Electrónico:** [chrisalvir01@gmail.com](mailto:chrisalvir01@gmail.com)
- **Telegram:** [@cea1410](https://t.me/cea1410)
- **Instagram:** [@chrisalvir1](https://instagram.com/chrisalvir1)
- **Threads:** [@chrisalvir1](https://www.threads.net/@chrisalvir1)

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.
