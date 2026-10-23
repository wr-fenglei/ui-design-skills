# Reference Calibration

Use with [SKILL.md](../SKILL.md) whenever a direction's version is built from a selected real reference: the [Linear](../directions/linear/README.md) and [Panel UI](../directions/panel-ui/README.md) directions always, and the [inspiration-led](../directions/inspiration-led/README.md) direction when it faithfully studies a specific source.

The reusable process is **measure → deconstruct → foundations → components → complete page → screenshot review**. Concrete palettes, radii, grids and layouts belong to the selected reference's own contract, not to this method. How the three directions' versions are produced side by side and compared is in the [multi-direction workflow](multi-direction-workflow.md); review is in [review and audit](review-and-audit.md).

## 1. Choose and record the reference

- Use the reference named by the direction. If a direction has no chosen reference for this task, offer a small, clearly different set of actual products or official screenshots and let the user choose.
- Record original URL, access date, inspected regions and source rights. Link third-party sources instead of redistributing their screenshots. A marketing hero is not evidence of application behaviour.

## 2. Measure; label every value

| Label | Method | Use |
| --- | --- | --- |
| `[DOM]` | Inspect computed styles at the agreed viewport sizes | Exact observed CSS values for that source and viewport |
| `[est]` | Pixel measurement on a screenshot, recording any scale uncertainty | Estimated proportions, never claimed as exact |
| `[official]` / `[community]` | Platform guidelines / published measurements | Cite the source and its scope |
| `[adapted]` | Deliberate change for content, language, platform or accessibility | Record the original relationship and reason |
| `[unknown]` | No reliable evidence | Leave unresolved; do not invent |

These labels map onto the provenance vocabulary in the [design contract](design-contract.md#parameter-provenance).

Measure alignment lines, containers, column ratios, control count, density, type size/line height/weight/tracking, text and colour roles, surfaces, borders, shadows, radii, control sizes and spacing. Inspect relevant states and narrow layouts separately; a still cannot establish interaction.

## 3. Deconstruct before building

For each reference, record:
- **Skeleton:** regions, alignment, proportions, grouping, navigation and content volume.
- **Hierarchy:** reading order, type and colour levels, emphasis and deliberately quiet areas.
- **Component language:** control geometry, surface treatment, nesting and state cues.
- **Interaction model:** observed flow and states versus proposed or unverified behaviour.
- **Applicability:** what fits this task, what must adapt, and what should not transfer.

Do not reduce a reference to a palette or copy its page silhouette when the task does not fit.

## 4. Define foundations as variables

Derive colour roles, typography, spacing, radii, elevation and responsive grids from the actual selected reference. Record measured, estimated and adapted values in that version's contract.

There is no universal requirement for one accent, four text levels, five type sizes, 12/8/6/4 radii, pill buttons, shadow-free rows or three columns. Those choices are reference-specific. The [Linear contract](../directions/linear/examples/linear-baseline/DESIGN.md) is one worked example, not default values for Panel UI or other directions.

Every implementation value must trace to a foundation or an explicitly documented exception. Add a foundation deliberately when the task needs it; do not call an unexplained deviation a measurement.

## 5. Components before page refinement

Identify the components needed by the complete task, then build basic reusable specimens with reference-derived geometry and hierarchy. Bind supported fill, stroke, radius, padding and gap to variables; use text styles where appropriate.

At the comparison stage, use enough fidelity to establish component language and visible state cues, but defer fine internal treatment, exhaustive state variants and polished interactions until selection. Do not postpone the controls themselves or replace the task with empty rectangles.

## 6. Typography and language adaptation

Inspect actual glyphs, wrapping, line height, tracking, numerals and fallback behaviour in the target language. Do not transfer Latin display sizes or tracking unchanged to CJK. Label adaptations and validate them in the whole page.

The concrete Noto Sans SC sizes and tracking in the [Linear example](../directions/linear/examples/linear-baseline/DESIGN.md) and its [CJK notes](../directions/linear/research/2026-10-20-reference-first/README.md#cjk-typography-adaptations-differences-from-linears-values) are local calibration choices, not a universal CJK prescription. Verify font availability in the actual tool.

## 7. Screenshot review against the reference

Capture and compare as described in [review and audit](review-and-audit.md#screenshot-review-against-a-reference): corresponding regions side by side, issues written as *location / current / reference target or justified adaptation*, at least two rounds.

## Tools

In Figma, follow the [Figma execution note](figma-execution.md). Verify the current tool and plan capabilities rather than assuming a historical constraint still applies. Inspect actual exports after composition; tool success alone does not establish quality.
