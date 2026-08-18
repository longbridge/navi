---
title: 语法
order: 2
---

# Navi Stream 语法

Navi Stream 的语法大部分与 Navi 相同，但是有一些差异，因为它们在语言设计上有一些不同。

::: tip

- `.nvs` 是 **Navi Stream** 文件的扩展名。
- `.nv` 是 **Navi** 文件的扩展名。

:::

## 示例

以下是一个关于 MACD 的 Navi Stream 简单示例：

```nv
// 元数据用于描述此脚本的执行方式（类似于文件文档）。
meta {
  title = "MACD",
  overlay = false
}

// 输入参数
param {
  @meta(title = "短周期", range = 1..250)
  fast_length = 12,

  @meta(title = "长周期", range = 1..250)
  slow_length = 26,

  @meta(title = "移动平均周期", range = 1..250)
  signal_length = 26
}

// 定义一个函数
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

// 将结果渲染到图表
plot(macd, title = "MACD", color = #yellow);
plot(dea, title = "DEA", color = #blue);
plot(dif, title = "DIF", color = quote.close > quote.open ? #up : #down, style = plotstyle.histogram);
```
