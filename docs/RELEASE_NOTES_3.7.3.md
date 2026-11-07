# Argus Home Hub 3.7.3

La aceptación de tts.speak por Home Assistant no confirma que el altavoz haya terminado. Argus mantenía la exclusión por reproductor solo hasta esa aceptación, permitiendo que un aviso posterior interrumpiera la frase anterior.

Esta versión conserva la separación por reproductor después de aceptar el servicio. Usa una estimación conservadora de duración y, cuando dispone de contenido nuevo con duración/posición, amplía la espera. La duración de música previa no se utiliza como duración del aviso. La espera está limitada y no equivale a confirmación de entrega física. Cada altavoz continúa recibiendo el anuncio en paralelo; un reproductor sin buena información puede tardar más en recibir el aviso siguiente.

El timeout de síntesis/entrega al servicio pasa de15 a60segundos. Las cancelaciones liberan recursos.

## Verificación

- Cuatro pruebas con reloj virtual cubren mensajes consecutivos, duración del audio nuevo, música previa y metadatos de posición inválidos.
- La suite backend completa local terminó sin módulos fallidos:287pruebas contabilizadas,13omisiones heredadas. Entorno local HA2025.1.4/Python3.12; el workflow de release verifica el entorno objetivo declarado.
- La reproducción audible en AirPlay y otros dispositivos sigue pendiente. No se ha realizado una comprobación física ni modificado la instancia HA del usuario.

Sin nuevas dependencias ni cambios de configuración, identidad, emparejamientos o decisiones de seguridad. Para revertir, reinstalar los archivos de la versión anterior conservando datos y configuración.
