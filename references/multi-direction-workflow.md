# Multi-Direction Workflow

Use with [SKILL.md](../SKILL.md). For every new page or interface brief, produce **three versions, one per direction**, under the same requirement, compare them with the user, then refine what the user selects.

| Direction | How its version is produced | Entry |
| --- | --- | --- |
| Linear | [Reference calibration](reference-calibration.md) against the Linear direction's measured contract, built in Figma (or HTML) | [directions/linear](../directions/linear/README.md) |
| Panel UI | [Reference calibration](reference-calibration.md) against inspected Panel UI components, built in Figma | [directions/panel-ui](../directions/panel-ui/README.md) |
| Inspiration-led | One GPT Image version from the direction's inspiration-led method | [directions/inspiration-led](../directions/inspiration-led/README.md) |

All three are always produced. Each direction answers the brief in its own way; none is the default and none receives another direction's unselected answer. A narrow correction to an already approved version is not a new brief: retain that version's baseline and edit it.

## 1. Shared brief

Fix once, before any version starts:
- task, audience, platform and primary action;
- the content inventory: required sections, navigation, realistic content volume and visible control count;
- canvas and target sizes (for example desktop and narrow).

Use the same brief for all three versions. Do not make one direction look better by removing difficult content.

## 2. Independent versions

- Each direction derives its own foundations and basic components from its own sources, following its README.
- Build the **whole page skeleton** in every version: required sections, navigation, realistic content volume and controls. Get region proportions, whitespace, density, broad colour relationships, type hierarchy and primary actions in place before comparison. Low detail means unfinished component internals, not missing page regions.
- Use each direction's own alignment and responsive logic. Desktop may be a list, canvas, dashboard or multi-pane layout; mobile adaptations must fit the actual task rather than shrink a desktop screen.
- Compose incrementally and inspect actual outputs, but compare complete pages rather than isolated attractive components.
- The inspiration-led version is a generated image, not an editable interface; label it as such.

## 3. Figma organisation

For each Figma-built version keep three pages: **Foundations**, **Components** and **Screens**, prefixed with the direction name when they share a file. Foundations record measured/adapted values; Components contain actual specimens; Screens contain complete pages and viewport variants. During comparison these may be low-detail; after selection add detailed states and interactions. An imported image is not an editable reconstruction. Execution: [Figma execution note](figma-execution.md).

## 4. Compare with the user before detail

Show the three complete versions at equal size. Explain differences in layout, density, type hierarchy, component treatment and intended interaction, with remaining gaps. Name what is measured, estimated or generated.

Wait for the user's selection before refining component internals, detailed states and interactions. The user may keep more than one version; do not force a single winner or merge them into an averaged style. Refine each retained version against its own relationships. An inspiration-led version that is selected is rebuilt as an editable design through [code and image handoff](code-and-image-handoff.md).

## 5. Record each retained version

Keep the record in its direction folder rather than in a parallel library. Link:
- applicable scenarios and explicit non-fit;
- specification / DESIGN.md, with measured versus adapted parameters;
- actual components and their implemented states;
- complete-page examples and supported sizes;
- construction process and representative comparison/selection history;
- limitations, rights, validation and exact user-approval scope.

Missing artifacts remain marked pending. Use the [DESIGN.md contract](design-contract.md); do not fabricate artifacts to fill this list.

## 6. Delivery checks

1. The three versions, their directions and their sources are named.
2. Measured, estimated, adapted, generated and unknown values are distinguishable.
3. Each version's foundations, component language and layout match its own direction, not another direction's template.
4. The comparison uses complete low-detail pages with the same brief and canvas.
5. User selection precedes detail refinement; multiple retained versions remain independent.
6. Actual screenshots and relevant tests support the stated result ([review and audit](review-and-audit.md)).
7. Approval and validation scope, limitations, sources and reproduction steps are recorded.
