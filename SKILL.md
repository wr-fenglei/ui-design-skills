---
name: ui-design
description: Design interfaces in three parallel directions — Linear (reference-calibrated), Panel UI (reference-calibrated) and inspiration-led (GPT Image) — producing one version per direction for the same brief, then refining what the user selects. Shared methods cover measurement, Figma execution, screenshot review, the DESIGN.md contract and recurring agent errors. Also covers app-icon design and retaining scoped examples.
---

# UI Design

## Purpose

For every new page or interface brief, produce **three versions, one per direction**, under the same requirement, content and canvas. Compare them with the user, let the user select, then refine the selected versions. Do not force a single winner or merge versions into an averaged style.

The shared layer teaches **how to measure, compare, review and record**. Each direction owns its concrete choices. Neither a specification nor an attractive picture establishes a finished system.

Read this entrypoint before each design task. Read [agent design pitfalls](references/agent-design-pitfalls.md) before design and again before delivery.

## The three directions

| Direction | Its version | Suitable starting question | Status | Entry |
| --- | --- | --- | --- | --- |
| **Linear** | Reference calibration against measured Linear values, in Figma or HTML | Quiet product-led pages, restrained hierarchy, dense product UI | Accepted calibration example; interaction untested | [directions/linear](directions/linear/README.md) |
| **Panel UI** | Reference calibration against inspected Panel UI components, in Figma | Component-rich interfaces with substantial control density and clear grouping | Candidate; reproduction not yet established | [directions/panel-ui](directions/panel-ui/README.md) |
| **Inspiration-led** | One GPT Image version from an expressive core | Interfaces where material, light, typography or meaningful content should carry the design | Existing examples keep their documented scope | [directions/inspiration-led](directions/inspiration-led/README.md) |

The three directions are equal. All three are always produced for a new brief. A narrow correction to an already approved version is not a new brief: retain that version and edit it.

## Workflow

Follow the [multi-direction workflow](references/multi-direction-workflow.md):

1. **Shared brief:** task, audience, platform, primary action, content inventory and canvas sizes, fixed once for all three versions.
2. **Independent versions:** each direction derives its own foundations and components from its own sources and builds a complete low-detail page. Linear and Panel UI use [reference calibration](references/reference-calibration.md) in Figma ([execution note](references/figma-execution.md)); inspiration-led follows its [method](directions/inspiration-led/method.md) with GPT Image.
3. **Comparison gate:** show the three versions at equal size; explain differences; wait for the user's selection before detailed component states and interactions.
4. **Refinement:** refine each selected version against its own relationships. A selected GPT Image version is rebuilt as an editable design through [code and image handoff](references/code-and-image-handoff.md).
5. **Review and retention:** audit with [review and audit](references/review-and-audit.md); record retained work in its direction folder with a [DESIGN.md contract](references/design-contract.md).

Reading documents is preparation, not proof that a stage happened. If a version cannot be produced (for example a tool is unavailable), say which one is missing; do not fabricate it.

## Design relationships before parameters

State the task, audience, platform, actual content, target dimensions and primary action. At each scale decide what carries expression and what supports it. Establish reading order, occupied area, crop, quiet space, group membership and separately chosen canvas/section/component densities.

Coordinate rough type scale and color roles with composition from the beginning. After selection, refine real glyphs, size/weight/line height, surface separation, control geometry, curvature, shadows and material together. Do not reduce a reference to isolated colors and radii, or treat all refinements as independent decorative layers.

Use libraries when their actual capabilities fit. Record inherited, adapted, estimated and newly chosen values; inspect the rendered result. A library does not confer aesthetic quality. Do not invent tool superiority from different content or uninspected outputs.

## Verify, learn and preserve

First judge the complete version, then make perceptible controlled comparisons. If a difference is too small to judge, record **inconclusive**, not a manufactured preference.

Protect the attractive core while deliberately designing the supporting text, navigation, controls, state, spacing and transitions. Inspect each repaired region back in the whole. Recheck actual outputs after changes, including real content, narrow layouts and relevant states; successful execution alone does not establish beauty.

Classify feedback as whole approval, local approval, relative improvement, dislike or inconclusive. Extract the failure mechanism, correction and check, not a list of quotations or universal rules from one palette preference. Keep only representative iterations needed to explain the method; do not maintain a permanent failed-draft archive.

## Shared reading by stage

- **Find sources:** [design sources](references/design-sources.md), then each direction's own sources
- **Measure and rebuild:** [reference calibration](references/reference-calibration.md), [Figma execution](references/figma-execution.md)
- **Design dimensions:** [principles](references/design-principles.md), [composition](references/composition-preservation.md), [grouping and hierarchy](references/grouping-and-hierarchy.md), [color in context](references/color-in-context.md), [typography](references/typography.md), [shape and material](references/shape-and-material.md)
- **Review:** [review and audit](references/review-and-audit.md), [pitfalls and delivery gate](references/agent-design-pitfalls.md)
- **Document and retain:** [DESIGN.md contract](references/design-contract.md)
- **Images to editable design:** [code and image handoff](references/code-and-image-handoff.md)

For app icons use the separate [icon module](icons/README.md).

## Output and repository boundaries

Deliver the current-stage versions or implementation, why their relationships work, exact approval scope and unverified items. Generated concepts are not editable interfaces or validated interactions.

A retained example lives in its direction folder and links its visible outcome, DESIGN.md, runnable specimens/tools that actually exist, source provenance and validation. A visual study may remain valuable without becoming a system; label it accordingly. Draft specifications must not promote an experiment to mature status. Keep daily plans and raw trials outside this reusable skill.

This is a public repository: never commit third-party screenshots or media. Link the original source and describe what was inspected.
