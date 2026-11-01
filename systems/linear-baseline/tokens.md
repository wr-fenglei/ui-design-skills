# Linear baseline: tokens

Dumped read-only from the Figma file on 2026-11-01 with figmosha (Plugin API: local variables, text styles, effect styles, Components page). Machine-readable source: [tokens.json](tokens.json). Each collection has one mode. Values are resolved; aliases show the variable they point to.

## Primitives (23)

| Variable | Type | Value | Alias |
| --- | --- | --- | --- |
| `color/gray/950` | color | #08090A |  |
| `color/gray/930` | color | #0F1011 |  |
| `color/gray/920` | color | #101112 |  |
| `color/gray/900` | color | #161718 |  |
| `color/gray/880` | color | #1C1C1D |  |
| `color/gray/850` | color | #23252A |  |
| `color/gray/800` | color | #2E2E32 |  |
| `color/gray/500` | color | #62666D |  |
| `color/gray/400` | color | #8A8F98 |  |
| `color/gray/200` | color | #D0D6E0 |  |
| `color/gray/100` | color | #E5E5E6 |  |
| `color/gray/50` | color | #F7F8F8 |  |
| `color/white-a/2` | color | #FFFFFF05 |  |
| `color/white-a/5` | color | #FFFFFF0D |  |
| `color/white-a/8` | color | #FFFFFF14 |  |
| `color/white-a/12` | color | #FFFFFF1F |  |
| `color/black-a/40` | color | #00000066 |  |
| `color/indigo/500` | color | #5E6AD2 |  |
| `color/indigo/400` | color | #6D78D5 |  |
| `color/indigo-a/15` | color | #5E6AD226 |  |
| `color/green/500` | color | #27A644 |  |
| `color/red/500` | color | #F34E52 |  |
| `color/yellow/500` | color | #F2C94C |  |

## Color (25)

| Variable | Type | Value | Alias |
| --- | --- | --- | --- |
| `bg/page` | color | #08090A | `Primitives/color/gray/950` |
| `bg/panel` | color | #0F1011 | `Primitives/color/gray/930` |
| `bg/window` | color | #101112 | `Primitives/color/gray/920` |
| `surface/1` | color | #161718 | `Primitives/color/gray/900` |
| `surface/2` | color | #1C1C1D | `Primitives/color/gray/880` |
| `surface/hover` | color | #FFFFFF0D | `Primitives/color/white-a/5` |
| `surface/tint` | color | #FFFFFF05 | `Primitives/color/white-a/2` |
| `border/default` | color | #FFFFFF14 | `Primitives/color/white-a/8` |
| `border/subtle` | color | #FFFFFF0D | `Primitives/color/white-a/5` |
| `border/strong` | color | #FFFFFF1F | `Primitives/color/white-a/12` |
| `border/solid` | color | #23252A | `Primitives/color/gray/850` |
| `border/ui` | color | #2E2E32 | `Primitives/color/gray/800` |
| `text/primary` | color | #F7F8F8 | `Primitives/color/gray/50` |
| `text/secondary` | color | #D0D6E0 | `Primitives/color/gray/200` |
| `text/tertiary` | color | #8A8F98 | `Primitives/color/gray/400` |
| `text/quaternary` | color | #62666D | `Primitives/color/gray/500` |
| `text/on-light` | color | #08090A | `Primitives/color/gray/950` |
| `accent/default` | color | #5E6AD2 | `Primitives/color/indigo/500` |
| `accent/text` | color | #6D78D5 | `Primitives/color/indigo/400` |
| `accent/subtle` | color | #5E6AD226 | `Primitives/color/indigo-a/15` |
| `control/primary-bg` | color | #E5E5E6 | `Primitives/color/gray/100` |
| `control/secondary-bg` | color | #FFFFFF0D | `Primitives/color/white-a/5` |
| `status/done` | color | #27A644 | `Primitives/color/green/500` |
| `status/blocked` | color | #F34E52 | `Primitives/color/red/500` |
| `status/progress` | color | #F2C94C | `Primitives/color/yellow/500` |

## Radius (5)

| Variable | Type | Value | Alias |
| --- | --- | --- | --- |
| `radius/xs` | float | 4 |  |
| `radius/sm` | float | 6 |  |
| `radius/md` | float | 8 |  |
| `radius/lg` | float | 12 |  |
| `radius/pill` | float | 9999 |  |

## Spacing (12)

