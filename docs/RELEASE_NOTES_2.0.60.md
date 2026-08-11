# Argus Home Hub v2.0.60 — Cinematic Weather Experience

> Experiencia visual cinematográfica: shader fotorrealista, 60fps, HDR Display P3, transiciones suaves y eventos especiales de calendario (Navidad y Año Nuevo).

---

## 🎬 60fps con transiciones suaves

- Loop de render con `requestAnimationFrame` y **delta-time real** (cap de 100ms para evitar saltos)
- Todos los uniformes del shader **interpolan suavemente** en lugar de saltar:
  - Modo de clima: transición en ~2 segundos (curva exponencial)
  - Ciclo día/noche: transición en ~8 segundos (gradual como un amanecer real)
- **Pausa automática** cuando la pestaña está oculta (`visibilitychange`) — ahorra GPU y batería
- API pública `startRender()` con targets `mTgt` / `nTgt` actualizables externamente sin reiniciar el loop

---

## 🌈 HDR + ACES Filmic Tone-Mapping

- Canvas WebGL2 con `colorSpace: 'display-p3'` en dispositivos compatibles (iPhone Pro, MacBook Pro, iPad Pro)
- Fallback automático y silencioso: WebGL2 display-p3 → WebGL2 estándar → WebGL1
- **Tone-mapper ACES Filmic** dentro del shader: comprime highlights del sol y rayos sin reventar blancos
- Colores más saturados y rango dinámico más amplio en pantallas P3

---

## ⛅ Shader Fotorrealista Atmosférico

| Elemento | Descripción |
|---|---|
| Cielo Rayleigh | Scattering físico: azul profundo en cénit → horizonte pálido |
| Sol | Limb-darkening real + corona cromática + golden hour cerca del horizonte |
| Luna | Fase correcta con silueta de ocultación + textura de cráteres procedural |
| Estrellas | 3 capas con centelleo, parallax, variación de tamaño + banda de la Vía Láctea |
| Nubes | fBm volumétrico 6-octavas con auto-sombra, scroll de viento, densidad por condición |
| Lluvia | 3 capas de gotas con ángulo de viento y brillo de charcos |
| Nieve | 3 capas de copos con variación de tamaño y flotamiento orgánico |
| Niebla | Neblina atmosférica en capas con fBm animado |
| Rayos | Rayos ramificados con SDF, flash ambiental, posición aleatoria por evento |
| Aves | 3 bandadas de siluetas W-wing que cruzan el cielo en días despejados/parcialmente nublados |

Todas las transiciones entre condiciones (ej. soleado → lluvia, día → noche) ocurren con interpolación suave — sin cortes bruscos.

---

## 🎄 Modo Navidad (1–25 Dic)

- **3 capas de copos festivos extra** (dorados, rojos, plateados) más grandes que la nieve meteorológica normal
- **Aurora navideña**: banda verde-roja sutil animada en la parte alta del cielo (fBm)
- **Tinte cálido ambiental**: toda la escena se inclina levemente hacia ámbar/rojo
- Activación automática — intensidad con rampa suave durante los primeros 4 días de diciembre

---

## 🎆 Año Nuevo (31 Dic 23:58 → 1 Ene 00:05)

**Fuegos artificiales procedurales en GLSL:**
- 6 cohetes con posición y color (hue) aleatorios por cohete
- Expansión radial con starburst SDF de 12 rayos
- Fade in/out suave, cohetes escalonados en el tiempo

**Overlay 2D Canvas (encima del WebGL):**
- Año actual en texto grande con glow dorado
- Subtítulo "¡Feliz Año Nuevo!" en escala proporcional al canvas
- Alpha sinusoidal para aparición/desaparición suave durante 7 minutos
- El número del año se toma de `new Date().getFullYear()` — se actualiza automáticamente cada año

---

## 🔧 Fixes incluidos

- `clock_format` preserva el valor guardado — ya no se sobreescribe con `'auto'` en cada render
- `weather_source` y `temperature_source` incluidos en el payload de guardado (`argus/save_ui`)
- `layoutVersion >= 1` aceptado para evitar reset de layout al recargar la página
- Watchdog de armado programa su trabajo de forma thread-safe desde el hilo de Home Assistant

---

## 📦 Compatibilidad

| Requisito | Versión mínima |
|---|---|
| Home Assistant | 2024.1 |
| Navegador (WebGL2) | Chrome 90 · Firefox 90 · Safari 15 |
| Node.js (build) | 24 |
| TypeScript (build) | 7.0.2 |
| Python (backend) | 3.14 |

- HDR activo automáticamente en dispositivos con pantalla P3 y soporte `display-p3` en canvas
- Degradación elegante en dispositivos sin WebGL o con `prefers-reduced-motion`
- El loop de render se pausa automáticamente en pestañas ocultas para maximizar batería
