> Public-repository note: third-party screenshots mentioned here (Linear, Apple, Bear, Mimestream, Ars Technica and others) are **not distributed** with this repository; original local screenshot paths were replaced with source links. See [sources.md](sources.md). Measurement labels: [DOM] computed CSS, [est] pixel-measured estimate, [official], [community], [unknown].

# Linear homepage study (linear.app, captured 2026-10-20 20:40 Asia/Shanghai)

Method: headless Chrome at 1440×900 and 390×844 (@2x), full-page screenshots after scroll-loading, plus `getComputedStyle` measurement.
Reference page: [linear.app](https://linear.app/) full-page captures (desktop 1440×9960; mobile 390 wide, @2x output 780×11752). Screenshots are not distributed.
Fonts: Inter Variable (non-standard weights **510 / 590**), monospace Berkeley Mono.

## 1. Page skeleton (desktop 1440)
| Block | y | Height | Notes |
|---|---|---|---|
| Nav | 0 | 72 (+1px bottom line) | fixed, `backdrop-filter: blur(20px)`, background `linear-gradient(rgba(11,11,11,.8), rgba(..,.76))`, 1px bottom `rgba(255,255,255,.08)` |
| Hero title | 242 | 2 lines × 64 | ≈170px from nav bottom to title top |
| Hero subtitle row | 432 | 24 | left: subtitle; right: `New  Loops →` link, same baseline |
| Hero product window | 527 | 720 | window width 1320 (x=60), with a 768-tall gradient base below |
| Logo strip + mono label | 1407 / 1483 | 40 | label 12px mono uppercase #62666D |
| Manifesto H2 | 1596 | 3 lines × 48 | first clause #F7F8F8, second half #8A8F98 |
| Three columns FIG 0.1–0.3 | 1876 | 468 | 12-column grid, 1px vertical rules between columns; line-art isometric drawing + title + two-line caption |
| Divider | 2505 | 1 | full-width 1px `rgba(255,255,255,.08)`, with a 1px solid black shadow line above |
| Feature sections ×4 | 2546 / 3782 / 5021 / 6263 | ≈1230 each | `padding: 128px 0`; every section is separated by that full-width divider |
| Changelog | 7644 | ≈400 | 4 columns (272px, gap 64), a horizontal line at the top threading 4 dots |
| Customer quote cards | 8226 | 564 | two light cards (pale blue gradient / fluorescent yellow), the only light blocks on the site |
| Prefooter | 9014 | 228 | `margin-top:224px`, centred 72px title + two 44px pill buttons |
| Footer | 9466 | 494 | 1px #23252A top border; 6 columns × 224px, padding 56px 46px |

**Container:** outer max-width 1436px; each section insets 48px on both sides → content box 1344px; text insets a further 32px → text column x=80…1360 (1280 wide). The nav logo's left edge (x=79) and the Sign up button's right edge (x=1361) align with the text column.
**Feature-section header:** two-column grid 672/672; H2 on the left, description on the right (inset 32px, width ≈566–608); header padding-bottom 96px, then the product visual panel; below the panel a "Features" label and a two-column 304px feature list (1px vertical rule between).

## 2. Type hierarchy (desktop / mobile)
| Level | Size / line height | Weight | Tracking | Colour |
|---|---|---|---|---|
| H1 hero | 64/64 → mobile 38/41.8 | 510 | -1.408px (-0.022em) | #F7F8F8 |
| H2 prefooter | 72/72 → 38/41.8 | 510 | -1.584px (-0.022em) | #F7F8F8 |
| H2 section | 48/48 → 24/31.92 | 510 | -1.056px (-0.022em) | #F7F8F8 (manifesto second half #8A8F98) |
| Section lead | 24/31.92 | 400 | -0.288px (-0.012em) | #D0D6E0 |
| In-product H3 | 20/26.6 | 590 | -0.24px | #D0D6E0 |
| Body / subtitle | 15/24 | 400 | -0.165px (-0.011em) | #8A8F98 |
| Small heading (column title) | 15/24 | 510 | -0.165px | #D0D6E0 |
| Nav / footer links | 13/19.5 | 400 | normal / -0.13px | #8A8F98 |
| Footer column title | 13/19.5 | 510 | -0.13px | #F7F8F8 |
| Product UI text | 12–14 | 400/510 | ≈-0.01em | #D0D6E0 / #8A8F98 / #62666D |
| Mono label | 12/16.8 Berkeley Mono uppercase | 400 | normal | #62666D / #8A8F98 |
| Button | 13 (nav) / 16 (large) | 510 | normal | see below |

## 3. Colour
- Background `#08090A`; product panel `#0F1011` / window frame `#101112` / window interior `#090A0B`; raised surfaces `#161718`, `#1C1C1D`
- Four text levels: `#F7F8F8` (primary) → `#D0D6E0` (secondary) → `#8A8F98` (tertiary) → `#62666D` (quaternary)
- Lines: `rgba(255,255,255,.08)` (main dividers / window frame), `rgba(255,255,255,.05)` (inner), solid `#23252A` (footer / panel inset), `#2E2E32` (in-product dividers)
- Accent only inside the product UI: indigo `#5E6AD2` (send button, ring `0 0 0 3px rgba(94,106,210,.4)`), mention `#6D78D5` on a 15% fill; green `#27A644`, red `#F34E52`, yellow (in progress) ≈`#F2C94C`. No accent appears in the marketing layer

## 4. Shape, borders, shadows
- All buttons are pills `9999px`: nav 32px tall (padding 0 12px, 13px/510); large buttons 44px tall (16px/510)
  - Primary: fill `#E5E5E6`, text `#08090A`; the shadow is five very faint layers (0 0 1px .08 / 0 1px 1px .07 / 0 3px 2px .04 …)
  - Secondary: fill `rgba(255,255,255,.05)`, `inset 0 0 0 1px rgba(255,255,255,.03), inset 0 1px 0 rgba(255,255,255,.04), 0 0 0 1px rgba(0,0,0,.6), 0 4px 4px rgba(0,0,0,.1)`
- Hero product window: outer frame radius 12, fill `#101112`, 1px `rgba(255,255,255,.08)`, padding 8; inner view radius 8, 1px `rgba(255,255,255,.05)`, plus `0 0 0 2px rgba(0,0,0,.2)`; the 232px sidebar sits directly on the outer frame without a border
- Hero base: behind the window, 1416×768, radius 6, `radial-gradient(52% 57% at 50% 100%, transparent, rgba(8,9,10,.5)), linear-gradient(#08090A 10%, #D0D6E0 100%)` → a grey-white glow under the window, the only "bright" element above the fold
- Section product panel: fill `#0F1011`, `inset 0 0 0 1px #23252A`, only the top corners rounded 12px; the bottom edge is cut off (faded) by the next content
- Cards: radius 6–9px, 1px `rgba(255,255,255,.08)`, with a `rgba(255,255,255,.02)` overlay; tag pills 24px tall with a 1px border
- Floating panel (Agent chat): radius 12, 1px `rgba(255,255,255,.12)`, `0 2px 32px rgba(0,0,0,.25)`
- Glow: a 400px circle `radial-gradient(rgba(255,255,255,.04), transparent 50%)` behind panels
- No coloured gradient backgrounds, no glassmorphism cards, no icon circles

## 5. Product-UI mock technique
- A realistic HTML product interface (not an illustration), 12–14px type, high density, real IDs (DRV-8852), relative times, avatars
- When the window is larger than the viewport it is simply cropped (right side of the board, right half of the code diff) and finished with a fade → the product feels "big"
- Layering: an Agent panel floats over the main view (bottom right), creating depth

## 6. Mobile (390)
- Nav 65px; side margins 16px + 8px inset → text at x=24
- H1 38/41.8, subtitle 15/24; the product window is scaled to about 0.5 and overflows to the right, cropped (no horizontal scroll)
- Section H2 drops to 24/31.92; feature sections lose the 128px vertical padding (≈575px tall each)
- FIG three columns become horizontally scrolling cards (328px wide, gap 8)
- Prefooter H2 38px; buttons stay 44px pills
