---
order: 2
---

# Getting Started

Navi Stream is a embed language in Navi, when you installed Navi, you can use Navi Stream.

## Quick Start

Create file named `macd.nvs`

::: info
Navi Stream file extension is `.nvs`, and Navi file extension is `.nv`.
:::

```nv
use quote, ta;

param {
    Length1 = 12,
    Length2 = 26,
    Length3 = 9,
}

let fast_ma = ema(close, Length1);
let slow_ma = ema(close, Length2);
export let hist = fast_ma - slow_ma;
export let signal = ema(hist, Length3);
export let macd = (hist - signal) * 2;
```

Make a sample JSON data named `data.json`, you can download this sample file: https://raw.githubusercontent.com/navi-language/navi/main/examples/macd/data.json

Then you can use it in Navi file, `main.nv`:

```nv
// Import `macd.nvs` file as module
use macd;
use std.fs;
use std.json;

struct Candlestick {
    time: int,
    open: float,
    high: float,
    low: float,
    close: float,
    volume: float,
    turnover: float,
}

impl Candlestick {
    fn to_string(): string {
        return `{ time: ${self.time}, open: ${self.open}, high: ${self.high}, low: ${self.low}, close: ${self.close}, volume: ${self.volume}, turnover: ${self.turnover} }`;
    }
}

fn main() throws {
    let f = fs.open("data.json");
    let data = json.parse(f.read_to_string());

    let candlesticks: [Candlestick] = [];

    for (let item in data.array()!) {
        candlesticks.push(Candlestick {
            time: item.get("time")?.int()!,
            open: item.get("open")?.float()!,
            high: item.get("high")?.float()!,
            low: item.get("low")?.float()!,
            close: item.get("close")?.float()!,
            volume: item.get("volume")?.int()! as float,
            turnover: item.get("turnover")?.int()! as float
        });
    }

    // Create a Navi Stream instance
    let t = macd.new();
    for (let candlestick in candlesticks) {
        // Execute Navi Stream
        t.execute(time: candlestick.time, close: candlestick.close);
        println(candlestick.to_string());
    }
}

```

Then run it:

```bash
$ navi run main.nv
{ time: 943920000, open: 29.5, high: 29.8, low: 26.01, close: 26.4, volume: 3040519, turnover: 8408718336 }
{ time: 946512000, open: 26.31, high: 26.9, low: 24.5, close: 24.75, volume: 736270, turnover: 1889136896 }
{ time: 949017600, open: 24.98, high: 27.85, low: 23.75, close: 25.04, volume: 1965104, turnover: 4966612480 }
...
```
