# Quick Start

Before starting, [choose and set up how you want to use Navi](/docs/install). This guide uses the Longbridge CLI to run scripts with market data and the optional standalone `navi` CLI for local development checks.

## Write Your First Indicator

Create `sma.nv`:

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: Color.BLUE);
```

<QuickStartSmaChart />

The blue line is the 14-bar simple moving average produced by the indicator over the AAPL daily candles.

## Check Locally (Optional)

If you installed the standalone `navi` CLI for development, validate the script before running it:

```bash
navi check sma.nv
navi fmt --check sma.nv
```

`check` validates syntax, types, compilation, and imports. `fmt --check` reports whether the source is canonically formatted without touching it; `navi fmt` rewrites it in place.

Both commands take any number of paths, and each one can be a file, a directory, or a glob pattern, so a whole project is validated in a single command:

```bash
navi check "**/*.nv"
navi fmt .
```

The standalone CLI carries no market data and does not execute scripts. To see an indicator run against candles, use the Longbridge CLI below, or open it in the [Playground](/playground).

## Run with Longbridge

Run the indicator against historical market data with the Longbridge CLI:

```bash
cat sma.nv | longbridge quant run AAPL.US \
  --start 2024-01-01 \
  --end 2024-12-31
```

See the [`longbridge quant run` documentation](https://open.longbridge.com/docs/cli/quant) for data periods, inputs, output formats, and backtesting options. You can also use the same script interactively in the Longbridge App or desktop client.

## Write a Strategy

```navi
strategy("MA Cross", overlay: true);

let fast = ta.ema(close, input.int(10, "Fast"));
let slow = ta.ema(close, input.int(20, "Slow"));

if ta.cross_over(fast, slow) {
    strategy.close("Short");
    strategy.entry("Long", Direction.Long);
}
if ta.cross_under(fast, slow) {
    strategy.close("Long");
    strategy.entry("Short", Direction.Short);
}

plot(fast, "Fast EMA");
plot(slow, "Slow EMA");
```

```bash
navi check ma_cross.nv
navi fmt --check ma_cross.nv
```

## PineScript Compatibility <Badge type="warning" text="experimental" />

Navi is compatible with PineScript v6 syntax, so an existing `.pine` script can run on the Longbridge platform without being rewritten first. The standalone `navi` CLI is Navi-only and accepts `.nv` files.

### Converting to Navi

Both examples calculate Bollinger Bands. PineScript fills the envelope, while the compact Navi version uses a trend-colored basis and simple range boundaries.

```pine
// @version=6
indicator("Bollinger Bands", overlay=true)

length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")

[basis, upper, lower] = ta.bb(close, length, mult)

plot(basis, "Basis", color.blue)
upper_plot = plot(upper, "Upper", color.red)
lower_plot = plot(lower, "Lower", color.green)
fill(upper_plot, lower_plot, color.new(color.blue, 90))
```

```navi
indicator("Bollinger Range", overlay: true);

let price_source = input.source(close, "Source");
let period = input.int(20, "Period", minval: 1);
let deviation = input.float(2.0, "Deviation", minval: 0.1);

let (middle, upper_band, lower_band) = ta.bb(price_source, period, deviation);
let middle_color = middle > middle[1] ? Color.GREEN : Color.RED;

plot(middle, "Trend Basis", color: middle_color, line_width: 2);
plot(upper_band, "Upper Range", color: Color.BLUE);
plot(lower_band, "Lower Range", color: Color.BLUE);
```

## Next Steps

- [Language Basics](/docs/language-basics)
- [Standard Library](/api/stdlib/)
