# Argus Home Hub v2.0.23 — Corrección de inicio del panel

Este parche de emergencia corrige un fallo de inicio introducido en v2.0.22.

## Corrección

La normalización de la configuración heredada de sensores abiertos se ejecutaba accidentalmente durante la inicialización de idioma, donde la variable de configuración no existe. Esto podía impedir que Argus iniciara y mostrar el mensaje `Can't find variable: cfg`.

La normalización vuelve a ejecutarse únicamente dentro de la resolución de la configuración del modo. El inicio autenticado de Home Assistant y el comportamiento de armado pendiente permanecen sin cambios.

## Validación

Se añadió una prueba de regresión para asegurar que el bootstrap de locale no use variables de configuración fuera de alcance, junto con las validaciones de sintaxis JavaScript, la suite de pruebas y la compilación Python.
