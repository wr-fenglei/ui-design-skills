# Reference-First Calibration

Use with [SKILL.md](../SKILL.md) for an explicitly selected reference-led task, or when the agent's own baseline is not professional. Signals include repeated rejection of layout, type, colour and shadow together or independent explorations converging on a generic "AI look".

The reusable process is **measure → foundations → components → complete page → screenshot review**. Concrete palettes, radii, grids and layouts belong to the selected reference's own contract, not to this method. [Linear baseline](../examples/linear-baseline/README.md) is an accepted calibration example, not a universal original style. Its [DESIGN.md](../examples/linear-baseline/DESIGN.md) and [rules](../examples/linear-baseline/rules.md) retain its one-accent palette, pill buttons, radius scale and three-pane product mock.

## 1. Choose the mode and applicable references

- **Multi-exemplar reference calibration:** use the small [exemplar shortlist](../examples/README.md#exemplar-shortlist) to choose applicable references. For a new page, make one independent version per selected applicable exemplar using the same requirement, content inventory, canvas and target sizes. Compare layout, density, typography hierarchy, component language and intended interaction, not colour swaps.
- **Free exploration:** when discovering a new expressive core, keep the independent Web/GPT Image process in [code-image collaboration](code-image-collaboration.md). It is not an obligation to multiply every exemplar by every tool route.
- State which mode is being used. Do not silently replace an agreed two-route exploration with calibration, or force a full matrix for every task. A narrow correction to approved work retains its baseline.
- If no reference has been chosen, offer a small, clearly different set of actual products or official screenshots. Proceed with user-selected references; explain inapplicability rather than forcing every exemplar into every task.
- Record original URL, access date, inspected regions and source rights. Link third-party sources instead of redistributing their screenshots. A marketing hero is not evidence of application behavior.

## 2. Measure; label every value

| Label | Method | Use |
| --- | --- | --- |
| `[DOM]` | Inspect computed styles at the agreed viewport sizes | Exact observed CSS values for that source and viewport |
| `[est]` | Pixel measurement on a screenshot, recording any scale uncertainty | Estimated proportions, never claimed as exact |
| `[official]` / `[community]` | Platform guidelines / published measurements | Cite the source and its scope |
| `[adapted]` | Deliberate change for content, language, platform or accessibility | Record the original relationship and reason |
| `[unknown]` | No reliable evidence | Leave unresolved; do not invent |

Measure alignment lines, containers, column ratios, control count, density, type size/line height/weight/tracking, text and colour roles, surfaces, borders, shadows, radii, control sizes and spacing. Inspect relevant states and narrow layouts separately; a still cannot establish interaction.

## 3. Deconstruct before building

For each reference, record:
- **Skeleton:** regions, alignment, proportions, grouping, navigation and content volume.
- **Hierarchy:** reading order, type and colour levels, emphasis and deliberately quiet areas.
- **Component language:** control geometry, surface treatment, nesting and state cues.
- **Interaction model:** observed flow and states versus proposed or unverified behavior.
- **Applicability:** what fits this task, what must adapt, and what should not transfer.

Do not reduce a reference to a palette or copy its page silhouette when the task does not fit.

## 4. Define foundations as variables

Derive colour roles, typography, spacing, radii, elevation and responsive grids from the actual selected reference. Record measured, estimated and adapted values in that version's contract.

There is no universal requirement for one accent, four text levels, five type sizes, 12/8/6/4 radii, pill buttons, shadow-free rows or three columns. Those choices are reference-specific. The [Linear contract](../examples/linear-baseline/DESIGN.md) is one worked example, not default values for Panel UI or other directions.

Every implementation value must trace to a foundation or an explicitly documented exception. Add a foundation deliberately when the task needs it; do not call an unexplained deviation a measurement.

## 5. Components before page refinement

Identify the components needed by the complete task, then build basic reusable specimens with reference-derived geometry and hierarchy. Bind supported fill, stroke, radius, padding and gap to variables; use text styles where appropriate.

At the comparison stage, use enough fidelity to establish component language and visible state cues, but defer fine internal treatment, exhaustive state variants and polished interactions until selection. Do not postpone the controls themselves or replace the task with empty rectangles.

## 6. Complete low-detail page versions

- Build the **whole page skeleton** for every selected applicable exemplar. Include the required sections, navigation, realistic content volume and visible control count.
- Get region proportions, whitespace, density, broad colour relationships, type hierarchy and primary actions in place before comparison. Low detail means unfinished component internals, not missing page regions.
- Use the same requirement, content inventory and canvas across versions. Do not make one direction look better by removing difficult content.
- Use the selected reference's alignment and responsive logic. Desktop may be a list, canvas, dashboard or multi-pane layout; mobile adaptations must fit the actual task rather than shrink a desktop screen.
- Compose incrementally and inspect screenshots, but compare complete pages rather than isolated attractive components.

## 7. User comparison before detail

Show the independent complete-page versions at equal size. Explain differences in layout, density, type hierarchy, component treatment and intended interaction, with applicability and remaining gaps.

Wait for the user's selection before refining component internals, detailed states and interactions. The user may keep multiple good versions; do not force a single winner or merge them into an averaged style. Refine each retained version against its own relationships.

## 8. Typography and language adaptation

Inspect actual glyphs, wrapping, line height, tracking, numerals and fallback behavior in the target language. Do not transfer Latin display sizes or tracking unchanged to CJK. Label adaptations and validate them in the whole page.

The concrete Noto Sans SC sizes and tracking used in the [Linear example](../examples/linear-baseline/DESIGN.md) are local calibration choices, not a universal CJK prescription. Verify font availability in the actual tool.

## 9. Screenshot review against the reference

- Capture full pages at the agreed desktop/narrow sizes and compare corresponding regions with the selected reference. Keep version and viewport labels explicit.
- Write issues as *location / current / reference target or justified adaptation*. Fix, re-capture and inspect the affected region in the whole.
- Do at least two calibration review rounds. Record remaining differences and why.
- Separate visual fidelity, readability, tested behavior and user approval. A screenshot pass is not interaction validation or aesthetic approval.

## 10. Delivery and retention checks

1. The selected reference and applicable scope are named.
2. Measured, estimated, adapted and unknown values are distinguishable.
3. Foundations, component language and layout match that reference, not a universal Linear template.
4. The comparison includes complete low-detail pages with comparable content and canvas.
5. User selection precedes detail refinement; multiple retained directions remain independent.
6. Actual screenshots and relevant interaction tests support the stated result.
7. Approval and validation scope, limitations, sources and reproduction steps are recorded.
8. Entry points link to the actual artifacts, with missing work explicitly pending.

## Figma organization and execution

For **each version**, keep three pages: **Foundations / 设计规范**, **Components / 组件**, and **Screens / 整体页面**, clearly prefixed by the exemplar/version name when sharing a file. Foundations record measured/adapted values; Components contain the actual specimens; Screens contain complete pages and viewport variants. During comparison these may be low-detail; after selection add detailed states and interactions. An imported image is not an editable reconstruction.

Verify the current tool and plan capabilities rather than assuming a historical constraint still applies. The Linear exercise used variables, text styles, variants and grids; its process recorded auto-layout sizing corrections, explicit CJK fonts, raw gradient/focus values and 1x exports. See its [README](../examples/linear-baseline/README.md) and [process notes](../research/2026-10-20-reference-first/README.md) for that specific execution. Inspect actual exports after composition; tool success alone does not establish quality.
