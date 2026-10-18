# Validation at first handoff — 2026-10-18

## Completed evidence

- `tests/model-results.txt`: 7 Node tests, 7 passed. Valid data/duplicate and invalid date rejection; query/category/sort/selection consistency; guarded inset geometry; width/spacing/type/overflow constraints; write/read/corrupt storage; time-based follow and reduced-motion snap; actual semantic-color contrast pairs.
- `tests/browser-results.json`: 32/32 checks passed in real Safari26.6.2, generated2026-10-18T09:29:08.708Z by the included browser harness. Exact iframe widths1440/768/390, no checked page/content horizontal overflow, expected inspector placement; search/category/empty/reset; row selection and sort reversal; dialog focus/validation/cancel; duplicate-submit prevention; genuine saved data/receipt; long-title layouts; reload/write failure/retry/read failure; duplicate DOM IDs; no active animation; search/select≥38px.
- First desktop render and first 30-pass browser run were visually inspected through real Safari screenshots in this execution thread. The final native select size was corrected and verified in the later32-pass run. These images have not yet been exported as files. No screenshot files are included in this handoff.
- Ordinary text/semantic pair contrast ratios: ink/page15.81, text/page6.42, secondary/page5.41, text/surface6.95, secondary/surface5.86, green/green-bg6.02, amber/amber-bg5.60, danger/page6.35. This does not cover every interaction-state combination or certify accessibility.

## Boundaries / pending

The harness dispatches DOM events and calls native form/dialog APIs; it is not evidence of physical keyboard/touch operation. Native Escape, full focus traversal/trapping, physical touch, screen-reader announcements, OS reduced-motion preference and Chrome/Firefox remain unverified. CSS has an explicit reduced-motion rule and the page does not animate at rest. Native Safari verification was interrupted by shared-browser contention. Browser screenshots are still needed for three widths and the dialog, followed by the designer’s visual review.

`layoutFor` and `insetBox` are tested reusable relationship utilities; insetBox is available for nested surfaces and is not artificially used by this archive. CSS implements responsive layout directly; browser geometry checks test its actual result. Optional follow is not wired into reading content. No upstream Anatomy script was executed. No target repository edits, commits, publishing or deployment occurred.

## Reproduce

See README for localhost serving and browser checks. `?manual=dialog&width=390` prepares native Escape/focus return; `?manual=keyboard` prepares Enter selection. Browser test storage is injected in memory, so reruns do not modify the visible demo’s saved archive. The report is truthful about tested conditions; green checks are not aesthetic approval.


## Cloud review and revisions

The final code was opened in cloud Chrome on 2026-10-18. All 32 browser-harness checks passed again after increasing record titles to 14px, table text to 13px and badges to 11px, removing filler copy, and adding a narrow-layout jump to the selected detail plus a return link. The seven Node checks were also rerun successfully.

Native browser interaction verified opening the dialog, Escape dismissal with focus returning to Add record, and search/empty/reset behavior. Desktop and 390px iframe layouts were visually inspected. The screenshot is an actual browser JPEG, retained in its native format without PNG conversion. This is a restrained first UI experiment, not user-approved aesthetic quality.

Still unverified: physical touch, complete native focus traversal/trapping, screen-reader behavior, system reduced-motion preference switching, Firefox and multi-tab storage conflict handling. Safari evidence above belongs to the earlier implementation revision; final revisions were checked in Chrome. Passing tests does not establish those untested conditions.
