---
title: "strategy.opentrades"
---

# strategy.opentrades

## 属性

### capital_held {#capital_held}

**类型:** <code>series&nbsp;float</code>

返回未平仓交易当前持有的资本金额。

## 函数

### commission {#commission}

```navi
strategy.opentrades.commission(trade_num: int): series float
```

返回未平仓交易中支付的入场费和出场费总和，以 `strategy.account_currency` 表示。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### entry_bar_index {#entry_bar_index}

```navi
strategy.opentrades.entry_bar_index(trade_num: int): series int
```

返回未平仓交易条目 bar 的 bar 索引。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;int</code>

---

### entry_comment {#entry_comment}

```navi
strategy.opentrades.entry_comment(trade_num: int): series string
```

返回未平仓交易的挂单注释。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;string</code>

---

### entry_id {#entry_id}

```navi
strategy.opentrades.entry_id(trade_num: int): series string
```

返回未平仓交易的挂单 ID。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;string</code>

---

### entry_price {#entry_price}

```navi
strategy.opentrades.entry_price(trade_num: int): series float
```

返回未平仓交易的入场价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### entry_time {#entry_time}

```navi
strategy.opentrades.entry_time(trade_num: int): series int
```

返回未平仓交易的入场时间，以 UNIX 时间（毫秒）表示。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;int</code>

---

### max_drawdown {#max_drawdown}

```navi
strategy.opentrades.max_drawdown(trade_num: int): series float
```

返回未平仓交易的最大回撤（以 `strategy.account_currency` 为单位）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_drawdown_percent {#max_drawdown_percent}

```navi
strategy.opentrades.max_drawdown_percent(trade_num: int): series float
```

返回未平仓交易的最大回撤（百分比）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_runup {#max_runup}

```navi
strategy.opentrades.max_runup(trade_num: int): series float
```

返回未平仓交易的最大涨幅（在 `strategy.account_currency` 中）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_runup_percent {#max_runup_percent}

```navi
strategy.opentrades.max_runup_percent(trade_num: int): series float
```

返回未平仓交易的最大涨幅（百分比）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### profit {#profit}

```navi
strategy.opentrades.profit(trade_num: int): series float
```

返回未平仓交易的当前盈利/亏损（以 `strategy.account_currency` 为单位）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### profit_percent {#profit_percent}

```navi
strategy.opentrades.profit_percent(trade_num: int): series float
```

返回未平仓交易的当前利润/损失（百分比）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### size {#size}

```navi
strategy.opentrades.size(trade_num: int): series float
```

返回未平仓交易的规模（数量）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>
