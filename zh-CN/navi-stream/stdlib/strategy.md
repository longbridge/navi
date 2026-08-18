---
order: 5
---

# strategy

## METADATA

Strategy metadata is defined in the `meta` block. Here is an example:

```nv
meta {
    title = "My Strategy",
    initial_cash = 1000000,
    commission = "fixed=15,percent=0.001105",
    allow_entry_in = allow_entry_in.long,
    initial_margin_long = 0.7,
    initial_margin_short = 0.7,
}
```

### initial_cash

`initial_cash: number`

Initial cash.

Default is `1000000`.

### allow_entry_in

`allow_entry_in: allow_entry_in`

Used to specify in which market direction the `strategy.entry` function is allowed to open positions. Possible values: `allow_entry_in.long`, `allow_entry_in.short`, `allow_entry_in.both`.

Default is `allow_entry_in.both`.

### commission

`commission: string`

Commission for each transaction.

The format is `type=value`, where `type` is one of `percent`, `fixed`, `cash-per-contract`.

You can use multiple commissions by separating them with a comma (e.g., `percent=0.1,fixed=10`).

Default is ``.

### initial_margin_long

Margin rate for initial long positions.

Default is `1.0`.

### initial_margin_short

Margin rate for initial short positions.

Default is `1.0`.

### maintenance_margin_long

Margin rate for maintenance long positions.

Default is `0`.

### maintenance_margin_short

Margin rate for maintenance short positions.

Default is `0`.

### slippage

`slippage: number`

Slippage for each transaction.

Default is `0`.

### risk_free_rate

`risk_free_rate: number`

