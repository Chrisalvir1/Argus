# 🔴 Reddit Post — r/homeassistant (Español / Spanish)

**Título:**
> Creé Argus Home Hub v1.3.3 — Panel de seguridad premium para Home Assistant que supera a Alarmo (UI Liquid Glass, 7 idiomas, PINs de invitado con expiración, fondos animados y mucho más)

---

**Cuerpo del post:**

¡Hola r/homeassistant! 👋

Llevo más de un año desarrollando **Argus Home Hub** y acabo de lanzar la **v1.3.3** — una integración personalizada completa que reemplaza tu panel de alarma con algo que de verdad se ve y se siente premium.

Usé Alarmo y es bueno, pero quería algo más potente y con mejor interfaz. Así que lo construí desde cero.

---

## 🎬 ¿Qué es Argus?

Un **sistema de seguridad completo para Home Assistant** — integración backend + tarjeta Lovelace + panel administrador completo — todo en una sola instalación por HACS. Sin dependencias externas. Python puro + JavaScript vanilla.

---

## ✨ Novedades en v1.3.3

- **Tarjeta Lovelace con teclado numérico integrado** (estilo Liquid Glass, se despliega automáticamente cuando el PIN Maestro está activo)
- **i18n completo con cambio de idioma instantáneo** — sin recargar (7 idiomas: ES, EN, FR, PT, IT, ZH, RU)
- **Restablecimiento de PIN por administrador** — los admins de HA pueden resetear el PIN maestro con registro en auditoría
- **Almacenamiento físico de fondos** — sin cadenas Base64 que inflen tu configuración

---

## 🆚 Argus vs Alarmo — diferencias clave

| Función | Alarmo | Argus |
|---|---|---|
| Diseño de interfaz | Tarjeta HA estándar | ✅ Liquid Glass (inspirado en macOS) |
| Fondos animados | ❌ | ✅ Animaciones CSS del clima (lluvia, nieve, estrellas…) |
| Multi-idioma | Limitado | ✅ 7 idiomas, cambio instantáneo |
| Códigos de invitado con vencimiento | ❌ | ✅ PINs temporales con fecha de expiración |
| Modo Pánico / SOS | ❌ | ✅ Botón de pánico con deslizamiento de confirmación |
| Monitor de batería HUD | ❌ | ✅ Escaneo automático, alertas bajo 20% |
| Registro de auditoría | Básico | ✅ 200 entradas, sensor que activó, usuario responsable |
| Restablecimiento de PIN por admin | ❌ | ✅ Solo admins, registrado en auditoría |
| Vista de automatizaciones vinculadas | ❌ | ✅ Ve tus reglas de HA desde el panel |
| Pantalla completa + multi-instancia | ❌ | ✅ Perfecto para tablets de pared |
| Estado del puente HomeKit | ❌ | ✅ Integrado |
| Requiere YAML | A veces | ✅ Cero YAML — configuración 100% por interfaz |

---

## 🛡️ Funciones de seguridad principales

- **5 modos de alarma**: En Casa, Ausente, Noche, Vacaciones, Desarmado
- **Configuración de sensores por modo** — diferentes sensores en cada modo
- **Retardo de entrada** — período de gracia al entrar
- **Modo Bypass** — armar aunque haya sensores abiertos
- **Failover de sirenas** — intenta primero el dominio nativo, luego `homeassistant.turn_on` (compatible con enchufes Tuya, luces WiFi, dispositivos Matter)
- **Soporte MQTT** — publica el estado y escucha comandos de armado/desarmado
- **Integración TTS** — anuncia eventos de alarma en tus reproductores multimedia

---

## 📦 Instalación por HACS (Repositorio Personalizado)

1. Abre HACS → Integraciones → menú `⋮` → **Repositorios personalizados**
2. Añade URL: `https://github.com/Chrisalvir1/Argus` → Categoría: **Integración**
3. Busca **"Argus"** → Descargar → Reinicia HA
4. Ve a **Configuración → Dispositivos y Servicios → Añadir Integración** → busca **Argus**
5. Sigue el asistente (nombre, sensores, PIN, temporizadores — ¡sin YAML!)

**Añade la tarjeta Lovelace:**
```yaml
type: custom:argus-card
entity: alarm_control_panel.argus
title: Panel de Seguridad
```

**Añade el panel administrador completo (ideal para tablets):**
```yaml
type: custom:argus-panel
```

---

## 🔗 Links

- **GitHub**: https://github.com/Chrisalvir1/Argus
- **Problemas / Sugerencias**: https://github.com/Chrisalvir1/Argus/issues
- **Apoya el proyecto**: https://paypal.me/CEstradaAlvir

---

Desarrollado por una sola persona. Si lo probás, el feedback es muy bienvenido — comentá aquí o abrí un issue. ¡Las estrellas en GitHub siempre se agradecen! ⭐

---

**Subreddits sugeridos para cross-post:**
- r/homeassistant ← principal
- r/smarthome
- r/homeautomation
- r/HomeKit
- r/selfhosted
