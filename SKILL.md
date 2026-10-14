---
name: ui-design
description: Design and refine interface layouts, components, visual assets, and app icons using reference-led composition, hierarchy, typography, color, shape, and material. Use for visual design exploration, foundational exercises, independent examples, and translating selected directions into HTML/CSS or SwiftUI.
---

# UI Design

## Gold standard — first decide what carries the beauty

**First decide what carries the beauty; then organize space around it.** Apply this starting point to every design: page, component, icon, foundational exercise or independent example. For an existing approved design, identify and preserve its expressive core before making a narrow change.

The core may be meaningful content, typography, product UI, a shape or an integrated material relationship. It need not be a decorative object. Do not lock a page silhouette, sidebar or card template before finding it.

For new exploration, **Web and GPT Image must independently propose the expressive core**. Share the user problem, content needs, usage context and hard constraints, not a visual answer. Do not give either route the other's draft, prescribed core, layout, palette, shape or material to imitate. Their results may be radically different; divergence is useful evidence, not a defect to correct. Inspect both, explain what carries each one's appeal and whether it serves the task, and obtain the user's review before expanding space around a selected core. Do not force a hybrid.

See [independent exploration and later handoff](references/code-image-collaboration.md). Shared visual baselines belong to refinement after selection, not to this initial discovery.

## Start here — do not skip the design stages

Read this entrypoint before creating a foundational exercise or independent design example, as well as before page or component work. Read the relevant references for the task; use [agent design pitfalls](references/agent-design-pitfalls.md) before selecting a direction and again before delivery.

Design relationships before embellishments. The workflow zooms from the whole into detail, with permission to return to an earlier decision when the whole stops working. It is not a rigid waterfall.

### Evidence before advancement

Reading this skill is preparation, not evidence that its workflow was followed. For a new page or a substantial visual redesign, do not jump from a requirements list to a polished, fully populated screen.

1. **Reference and direction:** Inspect a task-relevant interface, including the regions and states being borrowed. Produce a compact problem brief with the primary task, actual content needs and hard constraints. Let each route discover its own expressive core and spatial relationships before selecting proportions or density. A marketing article's first screen alone does not establish a dashboard reference.
2. **Core discovery, then overall impression:** First deliver the independent expressive-core candidates required by the gold standard above. After user selection, expand the chosen core into overall-impression studies using Web and GPT Image. A common canvas can aid inspection when appropriate; it must not prescribe the same visual solution. Explore overall layout, approximate spatial relationships, dominant silhouettes, visual focus, density, broad color/light distribution and the overall sense of material. Keep them contour-led and low-detail. Use sparse representative text or placeholders that preserve plausible content mass; omit complete copy, precise type styling, finished controls and fine texture. Broad shadow masses and material cues belong here; exact shadow parameters, reflections and surface microdetail do not. Inspect both as whole compositions, explain their strengths and trade-offs, and show both to the user with a recommendation. Obtain the user's review and explicit selection or approval of the overall baseline before refinement; agent self-review cannot replace this gate. Follow [code-image collaboration](references/code-image-collaboration.md); do not substitute an intention to compare for actual renders.
3. **Controlled refinement:** Only after the user's overall-baseline approval, populate real content and refine group spacing, exact type size/weight/color, control geometry, surface colors, shadows and material. Show the current stage and open decisions; do not silently expand an unapproved composition into a finished page.
4. **Implementation and validation:** Integrate real behavior only within the requested scope, after any required visual/operation-path approval. Inspect the actual implementation against the selected baseline.

When the user asks for staged review or a sample before implementation, stop at the requested review gate and obtain their feedback before advancing. Label overall-impression studies with their stage. Keep short-lived stage evidence locally rather than adding process logs to this skill.

Both routes and the user review gate are required for new overall-impression exploration in this workflow, not a requirement to regenerate an approved layout for a copy fix or narrowly specified adjustment. Respect explicit tool restrictions. If a route is unavailable, disclose the missing comparison and ask the user whether to proceed with reduced scope; do not silently bypass a route or claim this gate was completed.

## Inputs and reference

Identify the task, audience, platform, actual content, target dimensions and primary action. For an existing design, distinguish approved relationships from open variables.

Use [design sources](references/design-sources.md) to locate suitable work and the [reference index](references/reference-index.md) to inspect retained examples. Observe the actual reference, including relevant scroll states and movement. Do not infer a design from a textual description alone.

## 1. Visual thesis and composition

Decide what carries expression and what supports it: product, product UI, type, imagery or a material-led component. Establish reading order, region proportions, visible mass, crop and quiet space. Set rough type scale and color roles now because they affect composition.

Read [design principles](references/design-principles.md) for the shared reasoning and [composition](references/composition-preservation.md) for spatial decisions.

## 2. Groups and component relationships

Organize meaning into regions and subgroups. Set density separately at canvas, section and component levels. Coordinate alignment, spacing, surfaces and type; a correct grouping mechanism does not rescue an unattractive whole.

Read [grouping and hierarchy](references/grouping-and-hierarchy.md).

## 3. Coordinated visual treatment

Refine the selected structure as one composition:
- Shape and material: silhouette, curvature, light, surface and neighboring controls.
- Typography: actual glyphs, size, weight, rhythm and reading distance.
- Color: media, canvas, surfaces, information, actions and state.

Read [shape and material](references/shape-and-material.md), [typography](references/typography.md) and [color in context](references/color-in-context.md) as needed. None is a final decorative layer independent of the others.

For icon work, read [icon design](references/icon-design.md), [icon principles](references/icon-design-principles.md), the [analysis framework](references/icon-analysis-framework.md), and the actual reference images in the [reference index](references/reference-index.md).

## 4. Implement and compare

Use code for editable structure, real typography, controls, data and behavior. Use image generation for bounded artwork, material or visual exploration. Either route can propose a composition; compare actual results with the same content and canvas.

Read [code-image collaboration](references/code-image-collaboration.md) for reconstruction and handoff, and [image prompting](references/image-prompting.md) for generation briefs.

Preserve one selected baseline. A foundational experiment needs a coherent whole and a perceptible comparison, not merely a changed numeric parameter.

## 5. Verify and refine

Inspect actual rendering, first as a whole and then in detail. Check real text, small sizes, narrow layouts, changed backgrounds and relevant interaction states. Study motion after static hierarchy works.

Report visual review, readability and functional testing separately. User approval of appearance does not verify browser behavior; successful execution does not establish aesthetic quality.

## Output

Provide the selected visual or implementation, the essential relationships and reproduction parameters, and unresolved limits. Keep raw trials outside the reusable skill. Retain a method when its application and boundary are clear, or a particularly valuable example with an explanation of why it works.
