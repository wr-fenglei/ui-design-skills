# Selection Frame

## Visual thesis

Keywords: precise perimeter, transparent interior, soft handles, edge separation.

A thin dashed periwinkle perimeter defines the selected region without turning it into a solid panel. A pale fill keeps the underlying content visible. Four rounded-square handles combine a colored border with a white outer separator: this makes the control points distinct from both the dashed line and the image underneath.

[Approved detail and complete composition](README.md#2-components--selection-and-choice)

## Independent use

Candidate applications: screenshot selection, image cropping, canvas object bounds, document-region capture. This is a transferable visual pattern, not a complete selection interaction implementation. Do not require the pastel backdrop from the source composition.

## Relationships to preserve

- Keep the boundary finer than the handles; the handles should remain the actionable landmarks.
- Keep fill opacity low enough to judge the content being selected.
- Center each visible handle on a corner consistently.
- Separate visible handle size from a larger invisible pointer/touch hit target.
- Confine the overlay to the intended image or canvas; leave enough space for controls at its edges.
- Treat selected, focused, dragging, disabled and error states separately. Do not use color alone where state must be unambiguous.

## Implementation starting point

Use the namespaced variables and structural CSS in [tokens.css](tokens.css). Start with real DOM/SVG geometry in the same coordinate space as the image. Convert pointer coordinates through the actual rendered image transform, account for zoom and scrolling, clamp only according to the product's selection rules, and keep the underlying content unchanged.

A crop rectangle, object bounding box and screen capture region can look similar while requiring different resize, keyboard and aspect-ratio behavior. Define that behavior before production use.

## Validation

Test light, dark and detailed imagery; the current pale accent may need a stronger inner outline on bright backgrounds. Inspect at 100% size, zoomed and high-density displays. Verify minimum hit targets, keyboard movement/resizing, focus visibility, pointer cancellation and boundary handling. Test empty, very small and edge-touching selections. Check that the screenshot actually matches the active state.

Only the original pastel-context appearance is approved. Portability across software and background types is not yet verified. This guide retains the useful visual mechanism without claiming all contexts are solved.
