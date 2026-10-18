# What transfers from Anatomy

Source: [Ryan's Anatomy](https://github.com/wheresryan22/anatomy/tree/e9488296a44211c42701ff71705b7901470ec78f), inspected 2026-10-18. This map distinguishes reusable implementation from illustration-specific machinery. [Provenance](provenance.md) identifies the portions actually included here.

## Documents

| Upstream document | Useful for general UI | Limit |
| --- | --- | --- |
| SKILL.md | Scope first, truthful model, purposeful parts, build then inspect | Parts counts and figure occupancy are not UI density standards |
| craft.md | Relationships before decoration; layered tones; meaningful detail; boundaries and clipping | Do not add mechanical screws, bevels or texture to ordinary controls |
| kit.md | Explicit APIs with small composable primitives and shared parameters | Most primitives project or shade 3D geometry, not DOM layout |
| motion.md | Time-based movement, pointer capture/cancel, keyboard, pause offscreen, reduced motion, truthful state | Idle tours are omitted from a working archive |
| react.md | Static content versus live state; stable keys; scoped tokens; hydration consistency | Framework-specific guidance is optional for this vanilla example |
| verify.md | Inspect real screenshots, transitions and changed states; retain evidence of failure and repair | Geometry/line checks do not establish DOM accessibility or aesthetic quality |
| webgl.md | Same coordinate system for effects and content; clipping, seamless transitions, fallback and performance | No shader is needed for the reading interface; lighting formulas do not solve typography |
| walkthrough.md | Trace a brief through a model, parts, composition, behavior and review | The test-rig layout remains a mechanical illustration example |
| 3d.md | Shared representation, measured budgets, explicit known limits | Turning groups, ray order, materials and physics are optional illustration tools |
| publish.md | Package provenance and rights; publish only with authority | Gallery publishing is not part of this UI workflow |

## Tools and source modules

| Module | Decision |
| --- | --- |
| kit/iso-kit.ts and iso-kit.mjs | Keep the radius/inset relationship as an adapted utility. Camera, solids, paths, ticks and painter ordering remain upstream. The card/page builders are composition references, not a complete UI framework. |
| kit/iso.css | Reuse selected paper/ink roles, mono stack, numeric alignment and light lift. Do not reuse faint line colors as body text. |
| kit/react/draw.tsx | Server-safe SVG component pattern can support technical illustrations; not a DOM control library. |
| kit/react/live.tsx | Small follow helper copied with validation; hooks describe useful lifecycle/accessibility concerns. No per-frame React rendering is required here. |
| kit/gl.mjs | smooth/burst/settle are potential motion utilities. Camera/GLSL/layer functions stay upstream; API return semantics must be checked before reuse. |
| kit/lathe.mjs, tube.mjs | Useful only for optional technical objects, not ordinary UI spacing or shapes. |
| kit/audit.mjs | Borrow the principle of testing actual geometry/state rather than stand-ins. Its physical clearance/depth tests do not test HTML. |
| kit/turn.mjs, turn-build.mjs, turn-audit.mjs | Leave the 3D engine upstream. It adds substantial complexity without improving this archive's reading task. |
| scripts/capture.mjs, drive.mjs | Useful screenshot/sequence workflow; a reported console/overflow problem must explicitly fail a UI test, not merely appear in output. Not executed or bundled in this experiment. |
| scripts/lines.mjs | Illustration line-ending check; not a universal requirement for UI dividers. |
| scripts/inline-kit.mjs | Standalone packaging pattern; the archive itself stays buildless. |
| scripts/turn-check.mjs, turn-bench.mjs | 3D fidelity/performance checks, not UI acceptance. |
| Gallery/publishing scripts | Not imported; no external publication side effects belong in the UI library. |
| Examples, fixtures and evals | Reproduction and regression evidence for the source domain. They establish neither an exhaustive UI component set nor universal aesthetic quality. |

## The transferable mechanism

A narrow vocabulary + relationships expressed in code + real content/state + visual review is more useful than a long list of aesthetic adjectives. It reduces arbitrary decisions. It cannot decide whether a new composition is beautiful.

The UI experiment adds its own type/spacing/target-size contracts, responsive table/inspector relationships, document surface, forms and state handling. Those additions are explicitly experimental. They must earn adoption through actual use and user review.
