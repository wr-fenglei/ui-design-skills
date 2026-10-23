# Figma Execution with figmosha

Shared tool note for building any direction's Foundations, Components and Screens in Figma. Tools change; verify current behaviour with `--help` and the tool's own documentation rather than relying on this page.

## Current route: figmosha CLI → local bridge → Figma Desktop plugin

[figmosha2-extended](https://github.com/wr-fenglei/figmosha2-extended) (branch `console-mcp-port`) sends Figma Plugin API JavaScript through a local bridge to a development plugin running inside Figma Desktop. No MCP server is needed. Read the repository's `AGENTS.md` before use; a machine may also have a gitignored `CLAUDE.local.md` with its own paths.

**Where it runs.** Commands must run on the machine where Figma Desktop is open. A cloud or remote agent's `localhost` is not that machine. The browser version of Figma cannot run the plugin.

**One-time setup.**
1. Follow the repository README to create its virtual environment and install the user-level `figmosha` command (`install-cli.py`). The installed command starts or reuses the bridge on demand; the default port is 18787.
2. In Figma Desktop: **Plugins → Development → Import plugin from manifest…**, then choose `plugin/manifest.json` from the checkout. Import once; re-importing is not needed after restarts.

**Each session and each file.**
1. In every target Design file run the plugin (**Actions → search "Figmosha" → Figmosha Bridge**) and keep its window open. Closing the plugin or restarting Figma disconnects that file.
2. `figmosha status` should report `plugin_connected: true` and list the file.
3. `figmosha targets` lists connected files. Pass `-T "<file name or doc id>"` **after** the subcommand. Do not hard-code old document ids; check `targets` first.
4. Read-only round trip before writing:
   ```sh
   figmosha exec 'return {file: figma.root.name, page: figma.currentPage.name, roundTrip: 1 + 1};' -T "<file>" --parallel --timeout 10
   ```
5. Longer scripts: `figmosha exec --file /absolute/path/script.js -T "<file>"`. Scripts support `await`, the Plugin API and the repository's `h.*` helpers; `return` the result. Check `figmosha --help` and subcommand `--help` for higher-level commands (for example `tree`, `doctor`).

**Safety.**
- These commands change real design files. Confirm the target file and the user's authorised scope first; prefer a new page over editing an approved page.
- Use `--parallel` only for read-only scripts. Leave writes on the default per-file queue and name the caller with `--agent <name>`. Do not let two agents modify the same nodes.
- A 504 timeout may mean the script is still running: inspect the file before retrying a write. A 503 means the plugin is not connected in that file. On a port conflict, do not kill an unknown process.

## Practice notes

From the Linear exercises (2026-10-20 and the 2026-10-23 five-group redo):
- **Bind values to variables.** Copy the selected direction's colour variables and text styles into the working file under their original names and bind every fill and stroke to them. A token lookup that throws when a name is missing blocks unlisted values.
- **Library access.** Components from another file can be used directly only if that file is published as a library. Otherwise copy what is needed and make it a local component, and record where it came from.
- **Auto-layout sizing.** `resize()` switches auto-layout children to fixed sizing; set HUG/FILL after resizing. An empty auto-layout frame defaults to 100px tall; give spacer frames an explicit size.
- **CJK fonts.** Load and set fonts explicitly. Inter has no CJK glyphs; Noto Sans SC was used for Chinese and JetBrains Mono for identifiers.
- **The agent cannot see the canvas.** After each composed section export an image and inspect it. Also run a script check for text overflowing its frame and content escaping its window or artboard. A successful script is not visual approval.

## Historical: 2026-10-20 Figma MCP findings (outdated)

> **Outdated.** This records the first Linear exercise, built with Figma MCP `use_figma` on a Starter-plan team. The route has since moved to figmosha, and plan limits may differ. Verify current capabilities before relying on any limit below.

File: https://www.figma.com/design/cytw6jxvr7NDe0K406hGME (owner's Starter team; sharing is the repository owner's decision).

**What was built** in about 20 scripted writes, in a designer's order:
1. 77 variables (Primitives 23 / Color 25 / Radius 5 / Spacing 12 / Layout 12), 10 text styles, 2 effect styles
2. Components: Button (Primary/Secondary × Small 32 / Large 44), Sidebar row (Default/Selected), List row (Default/Selected), Toolbar group (2/3 items), Input (Default/Focus), plus Icon ×18, Status, Avatar, Tag
3. Grids: desktop 1440, 12 columns, margin 80, gutter 32; mobile 390, 4 columns, margin 24, gutter 16
4. Pages: desktop 1440×7263 and mobile 390×5771, assembled section by section with auto layout, component instances and variables
5. Two rounds of screenshot review against Linear's site

Audit: all 697 solid fills on the two pages were bound to variables; shadows appeared only on floating layers (Agent panel, mobile toast) and the primary button.

**What worked:** scripts were atomic (an error rolled back the whole script, so retries were safe); a "look up token by name, throw if missing" helper blocked values outside the table (padding 20 failed and became 24); variables, styles, variants and component properties (text, boolean, instance swap) were created correctly; fixing a component once fixed every instance; screenshot URLs were short-lived and downloaded with curl.

**Limits recorded at the time:**
| Limit | Effect | Workaround used |
|---|---|---|
| Starter plan: **one mode** per variable collection | No Light/Dark switch; no desktop/mobile modes | Separate `layout/desktop/*` and `layout/mobile/*` variables |
| Font size, weight and line height **cannot bind to variables** | Type constrained only by text styles | Always use text styles; no loose font sizes |
| Gradients and focus-ring shadows **cannot bind colour variables** | Hard-coded values in glows, fades, focus ring | Keep them rare and list them as exceptions |
| Auto-layout sizing traps | Three visual bugs: collapsed sample card, toolbar not filling, overlapping Tag text | Resize before HUG/FILL; explicit 1px spacers; inspect after every composition |
| The agent **cannot see the canvas** | Checking only by exporting and reading images | Capture after each section and after each fix |
| Screenshots at most **1x** at native size | No @2x mobile image | Export manually in Figma when high resolution is needed |
| No **PingFang SC** in Figma; Inter lacks CJK glyphs | CJK fonts must be set explicitly | Noto Sans SC for CJK, JetBrains Mono for IDs and labels |

**Conclusion then:** quality matched hand-written HTML from the same values; the real gain was reusable variables, styles and components that a designer can take over in Figma. Good looks still depended on an approved professional reference; the tool itself adds no taste.
