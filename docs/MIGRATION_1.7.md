# Migración a Argus 1.7

## Antes de actualizar

1. Crea un respaldo completo de Home Assistant.
2. Conserva una copia de `.storage/argus.ui`.
3. Anota los fondos actuales que utilicen `/local/argus/`.

## Después de actualizar

1. Reinicia Home Assistant.
2. Recarga el navegador sin caché.
3. Abre Argus como administrador.
4. Vuelve a cargar los fondos que quieras mover al almacenamiento firmado.
5. Guarda la personalización para reemplazar las URL antiguas.
6. Verifica PIN, usuarios, armado, desarmado, SOS y restauración.

## Compatibilidad

- Los fondos antiguos en `/local` continúan funcionando, pero no se importan automáticamente.
- Las cargas nuevas se guardan en `.storage/argus_media`.
- Los comandos WebSocket anteriores continúan operando contra el nuevo almacén.
- No se cambia el formato principal de `.storage/argus.ui`.

## Reversión

Si necesitas volver a 1.6, restaura el respaldo de Home Assistant. La versión 1.6 no conoce el almacén privado de 1.7, aunque no elimina sus archivos.
