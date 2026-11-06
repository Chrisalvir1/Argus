# Argus 2.9.136

## Corrección del layout persistido

Home Assistant ahora repara las tarjetas superpuestas del layout v5 al entregar el dashboard y guarda la geometría corregida en la configuración del perfil. La reparación mantiene el ancho y la columna de cada tarjeta y solo desplaza verticalmente las tarjetas afectadas.

En la configuración del laboratorio se encontró `Control de Acceso y Usuarios` superpuesto con `Modos / SOS` en el breakpoint de escritorio. La geometría corregida se guardó como revisión 137; las tarjetas ya no colisionan en `lg` ni en los otros breakpoints revisados.
