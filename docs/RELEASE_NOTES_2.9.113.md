# Argus 2.9.113

- Repaired screen-unlock PIN handling: failed validation keeps the dial open and displays an error; cancel works by close button, backdrop, or Escape. The dial scales to narrow portrait screens, springs in/out, centers over the security console in portrait, and sits to its right on wide screens when space permits.
- Kept screen unlock aligned with the master PIN validator instead of asking for a personal PIN that the route cannot validate.
- Stabilized Activity History in portrait by reconciling keyed rows instead of rebuilding the entire list and by leaving `#activity-log` as its sole scroll container. Scroll momentum now chains back to the page at the list edge.
- Security core visuals are unchanged.
