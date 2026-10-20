# Reference-First Calibration

Use with [SKILL.md](../SKILL.md) when the agent's own baseline is not professional. Signals: the user calls the result cluttered or amateur, or rejects layout, type, colour and shadow all at once, or independent explorations keep converging on a generic "AI look". Calibrate to one approved professional reference first; explore your own expression only after the calibrated baseline is accepted. This adds to stages 1–4; it does not replace independent exploration.

Worked example: [Linear baseline](../examples/linear-baseline/README.md). Process notes (Chinese): [research/2026-10-20-reference-first](../research/2026-10-20-reference-first/README.md).

## 1. Let the user pick a real reference

- Offer 4–6 real, clearly different products: live sites or official app screenshots, desktop and mobile first screens. Do not offer your own mock-ups.
- Proceed only with the references the user approves. Record the URL and access date. In a public repository, link to the source; do not redistribute third-party screenshots.
- Keep visual inspiration separate from functional reference. A marketing hero is not evidence of how the application works.

## 2. Measure; label every value

| Label | Method | Use |
| --- | --- | --- |
| `[DOM]` | Playwright/headless Chrome `getComputedStyle` at 1440 and 390 | Exact CSS values |
| `[est]` | Pixel measurement on a screenshot (scale may be unknown) | Proportions only; never present as exact |
| `[official]` / `[community]` | Platform guidelines / published measurements | Cite the page |
| `[unknown]` | Nothing reliable | Leave blank; do not invent |

Measure the alignment lines and container widths, the type scale (size/line height/weight/tracking), the text colour levels, the surface steps, borders and shadows, radii, button heights, section padding, and sidebar and row proportions.

## 3. Deconstruct before building

For each reference, write down:
- the **skeleton**: alignment lines and column ratios;
- the **hierarchy**: how many size, weight and colour levels, and what is deliberately quiet;
- the **surfaces**: grey steps, line or shadow, nesting radii;
- the **content technique**: real data, cropping, floating layers.

Name the pitfalls of imitating it, e.g. pure #FFF/#888 instead of tinted greys, or 700-weight headings.

## 4. Define foundations as variables

- **Colour:** primitives plus semantic aliases. Surfaces differ by one or two grey steps. Use four text levels of one hue. Use exactly **one accent**, reserved for the primary action, selection, focus and links. Status colours appear only as small product-UI marks.
- **Type:** at most 5 sizes per breakpoint. Headings weight 500–600 with tight tracking. Body text has no tracking for CJK (see §8).
- **Radius:** 12 / 8 / 6 / 4, nested outer-to-inner; pill for buttons and tags.
- **Spacing:** a 4-based scale. Section padding scales with the viewport: desktop 96–128, mobile 48–64.
- **Elevation:** a shadow style exists only for floating layers.

Every later value must resolve to a foundation. If a value cannot be found there, it is wrong: change the value, or add a foundation deliberately and record why.

## 5. Components with variants

Build in this order: atoms (icon, status, avatar, tag), then button, sidebar row, list row, toolbar group, input. Give every state a variant (default/selected, default/focus, primary/secondary × sizes). Bind fill, stroke, radius, padding and gap to variables. Flat rows are separated by a 1px line, never a card with a shadow.

## 6. Alignment grids

- Desktop 1440: 12 columns; text column x=80–1360 unless the reference measures otherwise.
- Mobile 390: 4 columns, 24 margin.

Navigation, headings, panels and the footer all sit on the same lines. No section invents its own margin.

## 7. Compose section by section

- **Desktop application UI:** sidebar (17–20% of the window), list and detail, with a toolbar grouped by function (navigate / view / act / search).
- **Mobile:** one column at a time with drill-in navigation. Never a shrunken three-pane window.
- **Content:** realistic IDs, names, times and numbers. No lorem ipsum or abstract geometry standing in for a product.
- **Build order:** one section per step; screenshot after each composition.

## 8. CJK typography adjustments

| Property | Latin reference (e.g. Linear) | CJK |
| --- | --- | --- |
| Heading tracking | −0.022em | −0.012 to −0.015em |
| Heading line height | 1.0 | 1.1–1.17 |
| Body tracking | −0.011em | 0 |
| Display sizes | 64 / 48 | about 56 / 40: direct transfer looks heavy |
| Mono / uppercase labels | any | Latin and numerals only |

Font: PingFang SC, falling back to Noto Sans SC. In Figma use Noto Sans SC explicitly; Inter has no CJK glyphs and Figma does not ship PingFang.

## 9. Screenshot review against the reference

- Capture full pages at 1440 and 390. Compare the same regions side by side with the reference.
- Write each issue as *location / current / target value*. Fix, re-capture, and recheck only the affected region in the whole.
- Do at least two rounds. Record what remains different and why (content, CJK, deliberate omission).
- Review passing is not aesthetic approval; the user decides.

## 10. Rules to check before delivery

1. One set of alignment lines.
2. At most 5 sizes, headings 500–600.
3. Text levels in one hue.
4. One accent, interactive states only.
5. Adjacent regions differ by 1–2 grey steps; thin dividers only between panes.
6. Radii nest from outer to inner; pill buttons.
7. Shadows only on floating layers.
8. Realistic product content.
9. Desktop three-pane, mobile single-column.
10. Whitespace exceeds content; padding scales with the viewport; body lines no longer than about 70 characters.

## Figma route: known constraints

Driving Figma through `use_figma` works for variables, styles, variants and screens; it is equal in quality to hand-written HTML at the same values. Its advantage is reuse. Expect these constraints:
- Starter plans allow 1 mode per collection, so split desktop and mobile into separate variables.
- Font size, weight and line height cannot be bound to variables; use text styles.
- Gradients and ring shadows cannot bind colour variables.
- `resize()` turns auto-layout sizing into FIXED, and empty auto-layout frames default to 100px. Set HUG/FILL after resizing.
- The agent cannot see the canvas, so screenshot every composition.
- Exports at natural size are 1x.
- Select a CJK font explicitly.
