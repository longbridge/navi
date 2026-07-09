---
title: "strategy.opentrades"
---

# strategy.opentrades

## 屬性

### capital_held {#capital_held}

**類型:** <code>series&nbsp;float</code>

傳回未平倉交易當前持有的資本金額。

## 函數

### commission {#commission}

```navi
strategy.opentrades.commission(trade_num: int): series float
```

傳回未平倉交易中支付的入場費和出場費總和，以 `strategy.account_currency` 表示。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### entry_bar_index {#entry_bar_index}

```navi
strategy.opentrades.entry_bar_index(trade_num: int): series int
```

傳回未平倉交易條目 bar 的 bar 索引。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;int</code>

---

### entry_comment {#entry_comment}

```navi
strategy.opentrades.entry_comment(trade_num: int): series string
```

傳回未平倉交易的掛單註釋。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;string</code>

---

### entry_id {#entry_id}

```navi
strategy.opentrades.entry_id(trade_num: int): series string
```

傳回未平倉交易的掛單 ID。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;string</code>

---

### entry_price {#entry_price}

```navi
strategy.opentrades.entry_price(trade_num: int): series float
```

傳回未平倉交易的入場價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### entry_time {#entry_time}

```navi
strategy.opentrades.entry_time(trade_num: int): series int
```

傳回未平倉交易的入場時間，以 UNIX 時間（毫秒）表示。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;int</code>

---

### max_drawdown {#max_drawdown}

```navi
strategy.opentrades.max_drawdown(trade_num: int): series float
```

傳回未平倉交易的最大回撤（以 `strategy.account_currency` 為單位）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_drawdown_percent {#max_drawdown_percent}

```navi
strategy.opentrades.max_drawdown_percent(trade_num: int): series float
```

傳回未平倉交易的最大回撤（百分比）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_runup {#max_runup}

```navi
strategy.opentrades.max_runup(trade_num: int): series float
```

傳回未平倉交易的最大漲幅（在 `strategy.account_currency` 中）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_runup_percent {#max_runup_percent}

```navi
strategy.opentrades.max_runup_percent(trade_num: int): series float
```

傳回未平倉交易的最大漲幅（百分比）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### profit {#profit}

```navi
strategy.opentrades.profit(trade_num: int): series float
```

傳回未平倉交易的當前盈利/虧損（以 `strategy.account_currency` 為單位）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### profit_percent {#profit_percent}

```navi
strategy.opentrades.profit_percent(trade_num: int): series float
```

傳回未平倉交易的當前利潤/損失（百分比）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### size {#size}

```navi
strategy.opentrades.size(trade_num: int): series float
```

傳回未平倉交易的規模（數量）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>
