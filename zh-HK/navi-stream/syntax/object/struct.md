---
order: 6
---

# 结构体

与 Navi 一样，Navi Stream 支持结构体 Struct。

## Struct 定义

```nv
struct QuoteInfo {
    symbol: string,
    price: number,
    volume: number
}
```

## Struct 初始化

```nv
let quote_info = QuoteInfo {
    symbol: "AAPL",
    price: 100.0,
    volume: 1000
}

// Mutate struct
quote_info.symbol = "MSFT"
quote_info.price = 200.0
```
