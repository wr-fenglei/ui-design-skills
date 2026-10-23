# DESIGN.md: The Example's Design Contract

## Three responsibilities

- **Research notes:** promising ideas, source evidence and unresolved hypotheses. Their inclusion is not approval.
- **This skill and its references:** reusable ways to discover, compare, refine, implement and check design.
- **An example's DESIGN.md:** what this specific system has selected, why, how its relationships stay coherent, what implements them and where the evidence stops.

DESIGN.md complements SKILL.md; it does not replace the skill or impose one theme on the repository. Keep one at the root of a coherent example family. A page may inherit that contract and document its own differences without copying the whole specification.

## Write it progressively

Before selection, keep a draft brief with task, inspiration, functional-reference needs and constraints. After selection, record approved relationships and open variables. After implementation, add actual parameters, component/state responsibilities, tooling and validation.

A document called DESIGN.md may describe an experimental candidate, but must say so prominently. Its existence does not make the system mature. Do not invent missing approvals, precise measurements, interaction tests or tools to fill headings.

## Minimal contract

Use only sections that carry evidence; adapt the structure rather than filling empty boilerplate.

1. **Status and scope:** task, intended use, maturity, precise approval scope and explicit exclusions.
2. **Design thesis:** what carries beauty, what supports it, why this fits the function.
3. **Reference roles:** actual inspiration and same-function examples, inspected scope, author/link/date/rights, unknowns. Do not retrospectively claim a historical example followed a new process.
4. **Invariants and open variables:** proportions, grouping, density, reading order, selected relationships that must survive; what may change with content.
5. **Foundations and components:** type/color/surface/spacing/shape roles, responsibilities, actual states and adaptation rules. Link authoritative code instead of duplicating every token.
6. **Tools and reproduction:** only real files, functions, dependencies, commands and inputs; distinguish tools from plans or prompts. Explain manual steps and limitations.
7. **Validation and review:** inspected renders, supported sizes, tested behavior, untested environments, specific user feedback. Preserve source dates and version differences.
8. **Evolution and errors:** selected before/problem/change/result examples, remaining regressions and checks; link a concise case study instead of retaining every failed output.
9. **Provenance and boundary:** asset rights, estimated/inherited/new parameters, portability and known exclusions.

## Compact starting outline

```markdown
# <Example family> — Design contract
Status: <visual study / experimental system / scoped reusable example>

## Task and expressive thesis
## References and their distinct roles
## Relationships to preserve
## Components, states and adaptation
## Implementation and actual tools
## Approval and validation scope
## Selected evolution and known errors
## Sources, rights and limits
```

This is an outline, not a checklist whose completion certifies quality. Omit empty sections or say what evidence is missing. Do not turn dates and daily plans into design rules.

## Parameter provenance

Label every recorded parameter with one vocabulary. The calibration labels in [reference calibration](reference-calibration.md#2-measure-label-every-value) map onto it:

| Provenance | Calibration label | Meaning |
| --- | --- | --- |
| Measured source fact | `[DOM]` | Observed directly in the source (for example computed CSS) |
| Inherited source fact | `[official]` / `[community]` | Published by the platform or by a cited third party |
| Estimated from visual reference | `[est]` | Pixel-measured or read from an image, including generated images |
| Adapted relationship | `[adapted]` | Deliberately changed from the source, with the reason |
| New implementation choice | — | Chosen for this example, not taken from a source |
| Measured implementation result | — | Observed in the built output |
| Unknown | `[unknown]` | No reliable evidence; left open |

Never present generated pixel colours or approximate measurements as official tokens.

## Maturity and retention

- **Visual study:** an inspected still/concept illustrates a relationship; no functioning UI implied.
- **Experimental system:** bounded rules/components and perhaps runnable code exist, but aesthetic review, breadth or validation is incomplete.
- **Scoped reusable example:** the useful outcome and method are established for an explicit task and tested scope; not automatically production-ready.

Keep existing examples at their evidenced level. A historical study does not need a fake system wrapper. When a new example is ready, link README → DESIGN.md → actual implementation/tools/validation, reachable from SKILL.md in two or three useful steps.

Retain only essential output, source metadata, reproduction information and representative iterations. Preserve pending review and unique evidence before cleanup. Integrate lessons into existing references and remove duplication only when the original meaning and links remain intact.

A version becomes a reusable example when the selected effect, production method, parameters, sources, actual tools and tested boundary can be explained and reproduced. User review applies only to the stated scope. Preserve original approval and validation records; a new contract summarises and links them, not replaces or inflates them. Promote general lessons into the appropriate shared reference as input → method → output → acceptance → boundary; keep direction-specific palette and geometry in that direction's folder.
