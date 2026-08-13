# Argus v2.0.91 — Hotfix Release

## Fixed
- **Login Flow and Screen Freeze:** Se solucionó el problema donde el dashboard se quedaba vacío tras seleccionar un perfil. Esto ocurría porque la pantalla de selección de perfil se destruía inmediatamente del DOM, provocando que la función de animación de bienvenida retornara de manera anticipada sin iniciar la carga del dashboard (`_load()`). Ahora se crea una capa de bienvenida independiente que cubre la pantalla durante la carga y transición del avatar.
