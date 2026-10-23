# Linear Baseline: Design Contract

Status: **calibration baseline**, user-approved on 2026-10-20 as "more professional" than this repository's earlier examples. Scope: one dark Chinese marketing page (1440 / 390) with an embedded product mock. Excluded: light theme, interaction, brand originality.

## Thesis

The product window carries the page. Everything else stays quiet so it stands out: one alignment line, a few type sizes, cool greys that differ by one step, 1px lines instead of shadows, no marketing accent. Measured values come from linear.app; only the CJK typography is adapted.

## References and roles

The visual system and section template come from Linear (home, /plan, /build) as [DOM] measurements. The functional structure of the product mock (sidebar 17–20%, list rows, toolbar groups, selection by grey step) comes from macOS 27 Finder and Mail, the HIG window anatomy and Bear, as [est]/[official] values. Links: [provenance](provenance.md).

## Invariants

- One text column on desktop, x=80–1360 (container 1344, +32 inset). Mobile margin 24.
- Text has four levels in one cool hue. There is exactly one accent, indigo, used only inside the product UI (send button, focus ring).
- Shadows appear only on floating layers (agent panel, mobile toast) and as a micro-shadow on the primary button.
- Feature section template: H2 left / lead right → full-width product panel → 2×2 features separated by lines.
- Desktop hero uses a three-pane window. Mobile uses a single-column list level with drill-in.

## Foundations

| Role | Value | Figma variable |
| --- | --- | --- |
| Page / panel / window | #08090A / #0F1011 / #101112 | `bg/page`, `bg/panel`, `bg/window` |
| Surface 1 / 2 / hover | #161718 / #1C1C1D / white 5% | `surface/*` |
| Lines | white 5% / 8% / 12%, solid #23252A, #2E2E32 | `border/subtle·default·strong·solid·ui` |
| Text 1–4 | #F7F8F8 / #D0D6E0 / #8A8F98 / #62666D | `text/primary·secondary·tertiary·quaternary` |
| Accent | #5E6AD2 (text #6D78D5) | `accent/*` |
| Status (product UI only) | #F2C94C / #27A644 / #F34E52 | `status/*` |
| Radius | 4 / 6 / 8 / 12 / 9999 | `radius/xs·sm·md·lg·pill` |
| Spacing | 2, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128 | `space/*` |
| Layout desktop / mobile | margin 80/24, section-y 128/64, head-gap 96/48, block-gap 48/32, nav 72/56, gutter 32/16 | `layout/desktop/*`, `layout/mobile/*` |

**Type (Figma):**
- Display 56/64 Medium, −1.5%.
- Title 40/52, −1.2%.
- Lead 20/32.
- Body 15/24 Regular/Medium, tracking 0.
- UI 13/20 Regular/Medium.
- Mono 13/18 (JetBrains Mono).
- Mobile Display 36/44 and Title 24/32.
- Fonts: Noto Sans SC for CJK, JetBrains Mono for IDs and eyebrows.

The HTML route keeps Linear's 64/48, with line height 1.1–1.17 and −0.012em tracking.

**Buttons:**
- Pill shape, sizes 32 / 44.
- Primary: #E5E5E6 fill, dark text.
- Secondary: 5% white fill with a 1px line.

## Implementation and tools

- `index.html`: hand-written HTML/CSS checked with headless Chromium screenshots.
- Figma file: built through Figma MCP `use_figma` (Plugin API scripts). Screenshots were exported via `get_screenshot`.
- No build step.

## Validation

- **Reviewed:** full-page renders at 1440 and 390, compared region by region with the reference (HTML 3 rounds, Figma 2).
- **Fixed in review:** CJK heading line height, heading wraps, spacer and auto-layout sizing bugs, tag overlap, hero glow.
- **Not tested:** interaction, keyboard, contrast audit, other breakpoints, light theme.

## Rights

The measured values belong to Linear's public CSS and are used as a study. Do not ship this look as your own brand. Fonts are open-source (OFL). No third-party image is included.