Risk-free rate of return is the annual percentage change in the value of an investment with minimal or zero risk. It is used to calculate the [Sharpe](https://en.wikipedia.org/wiki/Sharpe_ratio) and [Sortino](https://en.wikipedia.org/wiki/Sortino_ratio) ratios.

Default is `0.02`.

## entry

`entry(id: string, side: direction, qty: int = nil, qty_percent: number = nil, limit: number = nil, stop: number = nil, remark: string = nil)`

Creates a new order to open or add to a position.

If the call does not contain `limit` or `stop` arguments, it creates a `market order`.
If the call specifies a `limit` value but no `stop` value, it places a `limit order` that executes after the market price reaches the `limit` value or a better price (lower for buy orders and higher for sell orders).
If the call specifies a `stop` value but no `limit` value, it places a `stop order` that executes after the market price reaches the `stop` value or a worse price (higher for buy orders and lower for sell orders).
If the call contains `limit` and `stop` arguments, it creates a `stop-limit` order, which generates a `limit order` at the `limit` price only after the market price reaches the `stop` value or a worse price.

Orders from this command, unlike those from `strategy.order`, are affected by the `pyramiding` parameter. Pyramiding specifies the number of concurrent open entries allowed per position. For example, with `pyramiding = 3`, the strategy can have up to three open trades, and the command cannot create orders to open additional trades until at least one existing trade closes.

When a strategy executes an order from this command in the opposite direction of the current market position, it reverses that position.
For example, if there is an open long position of five shares, an order from this command with a `quantity` of 5 and a direction of `direction.short` triggers the sale of 10 shares to close the long position and open a new five-share short position.
Users can change this behavior by specifying an allowed direction with the `METADATA: allow_entry_in`.

## order

`order(id: string, side: direction, qty: int = nil, qty_percent: number = nil, limit: number = nil, stop: number = nil, remark: string = nil)`

Creates a new order to open, add to, or exit from a position.

If the call does not contain `limit` or `stop` arguments, it creates a `market order`.
If the call specifies a `limit` value but no `stop` value, it places a `limit order` that executes after the market price reaches the `limit` value or a better price (lower for buy orders and higher for sell orders).
If the call specifies a `stop` value but no `limit` value, it places a `stop order` that executes after the market price reaches the `stop` value or a worse price (higher for buy orders and lower for sell orders).
If the call contains `limit` and `stop` arguments, it creates a `stop-limit` order, which generates a `limit order` at the `limit` price only after the market price reaches the `stop` value or a worse price.

Orders from this command, unlike those from `strategy.entry`, are not affected by the `pyramiding` parameter. Strategies can open any number of trades in the same direction with calls to this function.

This command does not automatically reverse open positions because it does not exclusively create entry orders like `strategy.entry` does.
For example, if there is an open long position of five shares, an order from this command with a `quantity` of 5 and a direction of `direction.short` triggers the sale of five shares, which closes the position.

## close

`close(id: string, qty: number = nil, qty_percent: number = nil, remark: string = nil)`

Creates an order to exit from the part of a position opened by entry orders with a specific identifier. If multiple entries in the position share the same ID, the orders from this command apply to all those entries, starting from the first open trade, when its calls use that ID as the id argument.

This command always generates market orders.

## cancel

`cancel(id: string)`

Cancels a pending or unfilled order with a specific identifier. If multiple unfilled orders share the same ID, calling this command with that ID as the id argument cancels all of them. If a script calls this command with an id representing the ID of a filled order, it has no effect.

## cancel_all

`cancel_all()`

Cancels all pending or unfilled orders, regardless of their identifiers.

This command is most useful when working with price-based orders (e.g., limit orders).


## initial_cash

`initial_cash(): number`

Returns the amount of initial capital set in the strategy properties.

## equity

`equity(): number`

Returns current equity `(strategy.initial_cash + strategy.net_profit + strategy.open_profit)`.

## position_size

`position_size(): number`

Returns the direction and size of the current market position. If the value is > 0, the market position is long. If the value is < 0, the market position is short.

## avg_trade

`avg_trade(): number`

Returns the average amount of money gained or lost per trade. Calculated as the sum of all profits and losses divided by the number of closed trades.

## avg_trade_percent

`avg_trade_percent(): number`

Returns the average percentage gain or loss per trade. Calculated as the sum of all profit and loss percentages divided by the number of closed trades.

## net_profit

`net_profit(): number`

Returns the total currency value of all completed trades.

## net_profit_percent

`net_profit_percent(): number`

Returns the total value of all completed trades, expressed as a percentage of the initial capital.

## gross_profit

`gross_profit(): number`

Returns the total currency value of all completed winning trades.

## gross_profit_percent

`gross_profit_percent(): number`

Returns the total currency value of all completed winning trades, expressed as a percentage of the initial capital.

## gross_loss

`gross_loss(): number`

Returns the total currency value of all completed losing trades.

## gross_loss_percent

`gross_loss_percent(): number`

Returns the total currency value of all completed losing trades, expressed as a percentage of the initial capital.

## open_profit

`open_profit(): number`

Returns the total currency value of all open trades.

## max_runup

`max_runup(): number`

Returns the maximum equity run-up value for the whole trading interval.

## max_runup_percent

`max_runup_percent(): number`

Returns the maximum equity run-up value for the whole trading interval, expressed as a percentage and calculated by formula: `Highest Value During Trade / (Entry Price x Quantity)`.

## max_drawdown

`max_drawdown(): number`

Returns the maximum equity drawdown value for the whole trading interval.

## max_drawdown_percent

`max_drawdown_percent(): number`

Returns the maximum equity drawdown value for the whole trading interval, expressed as a percentage and calculated by formula: `Lowest Value During Trade / (Entry Price x Quantity)`.

## max_held_all

`max_held_all(): number`

Returns the maximum number of contracts/shares/lots/units in one trade for the whole trading interval.

## max_held_long

`max_held_long(): number`

Returns the maximum number of contracts/shares/lots/units in one long trade for the whole trading interval.

## max_held_short

`max_held_short(): number`

Returns the maximum number of contracts/shares/lots/units in one short trade for the whole trading interval.

## position_avg_price

`position_avg_price(): number`

Returns the average entry price of current market position. If the market position is flat, `nil` is returned.

## win_trades

`win_trades(): [closedtrade]`

Returns an array of profitable trades for the whole trading interval.

## loss_trades

`loss_trades(): [closedtrade]`

Returns an array of losing trades for the whole trading interval.

## open_trades

`open_trades(): [opentrade]`

Returns an array of open trades.

## closed_trades

`closed_trades(): [closedtrade]`

Returns an array of closed trades.

## margin_liquidation_price

`margin_liquidation_price(): number`

When margin is used in a strategy, returns the price point where a simulated margin call will occur and liquidate enough of the position to meet the margin requirements.
