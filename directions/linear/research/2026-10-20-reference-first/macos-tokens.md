> 公开仓库说明：本文提到的第三方截图（Linear、Apple、Bear、Mimestream、Ars Technica 等）**未随仓库分发**，文中原本的本地截图路径已替换为来源链接。来源链接见 [sources.md](sources.md)。所有实测值的出处标签（[DOM]/[量]/[官方]/[社区]/[未知]）保持原样。

# macOS UI tokens (for professional-looking UI baselines)

Compiled 2026-10-20 (UTC+8). The current version is **macOS 27 Golden Gate** (released 2026-09-14). The previous one was macOS 26 Tahoe, the first with Liquid Glass. Before that came macOS 15 Sequoia.
Labels: **[official]** Apple HIG or WWDC; **[measured]** pixels I measured myself from a screenshot; **[community]** measurements published by developers or users that Apple has not confirmed; **[unknown]** Apple has published no number.
Apple says it explicitly: don't hard-code system colors or control heights, because they change between releases. Treat these numbers as references when building mockups or web imitations.

## 1. Fonts

- System font: SF Pro (the variable font switches Text/Display optical sizes automatically). Serif: New York, available in macOS only through Mac Catalyst. **macOS has no Dynamic Type.** [official] https://developer.apple.com/design/human-interface-guidelines/typography
- Default body size **13 pt**, minimum **10 pt**. [official] same page
- Prefer Regular/Medium/Semibold/Bold. Avoid Ultralight/Thin/Light. [official] same page

### macOS built-in text styles [official] (HIG Typography › Specifications › macOS built-in text styles)

| Style | Weight | Size pt | Line height pt | Emphasized weight |
|---|---|---|---|---|
| Large Title | Regular | 26 | 32 | Bold |
| Title 1 | Regular | 22 | 26 | Bold |
| Title 2 | Regular | 17 | 22 | Bold |
| Title 3 | Regular | 15 | 20 | Semibold |
| Headline | Bold | 13 | 16 | Heavy |
| Body | Regular | 13 | 16 | Semibold |
| Callout | Regular | 12 | 15 | Semibold |
| Subheadline | Regular | 11 | 14 | Semibold |
| Footnote | Regular | 10 | 13 | Semibold |
| Caption 1 | Regular | 10 | 13 | Medium |
| Caption 2 | Medium | 10 | 13 | Semibold |

Point sizes assume 144 ppi @2x designs, so on the web you can read 1 pt ≈ 1 CSS px.

### macOS tracking [official] (HIG Typography › Tracking values › macOS; selected rows)

| Size pt | Tracking (1/1000 em) | Tracking pt |
|---|---|---|
| 10 | +12 | +0.12 |
| 11 | +6 | +0.06 |
| 12 | 0 | 0 |
| 13 | −6 | −0.08 |
| 15 | −16 | −0.23 |
| 17 | −26 | −0.43 |
| 20 | −23 | −0.45 |
| 22 | −12 | −0.26 |
| 24 | +3 | +0.07 |
| 26 | +8 | +0.22 |
| 28 | +14 | +0.38 |
| 32 | +13 | +0.41 |
| 48 | +8 | +0.35 |

The full table runs 6 to 48 pt; see the original page. In CSS, letter-spacing ≈ tracking/1000 em; for example, 13px body text takes letter-spacing: −0.006em.

## 2. Colors

### System accent colors (HIG Color › Specifications › System colors; values updated by Apple on 2025-06-09) [official]
Source: https://developer.apple.com/design/human-interface-guidelines/color. Hex values are converted from the RGB values Apple publishes in the image alt text. The table is cross-platform (the "unified" set) and also applies to macOS.

| Name | Light | Dark | Increased contrast light | Increased contrast dark |
|---|---|---|---|---|
| Red | #FF383C | #FF4245 | #E9152D | #FF6165 |
| Orange | #FF8D28 | #FF9230 | #C55300 | #FFA056 |
| Yellow | #FFCC00 | #FFD600 | #A16A00 | #FEDF43 |
| Green | #34C759 | #30D158 | #008932 | #4AD968 |
| Mint | #00C8B3 | #00DAC3 | #008575 | #54DFCB |
| Teal | #00C3D0 | #00D2E0 | #008198 | #3BDDEC |
| Cyan | #00C0E8 | #3CD3FE | #007EAE | #6DD9FF |
| Blue | #0088FF | #0091FF | #1E6EF4 | #5CB8FF |
| Indigo | #6155F5 | #6D7CFF | #564ADE | #A7AAFF |
| Purple | #CB30E0 | #DB34F2 | #B02FC2 | #EA8DFF |
| Pink | #FF2D55 | #FF375F | #E7124D | #FF8AC4 |
| Brown | #AC7F5E | #B78A66 | #956D51 | #DBA679 |

