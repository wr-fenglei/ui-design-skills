# Method: building a Figma design system from a measured reference

This is how the [Linear baseline](systems/linear-baseline/README.md) was built on 2026-10-20, written as steps to repeat for a new system. Every step below was actually done for that file; the [research notes](systems/linear-baseline/research/README.md) hold the raw measurements.

## Why this method

Three earlier versions (warm paper with vermilion, Geist with blue, then three invented directions) were each a style the agent made up and then checked against rules. The user judged all of them unprofessional: alignment lines drifted, there were too many type sizes, greys and accents were chosen by feel, and shadows and radii were decided one by one. Switching models did not help.

What worked was to pick real professional work, measure it, and rebuild from the numbers. The first HTML version modelled on Linear was clearly better. Rebuilt in Figma with variables and components, the user judged it more professional than anything else in this repository. The tool adds no taste; the quality came from the approved reference.

## Overview

1. Pick reference pages with the user
2. Measure values directly
3. Record provenance for every value
4. Create Figma variables and styles
5. Build the Foundations page
6. Build components bound to variables
7. Build screens (desktop 1440, mobile 390) from instances
8. Export and review after every step
9. Retain the system in `systems/<name>/`

## 1. Pick reference pages with the user

- Show the user a small set of clearly different real products, desktop and mobile first screens. For the baseline it was six websites; the user chose Linear, then added macOS 27 Finder and Mail, the HIG window-anatomy diagrams and Bear.
- Drop every reference the user did not approve.
- Assign each reference a role. Linear's [home](https://linear.app/), [/plan](https://linear.app/plan) and [/build](https://linear.app/build) gave the visual values and the section template. [/method](https://linear.app/method) gave the title and numbered table-of-contents layout. The macOS and Bear references gave window proportions only.
- Record the URL, access date and inspected regions. Link sources; never commit third-party screenshots.

## 2. Measure values directly

| Source type | How it was measured | Label |
| --- | --- | --- |
| Web pages | Playwright / headless Chrome at 1440×900 and 390×844 (@2x), full-page capture after scroll-loading, then `getComputedStyle` on each element | `[DOM]` |
| Screenshots and marketing renders | Pixel measurement with Pillow, noting scale uncertainty, JPEG noise and wallpaper show-through | `[est]` |
| Platform guidelines | Quoted from Apple HIG and WWDC pages | `[official]` |
| Published third-party measurements | Quoted with link | `[community]` |
| Nothing reliable | No number given | `[unknown]` |

Measure, for each viewport:

- **Skeleton:** container width, side insets, the alignment lines everything sits on, column ratios, section padding, block positions (y and height).
- **Type:** size, line height, weight, tracking and colour for every text level, desktop and mobile.
- **Colour:** page, panel and raised surfaces; text levels; line colours; where the accent appears and where it does not.
- **Shape:** radius at each nesting level, borders versus shadows, button heights and padding.
- **Content techniques:** how the product window is shown (real IDs, times, avatars; cropping with a fade; a floating panel for depth).

Use DOM values for CSS numbers and screenshots for proportions. For Linear, the H1 ink sat 25–40 px below its DOM line-box top, so the two do not substitute for each other.

## 3. Record provenance for every value

- Keep a table of every measured value with its label and source link ([linear-study.md](systems/linear-baseline/research/linear-study.md), [macos-tokens.md](systems/linear-baseline/research/macos-tokens.md)).
- Break each reference down into skeleton, hierarchy, surfaces and content techniques, and write what transfers, what must adapt and what should not transfer ([ui-reference-study.md](systems/linear-baseline/research/ui-reference-study.md)).
- Mark each value in the system as **inherited**, **adapted** (with the original value and reason) or **new**. For the baseline, the CJK adaptations were: title tracking −0.022em → −0.012 to −0.015em, title line height 1.0 → 1.1–1.17, body tracking 0, Noto Sans SC instead of PingFang SC (not available in Figma), mono and uppercase only for Latin IDs and labels, and display sizes 64 / 48 → 56 / 40.
- Put the adaptation into the Figma style description too, for example `Linear 64/510/-0.022em → CN 56/1.14/-0.015em`.
- Summarise in the system's `provenance.md` and `DESIGN.md`.

## 4. Create Figma variables and styles

Create these before drawing anything. For the baseline:

| Collection | Count | Contents |
| --- | --- | --- |
| Primitives | 23 | Raw measured colours: `color/gray/950` … `color/gray/50`, `color/white-a/*`, indigo, green, red, yellow |
| Color | 25 | Semantic roles aliased to primitives: `bg/*`, `surface/*`, `border/*`, `text/primary…quaternary`, `accent/*`, `control/*`, `status/*` |
| Radius | 5 | 4 / 6 / 8 / 12 / 9999 |
| Spacing | 12 | 2 … 128 |
| Layout | 12 | Page margin, section padding, head gap, block gap, nav height and gutter, each as `layout/desktop/*` and `layout/mobile/*` |

