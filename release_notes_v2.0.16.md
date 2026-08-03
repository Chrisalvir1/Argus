# Argus Home Hub v2.0.16 — Layout Recovery Hotfix

## 🚀 Mejoras y Correcciones (Hotfix)

- **Eliminación de mutaciones del DOM durante el renderizado:** Se detuvo la mala práctica de reubicar contenedores (`grid.prepend`) o inicializar sistemas durante el ciclo de render continuo, resolviendo los fallos de inestabilidad y elementos parpadeantes/desaparecidos.
- **Restauración limpia de Widgets:** La configuración guardada (orden y visibilidad) ahora se aplica **una sola vez** después de la carga inicial de Argus (`restoreWidgetLayoutOnce`), asegurando un estado sólido y predecible.
- **Tarjetas intensivas rediseñadas:** "Historial" y "Automatizaciones" han recuperado su legibilidad. Las filas base se han incrementado inteligentemente (`clamp(190px, 22vw, 280px)`), permitiendo contenido legible y activando un scroll interno estable cuando es necesario.
- **Instancias Activas inquebrantable:** El contenedor superior de instancias activas ahora se protege orgánicamente limpiando estilos accidentales (como `hidden` o `dragging`) en lugar de mover el nodo por la fuerza, garantizando que nunca más desaparezca tras usar el editor.
- **Pruebas defensivas estrictas:** Se han incorporado pruebas Python adicionales para asegurar que `grid.prepend` jamás se utilice para manipular instancias activas, garantizando que la estructura del DOM no sufra alteraciones inesperadas.
