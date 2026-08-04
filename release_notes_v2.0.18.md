# Argus Home Hub v2.0.18 — Runtime Polish & Responsive Recovery

## 🚀 Mejoras y Correcciones

- **Reloj sincronizado (12h/24h):** Se corrigió la discrepancia de formatos; ahora el reloj del top bar y de "Instancias activas" respeta tu preferencia de 12h, 24h o automático (heredando la zona horaria real de Home Assistant) e incorpora una actualización periódica (15s) evitando la estanqueidad.
- **Auditoría de Rendimiento afinada:**
  - El diagnóstico WebGL ahora examina WebGL 1 y 2 de manera independiente en _canvases_ paralelos, suprimiendo los falsos negativos originados por la colisión de contextos de GPU.
  - La medición pasiva ya no penaliza ni presupone negativamente cuando un navegador bloquea la lectura del `deviceMemory` por privacidad, esclareciendo textualmente que el perfil detecta el dispositivo cliente.
- **Experiencia móvil restituida:** Los teléfonos en posición vertical (menos de 760px) han recuperado su clásica **1 sola columna de pantalla completa**. Las franjas laterales que aplastaban el contenido se eliminaron. A partir de 760px, el diseño escala a un perfecto panel de dos columnas optimizado para tablets e iPad.
- **Sistema Desarmado (Alto Contraste):** El estado "Sistema desarmado" se estilizó orgánicamente para sobresalir contra wallpapers claros mediante texto blanco, fondo y sombras duras.
- **Escudo SVG inquebrantable:** El resplandor (Glow) del escudo de seguridad ha sido ampliado y emancipado mediante la expansión de los límites del filtro (`filterUnits="userSpaceOnUse"`) y declaraciones de `overflow: visible`, eliminando definitivamente cualquier línea cortada o bloque flotante erróneo.
