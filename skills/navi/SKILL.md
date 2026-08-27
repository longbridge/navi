---
name: navi
description: Write, refactor, debug, and review Navi `.nv` indicator, strategy, and library scripts. Use when working with Navi syntax, script declarations (`indicator`, `strategy`, `library`), bar-by-bar series logic, `const`/`input`/`simple`/`series` qualifiers, `var`/`varip`, `na`, history references (`x[1]`), non-repainting behavior, inputs, plots/drawings, `request.security`, collections (`Array`/`Map`/`Matrix`), or standard-library APIs such as `ta`, `math`, `String`, `input`, `strategy`, `Label`, `Line`, `Box`, and `Table`.
---

Write valid Navi code for chart indicators, strategies, and reusable libraries. Keep every answer focused on Navi authoring: syntax, execution semantics, standard-library calls, and practical script patterns.

## Source of Truth

Navi's standard library and, occasionally, its syntax evolve. This skill captures the stable authoring model — it deliberately does **not** reproduce the full API. Treat **navi-lang.org** as authoritative and verify concrete API details there instead of trusting memory or any list embedded in this skill.

- Full documentation in one file (language guide + complete stdlib API): <https://navi-lang.org/llms-full.txt>
- Documentation index, per topic — fetch a single page on demand: <https://navi-lang.org/llms.txt>
- Any single doc page as raw markdown: use the exact URL listed in `llms.txt`, e.g. <https://navi-lang.org/api/stdlib/ta/index.md>

Before using any concrete API — a function name, signature, enum variant, or method name — confirm it against the source above. When unsure, fetch `llms-full.txt` (or the specific page) rather than guessing.

Never construct a documentation URL from a symbol name. Fetch `llms.txt` first and copy an exact link from it. In particular:

- Guide pages live under `/docs/`, not `/ai/` or `/guide/`.
- Namespace/module pages use `/api/stdlib/<module>/index.md`.
- Prelude types and enums use `/api/stdlib/prelude/<Type>.md`, such as `Table.md` and `PlotDisplay.md`; they do not have nested `index.md` pages.
- Free prelude functions such as `plot`, `bg_color`, `na`, and `nz` are sections of `/api/stdlib/prelude/index.md`; they do not have one page per function.
- If a guessed URL returns 404, stop guessing paths and return to `llms.txt`.

## Reference Map

Load only the reference needed for the task:

| Read this | When you need to... |
| --- | --- |
| [references/syntax.md](references/syntax.md) | Check Navi source syntax: statements, blocks, declarations, types, collections, functions, methods, structs, enums, imports, and exports. |
| [references/execution-model.md](references/execution-model.md) | Reason about bar-by-bar execution, series values, qualifiers, `var`/`varip`, rollback, `na`, history references, and repainting. |
| [references/stdlib.md](references/stdlib.md) | Learn the stdlib naming rules and how to look up exact API names, signatures, and enum variants on navi-lang.org. |
| [references/patterns.md](references/patterns.md) | Start from complete indicator/strategy/library templates or reuse idioms for warmup guards, crosses, state, arrays, MTF data, divergence, debugging, and output polish. |

## Authoring Workflow

1. Identify the script kind: `indicator()` for visual studies, `strategy()` for orders/backtests, or `library()` for exported helpers.
2. Put configuration first with `input.*()` calls. Prefer typed inputs (`input.int`, `input.float`, `input.source`, `input.string`, `input.bool`) and use stable titles.
3. Model time correctly. Treat `close`, `high`, `ta.*` outputs, conditions, and plots as per-bar `series` values. Use `x[1]` for prior bars.
4. Use `let` for per-bar calculations, `var` for state that must persist across bars, and `varip` only for intentional intrabar state.
5. Guard warmup and missing values with `na()`, `nz()`, or `fixnan()`; never assume `na` is zero.
6. Confirm standard-library API names and signatures against navi-lang.org (`llms.txt`, then its exact page link) before using them; do not rely on remembered lists or synthesize URLs. As a rule, Navi built-in functions are snake_case (e.g. `ta.cross_over`, `bg_color`) and types/enums are PascalCase (e.g. `Direction.Long`).
7. Make outputs deterministic and readable: stable plot order, clear titles, explicit colors, and `na` or `PlotDisplay.NONE` when hiding output.
8. When returning code, return complete `.nv` source unless the user asked for only a fragment.

## Naming Style

Follow these Navi naming conventions consistently:

- Use `snake_case` for variables, parameters, functions, methods, and properties: `fast_length`, `long_signal`, `ema_of`.
- Use `PascalCase` for structs, enums, newtypes, and enum variants: `TradeState`, `Direction.Long`.
- Use `SCREAMING_SNAKE_CASE` for compile-time constants: `MAX_LOOKBACK`.
- Use `snake_case.nv` for new filenames when repository conventions allow it.

## CLI Validation

Validate every complete `.nv` file you create or modify with the `navi` CLI. Use `navi --help` or `navi <command> --help` for detailed, current behavior; `-h` only prints a summary.

The standalone `navi` CLI is a compiler, a formatter, and a runner. It contains no market data and downloads none, but `navi run` does execute scripts against data you supply on stdin as NDJSON. Its role in AI authoring workflows is to prove that a script compiles, is canonically formatted, and computes what you expect.

1. Check whether the CLI is installed with `command -v navi` (`Get-Command navi` on Windows).
2. If it is missing, install it with the appropriate command when local tool installation is in scope; otherwise give the command to the user:

   macOS or Linux:

   ```bash
   curl -fsSL https://navi-lang.org/install.sh | sh
   ```

   Windows PowerShell:

   ```powershell
   irm https://navi-lang.org/install.ps1 | iex
   ```

