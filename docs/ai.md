# AI Assistant

The **navi** skill gives your AI coding agent focused knowledge of the Navi language — syntax, execution model, standard library, and common patterns — so it can write correct, idiomatic `.nv` indicator and strategy scripts without needing to learn from scratch each session.

## What's included

The skill contains four reference files loaded on demand:

| File | Purpose |
|---|---|
| `syntax.md` | Surface syntax — declarations, control flow, functions, struct/enum/newtype, imports |
| `execution-model.md` | Bar-by-bar execution, type qualifiers (`const`/`input`/`simple`/`series`), `var`/`varip`, `na`, history references, avoiding repainting |
| `stdlib.md` | Built-in functions — prelude, `ta`/`math`/`str`, `Array`/`Map`/`Matrix`, drawing, `strategy` |
| `patterns.md` | Proven idioms — indicator/strategy/library skeletons, warmup guards, stateful accumulators, cross logic, pitfalls |

## Installation

Install from the `longbridge/navi` repository with the Skills CLI:

```bash
npx skills add longbridge/navi
```

To inspect the repository's available skills before installing:

```bash
npx skills add longbridge/navi --list
```

If your installer asks which skill to add, choose `navi`. You can also install it explicitly:

```bash
npx skills add longbridge/navi --skill navi
```

Alternatively, [download the packaged skill](/navi-skill.zip) and extract it into your agent's skills directory.

Install the standalone `navi` CLI as well so the AI agent can compile and run the scripts it writes.

macOS or Linux:

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell:

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

Verify the CLI is available:

```bash
navi --version
```

Update the installed skill when Navi documentation or APIs change:

```bash
npx skills update navi
```

The CLI contains no market data. The validation workflow below uses `--data` with caller-provided synthetic or real OHLCV data.

## Usage

Once installed, compatible AI coding agents can use the skill automatically when working with `.nv` files or when you ask about Navi.

```text
Write a complete Navi VWAP indicator with configurable upper and lower bands.
Save it as vwap_bands.nv and validate it with the navi CLI.
```

For better results, include:

- The script kind: indicator, strategy, or library
- Inputs and expected plots, signals, or orders
- Symbol or timeframe assumptions
- Repainting and warmup requirements
- The target `.nv` filename

## Recommended Workflow

1. Ask the agent for a complete `.nv` file, not an isolated fragment.
2. Use `snake_case` for filenames, variables, parameters, and functions.
3. Require the agent to validate the file with the standalone `navi` CLI:

   ```bash
   navi check path/to/script.nv
   ```

4. Have the agent apply canonical formatting with `navi fmt path/to/script.nv`, or verify it with `navi fmt --check`.
5. When several files changed, validate them together — both commands accept files, directories, and glob patterns:

   ```bash
   navi check "src/**/*.nv"
   navi fmt src
   ```

6. Use the validated script with the Longbridge CLI, App, or desktop client. The standalone `navi` CLI is primarily a development and debugging tool.

Do not accept a claim that a script was validated unless the agent ran the CLI successfully. A code block alone is not validation.

### Runtime behavior

The standalone `navi` CLI validates compilation and formatting; it does not execute scripts and bundles no market data, so it cannot confirm runtime behavior on its own. To check what a script actually produces, prefer these in order:

- An installed and authenticated Longbridge CLI: `longbridge quant run` executes a script directly against Longbridge historical data.
- A Longbridge MCP server in the AI environment: request historical candlesticks with its market-data tools.
- The [Playground](/playground), which runs the script in the browser against sample candles.

Reason explicitly about warmup, rising, falling, flat, and signal-producing paths when reviewing a script the CLI can only compile.

### Online preview

After validation, an AI agent can generate a Playground preview by encoding the complete UTF-8 script as unpadded Base64URL and placing it in the `code` query parameter:

```text
https://navi-lang.org/playground?code=<base64url-source>
```

Opening the link loads the script as an unsaved file and adds it to the chart. Base64URL uses `-` and `_` instead of `+` and `/`, with trailing `=` removed. Keep the source file alongside the link because browsers and chat clients limit URL length.

## Example Requests

```text
Review momentum_strategy.nv for repainting and series-state errors.
Fix the file, preserve its behavior, and run navi check when finished.
```

```text
Create a Navi library that exports EMA and crossover helpers.
Use Navi naming conventions, save it as moving_average_helpers.nv,
and return the exact navi check result.
```

The skill treats [navi-lang.org](/docs/) and its standard-library reference as the source of truth for current APIs.
