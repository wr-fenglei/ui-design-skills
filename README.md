# UI Design Skills

A collection of Figma design systems, and the method used to build them.

The method: pick a professional reference with the user, measure its values directly, record where every value came from, then build Figma Variables and styles, a Foundations page, components bound to the variables, and desktop and mobile screens from instances, exporting and reviewing after each step. Earlier written rules in this repository produced weaker results than this; they have been removed.

Start with [METHOD.md](METHOD.md). Agents load [SKILL.md](SKILL.md).

## Systems

### [Linear baseline](systems/linear-baseline/README.md)

[![Linear baseline: top of the Figma desktop screen](systems/linear-baseline/figma/preview.jpg)](systems/linear-baseline/README.md)

A dark Chinese landing page measured from linear.app, with window proportions from macOS 27 and Bear. 77 variables, 10 text styles, 2 effect styles, 11 components, a 1440 desktop and a 390 mobile screen. User-approved on 2026-10-20 as the quality baseline. [Figma file](https://www.figma.com/design/cytw6jxvr7NDe0K406hGME) · [tokens](systems/linear-baseline/tokens.md) · [provenance](systems/linear-baseline/provenance.md)

## Repository map

- [METHOD.md](METHOD.md): how to build a design system like the Linear baseline
- [SKILL.md](SKILL.md): agent entry point
- [systems/](systems/README.md): one folder per design system: Figma link, exports, tokens, provenance
- [references/links.md](references/links.md): every reference link, grouped, with a note each
- [icons/](icons/README.md): app-icon design, a separate module
- `directions/inspiration-led/examples/`: inspiration images kept as input for design systems in progress

## Rights

This public repository contains no third-party screenshots; sources are linked. The Linear baseline imitates Linear's public CSS values as a study and must not be shipped as a brand.
