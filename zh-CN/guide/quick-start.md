# 快速开始

使用 `navi` CLI 在本地检查、格式化并运行 `.nv` 脚本。

## 安装 Navi CLI

macOS 或 Linux：

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell：

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

运行 `navi --version` 确认安装成功。

## 编写第一个指标

创建 `sma.nv`：

```navi
indicator("SMA", overlay: true);

let len = input.int(14, "Length", minval: 1);
plot(ta.sma(close, len), "SMA", color: Color.ORANGE);
```

## 验证脚本

```bash
navi lint sma.nv
```

`lint` 会检查语法、类型、编译、导入和规范格式。准备 OHLCV CSV 后，可执行：

```bash
navi run sma.nv --data bars.csv --symbol NASDAQ:AAPL --timeframe 1D
```

运行 `navi run --help` 可查看完整 CSV 格式和所有选项。

## 编写策略

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

## 运行 Pine Script 文件

使用 `--dialect pine` 参数可直接运行已有的 Pine Script 文件，无需修改任何代码：

```bash
longbridge quant run AAPL.US --start 2024-01-01 --end 2024-12-31 --script my_indicator.pine --dialect pine
```

`--dialect` 参数用于指定脚本语言：

| 值 | 语言 |
|---|---|
| `navi` | Navi（`.nv` 文件的默认值） |
| `pine` | Pine Script V6（`.pine` 文件的默认值） |

如果文件使用了正确的扩展名（`.nv` 或 `.pine`），语言会自动识别，无需手动指定 `--dialect`。

### 转换为 Navi

新脚本建议使用 Navi（`.nv`），可获得完整的编辑器支持。下面是同一个布林带指标分别用两种语言编写的对比：

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

- [语言基础](/zh-CN/guide/language-basics)
- [标准库](/zh-CN/api/stdlib/)