### macOS semantic (dynamic) colors
- HIG lists only names and uses (labelColor, secondaryLabelColor, separatorColor, windowBackgroundColor, controlAccentColor, and so on), **no hex values**. [official] same page, "macOS" section
- Measured values (macOS **Sonoma 14.4** NSColor catalog, R/G/B/A 0–255) [community] https://gist.github.com/martinhoeller/38509f37d42814526a9aecbb24928f46. Values in 26/27 may have changed. They're good for web imitation:

| Name | Light | Dark |
|---|---|---|
| labelColor | rgba(0,0,0,.85) | rgba(255,255,255,.85) |
| secondaryLabelColor | rgba(0,0,0,.50) | rgba(255,255,255,.55) |
| tertiaryLabelColor | rgba(0,0,0,.26) | rgba(255,255,255,.25) |
| quaternaryLabelColor | rgba(0,0,0,.10) | rgba(255,255,255,.10) |
| separatorColor | rgba(0,0,0,.10) | rgba(255,255,255,.10) |
| windowBackgroundColor | #ECECEC | #323232 |
| controlBackgroundColor / textBackgroundColor | #FFFFFF | #1E1E1E |
| underPageBackgroundColor | rgba(150,150,150,.90) | #282828 |
| gridColor | #E6E6E6 | #1A1A1A |
| selectedContentBackgroundColor | #0064E1 | #0059D1 |
| unemphasizedSelectedContentBackgroundColor | #DCDCDC | #464646 |
| selectedTextBackgroundColor | #B3D7FF | #3F638B |
| linkColor | #0068DA | #419CFF |
| keyboardFocusIndicatorColor | rgba(0,103,244,.5) | rgba(26,169,255,.5) |
| controlAccentColor (default blue, Sonoma) | #007AFF | #007AFF |

Key point: macOS text colors are **black or white with transparency**, not fixed grays, so they blend naturally on glass and material backgrounds.

### Colors sampled from real screenshots [measured] (approximate: JPEG plus wallpaper show-through)
- Mimestream (Sequoia era, @2x original image): sidebar #F5F5F5, list/reading pane #FFFFFF, sidebar selected row #E9E9E9, pane separator #EBEBEB, message separator #E5E5E5, body text #262626. Source: [mimestream.com](https://mimestream.com/) main-window image
- Mail on macOS 27: sidebar #EDECE8 (slightly warm; wallpaper shows through), list #FFFFFF, selected row #DCDCDC (matches unemphasizedSelectedContentBackgroundColor). Source: [apple.com/os/macos](https://www.apple.com/os/macos/)
- Finder dark mode on macOS 27: sidebar ≈ #26273C (wallpaper purple shows through), content ≈ #25252D, selected row ≈ #444353. Source: [Ars Technica review](https://arstechnica.com/gadgets/2026/09/macos-27-golden-gate-the-ars-technica-review/)

## 3. Controls

- macOS control sizes: mini / small / medium (regular) / large, plus **extra large** added in Tahoe for the app's single most important action. [official] WWDC25 "Build an AppKit app with the new design" https://developer.apple.com/videos/play/wwdc2025/310/
- From Tahoe on, mini, small, and medium are "slightly taller" than before. Apple tells you to use Auto Layout and **gives no heights**. `prefersCompactControlSizeMetrics = true` restores the macOS 15 dimensions. [official] same session
- Shape: **mini to medium are rounded rectangles; large and extra large are capsules.** [official] same session
- Push-button heights on Tahoe: regular ≈ **30**, small ≈ **24**, mini ≈ **18** (pt). [community, unverified] https://www.purebasic.fr/english/viewtopic.php?t=87595
- Button corner radius: **[unknown]**. Apple doesn't publish it. The HIG only says flexible-height buttons use "the same corner radius and content padding" as push buttons.
- Minimum hit target 44×44 pt (cross-platform general rule). An image button needs about **10 px** of padding between the image and the button edge. [official] https://developer.apple.com/design/human-interface-guidelines/buttons
- Custom buttons with a white fill and black text are reserved by the system for the "on" toggle state. Avoid them. [official] same page (general section)
- When a button opens another window or view, end its title with "…". [official] same page

## 4. Windows, sidebars, toolbars

