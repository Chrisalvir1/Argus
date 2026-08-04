# Argus Home Hub v2.0.17 — Definitive Widget Visibility & Content Restoration

## 🚀 Mejoras y Correcciones

- **Instancias activas con altura natural:** Se resolvió el problema estructural que confinaba "Instancias activas" a una fila implícita del grid. Al anclarlo en la primera fila con altura `auto`, se elimina por completo el riesgo de recorte inferior sin importar la resolución.
- **Historial y Automatizaciones completos en tamaño S:** Se ha restaurado la capacidad de estas tarjetas para mostrar la lista completa de eventos y rutinas incluso cuando su tamaño geométrico (`data-size`) es `S`. 
- **Eliminación del conflicto de scroll:** Se corrigió la competencia de scroll; ahora el deslizamiento ocurre nativamente en el interior de las listas (`#activity-log` y Automatizaciones), evitando que los contenedores madre exteriores restrinjan o empujen la vista.
- **Renderizado limpio y sin mutaciones:** Se ratifica el cese total de la reubicación de nodos del DOM (`grid.prepend`) durante el render, garantizando un layout inquebrantable tras las operaciones de apertura/cierre del editor o las recargas de red.
- **Conservación global:** Todos los escudos pulidos sin sombras anormales y el robusto diseño responsive en móviles/tablets (horizontal y vertical) heredado de las versiones recientes, queda 100% asegurado.
