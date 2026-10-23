# Linear Direction — Product-UI Component Sizes

**Scope: Linear direction only.** These sizes suit dense desktop applications in this direction. They are common for such apps but **not universal**: other directions derive their own sizes from their own references. Do not copy them into shared references.

**Source:** fixed during the 2026-10-23 redesign of five functional product screens in Figma (each as a skeleton and a full-control version), built on the [Linear baseline](examples/linear-baseline/DESIGN.md) colour variables and text styles. The user asked to keep the dark theme. These screens are not retained as an example in this repository; interaction, light theme and narrow layouts were not tested.

| Element | Size | Provenance |
| --- | --- | --- |
| Button | 28px tall, 6px radius | New choice for product UI; radius from the Linear radius scale. The marketing page's 32 / 44 pill buttons remain in the [baseline contract](examples/linear-baseline/DESIGN.md) |
| Sidebar row | 28px | Adapted; macOS and Bear sidebar rows measured 28–32 ([est], [breakdown](research/2026-10-20-reference-first/ui-reference-study.md#6-cross-check-consistency-with-macos-tokensmd--linear-studymd)) |
| List row | 40px | New choice |
| Group header | 36px | New choice |
| Tag / chip | 24px, pill | Linear tag pills are 24px tall ([DOM], [Linear study](research/2026-10-20-reference-first/linear-study.md#4-shape-borders-shadows)) |
| Toolbar | 44px | Linear's product-window view header is 44px ([est], [breakdown](research/2026-10-20-reference-first/ui-reference-study.md#11-layout-skeleton)) |
| Sidebar width | 232px | Linear hero product window ([DOM]) |
| Window frame | 8px padding around the inner view | Linear hero product window ([DOM]) |
| Inner view radius | 8px | Linear hero product window ([DOM]) |

Labels follow the shared [provenance vocabulary](../../references/design-contract.md#parameter-provenance).
