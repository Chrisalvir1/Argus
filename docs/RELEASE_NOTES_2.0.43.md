# Argus Home Hub v2.0.43

- Restaura exclusivamente el editor moderno **Editar tablero** implementado con TypeScript, React y react-grid-layout.
- Elimina de la interfaz el editor nativo antiguo de “Configurar widgets”.
- Evita que el diseño predeterminado sobrescriba el diseño guardado antes de terminar la carga.
- Monta el editor únicamente después de conocer el usuario y la instancia reales.
- Guarda posiciones, tamaños y visibilidad tanto localmente como en el almacenamiento de Home Assistant.
- Fuerza el botón **DESARMAR / OFF** a verde, ancho completo y encima de SOS mediante estilo final e inline prioritario.
- Conserva la espera ARMING, la cancelación HomeKit, el escudo animado y el parpadeo de sensores bloqueadores.
