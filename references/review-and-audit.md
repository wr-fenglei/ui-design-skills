# Review and Audit

Shared review method for every direction. Use with the [pitfalls and delivery gate](agent-design-pitfalls.md#delivery-gate).

## Audit in distinct passes

1. **Visual whole:** expression, balance, hierarchy, supporting regions and consistency with selected relationships.
2. **Detail and readability:** real text, glyphs, state contrast, alignment, wrapping, backgrounds and sizes.
3. **Behaviour:** actual interactions, interrupted/repeated flows, state changes and viewport adaptation within scope.
4. **Reference and feedback:** preserved approved properties, specific improvement, new regressions, exact approval scope.

Repair a region, then return it to the full page. Record before → problem → bounded change → actual result → remaining limits. A layout check does not establish visual quality; a still-image approval does not validate behaviour.

## Screenshot review against a reference

- Capture full pages at the agreed desktop/narrow sizes and compare corresponding regions with the selected reference. Keep version and viewport labels explicit.
- Write issues as *location / current / reference target or justified adaptation*. Fix, re-capture and inspect the affected region in the whole.
- Do at least two review rounds. Record remaining differences and why.
- Separate visual fidelity, readability, tested behaviour and user approval. A screenshot pass is not interaction validation or aesthetic approval.

## Separate validation gates

- **Visual:** inspect the full composition, then local fidelity and perceptible differences.
- **Readability:** check actual backgrounds, text sizes and foreground combinations.
- **Behaviour:** test relevant controls, states and viewport changes in the implementation.

User approval of appearance is valuable visual evidence, not proof of browser behaviour. A successful image replica does not validate its CSS or Figma translation. Identify blocked checks explicitly.

## Automated checks are not taste

Scripted checks (text overflowing its frame, content escaping its window, values outside the foundations) catch defects; they do not judge quality. Export and look at the actual result after every composed section and every fix.
