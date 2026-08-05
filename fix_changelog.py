import re
with open("/Users/chrisalvir/Desktop/GITHUB PROJECT/argus/CHANGELOG.md", "r") as f:
    text = f.read()

text = text.replace("## [2.0.29] - 2026-08-04", """## [2.0.29] - 2026-08-04

### Fixed
- **Personalización por Perfil (Themes):** Se introdujo una reestructuración de la persistencia que empaqueta las preferencias estéticas (`background_mode` y `background_file`) dentro de la propiedad `theme` por usuario. Ahora cada perfil de Argus mantiene de forma confiable su propio fondo animado o estático independiente sin importar si refrescan la pestaña o entran desde otros dispositivos.

## [2.0.28] - 2026-08-04""")

with open("/Users/chrisalvir/Desktop/GITHUB PROJECT/argus/CHANGELOG.md", "w") as f:
    f.write(text)
