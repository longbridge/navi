# 快速開始

使用 `navi` CLI 在本機檢查、格式化並執行 `.nv` 腳本。

## 安裝 Navi CLI

macOS 或 Linux：

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell：

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

執行 `navi --version` 確認安裝成功。

## 編寫第一個指標

建立 `sma.nv`：

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: Color.ORANGE);
```

## 驗證腳本

```bash
navi lint sma.nv
```

`lint` 會檢查語法、類型、編譯、導入和規範格式。準備 OHLCV CSV 後，可執行：

```bash
navi run sma.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

執行 `navi run --help` 可查看完整 CSV 格式和所有選項。

## 編寫策略

```navi
strategy("MA Cross", overlay: true);

let fast = ta.ema(close, input.int(10, "Fast"));
let slow = ta.ema(close, input.int(20, "Slow"));

if ta.cross_over(fast, slow) { strategy.entry("Long", Direction.Long); }
if ta.cross_under(fast, slow) { strategy.entry("Short", Direction.Short); }

plot(fast, "Fast EMA");
plot(slow, "Slow EMA");
```

```bash
navi lint macross.nv
navi run macross.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

## 執行 Pine Script 文件

使用 `--dialect pine` 參數可直接執行已有的 Pine Script 文件，無需修改任何程式碼：

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script my_indicator.pine --dialect pine
```

`--dialect` 參數用於指定腳本語言：

| 值 | 語言 |
|---|---|
| `navi` | Navi（`.nv` 文件的預設值） |
| `pine` | Pine Script V6（`.pine` 文件的預設值） |

如果文件使用了正確的副檔名（`.nv` 或 `.pine`），語言會自動識別，無需手動指定 `--dialect`。

### 轉換為 Navi

新腳本建議使用 Navi（`.nv`），可獲得完整的編輯器支援。下面是同一個布林帶指標分別用兩種語言編寫的對比：

```pine
// Pine Script
// @version=6
indicator("Bollinger Bands", overlay=true)

length = input.int(20, "Length")
mult   = input.float(2.0, "Multiplier")

[basis, upper, lower] = ta.bb(close, length, mult)

plot(basis, "Basis", color.blue)
plot(upper, "Upper", color.red)
plot(lower, "Lower", color.green)
fill(upper, lower, color.new(color.blue, 90))
```

```navi
// Navi
indicator("Bollinger Bands", overlay: true);

let length = input.int(20, "Length");
let mult   = input.float(2.0, "Multiplier");

let (basis, upper, lower) = ta.bb(close, length, mult);

plot(basis, "Basis", Color.BLUE);
let upper_plot = plot(upper, "Upper", Color.RED);
let lower_plot = plot(lower, "Lower", Color.GREEN);
fill(upper_plot, lower_plot, Color.new(Color.BLUE, 90));
```

## 下一步

- [語言基礎](/zh-HK/guide/language-basics)
- [標準庫](/zh-HK/api/stdlib/)
