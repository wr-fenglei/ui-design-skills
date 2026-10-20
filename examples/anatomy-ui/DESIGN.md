# Fieldnotes — Experimental design contract

Status: **experimental small UI system, awaiting aesthetic review**. This was a user-requested code-first experiment without a GPT Image comparison. The contract documents existing choices, not a mature-system promotion or retrospective compliance claim.

## Task and expressive thesis

Find a fictional research record, inspect its context and create a bounded local record. Paper/ink hierarchy, restrained lines and a document-shaped detail surface organize a relatively dense archive. A larger list and smaller inspector carry different tasks; color supports status rather than dominates the page.

See the [actual screenshot](screenshots/desktop.jpg) and [README](README.md). No new judgment of visual approval is implied.

## Reference roles and parameter provenance

[Source map](source-map.md) and [provenance](provenance.md) distinguish inspected Anatomy facts, copied code, adapted relationships and new choices. The isometric illustration camera and occupancy rules are not UI grid standards. Keep [LICENSE.anatomy](LICENSE.anatomy) with reused portions.

Spacing 4/8/12/16/24/32, type roles 14/24, row 52, control 38, radius 4, desktop 64/36 and breakpoints are **new experimental UI choices**. They are not inherited Anatomy standards or official platform metrics.

A broader same-function reference comparison remains unproven; do not manufacture one from the source's reputation. Further development should use the [current system method](../../references/design-system-development.md).

## Relationships to preserve while testing

- Search/filter/sort belong to finding; table/rows to comparing; inspector to reading; dialog to creation.
- One derived visible state drives list, counts and selection so the inspector cannot silently refer to a filtered-out row.
- Neutral page/surface/paper roles provide separation; badges carry words as well as hue.
- Group gaps differ from internal gaps. A bounded spacing vocabulary allows optical adjustment.
- Reflow to stacked inspector and record rows rather than merely shrinking the desktop table.
- Show saved state only after storage succeeds; failure keeps session data and exposes retry.

These are candidate relationships to test, not a claim that the whole has passed aesthetic review.

## Components and actual tools

- [tokens.css](tokens.css): roles and example-specific values.
- [components.css](components.css): toolbar, fields, table, badges, document, metadata, timeline, buttons, dialog and empty state.
- [model.js](model.js): guarded geometry, layout, derived state and storage utilities. `insetBox()` relates inset dimensions/radius; `layoutFor()` models layout limits; `derive()` coordinates filtering/selection/counts. See [rules](rules.md) for input → method → output → acceptance → boundary.
- [app.js](app.js) and [data.js](data.js): this fictional archive application, not a backend.
- [model tests](tests/model.test.cjs), [browser harness](tests/browser.html) and [local server](tests/serve.py): existing checks and reproduction tools. Commands and disposable test storage are documented in [README](README.md#open-and-reproduce).

Do not infer a complete design library from utility functions. The archive does not use an automatic motion tour; optional model utilities are not proof of visible behavior.

## States and verification

The example includes selection, combined search/category/sort, empty results, native dialog validation/cancel/Escape/focus return, repeated-submit guards, storage failure/retry and corrupt/unavailable-storage notices. It caps validated records at 500 and stores only in this browser.

[VALIDATION.md](VALIDATION.md) is authoritative for actual tests and limits. This documentation change does not rerun or extend them. User aesthetic review, broader-browser and assistive-technology validation remain separate.

No backend, authentication, multi-user or multi-tab conflict handling, dark theme or production accessibility certification is established. Retain these limits if adapting the code.

## Evolution and checks

Use this example to compare a tool-informed structure against task needs, not to conclude tools outperform direct CSS. Future iterations must record the rendered weakness, bounded correction and actual result. Preserve source attribution; do not relabel newly chosen sizes as inherited facts.
