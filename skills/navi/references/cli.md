# CLI Reference

The standalone `navi` CLI is a compiler, a formatter, and a runner. It contains no market
data and downloads none, but `navi run` does execute scripts against data you supply on
stdin. Its role in an authoring session is to prove three things: the script compiles, it
is canonically formatted, and it computes what you expect.

Use `navi <command> --help` for current, detailed behavior; `-h` only prints a summary.

## Installing

Check first with `command -v navi` (`Get-Command navi` on Windows). If it is missing,
install it when local tool installation is in scope; otherwise give the command to the user.

macOS or Linux:

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell:

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

Both scripts download a prebuilt binary — no toolchain, no compilation from source.

## `navi check` — the completion gate

```bash
navi check path/to/script.nv
```

Checks syntax, types, compilation, and imports. This is the default gate: a script is not
finished until it passes.

## `navi fmt` — canonical formatting

```bash
navi fmt path/to/script.nv          # rewrite in place
navi fmt --check path/to/script.nv  # report differences, write nothing
```

Formatting is independent of compilation, so run both commands.

## Validating several files at once

Both commands take any number of paths, and each may be a file, a directory, or a glob —
prefer one call over one call per file:

```bash
navi check "src/**/*.nv"
navi fmt src
```

Quote glob patterns so `navi` expands them itself. Matching no files is an error, so a
mistyped pattern fails rather than silently passing.

## `navi run` — checking what a script computes

`navi run` executes the script against market data you provide on stdin as NDJSON, and
writes each bar's `plot()` values, alerts, `log.*()` output and strategy events to stdout
as NDJSON. It is the first
choice for confirming behavior. Reach for `longbridge quant run`, a Longbridge MCP server,
or the Playground only when the task needs real market data rather than data you supply.

### Without a driver

Send one line carrying the whole dataset and read the output directly. Enough for "run this
over these bars and show me the values", and — piped through `jq` — for an alert-only check:

```bash
echo '{"type":"bar","data":[{"time":1700006400000,"close":103},{"time":1700092800000,"close":107}]}' \
  | navi run script.nv
```

`data` accepts a single object or an array, and an array implies the history boundary. A
`.json` file of candles can be piped straight in:

```bash
jq -c '{type:"bar",data:.}' bars.json | navi run script.nv
```

### With a driver

Write a small program that reads stdout, answers each `request` line by its `id`, and
reports only what you need. Required for any script using `request.security`,
`request.dividends`, or `request.data`, and for continuous monitoring.

```python
import json, subprocess

BARS = [{"time": 1700006400000 + i * 86400000, "close": 100 + i} for i in range(3)]

p = subprocess.Popen(["navi", "run", "script.nv"],
                     stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True)

def send(obj):
    p.stdin.write(json.dumps(obj) + "\n")
    p.stdin.flush()

rows, alerts, fills = [], [], []
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
    elif kind == "orderFilled":
        fills.append(msg)                           # see "strategy events" below
    elif kind == "log":
        print(msg["level"], msg["message"])         # the script's own output
    elif kind == "error":
        raise SystemExit(msg["message"])
    elif kind == "done":
        break

p.wait()
print(rows[-5:], alerts, fills)                     # report a summary, not 5000 lines
```

Report a summary — the last few rows, the alerts, an aggregate. Do not forward thousands of
bar lines into your own context.

### Four things to get right, none of them guessable

- **stdout is the script's output, stderr is navi's.** Plot values, alerts, and the
  script's own `log.*()` calls all arrive on stdout, every line parsing as JSON. Compile
  diagnostics, protocol errors, and timeouts go to stderr as plain text. Read them
  separately — **do not merge them with `2>&1`**, or the JSON stream is corrupted.
- **Close stdin when you have no more data.** Past the history boundary the run stays open
  waiting for live data, so it will not finish on its own. Ctrl+C also shuts down cleanly,
  writing a final `done` line marked `"interrupted": true` and exiting 130.
- **`historyEnd` is a boundary, not a terminator.** Before it, bars execute once as
  confirmed history. After it, each bar re-executes on every update it receives. Only
  closing stdin — or an `end` line — finishes a stream.
- **A stream nobody answers is an error, not an empty result.** To say a symbol genuinely
  has no dividends, answer with an empty array rather than staying silent.
- **Nothing is filtered — a forming bar reports every pass.** Past the boundary a bar
  re-executes on each update, and every pass emits its own `bar` line plus whatever alerts,
  logs and strategy events it produced. Each line carries the `state` it ran in, so
  narrowing is yours to do: `jq 'select(.state != "history")'` for live output only,
  `jq 'select(.state == "realtimeNew")'` for one line per bar.

### Strategy events

A `strategy()` script also reports what it traded. The event's own kind is the line type —
there is no wrapper to unwrap:

```
{"type":"orderSubmitted","id":"Long","direction":"long","quantity":100.0,"index":1,"time":…,"state":"history"}
{"type":"orderFilled","id":"Long","price":102.0,"quantity":100.0,"commission":0.0,"index":2,…}
{"type":"tradeOpened","entryId":"Long","entryPrice":102.0,"quantity":100.0,"index":2,…}
```

The kinds are `config`, `orderSubmitted`, `orderFilled`, `orderCancelled`, `tradeOpened`,
`tradeClosed`, `openTradeUpdated`, `equitySnapshot`, `dailyReturn`, `marginCall` and
`riskFlatten`. A backtest emits an `equitySnapshot` per bar, so filter for what you care
about: `jq 'select(.type == "orderFilled")'`.

### Flags worth knowing

| Flag | Effect |
| --- | --- |
| `--symbol <TICKER>` | Symbol the script sees as `syminfo.tickerid`. Defaults to `NASDAQ:AAPL`. Include a market prefix so `mintick`/`timezone`/`currency` resolve. |
| `--timeframe <TF>` | Bar timeframe: bare numbers are minutes, plus `S`/`D`/`W`/`M`/`T`. Defaults to `D`. A `T` timeframe reads ticks, so requests ask for `tick`. |
| `--input <ID=JSON>` | Override an `input.*()` default by declaration order from 0. Values are JSON, so quote strings: `--input 1='"close"'`. |
| `--sessions <LIST>` | Declares which sessions the bars cover. **Not a filter** — an unlisted `tradeSession` aborts the run, and it changes `session.*`/`syminfo.session` semantics. Pre/post-market data needs `--sessions regular,extended`. |
| `--request-timeout <MS>` | Idle timeout for an unanswered `request.*`, armed only until that stream's history boundary. Defaults to 30000; `0` waits forever. |
| `--max-bars-back <N>` | Lookback cap, default 1000. A script's own `max_bars_back()` is clamped to it; `run` warns on stderr when the clamp bites. |

Run `navi run --help` for the full wire protocol: every line type with a literal example,
the routing rules, and a complete request/response transcript.

## Exit status

`0` means success. Every non-zero status is a failed validation — fix the script and repeat
until every command exits successfully. `130` is a Ctrl+C shutdown of `navi run`, not a
script failure.

Do not claim that a code fragment was CLI-validated unless it was placed in a complete
`.nv` script and the command succeeded.
