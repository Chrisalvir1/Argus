# Argus Home Hub v2.0.35

Hotfix para la pantalla en blanco observada al abrir el panel después de instalar v2.0.34.

## Corrección
- Restaura el nombre de componente web compatible y previamente probado `argus-panel-v2018`.
- Conserva el cache-busting de todos los módulos mediante la versión `2.0.35` en sus URL.
- Sincroniza manifest, constantes, tarjeta, bootstrap y contratos de prueba.
- Mantiene el paquete HACS sin `__pycache__` ni archivos `.pyc`.

## Después de actualizar
1. Reinicia Home Assistant.
2. Cierra la pestaña anterior de Argus.
3. Abre una pestaña nueva y realiza una recarga completa sin caché.
