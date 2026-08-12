# Argus v2.0.72 — Patch Release

## Added
- **Menú Desplegable Integrado en Perfil:** Se añadió un menú desplegable interactivo (`.hero-profile-dropdown`) directamente debajo de la píldora de perfil del header. Contiene:
  - **Ajustes de Idioma:** Selector directo de idioma que aplica la traducción a toda la interfaz y se persiste de manera global.
  - **Gestión de PIN de Acceso:** Opción para actualizar o remover el PIN de acceso del perfil activo.
  - **Gestión de PIN Maestro:** Opción para actualizar o remover el PIN maestro de armado/desarmado.
- **Diálogos de Confirmación y Entrada:** Integración con modales nativos para asegurar que los flujos de cambio de PIN sean totalmente interactivos y guiados.

## Removed
- Se eliminaron las píldoras antiguas de clima ("Nublado") y estado de seguridad ("Sistema Desarmado") del top bar superior.
- Se removió el antiguo botón de idioma independiente del top bar.

## Fixed
- **Reubicación de Perfil:** Colocación del distintivo de perfil a la derecha de la línea de separación de la fecha y hora.
- **Compactación de Personalización Estética (Avanzado):** Se redujo la altura y relleno de todos los selectores, campos de entrada y botones a un tamaño compacto de 32px, mejorando la legibilidad en pantallas táctiles y de escritorio.
