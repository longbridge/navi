---
order: 6
---

# Struct

Like Navi, Navi Stream support struct.

## Struct definition

```nv
struct QuoteInfo {
    symbol: string,
    price: number,
    volume: number
}
```

## Struct initialization

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
