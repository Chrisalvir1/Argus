# PIN de armado — cambio y eliminación

El perfil solicita el PIN actual incluso al administrador si existe uno configurado. Solicita nuevo PIN y confirmación; ambos vacíos permiten eliminarlo con confirmación explícita. El servidor conserva permisos administrativos, verificación del PIN actual, límites de intentos y almacenamiento mediante hash. Rechaza confirmaciones diferentes cuando el cliente las envía; se conserva compatibilidad con clientes anteriores.

Un valor vacío explícito en opciones prevalece sobre el PIN heredado de config-entry data, evitando resucitarlo tras su eliminación.

Validación aislada: seis pruebas del handler real (actual ausente/incorrecto, confirmación distinta, sustitución, eliminación y no recuperación del PIN heredado); cinco pruebas de protección SOS. No se cambió ningún PIN real.
