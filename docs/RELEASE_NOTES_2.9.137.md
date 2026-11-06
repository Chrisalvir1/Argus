# Argus 2.9.137

El panel web de Argus ahora se registra antes de inicializar componentes auxiliares. Las tareas de branding, API privada de medios y sincronización de recursos Lovelace corren aparte; un retraso de esas tareas no debe impedir que aparezca Argus en Home Assistant. El registro compartido está protegido frente a llamadas simultáneas desde setup YAML y config entry.
