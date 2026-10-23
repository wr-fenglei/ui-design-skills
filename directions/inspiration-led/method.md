# Inspiration-Led Method

How the inspiration-led direction produces its version. In the three-way comparison it produces **exactly one version, made with GPT Image**. Shared steps (brief, comparison, selection) are in the [multi-direction workflow](../../references/multi-direction-workflow.md).

## First decide what carries the beauty

**First decide what carries the beauty; then organize space around it.** The core may be meaningful content, typography, product UI, shape or an integrated material relationship. It need not be decoration. Do not lock a sidebar, card template or page silhouette before finding it.

The other two directions start from a measured reference. This one starts from a compelling visual idea and asks GPT Image to propose the expressive core from the shared brief. Actual source references inform the prompt; neither the Linear nor the Panel UI version is given to it as an answer to imitate. For an already selected inspiration or approved design, preserve its approved relationships rather than pretending to rediscover them.

## Stages and evidence

Reading documents is preparation, not proof that the stages happened. Do not jump from requirements or an inspiration image to a polished full screen.

| Stage | Work and evidence | Gate / next step |
| --- | --- | --- |
| 1. Inspiration | Inspect actual visuals; identify expressive core, proportions, grouping, density, type/color/shape/material relationships and use context | Explain what to preserve, not just a palette or radius |
| 2. Functional references | Inspect excellent real interfaces for the same task, relevant regions, states and flows | Separate visual inspiration from functional evidence; resolve mismatches |
| 3. GPT Image version | Generate a complete low-detail page for the shared brief and canvas; preserve plausible content mass, approximate proportions and broad light/material feel | Present it beside the other two directions; the user selects |
| 4. Small-system development | After selection, rebuild as an editable design ([code and image handoff](../../references/code-and-image-handoff.md)); refine a complete bounded use case, then components, states and related layouts; test real content and preserve invariants | Scope is earned through inspected examples, not declared by naming tokens |
| 5. Implementation and audit | Real text/controls/data/behavior; inspect whole, supporting regions, reading and relevant interactions ([review and audit](../../references/review-and-audit.md)) | Record visual, readability, functional and user-review results separately |
| 6. Retention | Keep a useful example, its DESIGN.md, reproduction method, actual tools, sources, selected iterations and limits | Label maturity honestly; keep this direction's style in this folder |

The sequence can loop. A complete useful component or functional region can be the initial scope for a narrow task. Foundations come before motion. For a narrow edit to approved work, retain the baseline and inspect affected relationships.

At the comparison stage use the complete required section and control inventory with realistic content volume, approximate silhouettes and broad light, shadow and material cues. Precise copy, typography, finished controls and microtexture belong after selection. A low-detail version must still have a plausible functional structure, not a poster or an empty card grid. A generated image is not an editable interface or validated interaction; label it as a GPT Image concept.

## Reading

- [System development](design-system-development.md): two reference lenses, relationship hypothesis, baseline and expansion
- [Image prompting](image-prompting.md): composition-first briefs and controlled edits
- Shared design dimensions: [principles](../../references/design-principles.md), [composition](../../references/composition-preservation.md), [grouping](../../references/grouping-and-hierarchy.md), [color](../../references/color-in-context.md), [typography](../../references/typography.md), [shape and material](../../references/shape-and-material.md)
- [Examples](README.md#examples-by-scope)
