# Research record: Linear reference calibration (2026-10-20)

Process notes for the Linear direction, not skill rules. The shared method is [reference calibration](../../../../references/reference-calibration.md); the retained outcome is the [Linear baseline](../../examples/linear-baseline/README.md).

- [ui-reference-study.md](ui-reference-study.md): breakdown of the five approved baselines (Linear, macOS 27 Finder, macOS 27 Mail, HIG window anatomy, Bear) and the rules derived for this direction
- [linear-study.md](linear-study.md): Linear homepage measurements
- [macos-tokens.md](macos-tokens.md): macOS type, colour and control values with source labels
- [sources.md](sources.md): reference sources and access dates. Third-party screenshots are not distributed in this repository
- Figma execution notes from this exercise are kept, marked as historical, in the shared [Figma execution note](../../../../references/figma-execution.md#historical-2026-10-20-figma-mcp-findings-outdated)

## Why v1–v3 failed

- **What happened:** v1 (warm paper + vermilion), v2 (Geist + blue) and v3 (three directions: method archive / translucent light sheets / colour blocks and objects) were all judged "not like a professional designer's work, messy, unattractive shapes". The last feedback was "layout, structure, shape, size, type size, colour and shadow are all wrong".
- **Cause:** each version was a style the agent invented and then checked against rules. Rules caught obvious errors but did not produce professional quality: inconsistent alignment lines, too many type sizes, greys and accents chosen by feel, shadows and radii decided independently. Switching models did not change this.
- **Turning point:** find real professional work, let the user choose, **measure it and rebuild from the values**. The first HTML version modelled on Linear was clearly better than the previous three; rebuilt in Figma with variables and components, the user judged it "more professional than anything in ui-design-skills".

## How this exercise ran

1. **Collect real references and let the user choose:** six clearly different real websites (desktop + mobile first screens). The user chose Linear, then added macOS Finder, Mail, the HIG window anatomy diagrams and Bear. Unapproved references were not used further.
2. **Measure and label sources:** web pages via Playwright / headless Chrome `getComputedStyle` ([DOM]); screenshots measured pixel by pixel ([est]); official documentation ([official]); community data ([community]); unavailable values labelled [unknown], never invented.
3. **Deconstruct:** layout skeleton (alignment lines, column ratios), hierarchy (how many levels of size, weight and colour), surfaces (how many fill steps, line or shadow, how radii nest) and content techniques (real data, cropping, overlays).
4. **Foundations:** primitive and semantic colours, type styles, radii, spacing and responsive section padding; the resulting values are in the [Linear contract](../../examples/linear-baseline/DESIGN.md).
5. **Components and variants:** button, sidebar row, list row, toolbar group, input, each with state variants; fill, stroke, radius and spacing bound to variables.
6. **Alignment grids:** desktop 1440 wide, 12 columns, text column x=80…1360; mobile 390 wide, 4 columns, 24 side margins.
7. **Assemble the page section by section:** the desktop first screen shows an app window with three panes (sidebar ≈17–20% / list / detail) and real data; mobile shows one pane at a time with drill-in, **not a shrunken three-pane window**.
8. **Screenshot review over several rounds:** compare side by side with the reference at the same position; write issues as "location / current / target value"; fix and re-capture. HTML had 3 rounds, Figma 2.

## CJK typography adaptations (differences from Linear's values)

1. Title tracking −0.022em → −0.012 to −0.015em: CJK characters have no built-in inter-letter space; tight tracking makes strokes collide.
2. Title line height 1.0 → 1.1–1.17: CJK has no ascenders/descenders; at 1.0 two lines almost touch.
3. Body CJK tracking 0 (Linear's −0.011em is designed for Latin).
4. Font fallback PingFang SC → Noto Sans SC. Figma has no PingFang, so Noto Sans SC (Regular / Medium) is used throughout.
5. Mono and uppercase labels only for English and identifiers (FIG 0.1, STEP 01, UI-142); CJK text is never uppercased or set in mono.
6. Linear's 64 / 48 display sizes look heavy in CJK; 56 / 40 fit better.
