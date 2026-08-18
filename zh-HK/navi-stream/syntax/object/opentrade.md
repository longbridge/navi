---
order: 8
---

# OpenTrade

OpenTrade is a type of object that represents a open market position.

## Methods

### size

`size(): number`

Returns the size of the open trade.

Returns the direction and the number of contracts traded in the open trade. If the value is > 0, the market position was long. If the value is < 0, the market position was short.

### entry_price

`entry_price(): number`

Returns the entry price of the open trade.

### entry_time

`entry_time(): datetime`

Returns the entry time of the open trade.

### profit

`profit(): number`

Returns the profit/loss of the open trade. Losses are expressed as negative values.

### profit_percent

`profit_percent(): number`

Returns the profit/loss of the open trade, expressed as a percentage of the initial capital. Losses are expressed as negative values.

### max_runup

`max_runup(): number`

Returns the maximum run-up of the open trade, i.e., the maximum possible profit during the trade.

### max_runup_percent

`max_runup_percent(): number`

Returns the maximum run-up of the open trade, i.e., the maximum possible profit during the trade, expressed as a percentage and calculated by formula: `Highest Value During Trade / (Entry Price x Quantity)`.

### max_drawdown

`max_drawdown(): number`

Returns the maximum drawdown of the open trade, i.e., the maximum possible loss during the trade.

### max_drawdown_percent

`max_drawdown_percent(): number`

Returns the maximum drawdown of the open trade, i.e., the maximum possible loss during the trade, expressed as a percentage and calculated by formula: `Lowest Value During Trade / (Entry Price x Quantity)`.

### commission

`commission(): number`

Returns the sum of entry and exit fees paid in the open trade.
