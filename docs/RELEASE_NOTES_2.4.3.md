# Argus Home Hub v2.4.3 — Auto-Reparación de Activos de Marca y Purga de Caché

## 🚀 Lo Nuevo en v2.4.3

Argus v2.4.3 incorpora un sistema de autorreparación que garantiza el registro automático de las imágenes de marca en el Brands Proxy API de Home Assistant y purga la caché antigua:

### 🛡️ Auto-Sincronización de Activos de Marca
- **Autorreparación en el arranque**: En cada inicio de Argus (`async_setup` y `async_setup_entry`), la integración verifica la presencia de `icon.png`, `dark_icon.png`, `logo.png` y `dark_logo.png` en `custom_components/argus/brand/` y los copia automáticamente si faltan.
- **Parche en memoria del cargador de HA**: Se asegura de que el objeto `Integration` en el cargador de Home Assistant registre `has_branding = True` inmediatamente, evitando que el núcleo de HA caiga al placeholder gris.
- **Purga automática de caché de imágenes 404**: Elimina automáticamente cualquier marcador 404 o placeholder guardado previamente en `/config/.cache/brands/integrations/argus` y `/config/.storage/brands/integrations/argus`.

---

## 📦 Actualización

### Mediante HACS
1. En **HACS → Integraciones → Argus Home Hub**, pulsa en los tres puntos (⋮) y selecciona **Actualizar información**.
2. Pulsa en los tres puntos (⋮), selecciona **Volver a descargar** y elige **v2.4.3**.
3. Reinicia Home Assistant (**Ajustes → Sistema → Reiniciar**).
