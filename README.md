<div align="center">
  <img src="https://raw.githubusercontent.com/Chrisalvir1/Argus/main/logo.png" alt="Argus Home Hub" width="180">

# Argus Home Hub

**Seguridad residencial local, visual y verificable para Home Assistant**

[![Release](https://img.shields.io/github/v/release/Chrisalvir1/Argus)](https://github.com/Chrisalvir1/Argus/releases)
[![Validate](https://github.com/Chrisalvir1/Argus/actions/workflows/validate.yml/badge.svg)](https://github.com/Chrisalvir1/Argus/actions/workflows/validate.yml)
[![HACS](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/default)
[![License](https://img.shields.io/github/license/Chrisalvir1/Argus)](LICENSE)
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://paypal.me/CEstradaAlvir)
</div>

Argus reúne alarma, sensores, sirenas, SOS, usuarios, auditoría, MQTT y una interfaz cinematográfica en una integración local para Home Assistant.

> [!IMPORTANT]
> Argus no sustituye una alarma certificada ni garantiza comunicación con servicios de emergencia. Prueba sensores, sirenas, PIN, SOS y respaldos antes de depender del sistema.

## Antes de instalar: elige la experiencia adecuada para tu dispositivo

Argus funciona igual de bien como integración de seguridad en cualquier equipo compatible con Home Assistant. Lo único que cambia según el hardware donde **visualices** el panel es la calidad de la presentación visual (clima animado, cristal líquido, transiciones). La función de seguridad del hogar (armado, desarmado, sensores, sirenas, SOS, PIN, notificaciones) **nunca se reduce**, sin importar el dispositivo.

| Dispositivo de visualización | Experiencia esperada | Perfil recomendado |
|---|---|---|
| Raspberry Pi 5 | Completa: clima WebGL animado, cristal líquido, transiciones y 60 FPS | Completo |
| Raspberry Pi 4 | Casi completa, con ajustes leves de partículas y resolución | Completo/Equilibrado |
| Raspberry Pi 3 / 3B+ | Clima simplificado, menos partículas, blur reducido | Equilibrado/Ligero |
| Raspberry Pi Zero 2 W | Animaciones CSS sencillas, WebGL limitado o desactivado | Ligero |
| Raspberry Pi Zero (original) | Interfaz funcional sin efectos pesados, fondos estáticos | Esencial |
| PC, tablet o teléfono moderno | Completa | Completo |

Esto no es un problema de que Argus vaya a consumir CPU o RAM sin control: la diferencia está en la **GPU** y en cuántos procesos gráficos puede sostener cada equipo. En modelos anteriores a la Pi 4, Argus reduce automáticamente su presentación visual para mantenerse fluido, pero esto **no afecta su función de seguridad en el hogar**.

Argus incluye un motor de **perfiles de rendimiento adaptable** que detecta las capacidades del navegador/dispositivo que muestra el panel (núcleos, memoria, WebGL disponible, resolución) y ejecuta un diagnóstico breve para recomendar automáticamente uno de estos perfiles: **Completo**, **Equilibrado**, **Ligero** o **Esencial**. El perfil se guarda por dispositivo (no por instancia de Home Assistant), por lo que un teléfono y una Raspberry Pi Zero que muestren el mismo panel pueden tener experiencias visuales distintas sin ningún ajuste manual.

Puedes ver el diagnóstico detectado y forzar un perfil manualmente desde **Personalización estética avanzada → Rendimiento del dispositivo** dentro del panel de Argus.

## Funciones

- Modos desarmado, casa, ausente, noche y vacaciones.
- Retardos de entrada y salida, duración de alarma y restauración segura.
- Sensores por modo, sensores de entrada, bypass y requisito de cierre.
- Sirenas por modo y SOS reversible con salidas independientes.
- PIN maestro, usuarios temporales, invitado, `scrypt`/PBKDF2 y limitación de intentos administrativos.
- **Sincronización automática de perfiles con cuentas humanas de Home Assistant** (v1.9.3).
- Selector de perfiles con distinción visual del perfil propio; perfiles ajenos protegidos por PIN de acceso.
- Auditoría, estadísticas de 30 días y línea temporal forense.
- MQTT opcional con comandos JSON o texto.
- Horarios locales y confirmación de intrusión mediante múltiples señales.
- Medios privados firmados bajo `.storage`.
- Panel completo y tarjeta Lovelace en siete idiomas con **Onboarding Premium** y bienvenida inmersiva.
- **Restauración de Backup Segura:** Restaura configuraciones encriptadas directamente desde el primer uso (exclusivo para administradores HA).
- **Diseño Liquid Glass:** Elementos de UI y tarjetas de instancias activas rediseñados con estética premium de cristal líquido.
- Atmósfera WebGL procedimental ultra-realista (motor mejorado) para lluvia, tormenta, nieve, niebla, nubes, sol, estrellas, luna y eclipses respaldados por entidades reales.
- **Perfiles de rendimiento adaptable:** detección automática de capacidades del dispositivo, benchmark breve y ajuste visual (Completo/Equilibrado/Ligero/Esencial) sin afectar las funciones de seguridad.
- **Presencia HA:** Sincronización inteligente de estados de presencia directamente desde Home Assistant.
- Animaciones premium para paneles, opciones, guardado, sensores, botones y modales, con respeto por `prefers-reduced-motion`.

## Seguridad y Privacidad 2.0

Argus 2.0 consolida nuestras estrictas políticas de seguridad:

- **Zero-Leak Privacy:** Eliminación de los registros desde el cliente para prevenir fugas de PINs y hashes al navegador.
- **Autorización Forense:** Exigencia de sesión + permiso específico `view_history` para el timeline forense.
- **Onboarding Seguro:** Manejo estricto e independiente del PIN de acceso (hasheado) y el PIN maestro (opciones de configuración).
- **Verificaciones Estrictas de Administrador:** Requiere privilegios de administrador de Home Assistant y Argus para consultar usuarios y personas.
- **Sincronización segura de perfiles:** Los perfiles auto-creados tienen `managed_by_ha_sync: true` y permisos mínimos. Los perfiles manuales nunca se modifican automáticamente.

*Anteriormente en versiones previas:* Se eliminaron acciones TTS, análisis por IA, y controles Matter de terceros del runtime activo para maximizar la privacidad. HomeKit Bridge y rutinas locales deterministas continúan disponibles.

## Requisitos

- Home Assistant **2024.7.0 o posterior**.
- Navegador con WebGL para la atmósfera cinematográfica (opcional en perfiles Ligero/Esencial).
- HACS recomendado.
- Cuenta administradora para instalar y configurar.

## Instalación con HACS

1. Abre **HACS** en tu Home Assistant.
2. Ve a **Integraciones** y haz clic en **Explorar y descargar repositorios** (+).
3. Busca **Argus** (o **Argus Home Hub**).
4. Selecciona la integración y haz clic en **Descargar**.
5. Reinicia Home Assistant y añade la integración desde **Ajustes → Dispositivos y servicios**.
6. Haz una recarga completa sin caché del navegador.

## Instalación manual

1. Descarga `argus.zip` desde la última release.
2. Copia su contenido a `custom_components/argus`.
3. Reinicia Home Assistant y añade la integración.

## Lovelace

```yaml
type: custom:argus-card
entity: alarm_control_panel.argus
title: Seguridad
```

Opcionalmente puedes fijar la fuente meteorológica:

```yaml
type: custom:argus-card
entity: alarm_control_panel.argus
weather_entity: weather.home
title: Seguridad
```

## Seguridad

- Usa un PIN único de 4–12 dígitos.
- No compartas respaldos, tokens ni URL firmadas.
- Las cargas nuevas se guardan en `/config/.storage/argus_media`.
- Reemplaza fondos históricos bajo `/local`, ya que esos archivos son públicos para clientes autenticados según la configuración de Home Assistant.
- Reporta vulnerabilidades según [SECURITY.md](SECURITY.md).

## Actualización a 2.0

1. Crea un respaldo.
2. Actualiza desde HACS (busca Argus Home Hub).
3. Reinicia Home Assistant.
4. Recarga el navegador sin caché.
5. Verifica armado, desarmado, SOS, PIN, sirenas, medios y restauración.

Consulta las notas de la versión [v2.0.14](https://github.com/Chrisalvir1/Argus/releases/tag/v2.0.14).

## Desarrollo

```bash
python -m compileall -q custom_components/argus
python -m unittest discover -s tests -v
for file in custom_components/argus/www/*.js; do node --check "$file"; done
git diff --check
```

Consulta [la arquitectura](docs/ARCHITECTURE.md) y [CONTRIBUTING.md](CONTRIBUTING.md).

## Licencia

MIT. Consulta [LICENSE](LICENSE).

---

## 💡 Sugerencias, Contacto y Comunidad

Me encanta escuchar a la comunidad de Argus. Si tienes ideas de mejoras, encuentras algún error o simplemente quieres compartir cómo estás usando Argus en tu casa, ¡házmelo saber!

- **GitHub:** [Abre un Issue](https://github.com/Chrisalvir1/Argus/issues) para sugerencias de código, nuevas funciones o reporte de bugs.
- **Home Assistant Community:** Puedes enviarme tus inquietudes allí.
- **Correo Electrónico:** [chrisalvir01@gmail.com](mailto:chrisalvir01@gmail.com)

### Mis Redes Sociales Oficiales 🌐
¡Sígueme para estar al tanto de las últimas actualizaciones y novedades en las que estoy trabajando!
- **Facebook:** [Christopher Alvir](https://www.facebook.com/christopher.alvir)
- **Instagram:** [@chrisalvir1](https://instagram.com/chrisalvir1)
- **Threads:** [Chrisalvir1](https://www.threads.net/@chrisalvir1)
- **Telegram:** [t.me/cea1410](https://t.me/cea1410)

¿Te gusta Argus y te resulta útil? 
**[❤️ Apoya mi trabajo en PayPal](https://paypal.me/CEstradaAlvir)**. ¡Cualquier aporte me ayuda enormemente a mantener y seguir mejorando este proyecto a lo grande!
