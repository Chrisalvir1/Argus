# Argus Home Hub v2.3.0

## 🛡️ Accesibilidad Universal WCAG 2.1 / 2.2 (AA & AAA) y Depuración de Código

- **Accesibilidad Integral WCAG 2.1 / 2.2 (Niveles AA y AAA)**:
  - *Alternativa Accesible a Deslizadores (WCAG 2.5.1)*: Nuevo selector en el menú de perfil para alternar entre **↔️ Deslizador Táctil (Antitoques)** y **👆 Botón Accesible (Toque Simple)**. Al activar el modo accesible, se retira por completo el mecanismo deslizante: SOS se convierte en un botón rojo estándar con letras blancas que parpadean a velocidad media cuando se activa la alarma, y Desarmado se convierte en un botón táctil verde (con confirmación de PIN si aplica) que se muestra exclusivamente cuando el sistema está armado.
  - *Modal de Perfil Más Amplio y Adaptable*: Se amplió el ancho del modal a un formato responsivo (`min(420px, calc(100vw - 24px))`) con espacio horizontal holgado y separación limpia de controles, eliminando el apiñamiento vertical y permitiendo nombres de hogar largos sin truncamiento.
  - *Rediseño de Ajustes en Tarjetas Pulidas*: La gestión de PIN y el nombre de la casa cuentan ahora con tarjetas independientes (`.profile-card-tile`), eliminando desfases de espaciado y sustituyendo insignias diminutas por indicadores LED luminosos (`● Configurado` / `● Sin PIN`) con botones táctiles alineados.
  - *Encabezado Responsivo de Historial de Actividad*: El panel de actividad protege el título con `white-space: nowrap` y organiza los botones (`🔄 Actualizar`, `📄 Exportar`, `🗑️ Limpiar`) en un contenedor flexible sin recortes laterales ni saltos silábicos verticales.
  - *Grid Símétrico de Soporte y Comunidad*: Los botones de GitHub Star, PayPal y Sugerencias se integran en una cuadrícula simétrica de 3 columnas de igual altura y estilo visual idéntico.
  - *Calibración de Contraste AAA (> 7:1)*: Textos secundarios y leyendas elevados a `#f1f5f9` y `#e2e8f0` con sombras suaves de lectura; azul de acento sustituido por `#38bdf8` (ratio 11.1:1).
  - *Lectura sin Truncamiento (WCAG 1.4.4)*: Atributos `title` y `aria-label` en sensores para visualizar nombres y estados íntegros sin recortes con tooltips nativos.
  - *Objetivos Táctiles de 44x44px (WCAG 2.5.5)*: Filas interactivas de 48px de alto y casillas de verificación de 22x22px para evitar errores en pantallas táctiles.
  - *Lectura Amigable para Dislexia*: Eliminación de mayúsculas forzadas (*all-caps*) pasando a sentence-case y blindaje de botones con `white-space: nowrap` para impedir saltos silábicos a mitad de palabra.
  - *Protección "Fat-Finger" (WCAG 2.5.8)*: Aislamiento físico de acciones críticas con confirmación modal en dos pasos y advertencia visual.
- **Erradicación Total de Código Huérfano**: Eliminación definitiva de antiguos shaders WebGL, gradientes meteorológicos y referencias residuales a climas o fondos animados.
- **Modo Alto Contraste & OLED Dark Mode**: Opción de accesibilidad en el perfil de usuario con negros profundos, textos ultra-nítidos y soporte para `@media (prefers-contrast: more)`.
- **Arquitectura y Rendimiento**: Stack actualizado a TypeScript 7.0.2 + Vite 8.2.2 + React 19.2.8 con 0 vulnerabilidades en dependencias y compilación ultrarrápida (110ms).
- **Acceso Directo a Comunidad y Soporte**: Enlaces a PayPal, GitHub Star y correo de sugerencias integrados directamente en el panel y menú de usuario.

---

Si disfrutas de Argus Home Hub:
- ⭐ **Dale una estrella en GitHub:** [https://github.com/Chrisalvir1/Argus](https://github.com/Chrisalvir1/Argus)
- ☕ **Apoya el proyecto en PayPal:** [https://paypal.me/CEstradaAlvir](https://paypal.me/CEstradaAlvir)
- ✉️ **Sugerencias y contacto:** [chrisalvir01@gmail.com](mailto:chrisalvir01@gmail.com)
