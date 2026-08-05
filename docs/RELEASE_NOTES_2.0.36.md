# Argus Home Hub v2.0.36

Corrección de causa raíz para la pantalla completamente en blanco en navegadores reales.

## Causa confirmada
El bundle React compilado conservaba referencias de Node.js a `process.env.NODE_ENV`. En Safari y otros navegadores `process` no existe, por lo que el módulo lanzaba `ReferenceError: process is not defined` antes de que Home Assistant pudiera crear el panel.

Las validaciones anteriores no lo detectaron porque `node --check` solo valida sintaxis y Node sí proporciona el objeto `process`.

## Correcciones
- Vite sustituye explícitamente las variables `process.env` durante la compilación.
- El bundle publicado se rechaza si conserva cualquier referencia a `process.env`.
- La integración React pasa a carga dinámica y tolerante a fallos.
- El panel nativo se registra primero; una falla opcional nunca vuelve a dejar toda la vista en blanco.
- Se añade una prueba permanente específica para el entorno del navegador.
