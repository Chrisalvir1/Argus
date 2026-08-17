# Argus v2.2.1 — Slide-to-Action Child Lock

## ✨ Nuevas Funciones / New Features

### 🔐 Slide-to-Disarm — Protección de Niños (Child Lock)
- El botón **DESARMADO** ahora activa un control deslizante estilo iOS ("Desliza para desarmar").
- El deslizador sólo aparece al tocar el botón (nunca permanentemente visible), evitando activaciones accidentales.
- **Con PIN maestro configurado:** el deslizador completa el gesto y luego muestra un campo de código. Si el código es correcto, se desarma. Si es incorrecto, se muestra animación de error (shake) y campo limpiado.
- **Sin PIN:** el deslizador completa el gesto y desarma de inmediato.
- Animación suave con efecto de rebote (`cubic-bezier(0.34, 1.56, 0.64, 1)`) al no completar el gesto.
- Totalmente localizado en los 13 idiomas de Argus.

### 🚨 Slide-to-SOS — Protección de Niños (Child Lock)
- El botón **SOS** ahora activa un control deslizante rojo ("Desliza para 🆘 SOS").
- El deslizador con pulgar rojo palpitante solo aparece al tocar el botón.
- Al completar el gesto, activa / detiene el SOS de pánico.
- Al estar SOS activo, el pulgar del deslizador parpadea rítmicamente en rojo intenso.

### 🎨 Colores Dinámicos de Botones de Modo
- Todos los botones de modo (En Casa, Ausente, Noche, Vacaciones) tienen colores específicos en reposo y se iluminan vibrante al activarse.
- El botón DESARMADO se enciende en verde esmeralda al estar activo.
- El botón SOS parpadea en rojo al estar en pánico activo.

## 🌐 Idiomas Soportados
Slide-to-action disponible en: Español, English, Français, Português, Italiano, 中文, 繁體中文, Русский, हिन्दी, العربية, 한국어, 日本語, Українська.

## 🔧 Fixes
- Etiquetas de acciones SOS (`Luz fija segura`, `Destello seguro`, etc.) ahora se traducen dinámicamente al idioma activo.
- Títulos de widgets del React Dashboard se localizan al cambiar de idioma.
- El feedback `Tamaño S` ya no aparece permanentemente en el tablero.

## 📦 Archivos Cambiados
- `src/features/safety/slide-action.ts` — nuevo módulo de slide-to-action
- `src/app/index.ts` — integración del módulo de slide-to-action
- `src/legacy/argus-panel.ts` — colores de botones por modo, actualización de i18n
- `src/features/render/alarm.ts` — lógica de paint() simplificada usando clases CSS
- `src/features/dashboard/ArgusDashboard.tsx` — títulos dinámicos
- `src/features/dashboard/index.tsx` — construcción dinámica de widgets
- `src/features/dashboard/types.ts` — propiedad `t` en `ArgusWidgetDefinition`
- `src/legacy/argus-light-capability-fixes.ts` — i18n para chips de capacidades de luz SOS
- `custom_components/argus/manifest.json` — versión 2.2.1
