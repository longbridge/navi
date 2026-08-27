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

The CLI contains no market data. The validation workflow below feeds `navi run` synthetic or real OHLCV data on stdin as NDJSON.

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

6. Have the agent run the script when the task turns on what it computes, not just whether it compiles:

   ```bash
   echo '{"type":"bar","data":[{"time":1700006400000,"close":103},{"time":1700092800000,"close":107}]}' \
     | navi run path/to/script.nv --bars all
   ```

7. Use the validated script with the Longbridge CLI, App, or desktop client. The standalone `navi` CLI is primarily a development and debugging tool.

Do not accept a claim that a script was validated unless the agent ran the CLI successfully. A code block alone is not validation.

### Runtime behavior

`navi run` executes a script against data you supply, so runtime behavior can be checked without any market-data service. It bundles no data of its own — you provide it on stdin as NDJSON, one JSON object per line, and each bar's `plot()` values and any alerts come back on stdout the same way. Prefer these in order:

- `navi run`, feeding synthetic or previously captured OHLCV data. No account or network needed, and the numbers are reproducible.
- An installed and authenticated Longbridge CLI: `longbridge quant run` executes a script directly against Longbridge historical data.
- A Longbridge MCP server in the AI environment: request historical candlesticks with its market-data tools.
- The [Playground](/playground), which runs the script in the browser against sample candles.

Three things about `navi run` are worth knowing before writing a driver for it:

- **stdout is the script's output, stderr is navi's.** Plot values, alerts and the script's own `log.*()` calls all arrive on stdout, every line parsing as JSON. Compile diagnostics, protocol errors and timeouts go to stderr as plain text. Read them separately — merging them with `2>&1` corrupts the JSON stream.
- **Close stdin when you are done sending.** Past the history boundary the run stays open waiting for live data, so it will not finish on its own. Ctrl+C also shuts down cleanly, writing a final `done` line marked `"interrupted": true` and exiting 130.
- **A stream nobody answers is an error, not an empty result.** To say a symbol genuinely has no dividends, answer with an empty array instead of staying silent.

For a script that uses `request.security`, `request.dividends`, or `request.data`, navi asks for each stream with a `request` line and the driver answers by `id`:

```python
import json, subprocess

BARS = [{"time": 1700006400000 + i * 86400000, "close": 100 + i} for i in range(3)]

p = subprocess.Popen(["navi", "run", "script.nv", "--bars", "all"],
                     stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True)

def send(obj):
    p.stdin.write(json.dumps(obj) + "\n")
    p.stdin.flush()

rows, alerts = [], []
while True:
    # An explicit readline loop: `for line in p.stdout` reads ahead and can
    # block against a process that is waiting for your answer.
    line = p.stdout.readline()
    if not line:
        break
    msg = json.loads(line)
    kind = msg["type"]
    if kind == "request":
        method = msg["method"]
        data = BARS if method == "bar" else []      # [] means "genuinely none"
        send({"type": method, "id": msg["id"], "data": data})
    elif kind == "historyEnd":
        p.stdin.close()                             # nothing more to send
    elif kind == "bar":
        rows.append(msg["values"])
    elif kind == "alert":
        alerts.append(msg["message"])
    elif kind == "log":
        print(msg["level"], msg["message"])         # the script's own output
    elif kind == "error":
        raise SystemExit(msg["message"])
    elif kind == "done":
        break

p.wait()
print(rows[-5:], alerts)                            # report a summary, not 5000 lines
```

Run `navi run --help` for the full wire protocol: every line type with a literal example, the routing rules, and a complete request/response transcript.

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
Write a Navi RSI indicator, then run it with navi run over 30 synthetic daily
bars and show me the RSI value on each bar.
```

```text
Create a Navi library that exports EMA and crossover helpers.
Use Navi naming conventions, save it as moving_average_helpers.nv,
and return the exact navi check result.
```

The skill treats [navi-lang.org](/docs/) and its standard-library reference as the source of truth for current APIs.
