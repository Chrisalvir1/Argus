# Release Notes - Argus v2.2.36

## React 19 Engine with Harmonized Panel Initialization

### Highlights
- **React 19 Frontend**: Full support for React 19 (`react` & `react-dom` 19.2.8) with strict typing.
- **Panel Initialization Sequence**: Eliminated premature rendering race conditions during `_load()`, ensuring all widget DOM nodes are completely initialized before React mounting.
- **13-Language Reactive Sync**: Complete real-time translation support across all 13 supported languages.
