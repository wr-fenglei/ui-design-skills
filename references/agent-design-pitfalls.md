# Agent Design and Aesthetic Pitfalls

A feedback-derived corrective guide. Use it before choosing a direction, after a reference reconstruction, and before delivery. These are checks for recurring failures, not a universal house style or a claim that one palette suits every interface.

## 0. Reading the skill but bypassing its stages

Keywords: procedural compliance, premature finish, missing baseline, skipped model comparison, approval gate.

- **Failure signal:** The agent reads the documents, glances at a reference's opening screen, then delivers a dense, fully styled page using familiar cards, muted text and default spacing. There is no inspected direction study, selected baseline or code/image comparison.
- **Mistaken assumption:** Reading instructions, including every requested feature and taking a browser screenshot are enough to establish reference-led design. Calling the result a sample does not repair missing exploration.
- **Correction:** Return to the earliest missing stage in [SKILL.md](../SKILL.md#evidence-before-advancement). Inspect a relevant interface rather than its promotional cover. Establish task, hierarchy and proportions; compare Web and GPT Image direction studies under a shared brief; present both routes and the overall evaluation to the user, and obtain approval of one baseline before detailing the entire page. Keep overall-impression studies contour-led: layout, approximate space, main shapes and broad light/material feel. Full copy, precise typography, finished controls and surface microdetail belong to refinement. Coarse material character belongs in the overall impression and must not be excluded merely because fine material treatment comes later. Observe the user's review gates.
- **Check:** Point to the actual reference region, rendered studies, selected relationships and the user's explicit overall-baseline approval. If these do not exist, report the stage as incomplete. A written checklist, tool-call success or polished screenshot is not a substitute.
- **Boundary:** Preserve approved work for narrow edits. If a tool is restricted or unavailable, state the reduced scope instead of fabricating comparison evidence. Do not treat a rejected palette or card shape as universally wrong; the recurring error is choosing them by habit without a validated composition.

## 1. Reusing a default visual vocabulary

Keywords: template drift, repeated cards, inherited palette, habitual typography.

- **Failure signal:** Different exercises look like the same website, even when their subjects differ.
- **Mistaken assumption:** Changing the technique or accent color creates a new design direction.
- **Correction:** Select the reference's composition, type character, surface treatment and density deliberately. Do not inherit a previous exercise's card, button or heading system by convenience.
- **Check:** Compare thumbnails across the batch. Can each visual choice be explained by the content or reference rather than habit?

## 2. Preserving objects but losing relationships

Keywords: relative scale, occupied area, crop, text-image ratio, edge information.

- **Failure signal:** The right ingredients are present, but the reconstruction feels unbalanced or bland.
- **Mistaken assumption:** Keeping the palette and a recognizable object preserves the reference's design.
- **Correction:** Record region ratios, object scale, gaps, margins, text positions and intentional cropping before simplifying. Preserve spatial curvature and near/far relationships when they define the composition.
- **Check:** Compare at equal canvas dimensions. Did removing minor content accidentally change the dominant mass, density or rhythm?

## 3. Building an experiment on an unattractive baseline

Keywords: whole before detail, stable baseline, composition gate.

- **Failure signal:** A reviewer cannot engage with the intended comparison because the surrounding layout, color or type is unpleasant.
- **Mistaken assumption:** A controlled variable makes the exercise useful regardless of the presentation.
- **Correction:** First reconstruct a strong reference or use an approved composition. Establish that the whole works before varying alignment, spacing, color or material.
- **Check:** Would the baseline still be worth looking at without the A/B labels and explanation? If not, fix the baseline first.

## 4. Treating an attractive asset as an attractive interface

Keywords: isolated ornament, integration, overlap, scale, shared material language.

- **Failure signal:** Text and controls are crowded into one side while a decorative object sits independently on the other.
- **Mistaken assumption:** A polished glass object automatically improves neighboring numbers and buttons.
- **Correction:** Reuse the selected composition's relationships between material, typography and controls. Coordinate occupied area, proximity, light, color and overlap where appropriate. Do not add overlap mechanically.
- **Check:** Compare the complete interface with and without the asset. Does the asset support the content, or merely occupy space? Start from a successful whole, not a detached asset.

## 5. Making color harmony erase separation

Keywords: surface hierarchy, foreground/background, tint strength, contextual color.

- **Failure signal:** Warm or cool grading makes a card merge into its surroundings, even if the colors look pleasant separately.
- **Mistaken assumption:** Applying one tint everywhere necessarily makes the interface more coherent.
- **Correction:** Preserve differences among canvas, surface, content and actions while coordinating their color roles. Recheck the ungraded baseline; do not keep grading merely because it is a demonstrated technique.
- **Check:** At normal viewing size, can the important regions still be distinguished without adding outlines to compensate?

## 6. Tinting all supporting text

Keywords: neutral anchors, selective echo, supporting contrast, chromatic overload.

- **Failure signal:** Backgrounds, headings and metadata all lean toward the same hue; the interface feels muddy or over-colored.
- **Mistaken assumption:** Every text color should echo the accent or material.
- **Correction:** Start with neutral text appropriate to the surface. Introduce a restrained supporting hue only when it improves the complete composition. A warm supporting line beside amber may work while green-tinted copy on pale green does not; neither establishes a universal color ban.
- **Check:** Compare neutral and tinted text within the same design, including small metadata. Check readability separately from aesthetic fit.

## 7. Assuming one good text fragment validates the typography

Keywords: type scale, weight, language, metadata, numerals, line length.

- **Failure signal:** A central English title looks good, while Chinese copy, small headings, labels or controls look awkward.
- **Mistaken assumption:** A successful display font or a mathematically consistent scale guarantees the whole type system.
- **Correction:** Judge each information level and language in context. Tune size, weight, line height and foreground together. For numerals, inspect the actual glyphs and spacing; test appropriate font features or another typeface rather than stretching digits.
- **Check:** Inspect the smallest supporting text, short labels, mixed-language content and changing numbers. A good title is only a local success.

## 8. Confusing simplification with removal of character

Keywords: structural form, microtexture, selective subtraction, preserved invariants.

- **Failure signal:** Removing an unwanted texture also removes the spiral, depth or silhouette that made the object appealing.
- **Mistaken assumption:** A criticism of surface detail means the entire form should become simpler.
- **Correction:** Separate structural geometry from surface treatment. Preserve the approved silhouette and large-scale flow while changing only the rejected microtexture, fill or highlight.
- **Check:** Write down what must survive the edit. Compare those invariants before evaluating the new finish.

## 9. Adding texture or gloss to every reconstruction

Keywords: material restraint, flat fills, generated grain, edge light.

- **Failure signal:** A model adds mottling to solid labels, stronger rims to quiet shapes, or extra shine that changes emphasis.
- **Mistaken assumption:** More visible material detail is always an improvement.
- **Correction:** Specify where texture belongs and where flatness is intentional. Preserve quiet edges as well as focal highlights. Derive implementation colors from verified source values, not generated pixels presented as canonical tokens.
- **Check:** Inspect flat regions and low-attention elements. Has the model made every object equally noticeable? Lower emphasis must still preserve necessary legibility and operability.

## 10. Removing separators without replacing grouping cues

Keywords: common region, proximity, surface, quiet structure.

- **Failure signal:** Removing lines leaves plain text floating on a blank surface; the result is sparse rather than well organized.
- **Mistaken assumption:** Fewer separators automatically makes the design cleaner.
- **Correction:** Combine tighter internal spacing and larger group gaps with an appropriate region cue when needed. Surface color is one option, not a requirement to wrap every item in a card.
- **Check:** Can groups be recognized quickly? Evaluate the surface color, padding and typography together; a grouping mechanism can work while its current styling still fails.

## 11. Designing fine print and controls as afterthoughts

Keywords: peripheral labels, button geometry, alignment, focal support.

- **Failure signal:** The time, backdrop or primary artwork works, but small words and a poorly aligned button spoil the composition.
- **Mistaken assumption:** Secondary elements are too small to affect the overall aesthetic.
- **Correction:** Give supporting labels, corner annotations and controls deliberate placement, scale, shape and contrast. Choose a control's representation for its task and surrounding visual character, not simply because a default primitive is easy to draw. Remove nonessential labels that have no compositional or functional purpose.
- **Check:** Review the entire perimeter and action area, not just the hero object. Does each control's geometry, weight and material fit the whole while communicating its state? More elaborate is not automatically better. Preserve useful peripheral text in reference studies rather than deleting it indiscriminately.

## 12. Offering a difference too small to judge

Keywords: perceptual difference, actual viewing size, diagnostic overlay, inconclusive result.

- **Failure signal:** A reviewer sees no meaningful difference between spacing, shadow or type variants.
- **Mistaken assumption:** A numerical parameter difference is sufficient evidence of a useful comparison.
- **Correction:** Use a visibly meaningful but plausible range, an appropriate crop, or a clearly labeled diagnostic overlay. Keep other variables stable. If the distinction remains unhelpful, stop the exercise rather than manufacturing a preference.
- **Check:** Inspect at the size the reviewer will actually see. Record “inconclusive” separately from rejection or approval. A grid explains geometry; it does not prove beauty.

## 13. Selecting references without their usage context

Keywords: application scenario, scroll state, motion dependence, transferability.

- **Failure signal:** An attractive object has no clear use, or a dynamic website becomes a dull static imitation.
- **Mistaken assumption:** A good first screenshot contains everything that makes the reference successful.
- **Correction:** Identify the intended component or task. Inspect surrounding sections and scroll states; watch motion when it defines the experience. Classify an asset as artwork, background or icon study when that is all it demonstrates.
- **Check:** State where the result would work and what behavior matters. Do not force an abstract asset into a page or cite an unseen animation as visual evidence.

## 14. Mistaking technical success or partial praise for design approval

Keywords: visual review, scope of approval, subjective preference, verified behavior.

- **Failure signal:** A whole example is retained because its colors pass contrast checks, its variables are controlled, or one small region was praised.
- **Mistaken assumption:** Correct measurements, attractive materials or successful execution establish aesthetic quality.
- **Correction:** Evaluate the whole composition and the intended relationship separately from technical checks. Preserve only the approved aspect. Treat “B is better than A” as relative feedback, not necessarily acceptance of B.
- **Check:** Mark whole-example approval, local approval, rejection and inconclusive comparisons separately. Do not infer tested interactions or responsive behavior from a still image.

## Feedback boundaries

- Repeated feedback can reveal a process failure; one disliked color does not establish a universal rule.
- Project preferences, such as disliking a bare horizontal hairline progress bar, belong in the design brief. They are not general prohibitions on progress indicators.
- Preserve a positive property while correcting a negative one: shape may be approved while fill is rejected; a background may work while typography fails.
- Keep raw review history and discarded drafts outside the reusable skill. Retain a minimal illustrative crop only when it clarifies a recurring problem and its reuse is permitted.

## Delivery gate

1. Is the application scenario clear?
2. Are the reference's essential relationships preserved?
3. Does the whole work before the local comparison is explained?
4. Are surfaces distinct, supporting text readable, and emphasis deliberate?
5. Do material and artwork support the content and controls?
6. Is the comparison perceptible without exaggerating it into an unrealistic design?
7. Were actual outputs inspected, with untested behavior identified?
8. Does the retained evidence match the exact scope of approval?

See [composition](composition-preservation.md), [grouping](grouping-and-hierarchy.md), [color](color-in-context.md), [typography](typography.md), [material](shape-and-material.md), and [code-image collaboration](code-image-collaboration.md) for the corresponding design methods.
