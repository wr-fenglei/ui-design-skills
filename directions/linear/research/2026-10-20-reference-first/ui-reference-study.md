> Public-repository note: third-party screenshots mentioned here (Linear, Apple, Bear, Mimestream, Ars Technica and others) are **not distributed** with this repository; original local screenshot paths were replaced with source links. See [sources.md](sources.md).

# Professional UI baselines: breakdown and transferable lessons

Compiled 2026-10-20 (Asia/Shanghai). Baselines (user-approved): **Linear website** (home + /plan /build /method), **macOS 27 Finder**, **macOS 27 Mail**, **HIG window anatomy diagrams** (Finder light/dark, Notes toolbar), **Bear**.
Source labels:
- **[DOM]** actual CSS values read with headless Chrome `getComputedStyle` (Linear only)
- **[est]** values I measured pixel by pixel on screenshots with Pillow (**estimates**, affected by JPEG, scaling and wallpaper show-through)
- **[official] / [community]** quoted from [macos-tokens.md](macos-tokens.md); sources are listed there
- **[unknown]** no reliable data; no number given

Figures:
- Annotated images (boxes drawn on Linear's first screen and a Mail screenshot) are derivatives of third-party screenshots and are not distributed
- Linear pages: [home](https://linear.app/) (full page 1440×9960), [/plan](https://linear.app/plan) (1440×14771), [/build](https://linear.app/build) (1440×15295), [/method](https://linear.app/method) (1440×2701)
- macOS and Bear: see [sources.md](sources.md) (Bear website full-window image 2516×1838, [bear.app](https://bear.app/))

---

## 1. Linear (linear.app)

### 1.1 Layout skeleton
- **One text column across the whole site:** content box 1344 (48 each side), text inset a further 32 → text column **x=80…1360 (1280 wide)**; the nav logo's left edge x=79 and Sign up's right edge x=1361 sit exactly on these lines [DOM, see linear-study.md]. H1 and H2 on /plan and /build are also at x=78 [DOM]. **The site has only this one pair of alignment lines**; this is where the "clean" feeling comes from.
- **First screen:** nav 72 → large gap → two-line H1 → subtitle row (subtitle left, link right, same baseline) → product window (x=60, 1320×720, y=527) → 768-tall grey-white gradient base under the window [DOM]. Pixel re-check: outer window x=60–1380, y=527–1247; inner view x=300–1372 from y=535; view header 535–579 (**44px**); sidebar area x=60–300 (232 + 8 padding); Agent overlay x≈959–1359, y≈706–1223 [est].
  - Note: the H1 ink sits at y≈280–403 in the screenshot [est], about 25–40px below the DOM line-box top y=242 (there is space between the line-box top and cap height, and capture timing may differ). Use DOM for CSS; use screenshots for proportions.
- **Feature sections (shared template on /plan and /build)** [DOM]:
  - The section header is **two columns 672/672**: H2 48/48 on the left (x=78, width 542), lead 24/31.92 #D0D6E0 on the right (x=752, width 566), with a small 15px #8A8F98 link below the lead (e.g. "Projects →")
  - Then a full-width product panel: an outer 1344-wide (x=48–1391) grey lit panel with a centred 1120-wide product window inside (x=160–1279, fill #121314, 1px #1E1F1F) [est]. Another instance is a 672×720 window, radius 12, 1px #23252A, inside a 1344×840 figure with fill #0F1011 [DOM]
  - Below the panel a **2×2 feature grid**: each cell h3 15/24 weight 510 #F7F8F8 + caption 15/24 #8A8F98; left cell x=81, right cell x=752, cell width ≈606 [DOM]; cells are separated by 1px lines with no card fill (visible in screenshots)
- **/method (article page):** centred single column. Small uppercase eyebrow "THE LINEAR METHOD" → **serif H1 128/128 weight 400** (x=376, width 688, centred) [DOM] → 17/27.2 #8A8F98 intro (width 410, centred) [DOM] → line-art double circle → table of contents: small uppercase group titles, entries with the title on the left and a number such as "2.1" on the right, a thin line between groups; TOC column ≈686px wide (x≈377–1063, **estimate**) [est].

### 1.2 Information hierarchy
- **Four colour levels** replace many type sizes: #F7F8F8 (titles) → #D0D6E0 (lead, in-product titles) → #8A8F98 (body, nav) → #62666D (mono labels) [DOM]. The manifesto paragraph splits one sentence into two colours: the first half #F7F8F8 is the point, the second half #8A8F98 is supporting.
- Only a few size steps: 72/64 → 48 → 24 → 15 → 13 → 12. **Body is always 15px**; titles look tight through weight 510 (not 700) and negative tracking [DOM].
- Deliberately quiet: nav links (13px grey), footer, mono labels, feature captions. The marketing layer **uses no accent at all**; indigo #5E6AD2 appears only inside the product UI (send button) [DOM].
- **The real visual subject is the product window:** the only light above the fold (the gradient base under the window) leads the eye to the product; the title only positions it in one sentence.

### 1.3 Shape and surface
- All buttons are pills: nav 32 tall, large 44 tall; primary light fill #E5E5E6 + black text, secondary 5% white fill + inner stroke [DOM].
- Restrained radii: window 12 → inner view 8 → cards 6–9 → tags 4 [DOM]. **Large outside, small inside; nesting is clear** (the same idea as macOS concentric corners).
- Borders are used more than shadows: 1px rgba(255,255,255,.08)/.05/#23252A; shadows only on floating layers (0 2px 32px rgba(0,0,0,.25)) [DOM].
- Sections are separated by a full-width 1px line + 128px vertical padding, not colour blocks [DOM].

### 1.4 Type and colour
Inter Variable weights 400/510/590, monospace Berkeley Mono; the /method H1 is serif. Background #08090A, panels #0F1011/#121314, raised surfaces #161718/#1C1C1D [DOM].

### 1.5 Content techniques worth borrowing
1. **Show a real product window, not an illustration:** real IDs (DRV-8852), relative times ("2 min ago"), names and avatars, code identifiers (`vehicle_state`), diff counts (+22 −10). Credible data = a professional page.
2. **The product window uses the standard trio:** sidebar (navigation) + main view (issue body + Activity timeline) + overlay (Agent chat); one image shows structure, content and interaction at once.
3. **Crop the window when it is larger than the viewport**, finishing the bottom or right with a fade, so the product feels "big".
4. **/plan property rows:** a grey label column on the left (Properties / Initiatives / Labels / Resources), a row of value pills with small icons on the right (status, priority, assignee, date). An efficient way to express "object details".
5. **Reusable section template:** H2 left / lead right → full-width product panel → 2×2 feature grid (short title + two-line caption).
6. **Article pages switch to a large serif title + numbered TOC:** within one brand, a typeface change separates "product pages" from "thinking pages".

### 1.6 Pitfalls when imitating
- Pure white #FFFFFF for titles and neutral grey #888 for body: Linear's greys all lean slightly cool blue (#8A8F98, #D0D6E0).
- 700 bold titles: they look heavy; Linear uses 510 with negative tracking.
- Lorem ipsum or geometric placeholder blocks in the product window: instantly fake.
- Accents or colourful gradients everywhere: Linear's marketing layer has no accent at all.
- A fill and a shadow on every card: Linear's feature grid is separated only by 1px lines.
- Each section choosing its own left margin: once the alignment lines drift, the page looks messy.

---

## 2. macOS 27 Finder ([Ars Technica review screenshot](https://arstechnica.com/gadgets/2026/09/macos-27-golden-gate-the-ars-technica-review/))

### 2.1 Layout skeleton (image 1980×1200, dark mode) [est]
- Window x≈64–1906 (1842 wide), y≈139–1061; **sidebar ≈17% wide** (x≈64–385), icon-grid content on the right, a status bar at the bottom ("73 items, 348.54 GB available" centred, zoom slider on the right).
- **No vertical line** between sidebar and content; only the fill differs: sidebar #282737 (purple wallpaper showing through) vs content #25252D. This is macOS 27's "edge-to-edge sidebar" [official wording in macos-tokens.md].
- Sidebar row pitch ≈64 image pixels (**≈32pt if the screenshot is @2x**); selected row ≈63 image pixels tall, inset ≈10pt on each side (**estimate**).
- Toolbar: ‹ › pill + title "Applications" on the left, a view-switch group in the middle (icon/list/column/gallery), an action group on the right (share/tags/…), and a separate round search button at the far right. Pills ≈69 image pixels tall (**estimate**).

### 2.2 Information hierarchy
- Three levels: toolbar title (bold) > sidebar items and icon names (regular) > group titles "Favorites / Locations" (small, grey) and the status bar (small, grey, centred).
- Selection uses only "a rounded fill one step lighter + a blue icon"; text colour does not change.
- **The toolbar is deliberately quiet:** the glass pills almost merge with the content, which shows through when scrolled underneath.

### 2.3 Shape and surface
- Three generations compared ([Ars Technica](https://arstechnica.com/gadgets/2026/09/macos-27-golden-gate-the-ars-technica-review/) window-corner comparison): Sequoia has the hardest corners, Tahoe the roundest, 27 sits between them and is uniform across windows [official/community; values in macos-tokens.md; the exact value for 27 is unknown].
- Toolbar buttons are **grouped by function** into one glass pill, with thin vertical dividers inside a group and space between groups.
- Compared with Sequoia ([Ars Technica](https://arstechnica.com/gadgets/2026/09/macos-27-golden-gate-the-ars-technica-review/) macOS 15 screenshot): old toolbar buttons had no fill, and sidebar and content had a clear boundary.

### 2.4 Transferable rules
- Sidebar width 17–20% of the window (Finder ≈17%, Mail ≈19%, Mimestream 209pt in a 1200-wide window ≈17%) [est].
- Sidebar groups: small grey group title + icon + 13pt label; space between groups, no dividers.
- Toolbar controls in four groups, "navigation / view / actions / search"; joined within a group, spaced between groups.

### 2.5 Pitfalls
- A heavy divider between sidebar and content, or a coloured sidebar: macOS differs by only one or two grey steps.
- A separate border on every toolbar button: looks fragmented. macOS uses "one pill per group".
- Glass on content cards: HIG says explicitly that glass is for the floating functional layer [official].

---

## 3. macOS 27 Mail ([apple.com/os/macos](https://www.apple.com/os/macos/) marketing render)

### 3.1 Layout skeleton (image 1392×904, a marketing render with unknown scale; proportions only) [est]
- Window x≈75–1291; **three-pane ratio: sidebar ≈19% / message list ≈37% / reading pane ≈43%** (236 / 455 / 522 image pixels).
- Toolbar band ≈59 image pixels (≈4.9% of window width), spanning the list and reading pane; "Searching / All Mailboxes, 4 results" above the list is a **window title + subtitle** on the same row as the toolbar.
- A row of filter pills above the list (four icon pills + a dark selected pill "All Mail").

### 3.2 Information hierarchy
- List rows have four fixed layers: **sender (bold) + date on the right (grey, small) / subject (regular) / two-line preview (grey)**. Search terms are highlighted in yellow. Section headers "Top Hits / All Results" are small grey.
- Reading pane: avatar + name (bold) + subject + recipients (grey); body in regular black.
- Quiet: sidebar counts (grey right-aligned numbers "4", "28"), group titles ("Favorites", "Smart Mailboxes").

### 3.3 Shape and surface (all colours estimated) [est]
- Sidebar #EDECE8 (warm, wallpaper showing through), list/reading pane #FFFFFF.
- The **selected list row is a solid light grey #DCDCDC with rounded corners and no blue outline**. This matches the light value of `unemphasizedSelectedContentBackgroundColor`, #DCDCDC [community, tokens].
- Thin dividers between list rows, starting at the text, not full-bleed.
- **Only one blue element in the whole window:** the search field's focus ring.

### 3.4 Transferable rules
- Classic list + detail ratio ≈ 2:5:5 (sidebar:list:detail).
- List row template: "bold primary name + right-aligned grey time / regular subtitle / two-line grey preview", rows separated by inset thin lines.
- Neutral grey for selection; blue only for focus.

### 3.5 Pitfalls
- Turning list rows into shadowed cards: Mail uses flat rows + thin lines.
- Filling the selection with the accent: in an unfocused window macOS uses grey; blue appears only at focus.
- Dates as dark as titles: dates should be grey, small and right-aligned.

---

## 4. HIG window anatomy diagrams ([HIG Toolbars](https://developer.apple.com/design/human-interface-guidelines/toolbars))

Apple's own drawn "reference answers": cleaner than real screenshots and suitable as wireframe templates. **They are illustrations with unknown scale; the values below are proportions only.**

### 4.1 Finder diagram (light 1464×922 / dark) [est]
- Window x=46–1297, top y=42; sidebar x=46–297 (≈20% wide); the corner arc completes within ≈46–48 image pixels at the top.
- Light: sidebar #E2E2E2, content #FFFFFF, icon placeholders #F2F2F2. Dark: sidebar #252525, content #000000, placeholders #333333.
- Toolbar: ‹ › in one pill, "Documents" title, view switch in one pill, action group (group/share/tags/…) in one pill, search as a separate circle. Pills have a 1px light stroke (≈#DADADA in the image).
- The window shadow is very soft: fading from α≈0.35 to 0 within ≈12 image pixels at the edges, deeper and longer at the bottom (≈20 pixels).

### 4.2 Notes toolbar diagram (1198×846, light/dark) [est]
- Window x=17–1074; the toolbar pill's top is ≈8 image pixels below the window top, pill height ≈45 image pixels (≈4.3% of window width), 1px stroke light #D8D8D8, dark ≈#494949.
- Layout: sidebar toggle | back | **title "Notes" + subtitle "103 notes"** (two lines, subtitle small grey) | new | format group (Aa, checklist, table, attachment, collaborate) | lock | share | more | search.
- Menu (dark image): the selected item is a full-row rounded yellow fill (Notes' app accent); items have a small icon on the left and › on the right.

### 4.3 Transferable rules
- Toolbar structure: **[navigation] title (optional subtitle) …… [core action group] [secondary actions] [more] [search]**.
- Three light greys: sidebar #E2E2E2–#F5F5F5, content #FFFFFF, placeholder #F2F2F2; dark: sidebar #252525, content #000/#1E1E1E.
- The app accent appears only on selection and focus (Notes yellow, Mail blue, Bear red).

### 4.4 Pitfalls
- Copying only the diagram's colour blocks without real content: the diagram is a skeleton; real work fills it with real data like Mail and Finder.
- Treating diagram pixels as points: scale is unknown; use the 13pt body and control sizes in macos-tokens.md.

---

## 5. Bear ([bear.app](https://bear.app/) website full-window image)

### 5.1 Layout skeleton (image 2516×1838, converted to pt assuming @2x, **estimate**) [est]
- Window x=204–2313, y≈168–1596 → **≈1054×714pt**.
- **Three panes: sidebar 180pt (dark) / note list 280pt / editor ≈594pt** (≈17% / 27% / 56%); a 1pt divider #D9D9D9 between list and editor.
- Editor: title, body, images and tables share one left alignment line (≈53pt from the editor's left edge, content width ≈486pt). A floating format bar is centred at the bottom (H, checklist, list | B I highlight | link table image …). Top right has only three quiet icons: BIU / ⓘ / ⋯.
- Sidebar row pitch ≈28pt; two indent levels (Notes ▸ Untagged/Todo/Today/Locked), a tag tree with icons.

### 5.2 Information hierarchy
- Editor: **title (emoji + large bold, #2D2D2D) > body (#252525, generous line height) > table header (bold, #F4F5F7 fill) > links (brand red)**.
- List cards: title (bold, near black) / two-line preview #747577 / thumbnail / date #9C9D9F (weakest).
- Deliberately quiet: toolbar icons, unselected sidebar items (#E3E4E6 on #2E3235), dates.

### 5.3 Shape and surface (colours estimated) [est]
- Dark sidebar #2E3235, selected row #484848 rounded; **selected list item #F4F5F7 light fill + a ≈5pt red bar on the left #DD4B4E** (brand colour used only here and on links).
- The `#bear` tag is a grey pill; tables use 1px light lines, light grey header fill, very small radii.
- The whole window has one soft large shadow; nothing inside has a shadow.

### 5.4 Worth borrowing
1. **Dark sidebar + white body:** feels native without following the system palette, because type sizes, line heights and icon sizes follow system conventions.
2. **Editor typography:** limited body width (≈486pt), generous line height; titles, images and tables share one left alignment line, like print.
3. **Card-like list without frames:** separated by thumbnails and space; selection only by the left colour bar.
4. **Format bar floating at the bottom**, usually faint: tools give way to content.

### 5.5 Pitfalls
- Using the red everywhere: Bear's red appears only on the selection bar, links and footnotes.
- Full-width text in the editor: Bear limits the measure.
- Pure white text on the dark sidebar: Bear's unselected items are #E3E4E6; only the selected item is pure white.

---

## 6. Cross-check (consistency with macos-tokens.md / linear-study.md)
| Item | Linear | macOS (official / measured) | Conclusion |
|---|---|---|---|
| Body size | 15px (marketing) / 12–14px (product UI) [DOM] | 13pt Body [official] | Product UI 13–14, marketing 15 |
| Secondary text | 13px [DOM] | 11–12pt [official] | Two steps below body |
| Text hierarchy method | 4 solid cool greys [DOM] | black/white + opacity .85/.50/.26 [community] | Both use "same hue, different value", not different colours |
| Accent | indigo inside the product only [DOM] | selection/focus only [official + est] | **One accent per screen, used only for interactive states** |
| Radius | 12 → 8 → 6 → 4 nested [DOM] | concentric corners [official] | Larger outside, smaller inside |
| Separation | 1px 8% white [DOM] | separator 10% black/white [community] | 1px, ≈10% opacity |
| Sidebar width | 232px / 1320 window (17.6%) [DOM] | Finder 17%, Mail 19%, Bear 180pt (17%), Mimestream 209pt [est] | **17–20%, or 180–240px** |
| Sidebar row height | — | Bear ≈28pt, Mimestream ≈31pt, Finder ≈32pt (if @2x) [est] | 28–32 |
| Selection | one grey step lighter [screenshot] | grey #DCDCDC (unfocused) / blue (focused) | Neutral grey by default |

No contradictory values. The ≈25–40px difference between Linear's H1 DOM position and screenshot ink is noted in 1.1.

---

## Rules derived for the Linear direction

These rules summarise what the approved baselines above share. **They apply to the Linear direction only.** Other directions derive their own foundations from their own references; see [reference calibration](../../../../references/reference-calibration.md). The concrete Linear contract is in [DESIGN.md](../../examples/linear-baseline/DESIGN.md) and [rules](../../examples/linear-baseline/rules.md).

1. **Fix one pair of alignment lines** (e.g. content box 1280, fixed side margins); all titles, nav and product images align to them; no section chooses its own margins.
2. **At most five type sizes:** title 48–72 / subtitle 20–24 / body 13–15 / secondary 12–13 / label 11–12; titles weight 500–600 with negative tracking (−0.02em), no 700+ bold.
3. **Three to four text value levels** (primary ≈ white or black 85%, secondary ≈ 60%, tertiary ≈ 50%, quaternary ≈ 30%), same hue; no hue change for hierarchy.
4. **One accent per screen**, only for the primary button, selection, focus and links; marketing copy and decoration stay neutral.
5. **Surfaces differ by one or two grey steps:** the sidebar is ≈3–6% darker or lighter than content; a 1px ≈10%-opacity divider only between panes; no coloured blocks for regions.
6. **Concentric radii:** window 12 → inner panel 8 → card 6 → tag 4 (or macOS 16–26 → controls); large buttons are pills.
7. **Shadows only on floating layers** (dialogs, menus, floating panels); flat cards and lists use 1px lines, no shadow.
8. **Show the product as a realistic interface screenshot or HTML mock:** real IDs, names, times, numbers, states; no Lorem ipsum or abstract geometric illustrations.
9. **App layout uses the standard structure:** sidebar (17–20%, row height 28–32, small grey group titles) + list (row = bold primary name + grey time on the right / subtitle / grey preview) + detail; toolbar grouped as "navigation / title / action groups / search", each group joined in one pill.
10. **More space than content:** section vertical padding ≈96–128px, body measure ≤ about 70 characters (Bear ≈486pt, Linear feature captions ≈600px); leave a paragraph out rather than crowding.
