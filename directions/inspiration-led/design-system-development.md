# Develop a Small Design System

Use with [SKILL.md](../SKILL.md). This method connects inspiration, functional references, approved relationships and bounded reuse. It does not prescribe a visual style or certify the existing examples as universal systems.

## 1. Two reference lenses

**Inspiration lens:** What makes the visual compelling? Identify the expressive core, relative masses, negative space, grouping/density, type character, color roles, shape and material relationship. A material image can inspire a surface without proving any navigation pattern.

**Functional lens:** Which excellent actual interfaces solve a similar user task? Inspect the relevant content, controls, adjacent regions, scrolling, state changes and flows. A product's marketing hero is not evidence of its application UI.

Keep the lenses distinct until the synthesis is explicit. For each proposed transfer record:
- source and actually inspected region/state;
- what relationship or behavior is useful;
- why it fits this task and content;
- what must change, what must not be copied, and what remains unknown;
- author, original link, date if known, access date, rights and verification limits.

Do not assemble “the glass from A + the palette from B + the sidebar from C” without checking the resulting whole. Multiple prestigious sources do not establish a coherent answer. See [design sources](design-sources.md) and [composition](composition-preservation.md).

## 2. Write a relationship hypothesis, not a token sheet

Input: task, real content needs, platform, canvas constraints and reference evidence.

Describe an actionable thesis such as: a quiet readable content surface inside varied ambient color, with a sparse decision area and a denser supporting list. Name which parts carry expression and which remain quiet.

Specify provisional relationships: main/supporting area, relative scale, content-to-space ratio, group separation, reading order and density levels. Values may be estimates; label them. Do not freeze exact colors, radii and font sizes before the composition has worked with content.

Output: a brief, reference-to-decision map and bounded scope. Acceptance: someone can explain how the inspiration supports the real task without calling a decorative poster an interface.

## 3. Explore independently, then select

Follow [code-image collaboration](code-image-collaboration.md). Common task/content/canvas constraints make comparison meaningful; they are not a command to produce identical designs. Each route must be actually rendered and inspected.

Compare expressive strength, usability intent, reading order, grouping, density and integration. Identify specific strengths, not “the image is prettier” or “the library is better.” User selection determines the core and later overall baseline. Do not force a hybrid or proceed through an explicit approval gate silently.

A user-supplied selected reference narrows what is open. A narrow edit to an approved design does not require rediscovering the entire system.

## 4. Establish one complete, bounded baseline

A selection surface, settings section or short task flow can be complete enough to test the system. Include its necessary supporting labels, actions and states; do not stop after polishing its centerpiece.

After overall-baseline approval, populate realistic content and refine proportion, spacing, glyphs, state emphasis and material together. If content destroys the composition, revisit the relationships instead of shrinking text until it fits.

Acceptance:
- the full region is attractive and readable at intended size;
- grouping and action priority remain clear without explanation;
- secondary regions look deliberately designed;
- the actual implementation and selected concept are not confused.

Use [pitfalls](agent-design-pitfalls.md), especially relationships, weak baselines, supporting regions and approval scope.

## 5. Extract rules from working relationships

Develop a small vocabulary sufficient for the demonstrated use case:
- roles for canvas, content surfaces, text, metadata, actions and states;
- type roles with actual language and content evidence;
- spacing/alignment relationships and justified density levels;
- surface and nested-shape relationships, rather than a radius copied everywhere;
- component responsibilities, variants, state and interaction boundaries;
- composition adaptations when content or viewport changes.

Record parameters as **inherited source fact**, **adapted relationship**, **estimated from visual reference**, **new implementation choice**, or **measured implementation result**. Never present generated pixel colors or approximate measurements as official tokens.

Extract code only where there is an actual repeating responsibility. A CSS variable file is not proof of a design system. A named component without states is not proof of reusable interaction.

## 6. Expand deliberately: component → region → page → related task

At each expansion name what the existing system can reasonably carry and what is newly unproven. Preserve invariants but allow density and layout to change with function.

Try a relevant variation, not merely another screenshot of the same state: longer labels, empty and populated collections, selected and unselected states, a narrow viewport, a supporting dialog or a related task. Use realistic boundaries, not meaningless extreme strings purely to create a failure.

If the system needs new rules for every screen, reconsider its scope. If it forces every screen into the same card grid, reconsider the composition. Neither rigid uniformity nor uncontrolled variation is coherence.

Do not declare broad production readiness from one excellent screen. A useful, explicitly bounded system is preferable to an unsupported universal library.

## 7. Audit in distinct passes

1. **Visual whole:** expression, balance, hierarchy, supporting regions and consistency with selected relationships.
2. **Detail and readability:** real text, glyphs, state contrast, alignment, wrapping, backgrounds and sizes.
3. **Behavior:** actual interactions, interrupted/repeated flows, state changes and viewport adaptation within scope.
4. **Reference and feedback:** preserved approved properties, specific improvement, new regressions, exact approval scope.

Repair a region, then return it to the full page. Record before → problem → bounded change → actual result → remaining limits. A layout check does not establish visual quality; a still-image approval does not validate behavior.

## 8. Retain a scoped example and distill a method

A system candidate becomes a reusable example when the selected effect, production method, parameters, sources, actual tools and tested boundary can be explained and reproduced. User review applies only to the stated scope.

Write its [DESIGN.md](design-contract.md) from the selected and implemented evidence. Preserve original approval and validation records; the new contract summarizes and links them, not replaces or inflates them.

Promote general lessons into the appropriate existing reference: input → method → output → acceptance → boundary. Retain a few representative failure mechanisms in [agent pitfalls](agent-design-pitfalls.md). Keep project-specific palette and geometry in the example, and research candidates in research notes, not in the universal skill.
