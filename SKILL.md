---
name: ui-design
description: Build a Figma design system (Variables, styles, Foundations, Components, desktop and mobile Screens) by measuring a user-approved real reference and rebuilding from the numbers, with provenance for every value and an export-and-review loop after every step. Retained systems live in systems/; the Linear baseline is the worked example. Also covers app-icon design.
---

# UI Design

## Purpose

Make interfaces look professional by rebuilding them from a measured, user-approved reference instead of inventing a style. The output is a Figma design system a designer can take over: variables, text and effect styles, components bound to them, and complete screens built from instances.

Read [METHOD.md](METHOD.md) before every design task and follow its steps in order. The [Linear baseline](systems/linear-baseline/README.md) shows what each step produces.

## Steps

1. **Pick references with the user.** Offer a few clearly different real products; use only the ones the user approves, each with a stated role.
2. **Measure.** `getComputedStyle` on web pages (`[DOM]`), pixel measurement on screenshots (`[est]`), official docs (`[official]`), published measurements (`[community]`), `[unknown]` when there is no evidence. Never invent a value.
3. **Record provenance** for every value: inherited, adapted (with original and reason) or new.
4. **Create Figma variables and styles** before drawing: Primitives → semantic Color → Radius, Spacing, Layout; text styles; effect styles.
5. **Foundations page:** title, lead stating the sources, numbered sections with labelled specimens.
6. **Components** bound to variables, with variants and properties.
7. **Screens** at desktop 1440 and mobile 390, built from instances on grids; mobile gets its own composition.
8. **Export and review after each step:** look at the image, run script checks, compare with the reference side by side, fix, capture again.
9. **Retain** the result in `systems/<name>/` with the Figma link, exports, tokens and provenance.

## Rules

- The reference sets the values. Do not average references or mix in values chosen by feel; a documented adaptation is the only exception.
- Every value on a screen traces to a variable or style. List anything that cannot bind (gradients, focus rings) as an exception.
- A passing script is not visual approval, and a visual pass is not user approval. Say what was not tested.
- Confirm the target Figma file and scope before any write; prefer a new page over editing an approved one.
- This is a public repository: never commit third-party screenshots or media. Link the source in [references/links.md](references/links.md).

## Repository

- [METHOD.md](METHOD.md): the method, with tools and Figma pitfalls
- [systems/](systems/README.md): retained design systems
- [references/links.md](references/links.md): all reference links
- [icons/](icons/README.md): app-icon design, a separate module
