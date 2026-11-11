# Argus Home Hub 3.7.9

11 de noviembre de 2026

Mantén presionado un widget para entrar en edición y arrástralo sin levantar el dedo. Los widgets vecinos se reacomodan durante el gesto y vuelven a su sitio cuando dejas de ocupar su espacio. Argus guarda la distribución al soltar y recupera la anterior si cancelas el gesto.

El tirador de la esquina permite estirar y encoger el widget con resistencia progresiva y un retorno animado al tamaño permitido. También puedes elegir **Compacto**, **Mediano** o **Amplio** según el espacio disponible. Pulsa **Listo** para salir de edición. Argus respeta la preferencia **Reducir movimiento** y conserva las distribuciones de móvil y escritorio.

## Verificación

- 79 pruebas frontend, comprobación de TypeScript y build de producción.
- Chromium con ratón y tacto emulado para arrastre, cancelación, guardado al recargar y tamaños.
- Chromium y WebKit de escritorio para medir la resistencia, el retorno animado y el modo de movimiento reducido.
- Pendiente comprobar el tacto en un iPhone o iPad físico.