- Add text styles for every type level (10 in the baseline) and effect styles for the only shadows allowed (2: floating layer, primary button).
- Font size, weight and line height could not bind to variables, so screens use text styles only, with no loose font sizes.
- On a plan with one mode per collection, keep desktop and mobile values as separate variables instead of modes.
- In scripts, look tokens up by name through a helper that throws when the name is missing. This blocks values outside the table: a padding of 20 failed and became 24.

The full dump is in [tokens.md](systems/linear-baseline/tokens.md).

## 5. Build the Foundations page

One 1440-wide frame that documents the system:

- An eyebrow, a display title and a one-line lead stating where the values come from (for the baseline: measured on linear.app with `getComputedStyle`, CJK adjusted as recorded).
- Numbered sections, numbered the way /method numbers its table of contents: 01 Colour, 02 Type, 03 Radius, 04 Spacing & layout, 05 Surface & elevation.
- Each section opens with a title that states the rule (for example "one hue in steps, only one accent") and a one-line reason, then specimens labelled with the variable name and value: colour swatches by role, every text style set in real copy with its size / line height / weight / tracking, radius samples with where each is used, the spacing scale and layout values, and the elevation rule.

Export: [foundations.png](systems/linear-baseline/figma/foundations.png).

## 6. Build components bound to variables

- List the components the screens actually need. For the baseline: Button (Primary/Secondary × Small 32 / Large 44), Sidebar row (Default/Selected), List row (Default/Selected), Toolbar group (2/3 items), Input (Default/Focus), plus 18 icons, Status, Avatar and Tag.
- Take geometry from the measurements: pill buttons 32 and 44 tall, a 232 px sidebar, 8 px window padding, nested radii 12 → 8 → 6 → 4.
- Build with auto layout. Bind every fill, stroke, radius, padding and gap to a variable, and set text with text styles.
- Add variants and component properties (text, boolean, instance swap), so fixing a component once fixes every instance.
- Add an overview sheet that shows each component with its name and a one-line rule (for example "selection changes only one grey step").

Export: [components.png](systems/linear-baseline/figma/components.png).

## 7. Build screens from instances

- Add layout grids: desktop 1440, 12 columns, margin 80, gutter 32; mobile 390, 4 columns, margin 24, gutter 16.
- Assemble the page section by section from component instances, variables and text styles. Follow the reference's section template; for Linear it was H2 left / lead right → full-width product panel → 2×2 features separated by lines.
- Fill the product mock with realistic data, never placeholder text or abstract blocks.
- Desktop and mobile get different compositions. The desktop hero is a three-pane window (sidebar about 17–20%); mobile shows one pane at a time with drill-in, not a shrunken desktop window.

Exports: [screen-desktop.png](systems/linear-baseline/figma/screen-desktop.png), [screen-mobile.png](systems/linear-baseline/figma/screen-mobile.png).

## 8. Export and review after every step

- The agent cannot see the canvas. After each composed section and each fix, export an image and look at it.
- Run script checks as well: text overflowing its frame, content escaping its window or artboard, and fills not bound to variables. In the baseline all 697 solid fills on the two screens were bound.
- Compare with the reference side by side at the same position. Write each issue as *location / current value / target value*, fix it and capture again. The baseline had two Figma review rounds (and three for the HTML version).
- Bugs these reviews caught: a collapsed sample card, a toolbar that did not fill its row, overlapping tag text, heading line height and wraps in CJK, and the hero glow.
- A passing script is not visual approval, and a visual pass is not user approval.

## 9. Retain the system

Create `systems/<name>/` with:

- `README.md`: Figma link, provenance summary, page table and limits
- `figma/`: exports of Foundations, Components and the screens
- `tokens.json` and `tokens.md`: variables, styles and components dumped from the file
- `provenance.md`, `DESIGN.md` and the research notes

Keep each image under about 1.5 MB.

## Tools

- **Measurement:** Playwright / headless Chrome with `getComputedStyle`; Pillow for screenshots.
- **Figma, original build:** the baseline was built through Figma MCP `use_figma` (Plugin API scripts) in about 20 scripted writes. Each script was atomic, so a failed script rolled back and could be retried safely.
- **Figma, current route:** [figmosha2-extended](https://github.com/wr-fenglei/figmosha2-extended) sends Plugin API JavaScript through a local bridge to a development plugin in Figma Desktop. It must run on the machine where Figma Desktop is open, with the plugin running in each target file.
  - `figmosha targets` lists the connected files.
  - Run scripts with `figmosha exec --file script.js -T "<file>" -A <agent>`.
  - Use `--parallel` only for read-only scripts.
  - A 504 timeout may mean the script is still running, so inspect the file before retrying a write.
  - Confirm the target file and scope before any write, and prefer a new page over editing an approved one.
- **Figma pitfalls:**
  - `resize()` switches auto-layout children to fixed sizing, so set HUG or FILL after resizing.
  - An empty auto-layout frame defaults to 100 px tall, so give spacers an explicit size.
  - Load fonts explicitly. Inter has no CJK glyphs.
  - Gradients and focus-ring shadows cannot bind colour variables, so keep them rare and list them as exceptions.
