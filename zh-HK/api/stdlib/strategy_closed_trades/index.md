---
title: "strategy.closed_trades"
---

# strategy.closed_trades

## 屬性

### first_index {#first_index}

**類型:** <code>series&nbsp;int</code>

傳回第一筆平倉交易的 bar 索引，通常為 0。

## 函數

### commission {#commission}

```navi
commission(trade_num: int): series float
```

傳回已平倉交易中支付的入場費和出場費總和，以 `strategy.account_currency` 表示。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### entry_bar_index {#entry_bar_index}

```navi
entry_bar_index(trade_num: int): series int
```

傳回已平倉交易條目 bar 的 bar 索引。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;int</code>

---

### entry_comment {#entry_comment}

```navi
entry_comment(trade_num: int): series String
```

傳回已平倉交易的掛單註釋。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### entry_id {#entry_id}

```navi
entry_id(trade_num: int): series String
```

傳回已平倉交易的掛單 ID。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### entry_price {#entry_price}

```navi
entry_price(trade_num: int): series float
```

傳回已平倉交易的入場價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### entry_time {#entry_time}

```navi
entry_time(trade_num: int): series int
```

傳回已平倉交易的入場時間，以 UNIX 時間（毫秒）表示。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;int</code>

---

### exit_bar_index {#exit_bar_index}

```navi
exit_bar_index(trade_num: int): series int
```

傳回已平倉交易的退出 bar 的 bar 索引。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;int</code>

---

### exit_comment {#exit_comment}

```navi
exit_comment(trade_num: int): series String
```

傳回已平倉交易的退出訂單的註釋。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### exit_id {#exit_id}

```navi
exit_id(trade_num: int): series String
```

傳回已平倉交易的退出訂單 ID。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code>

---

### exit_price {#exit_price}

```navi
exit_price(trade_num: int): series float
```

傳回已平倉交易的退出價格。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### exit_time {#exit_time}

```navi
exit_time(trade_num: int): series int
```

傳回已平倉交易的退出時間，以 UNIX 時間（毫秒）表示。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;int</code>

---

### max_drawdown {#max_drawdown}

```navi
max_drawdown(trade_num: int): series float
```

傳回平倉交易期間的最大回撤（以 `strategy.account_currency` 為單位）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_drawdown_percent {#max_drawdown_percent}

```navi
max_drawdown_percent(trade_num: int): series float
```

傳回平倉交易期間的最大回撤（百分比）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_runup {#max_runup}

```navi
max_runup(trade_num: int): series float
```

傳回平倉交易期間的最大漲幅（在 `strategy.account_currency` 中）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### max_runup_percent {#max_runup_percent}

```navi
max_runup_percent(trade_num: int): series float
```

傳回平倉交易期間的最大漲幅（百分比）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### profit {#profit}

```navi
profit(trade_num: int): series float
```

傳回已平倉交易的利潤/虧損（以 `strategy.account_currency` 表示）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### profit_percent {#profit_percent}

```navi
profit_percent(trade_num: int): series float
```

傳回已平倉交易的利潤/虧損（百分比）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>

---

### size {#size}

```navi
size(trade_num: int): series float
```

傳回已平倉交易的規模（數量）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `trade_num` | <code>int</code> |  |  |

**返回:** <code>series&nbsp;float</code>
