<div align="center">
  <img src="logo.png" alt="Argus Home Hub" width="180">

# Argus Home Hub

**Panel de alarma local-first y modular para Home Assistant**

[![Release](https://img.shields.io/github/v/release/Chrisalvir1/Argus)](https://github.com/Chrisalvir1/Argus/releases)
[![Validate](https://github.com/Chrisalvir1/Argus/actions/workflows/validate.yml/badge.svg)](https://github.com/Chrisalvir1/Argus/actions/workflows/validate.yml)
[![HACS](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![License](https://img.shields.io/github/license/Chrisalvir1/Argus)](LICENSE)
</div>

Argus reúne alarma, sensores, sirenas, auditoría, acceso mediante PIN, notificaciones y una interfaz Liquid Glass en una integración local para Home Assistant.

> [!IMPORTANT]
> Argus no sustituye una alarma certificada ni garantiza comunicación con servicios de emergencia. Prueba sensores, sirenas y respaldos antes de depender del sistema.

## Funciones

- Modos desarmado, casa, ausente, noche y vacaciones.
- Retardos de entrada, salida y duración de alarma.
- Sensores, bypass controlado, sirenas y SOS.
- PIN con `scrypt`, política robusta y limitación de intentos.
- Auditoría estructurada y recuperación del último estado estable.
- MQTT opcional.
- Panel completo y tarjeta Lovelace.
- Medios firmados bajo `.storage` para cargas nuevas.
- Frontend modular para seguridad, auditoría y medios.

## Requisitos

- Home Assistant **2024.7.0 o posterior**.
- HACS recomendado.
- Cuenta administradora para instalar y configurar.

## Instalación con HACS

1. Abre **HACS → Integraciones → Repositorios personalizados**.
2. Añade `https://github.com/Chrisalvir1/Argus` como **Integración**.
3. Instala Argus, reinicia Home Assistant y añade la integración.
4. Recarga completamente el navegador.

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

Panel completo:

```yaml
type: custom:argus-panel
```

## Seguridad

- Usa un PIN único de 4–12 dígitos.
- No compartas respaldos, tokens ni URL firmadas.
- Las cargas nuevas de 1.7 se guardan en `/config/.storage/argus_media`.
- Los fondos históricos bajo `/local` siguen siendo públicos hasta reemplazarlos.
- Reporta vulnerabilidades según [SECURITY.md](SECURITY.md).

## Actualización

1. Crea un respaldo.
2. Actualiza desde HACS.
3. Reinicia Home Assistant.
4. Recarga sin caché.
5. Verifica armado, desarmado, SOS, PIN, medios y restauración.

Para 1.7 consulta [la guía de migración](docs/MIGRATION_1.7.md).

## Desarrollo

```bash
python -m compileall -q custom_components/argus
python -m unittest discover -s tests -v
for file in custom_components/argus/www/*.js; do node --check "$file"; done
```

Consulta [la arquitectura](docs/ARCHITECTURE.md) y [CONTRIBUTING.md](CONTRIBUTING.md).

## Licencia

MIT. Consulta [LICENSE](LICENSE).