- Window corner radius:
  - Tahoe 26: toolbar windows **26 pt**, compact toolbar **20 pt**, titlebar-only windows **16 pt**. [community; said to be from a WWDC25 session slide around 7 min; not in the transcript] https://www.reddit.com/r/MacOSBeta/comments/1l9zfdi/ . The session transcript only says "toolbar windows use a larger radius, concentric with the glass toolbar; titlebar-only windows stay smaller". [official] WWDC25-310
  - Pre-Tahoe (Big Sur–Sequoia) ≈ 10 pt. [community, unverified] cited secondhand in https://www.youtube.com/watch?v=EZkUZCCeqV0
  - macOS 27 Golden Gate: **all windows use one uniform corner radius**, between Sequoia and Tahoe. [official wording: "updated window shapes", https://www.apple.com/os/macos/; between-the-two description: Ars Technica review https://arstechnica.com/gadgets/2026/09/macos-27-golden-gate-the-ars-technica-review/ ; exact value **[unknown]**, maybe 20 pt per secondhand reports, unconfirmed]
  - Comparison image: corner comparison in the [Ars Technica review](https://arstechnica.com/gadgets/2026/09/macos-27-golden-gate-the-ars-technica-review/)
- Concentricity: sidebar, toolbar, and control corner radii nest concentrically inside the window corner (inner radius = outer radius − spacing). [official] WWDC25-310
- Sidebar:
  - Row height, text, and icon size follow the "small/medium/large" sidebar icon size in General settings. **No specific numbers** given. [official] https://developer.apple.com/design/human-interface-guidelines/sidebars
  - Tahoe: the sidebar floats on Liquid Glass and content can extend underneath it. **macOS 27 changes it back to edge-to-edge sidebars.** [official] https://www.apple.com/os/macos/
  - Don't put critical information or actions at the bottom of the sidebar. [official]
  - Width: **[unknown]** (no official default). Measured: Mimestream sidebar ≈ **209 pt** wide, middle list pane ≈ **360 pt**, window 1200 pt wide. [measured] [Mimestream](https://mimestream.com/) main-window image @2x
  - Sidebar selected row in Mimestream ≈ 31 pt tall. [measured]
- Toolbar:
  - Sits in the window frame, either merged with the title bar or below it. Toolbar items have **no bezels**, and the window title can share the row with controls. [official] https://developer.apple.com/design/human-interface-guidelines/toolbars
  - Tahoe/27: items are automatically grouped onto Liquid Glass capsules (see the HIG Finder diagram). macOS 27 adds "uniform toolbars". [official] WWDC25-310 / apple.com/os/macos
  - Every toolbar command must also appear in the menu bar. When the window gets narrow, the system creates the overflow menu automatically. [official]
  - Toolbar height: **[unknown]** (not published). Measured: in Mimestream the toolbar icon row is centered about **32 pt** below the window's top edge. [measured]
- Layout: don't put critical controls along the bottom edge of a window, because the window may be dragged partly off screen. Don't put content behind the camera housing. [official] https://developer.apple.com/design/human-interface-guidelines/layout
- Spacing system: HIG has no fixed spacing scale for macOS **[unknown]**. It only offers safe area / layout margins guides (NSView.LayoutRegion; Tahoe adds cornerAdaptation to avoid the larger corners). [official] WWDC25-310

## 5. Materials, vibrancy, shadows

- Liquid Glass is **only for the functional layer that floats above content** (toolbars, sidebars, controls). **Don't use it in the content layer.** Content layers use standard materials. Exception: sliders, toggles, and similar take on glass only briefly while being operated. [official] https://developer.apple.com/design/human-interface-guidelines/materials
- Use Liquid Glass sparingly, and put vibrant colors on top of materials to keep text readable. Thick materials (more opaque) suit fine text; thin materials (more transparent) keep context visible. [official] same page
- macOS blending modes: behind window / within window. [official] same page
- Glass is colorless by default and takes color from what's behind it. It can be tinted (stained-glass effect) to highlight the primary action. [official] HIG Color › Liquid Glass color
- macOS 27 adds a system slider running from "ultra clear" to "fully tinted". At the most opaque end it's close to the Big Sur look. [official] apple.com/os/macos; illustrated on the same page/notification-glass-*.jpg
- Window shadow: **[unknown]** (not published). Rough measurement: in the HIG Finder diagram the shadow fades from α≈0.4 to 0 over about **6 pt**, a bit deeper at the bottom (about 10 pt). [measured, illustration, approximate] hig-diagrams/finder-window-anatomy-light.png
- shadowColor is pure black in both light and dark mode (opacity left to the material). [community] gist above

## 6. Rules of thumb for web imitation (my summary; not Apple wording)
1. Use only the 11 sizes in the text styles table. For web, 13/16 body text, 11/14 secondary, 22–26 titles. Weight goes no higher than Semibold, plus Bold for headings.
2. Make text colors black or white with alpha (.85/.50/.26), not fixed grays.
3. One accent color (system blue #0088FF light / #0091FF dark). Everything else is neutral gray.
4. Hierarchy comes from surfaces (sidebar #F5F5F5 vs. content #FFF), not borders. Use separators at 10% alpha only between panes.
5. Corner radii are concentric: window ≈ 16–26 → glass groups → controls. Small controls are rounded rectangles; large controls are capsules.
6. Use glass or translucency only in the floating layer above the content (toolbars, popovers, menus), never on content cards.
