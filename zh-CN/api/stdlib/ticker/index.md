---
title: "ticker"
---

# ticker

## 函数

### heikin_ashi {#heikin_ashi}

```navi
heikin_ashi(ticker_id: series String): series String
```

创建用于请求平均K线（Heikin Ashi）数据的代码标识符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要修改的基础代码标识符（例如 `syminfo.tickerid`）。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。

---

### inherit {#inherit}

```navi
inherit(from_ticker_id: series String, ticker_id: series String): series String
```

构建一个继承另一代码标识符所有修饰符的代码标识符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `from_ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 其修饰符被继承的代码标识符。 |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 提供交易品种的基础代码标识符。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。

---

### kagi {#kagi}

```navi
kagi(
    ticker_id: series String,
    param: series float,
    style: series BoxStyle = BoxStyle.Traditional
  ): series String
```

创建用于请求卡吉图（Kagi）数据的代码标识符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 基础代码标识符（例如 `symbol_info.tickerid`）。 |
| `param` | <code>series&nbsp;float</code> |  | 反转量（Traditional）或 ATR 周期（ATR）。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> | `BoxStyle.Traditional` | 箱体大小的确定方式。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。

---

### line_break {#line_break}

```navi
line_break(ticker_id: series String, num_lines: series int = 3): series String
```

创建用于请求折线图（Line Break）数据的代码标识符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要修改的基础代码标识符（例如 `symbol_info.tickerid`）。 |
| `num_lines` | <code>series&nbsp;int</code> | `3` | 用于折线计算的线数。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。

---

### modify {#modify}

```navi
modify(
    ticker_id: series String,
    session: series Session = na,
    adjustment: series Adjustment = na,
    backadjustment: simple BackAdjustment = na,
    settlement_as_close: simple SettlementAsClose = na
  ): series String
```

覆盖现有代码标识符上的数据修饰符，其余部分保持不变。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要修改的代码标识符。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Session">Session</a></code> | `na` | 时段类型。可选。 |
| `adjustment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Adjustment">Adjustment</a></code> | `na` | 价格复权类型。可选。 |
| `backadjustment` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BackAdjustment">BackAdjustment</a></code> | `na` | 连续期货合约的历史价格复权方式。可选。 |
| `settlement_as_close` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/SettlementAsClose">SettlementAsClose</a></code> | `na` | 是否以结算价作为收盘价。可选。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。

---

### new {#new}

```navi
new(
    market: series String,
    ticker: series String,
    session: series Session = Session.Regular,
    adjustment: series Adjustment = Adjustment.None,
    backadjustment: simple BackAdjustment = BackAdjustment.Inherit,
    settlement_as_close: simple SettlementAsClose = SettlementAsClose.Inherit
  ): series String
```

根据市场和代码名称以及指定的数据修饰符（时段、复权等）构建代码标识符，未指定的修饰符使用默认值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `market` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 交易品种所属市场（例如 `symbol_info.market`）。 |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 代码名称（例如 `symbol_info.ticker`）。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Session">Session</a></code> | `Session.Regular` | 时段类型。可选。 |
| `adjustment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Adjustment">Adjustment</a></code> | `Adjustment.None` | 价格复权类型。可选。 |
| `backadjustment` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BackAdjustment">BackAdjustment</a></code> | `BackAdjustment.Inherit` | 连续期货合约的历史价格复权方式。可选。 |
| `settlement_as_close` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/SettlementAsClose">SettlementAsClose</a></code> | `SettlementAsClose.Inherit` | 是否以结算价作为收盘价。可选。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。

---

### point_figure {#point_figure}

```navi
point_figure(
    ticker_id: series String,
    source: series PnfSource,
    style: series BoxStyle,
    param: series float,
    reversal: series int
  ): series String
```

创建用于请求点数图（Point & Figure）数据的代码标识符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 基础代码标识符（例如 `symbol_info.tickerid`）。 |
| `source` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PnfSource">PnfSource</a></code> |  | 计算箱体所用的价格来源（Hl / Close）。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> |  | 箱体大小的确定方式。 |
| `param` | <code>series&nbsp;float</code> |  | ATR 周期、箱体大小或百分比，取决于 `style`。 |
| `reversal` | <code>series&nbsp;int</code> |  | 反转量，以箱体数计。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。

---

### renko {#renko}

```navi
renko(
    ticker_id: series String,
    style: series BoxStyle = BoxStyle.Atr,
    param: series float = 10,
    request_wicks: series bool = false,
    source: series RenkoSource = RenkoSource.Close
  ): series String
```

创建用于请求砖形图（Renko）数据的代码标识符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 基础代码标识符（例如 `symbol_info.tickerid`）。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> | `BoxStyle.Atr` | 箱体大小的确定方式（ATR / Traditional / PercentageLtp）。 |
| `param` | <code>series&nbsp;float</code> | `10` | ATR 周期、箱体大小或百分比，取决于 `style`。 |
| `request_wicks` | <code>series&nbsp;bool</code> | `false` | 砖形图砖块是否包含影线值。 |
| `source` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/RenkoSource">RenkoSource</a></code> | `RenkoSource.Close` | 计算砖块所用的价格来源（Close / OHLC）。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。

---

### standard {#standard}

```navi
standard(ticker_id: series String): series String
```

创建用于请求标准图表数据的代码标识符，不受非标准图表类型修饰符（Heikin Ashi、Renko 等）的影响。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要修改的基础代码标识符（例如 `syminfo.tickerid`）。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> — 可用于 `request.security` 的代码标识符字符串。
