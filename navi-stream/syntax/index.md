---
title: Syntax
order: 2
---

# Navi Stream Syntax

Navi Stream's syntax is mostly the same as Navi, but there are some differences, because they are have a little different in language design.

::: tip

- `.nvs` is the **Navi Stream** file extension.
- `.nv` is the **Navi** file extension.

:::

## Example

Here is a simple example of Navi Stream for MACD:

```nv
// meta for describe how of this script todo (Like a file doc).
meta {
    title = "MACD",
    overlay = false
}

// Input parameters
param {
    @meta(title = "短周期", range = 1..250)
    fast_length = 12,

    @meta(title = "长周期", range = 1..250)
    slow_length = 26,

    @meta(title = "移动平均周期", range = 1..250)
    signal_length = 26
}

// Define a function
fn test(a: number): number {
    return a + 1;
}

for (let i = 0 to 5) {
    if (i % 2 == 0) {
        a = a + i;
    }
}

let fast_ma = ta.sma(quote.close, fast_length, 1);
let slow_ma = ta.sma(quote.close, slow_length, 1);
let macd = fast_ma - slow_ma;
let dea = ta.sma(macd, signal_length, 1);
let dif = macd - dea;

// Render result to chart
plot(macd, title = "MACD", color = #yellow);
plot(dea, title = "DEA", color = #blue);
plot(dif, title = "DIF", color = quote.close > quote.open ? #up : #down, style = plotstyle.histogram);
```
