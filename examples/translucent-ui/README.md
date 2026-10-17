# Translucent UI

A small, evolving example system: **thin luminous surfaces, readable content and restrained glass controls.** It now spans a visual concept, component studies and a working page-level demo.

![Pastel Workspace — actual Web screenshot](pastel-workspace/screenshots/desktop.jpg)

**[Explore the Web example](pastel-workspace/README.md)** · **[Read the visual case study](case-study.md)**

## The system at three scales

### 1. The visual core — 05min

[View the retained concept](case-study-assets/01-05min.png)

Almost weightless sheets, broad multicolor light and delicate edges establish the feeling. Preserve these relationships; reconsider where glass belongs as content grows.

### 2. Components — Selection and Choice

![Selection reference](selection-preview.png)

A compact instruction group balances a generous preview and precise selection handles. The [Choice reference](choice-preview.png) adds equal comparison surfaces and a restrained selected boundary.

- **Instruction pill:** [specimen](step-pill.html) · [image](step-pill.png). A numbered circle and a dark label share one quiet surface.
- **Selection frame:** [specimen](selection-frame.html) · [image](selection-frame.png) · [independent guide](../../references/selection-frame.md). Generous inset, clear boundary and balanced handles. Portability to other contexts still needs testing.
- **Foundation CSS:** [tokens.css](tokens.css). Starting values for these specimens, not universal or measured reference-image tokens.

### 3. A full page — Pastel Workspace

[Implementation and screenshots](pastel-workspace/README.md) · [Validation](pastel-workspace/VALIDATION.md) · [Wide/narrow concepts](pastel-workspace/concepts/README.md)

A fictional English overview with one question at a time, three options, a free-text field and a compact local-choice dialog. The stack advances one card per gesture. Generated concepts and actual browser screenshots are identified separately.

## What stays consistent

- **Color roles:** varied background, quiet app surface, distinct content; no uniform theme wash.
- **Material restraint:** thin edges and soft light support reading. Dense areas need calm surfaces.
- **Changing density:** spacious groups, compact related information. Rework layout as content increases.
- **Complete design:** supporting text, inputs, states and transitions deserve the same care as the focal area.

## Use and boundaries

Start from the closest complete example. Preserve proportions and content relationships, then test new content and viewports. Keep text and interaction in code; use generated imagery for bounded artwork.

These examples were approved for their individual scopes; this is not a production component library. Component specimens are static, without implemented resizing. The page demo has local browser state, no real App launch, backend or owner handoff. Physical mobile, Safari and real trackpad behavior remain unverified; see the validation notes.

The case study includes an attributed Apple image for critical comparison, not a reusable UI asset. Source credits and compression exceptions are recorded with the examples.
