# Validation and assets

## Checked behavior

The R5 implementation passed 26 synthetic browser regression checks, including long/short drag, rebound, interrupted and reverse gestures, long wheel inertia, option clicks, input exclusion, keyboard controls, reduced motion, local snapshots after refresh, and exclusion of yesterday records. Those scripts were not rerun for R6, which changed only wide-screen wallpaper CSS and PNG encoding; HTML and JavaScript remained byte-identical.

Actual browser interaction also covered selecting an option, entering fictional text, saving, opening the current-choice dialog, Escape dismissal with focus returned to its opener, and changing questions. These flows were independently inspected in cloud Chrome during intake.

Layout was measured at CSS widths 1536, 1920, 768 and 390 with no horizontal overflow detected. The retained desktop screenshot uses a 1920×1080 CSS viewport, DPR 1 and the same pixel dimensions. The narrow screenshot uses a 768×1024 CSS viewport, DPR 1 and full-page height 1492. Screenshots are original browser JPEG captures, not generated images or resized screenshot composites.

## Remaining limits

- Physical trackpad and touch-device acceptance, Safari and other browser engines have not been established.
- Wheel grouping uses 300 ms quiet or a 40 px reversal. Very closely spaced same-direction gestures may be grouped.
- No live app launch, real project progress, account, server persistence or owner handoff.
- No claim of comprehensive accessibility certification or visual approval at every viewport.
- Above 1536 px, the wallpaper uses a nine-slice extension. It stretches existing edge artwork; it does not generate new background detail.

## Asset provenance and compression

The six thumbnails and outer wallpaper derive from generated design material. They contain decorative shapes and invented interface marks, not personal records. The wallpaper has a plain central area intended to remain behind the app surface; it is not a general-purpose standalone wallpaper. Use the complete layout or replace it when adapting the design.

All seven runtime PNGs were processed using official OxiPNG 10.2.1 with `-o 4`, without `--alpha`, metadata stripping or a lossy transform. Combined size: 911,634 → 407,050 bytes (55.35% smaller). Dimensions and decoded RGBA were verified identical before/after, including an independent intake check. [ASSETS.json](ASSETS.json) records hashes and sizes. Future PNG replacements must also be optimized and checked for decoded pixel/alpha equality before upload. Do not transcode JPEG screenshots to PNG merely to apply this rule.

No system font files, optimizer binaries, user screenshots, historical records, private identifiers or test input are bundled. The repository does not grant third-party font or trademark rights.
