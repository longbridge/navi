---
title: "strategy.closed_trades"
---

# strategy.closed_trades

## Properties

### first_index {#first_index}

**Type:** <code>series&nbsp;int</code>

Returns the bar index of the first closed trade, usually 0.

## Functions

### commission {#commission}

```navi
commission(trade_num: int): series float
```

Returns the sum of entry and exit fees paid in the closed trade, expressed in `strategy.account_currency`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### entry_bar_index {#entry_bar_index}

```navi
entry_bar_index(trade_num: int): series int
```

Returns the bar index of the entry bar of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;int</code>

---

### entry_comment {#entry_comment}

```navi
entry_comment(trade_num: int): series String
```

Returns the comment of the entry order of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### entry_id {#entry_id}

```navi
entry_id(trade_num: int): series String
```

Returns the entry order ID of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### entry_price {#entry_price}

```navi
entry_price(trade_num: int): series float
```

Returns the entry price of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### entry_time {#entry_time}

```navi
entry_time(trade_num: int): series int
```

Returns the entry time of the closed trade, in UNIX time (milliseconds).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;int</code>

---

### exit_bar_index {#exit_bar_index}

```navi
exit_bar_index(trade_num: int): series int
```

Returns the bar index of the exit bar of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;int</code>

---

### exit_comment {#exit_comment}

```navi
exit_comment(trade_num: int): series String
```

Returns the comment of the exit order of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### exit_id {#exit_id}

```navi
exit_id(trade_num: int): series String
```

Returns the exit order ID of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### exit_price {#exit_price}

```navi
exit_price(trade_num: int): series float
```

Returns the exit price of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### exit_time {#exit_time}

```navi
exit_time(trade_num: int): series int
```

Returns the exit time of the closed trade, in UNIX time (milliseconds).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;int</code>

---

### max_drawdown {#max_drawdown}

```navi
max_drawdown(trade_num: int): series float
```

Returns the maximum drawdown (in `strategy.account_currency`) during the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### max_drawdown_percent {#max_drawdown_percent}

```navi
max_drawdown_percent(trade_num: int): series float
```

Returns the maximum drawdown (percent) during the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### max_runup {#max_runup}

```navi
max_runup(trade_num: int): series float
```

Returns the maximum run-up (in `strategy.account_currency`) during the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### max_runup_percent {#max_runup_percent}

```navi
max_runup_percent(trade_num: int): series float
```

Returns the maximum run-up (percent) during the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### profit {#profit}

```navi
profit(trade_num: int): series float
```

Returns the profit/loss (in `strategy.account_currency`) of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### profit_percent {#profit_percent}

```navi
profit_percent(trade_num: int): series float
```

Returns the profit/loss (percent) of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>

---

### size {#size}

```navi
size(trade_num: int): series float
```

Returns the size (quantity) of the closed trade.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**Returns:** <code>series&nbsp;float</code>
