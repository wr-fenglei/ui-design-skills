# Code and Image Collaboration

## Shared brief and baseline

Keywords: task, real content, canvas, selected reference, invariants.

Give both routes the same content, dimensions, visual thesis and constraints. For refinement, identify what is approved and what may change. Begin a local experiment only when the full baseline is coherent enough to judge.

## Stage outputs for visual-direction work

- **Before exploration:** Keep a small shared brief and the actual reference regions. Use the same content priorities, viewport and constraints for both routes.
- **At the overall-impression stage:** Render a Web composition study and a GPT Image concept independently. Compare overall layout, approximate spatial relationships, silhouettes, occupied mass, density and broad color, lighting and material character at equal size. Use the same sparse representative content or equivalent placeholders; do not fill the entire page or refine typography, buttons, exact shadows, reflections or textures at this stage. Broad light/shadow masses and material feel should remain visible as low-detail cues. Preserve realistic content volume so the rough composition does not rely on unrealistically empty regions.
- **At selection:** Show both actual renders and the overall comparison to the user; recommend what to retain from each result and what to reject. Combining is selective translation, not adding every attractive feature. Wait for the user's explicit selection or approval of one baseline; do not substitute agent preference for that decision. Keep that baseline and do not extend it to unreviewed screens by habitual styling.
- **At the detail stage, after user approval:** Hand the selected baseline to both routes when another comparison is useful. Now introduce real copy and precise type, spacing, colors, controls, shadows and materials. For a Web baseline, capture a real screenshot for the image route; for an image baseline, preserve its spatial relationships in code. State which regions may change and which must remain stable.
- **At a user review gate:** Deliver the current-stage studies and the specific decision needed. Wait for requested approval before further refinement or functional implementation.

Use both routes and the explicit user review gate for new overall-impression studies and substantial visual redesigns. A small correction to an approved baseline need not restart both routes. Missing or restricted image-generation access must be disclosed and reduced scope agreed with the user; a code-only result cannot stand in for a completed two-route comparison.

## Responsibilities

- Code: editable layout, real typography, controls, state, responsive behavior and data.
- Image generation: bounded artwork, material, lighting and visual exploration.
- Either route may propose composition. Evaluate rendered results rather than assuming a model is best at a particular stage.

## Reconstruct relationships before finish

Keywords: occupied mass, crop, type rhythm, material cues.

A useful default order:
1. Match canvas, key region proportions, visible bounds, crop and spatial relationships.
2. Rebuild real text and controls; tune their size, weight and placement with the geometry.
3. Establish color roles and surface separation.
4. Refine gradients, opacity, shadow and highlights; add texture only where it belongs.
5. Compare at the reference size, then test adaptation.

Return to earlier decisions when a detail changes the whole. Do not place the complete reference image behind controls and call that an editable reconstruction.

## Compare and combine

- Compare the code render and generated concept at the same size.
- Name the actual advantage: proportion, type rhythm, color relationship, form or material.
- Transfer compatible strengths rather than averaging layouts or accumulating decoration.
- Retain one selected baseline for the next pass.
- When claiming a hybrid improves the result, compare code-only, image-only and combined outputs.

## Asset handoff

Keywords: dimensions, transparency, crop, alignment, light direction.

- Express spatial relationships as editable structure or measured parameters.
- Extract or recreate only the artwork needed; preserve its intended scale and crop.
- Implement text, navigation, forms and changing values as real interface elements.
- Inspect drift beyond an image edit's requested region, including reflections and texture.
- Keep exact generation prompts distinct from later reconstructed briefs.

## Separate validation gates

- Visual: inspect the full composition, then local fidelity and perceptible differences.
- Readability: check actual backgrounds, text sizes and foreground combinations.
- Behavior: test relevant controls, states and viewport changes in the implementation.

User approval of appearance is valuable visual evidence, not proof of browser behavior. A successful image replica does not validate its CSS translation. Identify blocked checks explicitly.

This is an execution method, not a claim that combining models always improves aesthetics.
