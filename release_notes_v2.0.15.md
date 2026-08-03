# Argus Home Hub v2.0.15 — Landscape UI & Persistence Polish

## 🚀 Mejoras y Correcciones

- **UI Horizontal Mejorada:** Controles de modos restaurados y accesibles en pantallas orientadas horizontalmente, utilizando tres columnas y scroll independiente para que nada quede oculto en móviles y tablets.
- **Sensores Completamente Accesibles:** El panel lateral en modo horizontal permite visualizar y desplazar libremente la lista de sensores.
- **Escudo Adaptativo:** El escudo de seguridad central se adapta en tamaño dinámicamente en pantallas de baja altura, eliminando los recortes.
- **Restauración Automática de Widgets:** Se acabó el pulsar "Configurar widgets" para que aparezca el layout guardado. La distribución elegida (S, M, L, XL), orden y visibilidad se aplica automáticamente en cuanto Argus carga.
- **Persistencia Robusta de la Edición:** Solucionada la inestabilidad. Los widgets restaurados mantienen la persistencia sin importar cómo reinicies.
- **Instancias Activas Protegida:** El control de "Instancias activas" ya no forma parte del ciclo de configuración; no se oculta de forma accidental, ni se guarda con el layout. Siempre estará visible en el tope de tu configuración local.
- **Pureza Visual del Escudo:** Eliminados todos los fondos, degradados, sombras estáticas e interferencias cuadradas alrededor de la gráfica de seguridad. El escudo flota limpio, proyectando únicamente un delicado resplandor.
- **Nuevas Pruebas de Regresión:** Mayor certidumbre mediante tests automatizados para el viewport, retención del escudo y ordenación temprana.
