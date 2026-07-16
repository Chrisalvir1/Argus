# Argus v1.4.5 — Estabilidad, legibilidad y diseño Liquid Glass

Esta versión de lanzamiento pule detalles visuales importantes del panel de seguridad Argus Home Hub y mejora la resiliencia en la carga ante datos antiguos o incompletos.

### 🌟 Cambios en esta versión

- **Contraste de Idioma:** Se mejoró la legibilidad de los textos dentro del selector de idioma en temas claros y oscuros.
- **Rediseño de Selectores:** El selector de sensores, sirenas, bypass y SOS ahora posee una distribución moderna de dos columnas, altura estable, scroll independiente y tarjetas Liquid Glass.
- **SOS de Ancho Completo:** La fila de acciones de SOS ocupa ahora todo el ancho horizontal del panel, eliminando espacios vacíos.
- **Distribución Simétrica del Panel:** Reorganización de las columnas para un diseño equilibrado. La columna derecha muestra ahora Historial y Modos antes del Control de acceso.
- **Carga de Datos Resiliente:** Incorporadas validaciones robustas y bloques try/catch en el historial, automatizaciones y usuarios para evitar que datos antiguos e incompletos bloqueen la carga del panel.
