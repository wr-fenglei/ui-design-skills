# Provenance / source boundaries

Upstream: **[Anatomy by Ryan](https://github.com/wheresryan22/anatomy)**, MIT, `Copyright (c) 2026 Ryan`.

Inspected `main` at **`e9488296a44211c42701ff71705b7901470ec78f`** (commit date 2026-10-15; audit 2026-10-18). This minimal handoff retains implementation provenance only; the full source audit and repository inventory stay local. No upstream script was executed.

This experiment is **not an official Anatomy UI release**. It applies selected surface, motion and modeling ideas to a new conventional interface. Visual judgment and suitability for other tasks remain open.

## What actually moved

| Delivery | Upstream evidence | Treatment |
|---|---|---|
| `tokens.css` page `#f2f2ef`, surface `#fbfbfa`, ink `#18181a`, text `#57575a` | [iso.css L14](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/kit/iso.css#L14) | Direct values, renamed semantic UI roles. Drawing shades/line tones are not text colors. |
| Mono font stack; tabular numerals | [iso.css L10](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/kit/iso.css#L10), L89 | Reused stack and number alignment principle. No bundled fonts or external font requests. |
| `--shadow` | [iso.css L21](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/kit/iso.css#L21) | Light lift shadow copied with equivalent CSS shorthand, applied only to document paper. Upstream plate itself uses a ring, not this shadow. |
| Optional `model.js follow` | [kit/react/live.tsx L98–102](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/kit/react/live.tsx#L98) | Exponential/snap body copied, TS annotation removed, new finite/range checks. MIT preserved. Not used for automatic motion in this reading page. |
| `insetBox` | [roundedPlan L34–35](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/kit/iso-kit.mjs#L34), [insetPlan L201](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/kit/iso-kit.mjs#L201) | Newly written UI adapter inspired by radius clamping and radius-minus-inset relation. Additional size/inset/finite guards are new; no geometry renderer copied. Available for nested surfaces, not forced into every component. |
| `derive`, validation, save/load | [SKILL L63](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/SKILL.md#L63), [ripple model L61–85](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/examples/ripple-tank/model.mjs#L61) | New code translating “one model drives visible state and readout.” No physics formulas reused. |
| Static HTML / dynamic JS separation | [references/react.md L18](https://github.com/wheresryan22/anatomy/blob/e9488296a44211c42701ff71705b7901470ec78f/references/react.md#L18), motion.md L9 | Architecture adapted to vanilla HTML. No React payload or geometry library. |
| Readability palette | New `--secondary #626266`, `--green #276747`, `--amber #795a22`, `--danger #a63632` | Experiment additions. Upstream `muted #8c8c90` is not used for body copy. Actual foreground/background pair tests retained. |
| UI geometry and type | New scale4/8/12/16/24/32; title24; reading body14; controls38; row52 minimum; radius4; max1320; desktop64/36; breakpoint850 | **All experimental adaptation values.** Not upstream standards. Metadata is 10–12px only for short subordinate labels, not body paragraphs. |
| Document serif24, toolbar/table/form/badge/dialog/timeline/empty-state | New component and composition decisions implementing the UI experiment brief | Not Anatomy original components. No generated image or machine illustration is used. |

The complete upstream MIT license is [LICENSE.anatomy](LICENSE.anatomy). Retain it and this provenance with redistributed copied/adapted portions. The license text does not require an on-screen logo. Gallery `publish.mjs --license` options do not relicense the original kit.

## Values not translated into UI rules

- `55–65%` is object occupancy inside an illustration card; it does not prescribe the table/detail ratio.
- Camera azimuth45°, elevation30°, `fitProjection`, `depthOf`, world-space bevels and slab radii are illustration geometry, not CSS layout solving.
- `.6px` is SVG stroke weight; it is not a universal UI divider or text-stroke value.
- `10.5px` is the figure corner-label size; it is not general UI body type.
- 40–80/80–150 parts, fill empty corners, painter ordering, tube clearance and rooted line ends apply to physical illustrations.
- Four-tone shading, light-theme ink compositing and WebGL ray marching do not define a text contrast system.
- Idle tours and hover-controlled physical mechanisms are omitted for a quiet reading archive.

