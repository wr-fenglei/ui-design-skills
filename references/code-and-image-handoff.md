# Code and Image Handoff

Shared method for moving between a generated image and an editable design (Figma or code). The main case: an [inspiration-led](../directions/inspiration-led/README.md) GPT Image version has been selected and must be rebuilt as a working interface. It also applies whenever a generated asset is used inside a Figma or code version.

## After selection: a shared baseline

Once a version has been selected, identify its approved relationships and open variables. The screenshot or image, its visual thesis and a controlled image-to-design handoff now support faithful refinement. State which regions may change and which must remain stable.

## Responsibilities

- Code or Figma: editable layout, real typography, controls, state, responsive behaviour and data.
- Image generation: bounded artwork, material, lighting and visual exploration.
- Evaluate rendered results rather than assuming a model or tool is best at a particular stage.

## Reconstruct relationships before finish

Keywords: occupied mass, crop, type rhythm, material cues.

A useful default order:
1. Match canvas, key region proportions, visible bounds, crop and spatial relationships.
2. Rebuild real text and controls; tune their size, weight and placement with the geometry.
3. Establish colour roles and surface separation.
4. Refine gradients, opacity, shadow and highlights; add texture only where it belongs.
5. Compare at the reference size, then test adaptation.

Return to earlier decisions when a detail changes the whole. Do not place the complete reference image behind controls and call that an editable reconstruction.

## Compare the rebuild with the image

- Compare the editable rebuild and the generated image at the same size.
- Name the actual difference: proportion, type rhythm, colour relationship, form or material.
- Transfer compatible strengths rather than averaging layouts or accumulating decoration.
- Never present generated pixel colours or approximate measurements as official tokens; label them estimated.

## Asset handoff

Keywords: dimensions, transparency, crop, alignment, light direction.

- Express spatial relationships as editable structure or measured parameters.
- Extract or recreate only the artwork needed; preserve its intended scale and crop.
- Implement text, navigation, forms and changing values as real interface elements.
- Inspect drift beyond an image edit's requested region, including reflections and texture.
- Keep exact generation prompts distinct from later reconstructed briefs.

Validation gates for the rebuilt result are in [review and audit](review-and-audit.md#separate-validation-gates). This is an execution method, not a claim that combining models always improves aesthetics.
