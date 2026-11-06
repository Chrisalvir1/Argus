# Argus 2.9.135

La auditoría encontró que el layout web `lg` que ya estaba guardado para el perfil del laboratorio tenía `access-control` superpuesto con `alarm-configuration`. Las correcciones anteriores reparaban movimientos nuevos, pero no saneaban geometrías inválidas que ya estaban persistidas. Ahora Argus detecta colisiones al cargar, mantiene las columnas de los widgets y empuja las tarjetas afectadas debajo de las que las bloquean; después guarda el layout corregido en Home Assistant.

Validación: regresión con layout v5 superpuesto, pruebas de drag/resize, contratos del dashboard y pruebas del frontend.
