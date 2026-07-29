<div align="center">
  <img src="https://raw.githubusercontent.com/Chrisalvir1/Argus/main/logo.png" alt="Argus Home Hub" width="180">

# Argus Home Hub

**Seguridad residencial local, visual y verificable para Home Assistant**

[![Release](https://img.shields.io/github/v/release/Chrisalvir1/Argus)](https://github.com/Chrisalvir1/Argus/releases)
[![Validate](https://github.com/Chrisalvir1/Argus/actions/workflows/validate.yml/badge.svg)](https://github.com/Chrisalvir1/Argus/actions/workflows/validate.yml)
[![HACS](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![License](https://img.shields.io/github/license/Chrisalvir1/Argus)](LICENSE)
</div>

Argus reúne alarma, sensores, sirenas, SOS, usuarios, auditoría, MQTT y una interfaz cinematográfica en una integración local para Home Assistant.

> [!IMPORTANT]
> Argus no sustituye una alarma certificada ni garantiza comunicación con servicios de emergencia. Prueba sensores, sirenas, PIN, SOS y respaldos antes de depender del sistema.

## Funciones

- Modos desarmado, casa, ausente, noche y vacaciones.
- Retardos de entrada y salida, duración de alarma y restauración segura.
- Sensores por modo, sensores de entrada, bypass y requisito de cierre.
- Sirenas por modo y SOS reversible con salidas independientes.
- PIN maestro, usuarios temporales, invitado, `scrypt`/PBKDF2 y limitación de intentos administrativos.
- Auditoría, estadísticas de 30 días y línea temporal forense.
- MQTT opcional con comandos JSON o texto.
- Horarios locales y confirmación de intrusión mediante múltiples señales.
- Medios privados firmados bajo `.storage`.
- Panel completo y tarjeta Lovelace en siete idiomas.
- Atmósfera WebGL procedimental para lluvia, tormenta con lluvia, tormenta eléctrica, nieve, niebla, nubes, sol, estrellas, luna, estaciones y eclipses respaldados por entidades reales.
- Animaciones premium para paneles, opciones, guardado, sensores, botones y modales, con respeto por `prefers-reduced-motion`.

## Privacidad 1.8

Argus 1.8 elimina del runtime activo:

- acciones TTS;
- análisis de cámaras mediante Google Generative AI Conversation;
- sugerencias “Argus AI”;
- Argus Copilot;
- afirmaciones o controles Matter propios.

HomeKit Bridge continúa como compatibilidad real proporcionada por Home Assistant. Las automatizaciones locales deterministas, notificaciones, entidades y disparo de alarma permanecen disponibles.

## Requisitos

- Home Assistant **2024.7.0 o posterior**.
- Navegador con WebGL para la atmósfera cinematográfica.
- HACS recomendado.
- Cuenta administradora para instalar y configurar.

## Instalación con HACS

1. Abre **HACS → Integraciones → Repositorios personalizados**.
2. Añade `https://github.com/Chrisalvir1/Argus` como **Integración**.
3. Instala Argus, reinicia Home Assistant y añade la integración.
4. Haz una recarga completa sin caché del navegador.

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

## Actualización a 1.8

1. Crea un respaldo.
2. Actualiza desde HACS.
3. Reinicia Home Assistant.
4. Recarga el navegador sin caché.
5. Revisa automatizaciones antiguas y elimina acciones TTS o generativas retiradas.
6. Verifica armado, desarmado, SOS, PIN, sirenas, medios y restauración.

Consulta [las notas de 1.8.0](docs/RELEASE_NOTES_1.8.0.md).

## Desarrollo

```bash
python -m compileall -q custom_components/argus
python -m unittest discover -s tests -v
for file in custom_components/argus/www/*.js; do node --check "$file"; done
```

Consulta [la arquitectura](docs/ARCHITECTURE.md) y [CONTRIBUTING.md](CONTRIBUTING.md).

## Licencia

MIT. Consulta [LICENSE](LICENSE).
