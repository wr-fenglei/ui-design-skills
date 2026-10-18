# Anatomy-inspired UI rules

Experimental adaptation for ordinary interfaces. Read [provenance](provenance.md) before treating any value as an upstream rule.

| Input | Method | Output | Acceptance | Boundary |
| --- | --- | --- | --- | --- |
| Task, content, primary action | Name what the reader finds, reads and writes | Archive + inspector, each with a distinct purpose | Locate search, selection, reading and creation quickly | Do not fill a UI to meet a mechanical parts count |
| Viewport and content width | `layoutFor()` models the same limits used by CSS | 64/36 desktop, 62/38 intermediate, stacked inspector at 850px, record rows at 560px | Real 390/768/1440 layouts and long titles fit | New UI choices, not isometric projection rules |
| Nested surface and inset | `insetBox()` clamps dimensions and corner radius together | Nonnegative content space; bounded inner radius | Negative, excessive and nonfinite inputs tested | Adapted relationship, not copied renderer |
| Group membership | Use a bounded spacing vocabulary; smaller internal gaps than group gaps | Deliberate toolbar/section/component rhythm | Inspect visible text and group boundaries | Optical corrections need not be multiples of four |
| Information priority | 24px page title, 14px reading text/record titles, 13px table text, small supporting metadata | Roles with readable weight and contrast | Actual foreground/background tests plus normal-size inspection | Upstream 10.5px figure labels are not body text |
| Surface and status | Paper/white/ink hierarchy; bounded semantic color with words | Quiet document surface, green/amber status | State remains meaningful without hue | This example has no dark theme; neutral is not a universal style |
| Query, filters, selection, records | One pure `derive()` result drives list, inspector and counts | Consistent visible state | Empty results, removed selection and repeated sorting | No server, permissions or full-text indexing |
| New record | Trim, required fields, length and duplicate guards; native dialog | Cancel, Escape, focus return and one saved record | Repeated submit, failures and recovery | Local demonstration, maximum 500 records |
| Storage result | Show success only after a successful write; retain unsaved session data | Saved locally or explicit failure with retry | Reload, denied/full/corrupt storage tested | No cloud sync or multi-tab conflict resolution |
| Motion | Optional time-based `follow`; no automatic movement in reading content | Calm direct feedback | Reduced-motion path and bounded inputs | The archive does not use an idle tour |
| Delivery | Model tests, browser checks and visual review stay separate | Reproducible evidence and clear limits | Retest changes, inspect whole and edges | Technical success is not aesthetic approval |

## Component responsibilities

- Toolbar and fields support finding records, with real labels and native select semantics.
- Table rows preserve column alignment; narrow layouts show title, owner, date and status without shrinking the entire page. Selecting a record brings the narrow inspector into view.
- Badges express status. Document preview is editable HTML text, not an image of text. Description lists express key/value relationships; timelines express event order.
- Buttons perform actions. Dialogs collect input. Empty states explain absence and give a recovery path.
- No fake window buttons, decorative metrics, automatic tours or per-frame screen-reader announcements.

## What must remain explicit

Fictional data, browser-local saving, source version, copied versus adapted code, test coverage and remaining aesthetic review. A single archive example cannot prove the system works for every UI category.
