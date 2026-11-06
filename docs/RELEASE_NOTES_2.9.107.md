# Argus 2.9.107

- «Voz de Argus» ahora aparece dentro de la configuración «Armado».
- Guardar Modo confirma qué modo se guardó y conserva el borrador si Home Assistant devuelve un error. Al cambiar de vista con cambios pendientes, Argus permite guardar, descartar o continuar editando.
- El editor del tablero termina de forma consistente al tocar fuera de sus controles. Los movimientos y tamaños siguen guardándose automáticamente, con estado visible de guardado.
- Los widgets ocultos se conservan y se pueden restaurar desde un acceso que permanece en el tablero.
- El layout que se guarda corresponde solo al ancho editado; móvil, tableta y web conservan sus propias distribuciones.
- El núcleo de seguridad, sus cristales y sus animaciones no se modificaron.

Verificación: 53 pruebas Vitest, 170 pruebas Python (13 omitidas por condiciones de entorno), compilación Vite y comprobación TypeScript correctas. El servidor local confirma la integración 2.9.107 y la vista carga las pestañas de Modos.