3. Run `navi check path/to/script.nv`. This is the default completion gate: it checks syntax, types, compilation, and imports.
4. Run `navi fmt path/to/script.nv` to apply canonical formatting, or `navi fmt --check path/to/script.nv` to report differences without writing. Formatting is independent of compilation, so run both.
5. When several files changed, validate them together instead of one call per file. Both commands accept any number of paths, and each can be a file, a directory, or a glob pattern:

   ```bash
   navi check "src/**/*.nv"
   navi fmt src
   ```

   Quote glob patterns so `navi` expands them itself. Matching no files is an error, so a mistyped pattern fails rather than silently passing.
6. Run the script when the task turns on what it computes, not just whether it compiles — see below.
7. Treat every non-zero exit status as a failed validation. Fix the script and repeat until every command exits successfully; report the commands run and any validation that could not be completed.

### Checking what a script computes

`navi run` executes the script against market data you provide on stdin as NDJSON, and writes each bar's `plot()` values and any alerts to stdout as NDJSON. It is the first choice for confirming behavior. Reach for `longbridge quant run`, a Longbridge MCP server, or the Playground only when the task needs real market data rather than data you can supply.

There are two ways to drive it:

- **Without a driver** — send one line carrying the whole dataset and read the output directly. Enough for "run this over these bars and show me the values", and for an alert-only check with `--bars none`:

  ```bash
  echo '{"type":"bar","data":[{"time":1700006400000,"close":103},{"time":1700092800000,"close":107}]}' \
    | navi run script.nv --bars all
  ```

- **With a driver** — write a small program that reads stdout, answers each `request` line by its `id`, and reports only what you need. Required for any script using `request.security`, `request.dividends`, `request.data`, and for continuous monitoring.

Three things to get right, none of them guessable:

- **stdout is the script's output, stderr is navi's.** Plot values, alerts and the script's own `log.*()` calls all arrive on stdout, every line parsing as JSON. Compile diagnostics, protocol errors and timeouts go to stderr as plain text. Read them separately — **do not merge them with `2>&1`**, or the JSON stream is corrupted.
- **Close stdin when you have no more data.** Past the history boundary the run stays open for live data, so it will not finish on its own. Ctrl+C also shuts down cleanly, writing a final `done` line marked `"interrupted": true` and exiting 130.
- **A stream nobody answers is an error, not an empty result.** To say a symbol genuinely has no dividends, answer with an empty array rather than staying silent.

Run `navi run --help` for the full wire protocol: every line type with a literal example, the routing rules, and a complete request/response transcript.

Do not claim that a code fragment was CLI-validated unless it was placed in a complete `.nv` script and the command succeeded.

## Playground Preview Links

When a user wants an online preview, encode the complete UTF-8 source as unpadded Base64URL and append it as the `code` query parameter:

```text
https://navi-lang.org/playground?code=<base64url-source>
```

Base64URL uses `-` and `_` instead of `+` and `/`, with trailing `=` padding removed. Generate this link only after CLI validation, and keep the full script in the response because very large scripts may exceed browser or chat URL limits.

## Navi Essentials

- Every script begins with `indicator(...)`, `strategy(...)`, or `library(...)`.
- Statements end with `;`. Block declarations such as `fn`, `if`, `for`, `while`, `switch`, `struct`, and `enum` end with `}` when used standalone.
- Type annotations use `name: type`, with qualifiers before the type: `let ma: series float = close;`.
- Collections are PascalCase: `Array<T>`, `Map<K, V>`, `Matrix<T>`. Construct with `Array.new<T>()`, `Map.new<K, V>()`, and `Matrix.new<T>()`.
- Tuples use parentheses and must be immediately destructured: `let (basis, upper, lower) = ta.bb(close, 20, 2.0);`.
- Navi has no `return` keyword. A function or expression block yields its last statement.
- Use PascalCase enums: `Shape.TriangleUp`, `Location.BelowBar`, `PlotStyle.Histogram`, `Direction.Long`, `BarmergeLookahead.Off`.

## Starter Templates

Minimal indicator:

```navi
indicator("My Indicator", overlay: true);

let len = input.int(14, "Length", minval: 1);
let src = input.source(close, "Source");

let ma = ta.sma(src, len);
plot(ma, "SMA", color: Color.ORANGE);
```

Minimal strategy:

```navi
strategy("MA Cross", overlay: true);

let fast_len = input.int(10, "Fast Length", minval: 1);
let slow_len = input.int(20, "Slow Length", minval: 1);

let fast = ta.ema(close, fast_len);
let slow = ta.ema(close, slow_len);

let long_signal = ta.cross_over(fast, slow);
let short_signal = ta.cross_under(fast, slow);

if long_signal {
    strategy.entry("Long", Direction.Long);
}
if short_signal {
    strategy.entry("Short", Direction.Short);
}

plot(fast, "Fast EMA", color: Color.GREEN);
plot(slow, "Slow EMA", color: Color.RED);
```

Reusable library:

```navi
// @description Shared moving-average helpers.
library("MaLib");

// @function Calculates an exponential moving average.
// @param src Source series.
// @param length EMA length.
// @returns EMA series.
// @see func:ta.sma
// @see func:ta.wma
export fn ema_of(src: series float, length: simple int): series float {
    ta.ema(src, length);
}
```
