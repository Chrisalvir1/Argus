# Argus Home Hub v2.3.0

## 🛡️ Accesibilidad Universal WCAG 2.1 / 2.2 (AA & AAA) y Depuración de Código

- **Accesibilidad Integral WCAG 2.1 / 2.2 (Niveles AA y AAA)**:
  - *Alternativa Accesible a Deslizadores (WCAG 2.5.1)*: Nuevo selector en el menú de perfil para alternar entre **↔️ Deslizador Táctil (Antitoques)** y **👆 Botón Accesible (Toque Simple)** con soporte completo para pulsación directa y teclado (`Enter` / `Espacio`).
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
