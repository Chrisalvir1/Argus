# Argus 2.9.104

- Fix mobile/portrait Activity History scrolling by making the event list the only scrollable surface. The widget and outer panel no longer compete for the same touch gesture.
- Use native vertical touch scrolling with contained overscroll and preserve the first visible event when the timeline changes, instead of resetting the list during an active scroll.
- Remove row entrance animation from the activity list and disable the widget backdrop blur in narrow portrait layouts to avoid Safari compositing flicker while scrolling.

Validation: TypeScript, Vitest, the dashboard/history Python contract tests, full Python suite, frontend build, and the local Home Assistant endpoint.
