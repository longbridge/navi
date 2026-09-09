---
title: "ticker"
---

# ticker

## 函數

### heikin_ashi {#heikin_ashi}

```navi
heikin_ashi(ticker_id: series String): series String
```

建立用於請求平均K線（Heikin Ashi）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要修改的基礎代碼標識符（例如 `syminfo.tickerid`）。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。

---

### inherit {#inherit}

```navi
inherit(from_ticker_id: series String, ticker_id: series String): series String
```

建構一個繼承另一代碼識別符所有修飾符的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `from_ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 其修飾符被繼承的代碼標識符。 |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 提供交易品種的基礎代碼標識符。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。

---

### kagi {#kagi}

```navi
kagi(
    ticker_id: series String,
    param: series float,
    style: series BoxStyle = BoxStyle.Traditional
  ): series String
```

建立用於請求卡吉圖（Kagi）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 基礎代碼標識符（例如 `symbol_info.tickerid`）。 |
| `param` | <code>series&nbsp;float</code> |  | 反轉量（Traditional）或 ATR 週期（ATR）。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> | `BoxStyle.Traditional` | 箱體大小的確定方式。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。

---

### line_break {#line_break}

```navi
line_break(ticker_id: series String, num_lines: series int = 3): series String
```

建立用於請求折線圖（Line Break）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要修改的基礎代碼標識符（例如 `symbol_info.tickerid`）。 |
| `num_lines` | <code>series&nbsp;int</code> | `3` | 用於折線計算的線數。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。

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

覆寫現有代碼識別符上的數據修飾符，其餘部分保持不變。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要修改的代碼標識符。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Session">Session</a></code> | `na` | 時段類型。可選。 |
| `adjustment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Adjustment">Adjustment</a></code> | `na` | 價格復權類型。可選。 |
| `backadjustment` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BackAdjustment">BackAdjustment</a></code> | `na` | 連續期貨合約的歷史價格復權方式。可選。 |
| `settlement_as_close` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/SettlementAsClose">SettlementAsClose</a></code> | `na` | 是否以結算價作為收盤價。可選。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。

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

根據市場和代碼名稱以及指定的數據修飾符（時段、複權等）構建代碼標識符，未指定的修飾符使用默認值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `market` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 交易品種所屬市場（例如 `symbol_info.market`）。 |
| `ticker` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 代碼名稱（例如 `symbol_info.ticker`）。 |
| `session` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Session">Session</a></code> | `Session.Regular` | 時段類型。可選。 |
| `adjustment` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Adjustment">Adjustment</a></code> | `Adjustment.None` | 價格復權類型。可選。 |
| `backadjustment` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BackAdjustment">BackAdjustment</a></code> | `BackAdjustment.Inherit` | 連續期貨合約的歷史價格復權方式。可選。 |
| `settlement_as_close` | <code>simple&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/SettlementAsClose">SettlementAsClose</a></code> | `SettlementAsClose.Inherit` | 是否以結算價作為收盤價。可選。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。

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

建立用於請求點數圖（Point & Figure）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 基礎代碼標識符（例如 `symbol_info.tickerid`）。 |
| `source` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PnfSource">PnfSource</a></code> |  | 計算箱體所用的價格來源（Hl / Close）。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> |  | 箱體大小的確定方式。 |
| `param` | <code>series&nbsp;float</code> |  | ATR 週期、箱體大小或百分比，取決於 `style`。 |
| `reversal` | <code>series&nbsp;int</code> |  | 反轉量，以箱體數計。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。

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

建立用於請求磚形圖（Renko）數據的代碼識別符。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 基礎代碼標識符（例如 `symbol_info.tickerid`）。 |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/BoxStyle">BoxStyle</a></code> | `BoxStyle.Atr` | 箱體大小的確定方式（ATR / Traditional / PercentageLtp）。 |
| `param` | <code>series&nbsp;float</code> | `10` | ATR 週期、箱體大小或百分比，取決於 `style`。 |
| `request_wicks` | <code>series&nbsp;bool</code> | `false` | 磚形圖磚塊是否包含影線值。 |
| `source` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/RenkoSource">RenkoSource</a></code> | `RenkoSource.Close` | 計算磚塊所用的價格來源（Close / OHLC）。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。

---

### standard {#standard}

```navi
standard(ticker_id: series String): series String
```

建立用於請求標準圖表數據的代碼識別符，不受非標準圖表類型修飾符（Heikin Ashi、Renko 等）的影響。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `ticker_id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> |  | 要修改的基礎代碼標識符（例如 `syminfo.tickerid`）。 |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/String">String</a></code> — 可用於 `request.security` 的代碼標識符字符串。
