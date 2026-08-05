# React dashboard layout for Argus

This branch migrates only the editable dashboard layout subsystem to React, Vite, TypeScript and React Grid Layout. Existing Home Assistant alarm, automation, activity, user, backup and security logic remains in the original Argus panels and is mounted inside the new layout hosts without rewriting those functions.

## Behavior

- Explicit **Editar tablero / Listo** mode.
- Dragging only from the visible widget handle.
- Resizing only from the south-east handle while editing.
- `compactType={null}`, collision prevention, no overlap and bounded movement.
- Canonical S, M, L and XL sizes after resize.
- Independent layouts for `lg`, `md`, `sm`, `xs` and `xxs`.
- Versioned local persistence scoped by Argus user and dashboard.
- Widget visibility persistence and restoration controls.
- Full reset with confirmation that does not delete Argus configuration.
- Existing functional controls become inert during layout editing.
- Reduced-motion and keyboard Escape support.

## Build verification

The committed bundle was generated after these checks completed successfully:

- `npm ci`
- production dependency audit
- strict TypeScript check
- Vitest layout unit tests
- Vite production build
- Python integration contract for the compiled adapter

## Manual Home Assistant checklist

Before merging or releasing:

1. Enter and leave edit mode from both layout buttons.
2. Drag every widget into an empty location and verify the others do not jump.
3. Attempt a collision and verify the move is rejected.
4. Resize to S, M, L and XL and verify the final size snaps correctly.
5. Verify layouts independently on desktop, tablet and mobile.
6. Reload the page and switch Argus profiles to verify per-user persistence.
7. Hide and restore a widget.
8. Reset the layout and verify no alarm or user configuration is removed.
9. Confirm arm/disarm, sirens, bypass and restore-backup controls cannot fire while editing.

The PR remains in draft until this physical Home Assistant checklist is completed.
