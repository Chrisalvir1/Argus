# Argus 2.9.119

En vista vertical, los widgets usan una sola superficie: la tarjeta React mantiene su vidrio opaco y el panel nativo interior deja de dibujar un segundo fondo, borde, sombra o blur. Esto corrige la composición en capas que producía franjas y repintado al mover el puntero en Historial y Automatizaciones. Las filas, controles y scroll se conservan.
