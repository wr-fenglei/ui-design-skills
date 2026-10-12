---
name: ui-design
description: Design and refine interface layouts, components, visual assets, and app icons using reference-led composition, hierarchy, typography, color, shape, and material. Use for visual design exploration, reference analysis, and translating selected directions into HTML/CSS or SwiftUI.
---

# UI Design

## Core approach

Design relationships before embellishments. Establish what the interface communicates, which element leads, and how the remaining elements support it.

- Use real content and a defined application scenario.
- Explore structurally different directions, not one template in different colors.
- Judge color, type, spacing, and material in the composition where they will be used.
- Preserve the selected direction's proportions and visual thesis during refinement.
- Treat visual quality, legibility, and functional correctness as separate checks.

## Inputs

Identify the task, audience, platform, target size, actual content, primary action, selected references, and fixed constraints. For an existing design, identify what is approved and what may change.

## Design sequence

### 1. Composition and attention

Choose the dominant subject, reading order, region proportions, negative space, and crop. Establish rough type scale and color roles now; these affect composition.

Use [composition](references/composition-preservation.md) and [design principles](references/design-principles.md).

### 2. Groups and component relationships

Group related content, then establish alignment, within-group spacing, between-group spacing, and surface boundaries. Use only as much separation as needed.

Use [grouping and hierarchy](references/grouping-and-hierarchy.md).

### 3. Shape and visual character

Refine silhouettes, corner behavior, overlap, material, and lighting. Concentrate expressive detail where it supports the focal subject.

Use [shape and material](references/shape-and-material.md). For icons, use [icon design](references/icon-design.md), [icon principles](references/icon-design-principles.md), and the [analysis framework](references/icon-analysis-framework.md). Inspect the actual reference images listed in the [reference index](references/reference-index.md) before reference-dependent icon work.

### 4. Typography and color

Tune size, weight, line height, text width, foreground/background pairs, supporting colors, and state emphasis within the selected structure.

Use [typography](references/typography.md) and [color in context](references/color-in-context.md).

### 5. Real use and refinement

Render the implementation. Check actual text, small sizes, changed backgrounds, narrow layouts, long content, selection, loading, and error states as applicable. Study motion after the static hierarchy works.

Move back to composition when detail changes disturb the whole. This sequence is a zoom-in process, not a rigid waterfall.

## Code and image routes

Use code for editable structure, typography, controls, data, and interaction. Use image generation to explore visual direction or create bounded visual assets. Either route may propose a composition; compare actual rendered outputs using the same content and canvas.

Use [code-image collaboration](references/code-image-collaboration.md) for handoff and [image prompting](references/image-prompting.md) for generation briefs. A generated interface image is a concept until implemented and tested.

## Output

Provide the selected visual or running implementation, the key relationships and parameters needed to reproduce it, and any unresolved implementation limits. Do not turn every trial into a new rule.

## Quality check

- One primary focus, with secondary information still readable.
- Deliberate proportions, spacing, alignment, and negative space.
- Color and material assigned roles rather than added everywhere.
- Reference relationships preserved without copying protected brand identity.
- Actual rendering and relevant states inspected.
- No claim of interaction, accessibility, or responsiveness based on a still image alone.
