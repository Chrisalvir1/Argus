# Argus Home Hub 3.7.5

Incluye las correcciones de [v3.7.4](RELEASE_NOTES_3.7.4.md): verificación visible en fullscreen, detalles dentro de una vista que conserva banner y conteos, altura estable, sensores sin aparición automática en desarmado y conteos globales coherentes.

Añade márgenes safe-area-inset en el contenedor del detalle para respetar el notch y el indicador de inicio. El ajuste se publica por separado porque el workflow de3.7.4 ya había finalizado. No cambia el diseño, la geometría, los colores ni las animaciones del núcleo.

Verificaciones locales:75pruebas frontend; suite backend completa sin módulos fallidos (290contabilizadas y13omitidas); TypeScript y build. Navegación en cinco tamaños, cambio de orientación, actualizaciones de estado y fullscreen nativo probados en Chromium con estados HA simulados. También se verifican insets simulados de47px superior/34px inferior. Esto no sustituye pruebas físicas en Safari/iPhone o Echo Show, que siguen pendientes.

Sin nuevas dependencias, migración de datos ni cambios en decisiones de armado, PIN o emparejamientos. Actualizar la integración existente y recargar Argus/dashboard después del reinicio habitual de HA. Para revertir, conservar configuración y reinstalar los archivos de la versión previa; no eliminar la integración ni emparejamientos.
