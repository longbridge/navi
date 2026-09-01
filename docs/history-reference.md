# History Reference

In Navi, every expression is evaluated once per bar, producing a time series of values. The `[]` operator accesses the value that an expression produced on a **previous bar** — not just built-in variables, but any expression:

```navi
let previousClose = close[1];              // close price one bar ago
let twoBarsAgo    = high[2];               // high price two bars ago

let prevSma = ta.sma(close, 14)[1];        // SMA value from the previous bar
let prevEma = ta.ema(close, 10)[3];        // EMA value from 3 bars ago

let prevRange = (high - low)[1];           // bar range from the previous bar

let myValue = close * volume;
let prevMyValue = myValue[1];              // previous bar's value of myValue
```

> **Key concept:** `ta.sma(close, 14)[1]` does **not** recompute the SMA — it returns the value that was already calculated when the script ran on the previous bar.

On early bars where insufficient history exists, the result is `na`. The offset can be a series expression:

```navi
let lookback: int = input.int(5, "Lookback");
let pastClose = close[lookback];
```

## How Much History a Script Needs

The engine works out how far back a script reaches by reading the script, and
keeps exactly that much. A script whose deepest read is `close[19]` retains
twenty bars — not because of a setting, but because twenty is what it uses.

The number is published, so whoever fetches the data knows what to send. From
the CLI it is `sessionInfo.script.requiredHistory`; from the chart and
playground it arrives on the same session info. It has three states, because a
number alone would not say whether it is an answer:

```json
{"type": "exact",   "bars": 20}
{"type": "atLeast", "bars": 1}
{"type": "unknown"}
```

`exact` — send that many and the values are what they would be with any more.
`ta.sma(close, 20)` reports 20 and means it.

`atLeast` — a floor. The script carries state between bars, or reads its own
position in the feed, so its output keeps moving as more history arrives:

```navi
plot(ta.ema(close, 20));                   // atLeast, 1 bar
```

An EMA keeps its running value in a `var`, which survives the bar without any
history buffer — so it reads nothing back, and reports 1. Its value still
settles over hundreds of bars as the first one's influence decays. How many is a
property of the arithmetic rather than of the source, so nothing claims to know;
send the floor plus whatever warm-up you consider enough.

`unknown` — nothing was worked out; send as much as you have.

The engine keeps only what it needs in every case, so a long backfill costs
nothing beyond the fetch itself.

### When It Cannot Be Worked Out

Some depths cannot be known ahead of time — an index computed from the bars
themselves, or a length that is not linear in its inputs:

```navi
let n = int(volume) / 1000;
plot(close[n]);                            // how deep is this? nobody knows until it runs
```

`navi check` points at the statement and says why. The engine then keeps only
what it could establish, and a read that reaches past that **fails with an
error naming the depth to declare** — it does not quietly return `na` on some
later bar, far from the cause.

Declaring the depth is how you answer:

```navi
let length = input.int(20, "Length");
max_bars_back(close, length + 32);         // may be an expression over inputs
```

A declaration is a promise from the author about what the compiler could not
see, so it is only needed where the compiler said so. Where a bound *was*
proved, the proof already covers every read and a declaration adds nothing.

`indicator(max_bars_back: N)` says the same thing for the whole script.
`max_bars_back(v, N)` is usually better: it names the series that needs the
depth, and it also caps that series at `N`, so declaring less than a script
reads truncates it.

## Next Steps

- [Variables & Qualifiers](/docs/types-and-variables) — `var`, type qualifiers, `na`
- [Collections](/docs/collections) — array, map, matrix
