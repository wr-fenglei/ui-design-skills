# Translucent UI — Design contract

Status: evolving small reference system with scoped approved visual relationships and a runnable page example; **not a production component library**.

This contract consolidates existing evidence. It does not add new approval or claim the historical work completed every stage of the current skill.

## Task and expressive thesis

Make a small project overview and short decisions feel calm and luminous without losing readable text or clear controls. Thin surfaces, broad low-contrast color/light and delicate edges carry the initial visual idea; as content grows, quiet reading surfaces and unequal information density carry more of the page.

The scope runs from a selected visual concept through instruction pills and selection/choice studies to [Pastel Workspace](pastel-workspace/README.md). It does not establish dense-table, long-document or multi-user product patterns.

## References and distinct roles

- [05min concept](case-study-assets/01-05min.png): generated visual inspiration for weightless surfaces, light and restrained spatial tension; not functional proof.
- [Selection composition](case-study-assets/02-selection.png): a useful local relationship between instruction, generous preview and precise boundary.
- [Apple reference and attribution](case-study.md#4-learn-the-relationships-from-apple): material hierarchy and background/app/content relationships, not a copied production specification or a verified same-task flow.
- [Wide and narrow concepts](pastel-workspace/concepts/README.md): selected generated references, distinct from the actual browser captures.

The case study explains the historical transition. A newly adapted application still needs current best-in-class **same-function** references; this document does not invent such an audit retrospectively. Apple rights remain with Apple; generated and captured assets have their separate provenance notes.

## Relationships to preserve

- Distinct roles for varied outer background, quiet app surface and readable content. Do not apply one tint or glass treatment uniformly.
- A few featured items, denser secondary items and one decision area have different weight and density.
- Illustration and copy remain a coherent group; decorative assets do not justify crowding text.
- Thin edges and subdued light support content and state, not compete with them.
- Instruction pills, selection boundary/handles and nearby controls are designed together.
- Supporting labels, input focus, toolbar, footer and dialogs are part of the design, not afterthoughts.
- At small sizes, change arrangement and preserve reading order; do not claim a scaled-down desktop screenshot is responsive validation.

Exact palette and geometry are this example's choices, not universal rules. New content can require different proportions. Preserve the relationships before copying numbers.

## Components, states and adaptation

| Artifact | Actual responsibility | Boundary |
| --- | --- | --- |
| [Instruction pill](step-pill.html) | Number and instruction share a quiet bounded surface | Static specimen |
| [Selection frame](selection-frame.html) | Preview boundary, inset and handles; [guide](selection-frame.md) | No implemented resize/crop behavior; portability still needs testing |
| Page project groups | Featured vs secondary scan priority and bounded next-step copy | Fictional overview, not real project integration |
| Question stack | One question, three options and text alternative; one adjacent card per gesture | Physical touch/trackpad behavior not fully accepted |
| Current-choice dialog | Compact local snapshot review over the overview | No backend, real handoff or permanent cross-device record |

Read [page behavior](pastel-workspace/README.md#implementation-and-behavior) and [validation](pastel-workspace/VALIDATION.md) before adapting state or gestures.

## Implementation and actual tools

- [tokens.css](tokens.css): starting values for static family specimens. These are implementation choices, not measured source-image tokens. The page has its own CSS and is **not** fully driven by this file.
- [style.css](pastel-workspace/style.css): actual page geometry, type, gradients, borders, blur and responsive treatment. No GPU shader is required by this implementation.
- [app.js](pastel-workspace/app.js) and [swipe.js](pastel-workspace/swipe.js): bounded local choice and gesture behavior; not a general component SDK.
- [index.html](pastel-workspace/index.html): runnable page; serve its directory with a static HTTP server, no build dependency required.
- [ASSETS.json](pastel-workspace/ASSETS.json): runtime asset hashes and sizes. Compression procedure and limitations live in [VALIDATION.md](pastel-workspace/VALIDATION.md#asset-provenance-and-compression).

There is no new token generator, design inspector or generalized test harness created by this contract. Do not describe planned extraction as an implemented tool.

## Approval and validation scope

The underlying Web composition was approved for practical use on 2026-10-17; the fictional-English edition and demonstrated viewports retain the existing README's narrower claims. The generated wide/narrow concepts were separately approved and are not screenshots of the runnable implementation.

R5 has recorded synthetic and actual browser checks; R6 changed wallpaper CSS/encoding and did not rerun the R5 synthetic suite. Cloud Chrome evidence and measured widths are documented in [validation](pastel-workspace/VALIDATION.md), not newly performed here. Physical mobile, Safari, real trackpad and production accessibility remain unverified.

## Selected evolution and error checks

[Case study](case-study.md): attractive small glass detail → useful selection region → overextended equally expressive cards → quieter page hierarchy.

- Repeating a beautiful component does not make a beautiful page: reconsider density and material roles at each expansion.
- Preserve selected shape and spatial relationships while correcting supporting detail.
- A local visual approval does not validate the complete family or untested interactions.

Before delivery read [agent pitfalls](../../../../references/agent-design-pitfalls.md); after an adaptation update this contract only with evidence actually established.