| Variable | Type | Value | Alias |
| --- | --- | --- | --- |
| `space/2` | float | 2 |  |
| `space/4` | float | 4 |  |
| `space/6` | float | 6 |  |
| `space/8` | float | 8 |  |
| `space/12` | float | 12 |  |
| `space/16` | float | 16 |  |
| `space/24` | float | 24 |  |
| `space/32` | float | 32 |  |
| `space/48` | float | 48 |  |
| `space/64` | float | 64 |  |
| `space/96` | float | 96 |  |
| `space/128` | float | 128 |  |

## Layout (12)

| Variable | Type | Value | Alias |
| --- | --- | --- | --- |
| `layout/desktop/page-margin` | float | 80 |  |
| `layout/mobile/page-margin` | float | 24 |  |
| `layout/desktop/section-y` | float | 128 |  |
| `layout/mobile/section-y` | float | 64 |  |
| `layout/desktop/section-head-gap` | float | 96 |  |
| `layout/mobile/section-head-gap` | float | 48 |  |
| `layout/desktop/block-gap` | float | 48 |  |
| `layout/mobile/block-gap` | float | 32 |  |
| `layout/desktop/nav-height` | float | 72 |  |
| `layout/mobile/nav-height` | float | 56 |  |
| `layout/desktop/column-gutter` | float | 32 |  |
| `layout/mobile/column-gutter` | float | 16 |  |

## Text styles (10)

| Style | Font | Size / line height | Tracking | Note |
| --- | --- | --- | --- | --- |
| `Desktop/Display 56` | Noto Sans SC Medium | 56 / 64 | -1.5% | Hero H1 + prefooter. Linear 64/510/-0.022em → CN 56/1.14/-0.015em |
| `Desktop/Title 40` | Noto Sans SC Medium | 40 / 52 | -1.2% | Section H2. Linear 48 → CN 40 |
| `Desktop/Lead 20` | Noto Sans SC Regular | 20 / 32 | -0.5% | Section lead, text/secondary |
| `Mobile/Display 36` | Noto Sans SC Medium | 36 / 44 | -1.2% | Mobile H1/prefooter |
| `Mobile/Title 24` | Noto Sans SC Medium | 24 / 32 | -0.8% | Mobile section H2 |
| `Body/15 Regular` | Noto Sans SC Regular | 15 / 24 | 0% | Body copy, text/tertiary; CN letter-spacing 0 |
| `Body/15 Medium` | Noto Sans SC Medium | 15 / 24 | 0% | Item titles, text/primary or secondary |
| `UI/13 Regular` | Noto Sans SC Regular | 13 / 20 | 0% | Nav, footer, product UI |
| `UI/13 Medium` | Noto Sans SC Medium | 13 / 20 | 0% | Buttons (small), footer headings, selected rows |
| `UI/13 Mono` | JetBrains Mono Regular | 13 / 18 | 0% | IDs and eyebrow labels (Latin/numbers only) |

## Effect styles (2)

| Style | Effects |
| --- | --- |
| `Elevation/Floating` | drop shadow 0 2 blur 32 #00000040 |
| `Elevation/Button` | drop shadow 0 0 blur 1 #00000014; drop shadow 0 1 blur 1 #00000012 |

## Components

Top-level nodes on the Components page, with variant sizes in px.

| Component | Properties | Variants (w × h) |
| --- | --- | --- |
| Icons (frame) | 18 components | inbox, user, file, layers, camera, zap, search, filter, list, board, more, plus, up, down, left, right, menu, arrowUp (each 16×16) |
| Status | State: Todo/In progress/Done/Blocked | State=Todo 12×12; State=In progress 12×12; State=Done 12×12; State=Blocked 12×12 |
| Avatar | — | 20×20 |
| Tag | — | 56×24 |
| Button | Label: text, Variant: Primary/Secondary, Size: Small/Large | Variant=Primary, Size=Small 80×32; Variant=Primary, Size=Large 80×44; Variant=Secondary, Size=Small 80×32; Variant=Secondary, Size=Large 80×44 |
| Sidebar row | Label: text, Count: text, Show count: boolean, Icon: instance_swap, State: Default/Selected | State=Default 216×28; State=Selected 216×28 |
| List row | ID: text, Title: text, Time: text, Show tag: boolean, State: Default/Selected | State=Default 560×40; State=Selected 560×40 |
| Toolbar/Icon button | — | 28×28 |
| Toolbar group | Items: 2/3 | Items=2 63×34; Items=3 92×34 |
| Input | Value: text, State: Default/Focus | State=Default 280×36; State=Focus 280×36 |
| Components / Overview (frame) | specimen sheet | 1200×1136 |
