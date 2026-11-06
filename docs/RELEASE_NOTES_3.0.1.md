# Argus 3.0.1

Correcciones de zonas heredadas, distribución vertical, voz por alarma y accesibilidad. Ver README y CHANGELOG para el detalle.

Importa sensores desde el modo seleccionado al borrador de una zona y revisa antes de guardar. No se migran silenciosamente condiciones diferentes entre modos. Los sensores omitidos siguen excluidos durante el ciclo; su recuperación no los reincorpora automáticamente.

Luces compatibles: color individual y respiración lenta/media/rápida, conservando la opción anterior de respiración media. El hardware debe declarar brillo y transiciones.

Validación local: 69 pruebas frontend, TypeScript y build correctos. Sintaxis Python comprobada. Pruebas backend no ejecutadas en esta sesión por falta de pytest. Pendientes Safari/iPhone, luces físicas, batería repuesta y diagnóstico del error TTS concreto.

Actualiza la integración existente y reinicia Home Assistant. Conserva una copia de seguridad antes de instalar. No requiere volver a emparejar accesorios. Para revertir, restaura la versión anterior y su copia de seguridad si se modificó configuración.
