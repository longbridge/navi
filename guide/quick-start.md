# Quick Start

Use the `navi` CLI to check, format, and run `.nv` scripts locally.

## Install the Navi CLI

macOS or Linux:

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell:

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

Confirm the installation with `navi --version`.

## Write Your First Indicator

Create `sma.nv`:

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: Color.ORANGE);
```

## Validate the Script

```bash
navi lint sma.nv
```

`lint` checks syntax, types, compilation, imports, and canonical formatting. To execute the script, prepare an OHLCV CSV and run:

```bash
navi run sma.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

Use `navi run --help` for the complete CSV schema and available options.

## Write a Strategy

```navi
strategy("MA Cross", overlay: true);

let fast = ta.ema(close, input.int(10, "Fast"));
let slow = ta.ema(close, input.int(20, "Slow"));

if ta.cross_over(fast, slow) { strategy.entry("Long", Direction.Long); }
if ta.cross_under(fast, slow) { strategy.entry("Short", Direction.Short); }

plot(fast, "Fast EMA");
plot(slow, "Slow EMA");
```

```bash
navi lint macross.nv
navi run macross.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

## Running Pine Script Files

Use `--dialect pine` to run an existing Pine Script file without any code changes:

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script my_indicator.pine --dialect pine
```

The `--dialect` parameter selects the script language:

| Value | Language |
|---|---|
| `navi` | Navi (default for `.nv` files) |
| `pine` | Pine Script V6 (default for `.pine` files) |

If your file uses the correct extension (`.nv` or `.pine`), the dialect is detected automatically and `--dialect` can be omitted.

### Converting to Navi

For new scripts, Navi (`.nv`) offers full editor support. The following shows a Bollinger Bands indicator written in both languages:

```pine
// Pine Script
// @version=6
indicator("Bollinger Bands", overlay=true)

length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")

[basis, upper, lower] = ta.bb(close, length, mult)

plot(basis, "Basis", color.blue)
plot(upper, "Upper", color.red)
plot(lower, "Lower", color.green)
fill(upper, lower, color.new(color.blue, 90))
```

```navi
// Navi
indicator("Bollinger Bands", overlay: true);

let length = input.int(20, "Length");
let mult   = input.float(2.0, "Multiplier");

let (basis, upper, lower) = ta.bb(close, length, mult);

plot(basis, "Basis", Color.BLUE);
let upper_plot = plot(upper, "Upper", Color.RED);
let lower_plot = plot(lower, "Lower", Color.GREEN);
fill(upper_plot, lower_plot, Color.new(Color.BLUE, 90));
```

## Next Steps

- [Language Basics](/guide/language-basics)
- [Standard Library](/api/stdlib/)
