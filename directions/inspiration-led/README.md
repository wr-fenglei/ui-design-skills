# Inspiration-Led Direction

The repository's original method: find a compelling visual idea, understand why it works, study excellent interfaces solving a similar task, then develop a small, coherent design system. In the three-way comparison this direction contributes **one GPT Image version**.

- **Suitable starting question:** where the expressive core (material, light, typography, meaningful content or shape) should carry the interface, rather than a measured product reference.
- **Explicit non-fit:** it does not supply measured foundations; values read from generated images are estimates, never official tokens.
- **Status and evidence boundary:** existing examples keep their documented scope below. [Translucent UI / Pastel Workspace](examples/translucent-ui/README.md) is the most complete scoped example; it is not certified as a universal system.

## Contents

- [Method](method.md): the gold standard, stages and evidence gates for this direction
- [System development](design-system-development.md): from inspiration to a bounded small system
- [Image prompting](image-prompting.md): GPT Image briefs and controlled edits
- [Examples by scope](#examples-by-scope)

Shared methods (brief, comparison, calibration, review, contract) live in [references](../../references/multi-direction-workflow.md).

## Examples by scope

An example is evidence for a bounded relationship, not a universal theme. These classifications describe the existing artifacts; this index does not grant new approval or validation.

### Small system with a runnable page

| Example | Current scope | Contract and implementation |
| --- | --- | --- |
| [Translucent UI](examples/translucent-ui/README.md) | Evolving family with selected approved visual relationships, static component specimens and a scoped runnable page; not a production component library | [DESIGN.md](examples/translucent-ui/DESIGN.md), [Pastel Workspace](examples/translucent-ui/pastel-workspace/README.md), [validation](examples/translucent-ui/pastel-workspace/VALIDATION.md), [case study](examples/translucent-ui/case-study.md) |

Translucent UI contains an approved selection-preview composition and a paired-choice composition. Use them together to study broad translucent surfaces, readable dark typography, numbered instruction pills, nested preview scale and restrained selected states. Retained PNGs preserve the whole and key details; implementation tokens are starting values, not a production system. The [selection frame guide](examples/translucent-ui/selection-frame.md) covers potential screenshot, crop and canvas use; its appearance is approved in the original context, while cross-background portability and complete interactions still require testing.

### Bounded functional and material studies

- [Material and attention](examples/material-attention/README.md): equal-circle material comparisons and an outline-to-labeled-capsule attention progression. Use for geometry, transparency and edge emphasis; scoped HTML/CSS specimens.
- [Neutral surface layers](examples/surface-layers/README.md): matched light/dark panels with neutral region separation. Use for common surfaces and theme-specific value relationships; not an official component system.

Both include editable HTML/CSS and the scope of visual approval and outstanding technical checks. They are independent studies, not official Adobe components.

### Static visual references

- [Curved gallery](examples/gallery-001/README.md): a dark three-panel gallery with a complete central panel and cropped neighbours. Study asymmetric near/far curvature, focus through warm artwork in a quiet black field, crop and peripheral typography. No tested carousel or responsive behaviour.
- [Orbital progress](examples/progress-001/README.md): a large progress value, blue rim light and a small warm marker. Study information scale, localized contrast and the rhythm between type and curves. No calibrated progress arc or loading state.
- [Amber clock](examples/amber-clock/README.md): a large warm-white time display in front of amber glass with a compact cool-edged action. Study material cues shared by artwork, type and controls. Not a functioning timer or verified type/colour specification; the original verbatim prompt is unavailable.
- [Green ribbon](examples/green-ribbon/README.md): a stable black text block beside a flowing green ribbon and a small coral action. Study tactile context around typography, diagonal continuity and unequal colour areas. No tested action; the original verbatim prompt is unavailable.
- [Form & Field](examples/form-and-field/README.md): an approved generated editorial programme: meaningful objects, shared lighting, distinct colour fields and integrated typography. Not a working event application.

Do not promote these studies by simply adding DESIGN.md or token files. Use [system development](design-system-development.md) to establish a functional scope and inspect real outputs before broadening claims.
