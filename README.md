<div align="center">
  <img src="https://raw.githubusercontent.com/Chrisalvir1/Argus/main/logo.png" alt="Argus Home Hub" width="180">

# Argus Home Hub 🛡️

**Sistema Integral de Seguridad Residencial Inteligente, Local y Profesional para Home Assistant**

[![Release](https://img.shields.io/github/v/release/Chrisalvir1/Argus?style=for-the-badge&color=blue)](https://github.com/Chrisalvir1/Argus/releases)
[![HACS](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/default)
[![Donate](https://img.shields.io/badge/Donate-PayPal-00457C.svg?style=for-the-badge&logo=paypal)](https://paypal.me/CEstradaAlvir)
[![GitHub Stars](https://img.shields.io/github/stars/Chrisalvir1/Argus?style=for-the-badge&logo=github&color=gold)](https://github.com/Chrisalvir1/Argus)
[![License](https://img.shields.io/github/license/Chrisalvir1/Argus?style=for-the-badge)](LICENSE)

<br>

> 🌟 **¡Apoya el desarrollo de Argus!**
> 
> • **⭐ Dale una estrella en GitHub:** [https://github.com/Chrisalvir1/Argus](https://github.com/Chrisalvir1/Argus)  
> • **☕ Apoya en PayPal:** [https://paypal.me/CEstradaAlvir](https://paypal.me/CEstradaAlvir)  
> • **✉️ Correo para sugerencias y soporte:** [chrisalvir01@gmail.com](mailto:chrisalvir01@gmail.com)

</div>

---

## 📖 ¿Qué es Argus Home Hub?

**Argus Home Hub** es un centro de seguridad residencial avanzado, local e independiente para Home Assistant, diseñado para proteger tu hogar con total privacidad, sin suscripciones mensuales y sin depender de servicios externos en la nube. 

Construido sobre una arquitectura moderna con **React 19 + TypeScript**, Argus combina una estética cinematográfica de **Liquid Glass (Cristal Líquido)** con un motor de seguridad de grado profesional, compatibilidad nativa con HomeKit, asistente de voz interactivo (TTS), notificaciones enriquecidas para móviles y un **Nuevo Modo de Alto Contraste / Modo Oscuro OLED** enfocado en máxima accesibilidad visual.

> [!IMPORTANT]
> **Aviso de Responsabilidad:** Argus es un sistema de automatización y seguridad residencial local de código abierto para Home Assistant. No sustituye una central receptora de alarmas certificada ni garantiza conexión directa con servicios de policía o bomberos. Asegúrate de probar periódicamente sensores, sirenas, avisos sonoros y respaldos.

---

## ✨ Características Principales

### 🛡️ Motor de Seguridad y Alarma Multimodo
- **5 Estados de Protección:** *Desarmado*, *En Casa (Arm Home)*, *Fuera de Casa (Arm Away)*, *Noche (Arm Night)* y *Vacaciones (Arm Vacation)*.
- **Tiempos de Gracia Configurables:** Retardos independientes de salida y entrada por cada modo para evitar falsas alarmas al entrar o salir.
- **Disparo Instantáneo:** Modo de intrusión con activación configurable de sirenas internas, externas, luces parpadeantes y scripts de emergencia.
- **Detección Activa de Sensores Abiertos:** Al intentar armar, Argus comprueba inmediatamente todas las puertas, ventanas y sensores vinculados. Si alguno está abierto, lo notifica en pantalla y por voz (TTS) y te permite cerrarlo o aplicar **Bypass (Omitir)** de forma individual con un solo toque.

### 🖤 Nuevo: Modo Alto Contraste & Modo Oscuro OLED (Accesibilidad)
- **Activación Directa en el Perfil:** Alterna fácilmente entre el aspecto estándar *Liquid Glass* y el tema *Alto Contraste*.
- **Diseñado para la Legibilidad y Pantallas OLED:** Fondos profundos con negros puros, textos de máximo contraste (blanco nítido y gris claro), bordes definidos y eliminación de transparencias reflectantes para una lectura cómoda bajo luz solar o en habitaciones oscuras.
- **Soporte de Sistema Operativo:** Respeta automáticamente la preferencia de accesibilidad `@media (prefers-contrast: more)`.

### 📱 Deslizador de Seguridad iOS (Slide-to-Action)
- **Seguro contra Toques Accidentales:** Sustituye botones convencionales por controles deslizantes táctiles fluidos tipo *"Deslizar para desarmar"* o *"Deslizar para activar SOS"*, inspirados en el diseño de iOS.
- **Protección para Niños y Mascotas:** Impide desarmes o alertas de pánico involuntarias causadas por roces en tablets de pared o pantallas táctiles.

### 🧩 Dashboard Modular Interactivo (React 19)
- **Widgets Arrastrables y Redimensionables:** Basado en `react-grid-layout`, organiza tus tarjetas de seguridad, historial, automatizaciones y control de acceso a tu gusto con tamaños inteligentes (S, M, L, XL).
- **Persistencia por Dispositivo:** El diseño y la distribución de widgets se memorizan localmente según el tamaño de la pantalla (teléfono, tablet de pared, monitor de escritorio o pantalla en formato Kiosk).

### 🗣️ Asistente de Voz Inteligente (TTS Dinámico)
- **Anuncios por Altavoces en Vivo:** Notificaciones habladas automáticas a través de cualquier reproductor multimedia (`media_player`) de Home Assistant.
- **Información Precisa:** Si una puerta impide el armado, Argus te dirá exactamente: *"No se puede armar. La puerta principal está abierta"*. También anuncia cuentas regresivas de salida y alarmas activadas.

### 🔑 Control de Acceso Criptográfico y Gestión de Pines
- **Separación Rigurosa de Credenciales:**
  - **Pin de Armado (Master PIN):** Controla exclusivamente el armado, desarmado y cancelación del pánico de las instancias de alarma.
  - **Pin de Perfil (Access PIN):** Protege la apertura del panel Argus y el cambio de usuarios.
- **Cifrado Seguro:** Hashing de contraseñas mediante algoritmos criptográficos locales (`scrypt` / PBKDF2), protegiendo tus claves de cualquier fuga en el frontend.
- **Gestión Multi-Usuario con Permisos Granulares:** Asigna roles (Administrador o Usuario Estándar) y permisos específicos (Ver estado, Armar, Desarmar, Ver historial, Gestionar pines) con insignia visual de estado.

### 🚨 Botón de Pánico y Acciones de Emergencia SOS
- **Activación Rápida y Segura:** Activación manual protegida por confirmación o deslizador táctil.
- **Dispositivos de Auxilio Automáticos:** Dispara automáticamente sirenas, luces de advertencia y rutinas preconfiguradas, incluso con el sistema desarmado.
- **Teléfono de Emergencias Local:** Botón de llamada rápida configurable según tu país o región (911, 112, etc.).
- **Detención Reversible:** Permite cancelar el pánico restaurando el sistema exactamente al estado de seguridad anterior.

### 🤖 Blueprints Nativos para iOS y Telegram
Argus incluye plantillas de automatización listas para importar en Home Assistant:
- **Alertas Críticas para iOS:** Notificaciones push de alta prioridad con sonido de sirena (que ignoran el modo No Molestar) y botones de acción rápida (*Desarmar*, *Ver Cámaras*, *Activar Luces*).
- **Bot de Telegram con Video en Vivo:** Envía un mensaje instantáneo a tu chat de Telegram acompañado de un clip de video de 15 segundos grabado por la cámara del área vulnerada.

### 📦 Copias de Seguridad Cifradas (.argus)
- **Exportación e Importación Completa:** Descarga y restaura perfiles, sensores, configuraciones de modos y ajustes de seguridad en archivos protegidos con cifrado AES-GCM.
- **Recuperación en el Asistente Inicial:** En instalaciones nuevas o migraciones, puedes subir tu archivo de respaldo directamente en la pantalla de bienvenida.

### 🏠 Lovelace Card y Modo Kiosk
- Usa Argus en cualquier panel de Home Assistant mediante las tarjetas personalizadas `custom:argus-card` o `custom:argus-panel-card`.
- Soporte para pantalla completa sin marcos (ideal para tablets táctiles de pared).

---

## 🚀 Instalación

### Método 1: Mediante HACS (Recomendado)
1. Abre **HACS** en tu panel de Home Assistant.
2. Ve al menú superior derecho de tres puntos y selecciona **Repositorios personalizados**.
3. Pega la URL del repositorio: `https://github.com/Chrisalvir1/Argus` y selecciona la categoría **Integración**.
4. Haz clic en **Descargar**.
5. Reinicia Home Assistant.
6. Ve a **Ajustes → Dispositivos y servicios → Añadir integración** y busca **Argus Home Hub**.

### Método 2: Instalación Manual
1. Descarga el archivo `argus.zip` de la última versión en [Releases](https://github.com/Chrisalvir1/Argus/releases).
2. Descomprime la carpeta `argus` dentro del directorio `custom_components` de tu instalación de Home Assistant:
   ```
   /config/custom_components/argus/
   ```
3. Reinicia Home Assistant.
4. Añade la integración desde la interfaz web de Home Assistant.

---

## 🔊 Configuración del Asistente de Voz (TTS)

Para que Argus hable a través de los altavoces de tu hogar anunciando cambios de estado y sensores abiertos, añade lo siguiente en tu archivo `configuration.yaml` de Home Assistant:

```yaml
argus:
  arming_voice:
    media_player: media_player.altavoces_salon
    tts_service: tts.google_translate_say
```

El idioma de las locuciones se sincronizará automáticamente con el idioma que tengas configurado en el panel de Argus (Español o Inglés).

---

## 📲 Tarjetas Lovelace

Para añadir la tarjeta de alarma de Argus a cualquier vista de tu Dashboard en Home Assistant:

```yaml
type: custom:argus-card
entity: alarm_control_panel.argus
title: Seguridad del Hogar
```

O si prefieres incrustar el panel completo de Argus con todas sus herramientas:

```yaml
type: custom:argus-panel-card
```

---

## 🛠️ Contribuir y Desarrollo Local

Argus cuenta con una suite completa de pruebas unitarias y verificación de contratos:

```bash
# Compilar el frontend en React 19
npm install
npm run build

# Ejecutar pruebas unitarias de frontend
npm test

# Ejecutar suite de pruebas unitarias de backend Python
python3 -m unittest discover tests
```

---

## 💬 Soporte, Sugerencias y Donaciones

¡La comunidad hace que Argus siga creciendo! Si tienes ideas, comentarios, encuentras un fallo o deseas colaborar:

| Canal | Enlace / Detalle |
|---|---|
| ✉️ **Correo de Sugerencias & Contacto** | [chrisalvir01@gmail.com](mailto:chrisalvir01@gmail.com) |
| ⭐ **Repositorio en GitHub** | [https://github.com/Chrisalvir1/Argus](https://github.com/Chrisalvir1/Argus) |
| ☕ **Donaciones y Apoyo en PayPal** | [https://paypal.me/CEstradaAlvir](https://paypal.me/CEstradaAlvir) |
| 🐛 **Reportar Errores o Solicitar Funciones** | [GitHub Issues](https://github.com/Chrisalvir1/Argus/issues) |
| ✈️ **Telegram** | [@cea1410](https://t.me/cea1410) |
| 📸 **Instagram** | [@chrisalvir1](https://instagram.com/chrisalvir1) |

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más información.

