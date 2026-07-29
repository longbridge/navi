---
title: "ta"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
const _s2 = ref(0)
const _s3 = ref(0)
const _s4 = ref(0)
const _s5 = ref(0)
const _s6 = ref(0)
const _s7 = ref(0)
</script>

# ta

## 类型

| 名称 | 说明 |
| --- | --- |
| [`PivotType`](/zh-CN/api/stdlib/ta/PivotType) | `ta.pivot_point_levels` 所使用的枢轴点计算方法。 |

## 属性

### accdist {#accdist}

**类型:** <code>series&nbsp;float</code>

累积/分配线 (ADL)。它衡量流入和流出证券的累计资金流量。

---

### iii {#iii}

**类型:** <code>series&nbsp;float</code>

日内强度指数（III）。它测量证券流入和流出的流量。

---

### nvi {#nvi}

**类型:** <code>series&nbsp;float</code>

负成交量指数（NVI）。它重点关注交易量较前一天减少的日子。

---

### obv {#obv}

**类型:** <code>const&nbsp;float</code>

平衡交易量 (OBV)。它将买卖压力作为累积指标来衡量，该指标在上涨日增加成交量，在下跌日减少成交量。

---

### pvi {#pvi}

**类型:** <code>const&nbsp;float</code>

正成交量指数（PVI）。它重点关注成交量较前一天增加的日子。

---

### pvt {#pvt}

**类型:** <code>const&nbsp;float</code>

价量趋势 (PVT)。它结合价格和成交量来确定价格变动的强度。

---

### tr {#prop-tr}

**类型:** <code>series&nbsp;float</code>

启用 na 处理的真实范围 (TR)。相当于 `ta.tr(handle_na = true)`。

---

### vwap {#prop-vwap}

**类型:** <code>series&nbsp;float</code>

使用 hlc3 作为来源的每日成交量加权平均价格。每天开始时重置。这是大多数交易平台使用的标准 VWAP。

---

### wad {#wad}

**类型:** <code>const&nbsp;float</code>

威廉姆斯累积/派发 (WAD)。它通过比较收盘价与高低范围来衡量买卖压力。

---

### wvad {#wvad}

**类型:** <code>const&nbsp;float</code>

威廉姆斯变量累积/分配 (WVAAD)。它通过考虑收盘价在真实范围内的位置来调整累积/派发计算。

## 函数

### alma {#alma}

```navi
alma(
    series: series float,
    length: series int,
    offset: simple float,
    sigma: simple float,
    floor: simple bool = false
  ): series float
```

阿诺·勒古移动平均线。它使用高斯分布作为移动平均的权重。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 要处理的一系列值。 |
| `length` | <code>series&nbsp;int</code> |  | bars 数量（长度）。 |
| `offset` | <code>simple&nbsp;float</code> |  | 控制平滑度（接近 1）和响应度（接近 0）之间的权衡。 |
| `sigma` | <code>simple&nbsp;float</code> |  | 更改 ALMA 的平滑度。西格玛越大，ALMA 越平滑。 |
| `floor` | <code>simple&nbsp;bool</code> | `false` | 指定在计算 ALMA 之前是否对偏移计算进行下限。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::sma" href="/zh-CN/api/stdlib/ta/#sma">ta.sma</a>, <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>

---

### atr {#atr}

```navi
atr(length: simple int): series float
```

计算指定 `length` 上金融工具的平均真实波幅 ​​(ATR)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | 用于 ATR 计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::rma" href="/zh-CN/api/stdlib/ta/#rma">ta.rma</a>, <a class="stdlib-ref" data-key="ta::supertrend" href="/zh-CN/api/stdlib/ta/#supertrend">ta.supertrend</a>

---

### bars_since {#bars_since}

```navi
bars_since(condition: series bool): series int
```

计算自上次条件为真以来 bars 的数量。如果条件从未成立，则返回 na。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  | 要检查的布尔条件。 |

**返回:** <code>series&nbsp;int</code> — 自上次条件为真以来 bars 的数量，如果从未为真，则为 `na`。

**参见:** <a class="stdlib-ref" data-key="ta::highest_bars" href="/zh-CN/api/stdlib/ta/#highest_bars">ta.highest_bars</a>, <a class="stdlib-ref" data-key="ta::lowest_bars" href="/zh-CN/api/stdlib/ta/#lowest_bars">ta.lowest_bars</a>

---

### bb {#bb}

```navi
bb(series: series float, length: series int, mult: simple float)
```

布林线 (BB)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | BB 计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |
| `mult` | <code>simple&nbsp;float</code> |  | 标准差带的乘数。 |

**返回:** `[basis, upper, lower]` 的元组，其中基础是 SMA，上限/下限是基础 ± mult × stdev。

**示例**

```navi
let (bbBasis, bbUpper, bbLower) = ta.bb(close, 20, 2.0);
plot(bbBasis, title: "BB Basis", color: Color.ORANGE);
plot(bbUpper, title: "BB Upper", color: Color.BLUE);
plot(bbLower, title: "BB Lower", color: Color.BLUE);
```

**参见:** <a class="stdlib-ref" data-key="ta::bbw" href="/zh-CN/api/stdlib/ta/#bbw">ta.bbw</a>, <a class="stdlib-ref" data-key="ta::sma" href="/zh-CN/api/stdlib/ta/#sma">ta.sma</a>, <a class="stdlib-ref" data-key="ta::stdev" href="/zh-CN/api/stdlib/ta/#stdev">ta.stdev</a>

---

### bbw {#bbw}

```navi
bbw(source: series float, length: series int, mult: simple float): series float
```

布林带宽度 (BBW)。它衡量布林带相对于移动平均线的宽度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | BBW 计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |
| `mult` | <code>simple&nbsp;float</code> |  | 标准差带的乘数。 |

**返回:** <code>series&nbsp;float</code> — 带宽百分比：`(upper - lower) / basis × 100`。

**参见:** <a class="stdlib-ref" data-key="ta::bb" href="/zh-CN/api/stdlib/ta/#bb">ta.bb</a>, <a class="stdlib-ref" data-key="ta::stdev" href="/zh-CN/api/stdlib/ta/#stdev">ta.stdev</a>

---

### cci {#cci}

```navi
cci(source: series float, length: series int): series float
```

商品通道指数（CCI）。它测量 `series` 系列与其统计平均值的偏差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::sma" href="/zh-CN/api/stdlib/ta/#sma">ta.sma</a>, <a class="stdlib-ref" data-key="ta::dev" href="/zh-CN/api/stdlib/ta/#dev">ta.dev</a>

---

### change {#change}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">change</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">change</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">change</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 1</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span>"]' />

<div v-show="_s0 === 0">

计算当前 `source` 值与其前值 `length` bars 之间的差值。对于测量动量或变化率很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;int</code> |  | 要比较的整数系列。 |
| `length` | <code>series&nbsp;int</code> | `1` | 要回顾的 bars 数量。默认为 1（之前的 bar）。 |

**返回:** <code>series&nbsp;int</code> — __代码0__。

</div>

<div v-show="_s0 === 1">

计算当前 `source` 值与其前值 `length` bars 之间的差值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要比较的浮动系列。 |
| `length` | <code>series&nbsp;int</code> | `1` | 要回顾的 bars 数量。默认为 1（之前的 bar）。 |

**返回:** <code>series&nbsp;float</code> — __代码0__。

</div>

<div v-show="_s0 === 2">

检测布尔值是否较 `length` bars 之前的值发生更改。对于检测状态转换（例如信号翻转）很有用。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;bool</code> |  | 要比较的布尔系列。 |
| `length` | <code>series&nbsp;int</code> | `1` | 要回顾的 bars 数量。默认为 1（之前的 bar）。 |

**返回:** <code>series&nbsp;bool</code> — 如果当前值与历史值不同，则为 `true`，否则为 `false`。

</div>

---

### chop {#chop}

```navi
chop(length: simple int): series float
```

震荡指数（CHOP）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | The lookback period (must be &gt;= 2). |

**返回:** <code>series&nbsp;float</code>

---

### cmf {#cmf}

```navi
cmf(length: simple int): series float
```

蔡金资金流量（CMF）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `length` | <code>simple&nbsp;int</code> |  | The number of bars to accumulate. |

**返回:** <code>series&nbsp;float</code>

---

### cmo {#cmo}

```navi
cmo(series: series float, length: series int): series float
```

钱德动量振荡器 (CMO)。它测量 `series` 系列在指定 `length` 上的动量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 介于 -100 和 100 之间的值。正值表示向上动量，负值表示向下动量。

**参见:** <a class="stdlib-ref" data-key="ta::change" href="/zh-CN/api/stdlib/ta/#change">ta.change</a>

---

### cog {#cog}

```navi
cog(source: series float, length: series int): series float
```

重心 (COG)。它标识 `source` 系列在指定 `length` 上的重心。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

---

### correlation {#correlation}

```navi
correlation(
    source1: series float,
    source2: series float,
    length: series int
  ): series float
```

指定 `length` 上两个系列之间的皮尔逊相关系数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | 第一个输入系列。 |
| `source2` | <code>series&nbsp;float</code> |  | 第二个输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 介于 -1.0（完全负相关）和 1.0（完全正相关）之间的值。 0.0 表示没有线性相关。

---

### cross {#cross}

```navi
cross(source1: series float, source2: series float): series bool
```

检测 `source1` 是否在任一方向上穿过 `source2`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | 第一个要比较的系列。 |
| `source2` | <code>series&nbsp;float</code> |  | 要比较的第二个系列。 |

**返回:** <code>series&nbsp;bool</code>

**参见:** <a class="stdlib-ref" data-key="ta::cross_over" href="/zh-CN/api/stdlib/ta/#cross_over">ta.cross_over</a>, <a class="stdlib-ref" data-key="ta::cross_under" href="/zh-CN/api/stdlib/ta/#cross_under">ta.cross_under</a>

---

### cross_over {#cross_over}

```navi
cross_over(source1: series float, source2: series float): series bool
```

检测 `source1` 是否越过 `source2`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | 第一个要比较的系列。 |
| `source2` | <code>series&nbsp;float</code> |  | 要比较的第二个系列。 |

**返回:** <code>series&nbsp;bool</code>

**示例**

```navi
let fastEma = ta.ema(close, 9);
let slowEma = ta.ema(close, 21);
if ta.cross_over(fastEma, slowEma) {
label.new(bar_index, low, "Buy", style: LabelStyle.Up);
}
```

**参见:** <a class="stdlib-ref" data-key="ta::cross_under" href="/zh-CN/api/stdlib/ta/#cross_under">ta.cross_under</a>, <a class="stdlib-ref" data-key="ta::cross" href="/zh-CN/api/stdlib/ta/#cross">ta.cross</a>

---

### cross_under {#cross_under}

```navi
cross_under(source1: series float, source2: series float): series bool
```

检测 `source1` 是否越过 `source2`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source1` | <code>series&nbsp;float</code> |  | 第一个要比较的系列。 |
| `source2` | <code>series&nbsp;float</code> |  | 要比较的第二个系列。 |

**返回:** <code>series&nbsp;bool</code>

**示例**

```navi
let fastEma = ta.ema(close, 9);
let slowEma = ta.ema(close, 21);
if ta.cross_under(fastEma, slowEma) {
label.new(bar_index, high, "Sell", style: LabelStyle.Down);
}
```

**参见:** <a class="stdlib-ref" data-key="ta::cross_over" href="/zh-CN/api/stdlib/ta/#cross_over">ta.cross_over</a>, <a class="stdlib-ref" data-key="ta::cross" href="/zh-CN/api/stdlib/ta/#cross">ta.cross</a>

---

### cum {#cum}

```navi
cum(source: series float): series float
```

`source` 系列的累积和。换句话说，它是 `source` 系列所有元素的总和。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要累积的输入系列。 |

**返回:** <code>series&nbsp;float</code>

---

### dema {#dema}

```navi
dema(source: series float, length: simple int): series float
```

双重指数移动平均线（DEMA）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The series to smooth. |
| `length` | <code>simple&nbsp;int</code> |  | The smoothing period. |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>, <a class="stdlib-ref" data-key="ta::tema" href="/zh-CN/api/stdlib/ta/#tema">ta.tema</a>

---

### dev {#dev}

```navi
dev(source: series float, length: series int): series float
```

`source` 系列相对于指定 `length` 的平均偏差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

---

### dmi {#dmi}

```navi
dmi(di_length: simple int, adx_smoothing: simple int)
```

定向运动指数（DMI）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `di_length` | <code>simple&nbsp;int</code> |  | 方向指标计算的长度。 |
| `adx_smoothing` | <code>simple&nbsp;int</code> |  | ADX 计算的平滑长度。 |

**返回:** `[plus_di, minus_di, adx]` 的元组，全部表示为百分比 (0–100)。

**参见:** <a class="stdlib-ref" data-key="ta::atr" href="/zh-CN/api/stdlib/ta/#atr">ta.atr</a>, <a class="stdlib-ref" data-key="ta::rma" href="/zh-CN/api/stdlib/ta/#rma">ta.rma</a>

---

### ema {#ema}

```navi
ema(source: series float, length: simple int): series float
```

指数移动平均线 (EMA)。它更加重视最近的价格，使其对新信息更加敏感。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**示例**

```navi
let ema12 = ta.ema(close, 12);
let ema26 = ta.ema(close, 26);
plot(ema12, title: "EMA 12", color: Color.GREEN);
plot(ema26, title: "EMA 26", color: Color.RED);
```

**参见:** <a class="stdlib-ref" data-key="ta::sma" href="/zh-CN/api/stdlib/ta/#sma">ta.sma</a>, <a class="stdlib-ref" data-key="ta::wma" href="/zh-CN/api/stdlib/ta/#wma">ta.wma</a>, <a class="stdlib-ref" data-key="ta::rma" href="/zh-CN/api/stdlib/ta/#rma">ta.rma</a>, <a class="stdlib-ref" data-key="ta::dema" href="/zh-CN/api/stdlib/ta/#dema">ta.dema</a>, <a class="stdlib-ref" data-key="ta::tema" href="/zh-CN/api/stdlib/ta/#tema">ta.tema</a>

---

### falling {#falling}

```navi
falling(source: series float, length: series int): series bool
```

检查 `source` 系列是否超出指定的 `length`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要检查的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;bool</code>

**参见:** <a class="stdlib-ref" data-key="ta::rising" href="/zh-CN/api/stdlib/ta/#rising">ta.rising</a>

---

### highest {#highest}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">highest</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">highest</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s1 === 0">

返回 `high` 系列在指定 `length` 上的最高值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

</div>

<div v-show="_s1 === 1">

返回 `source` 系列在指定 `length` 上的最高值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**示例**

```navi
let highestHigh = ta.highest(high, 20);
plot(highestHigh, title: "20-bar High", color: Color.RED,
style: PlotStyle.Stepline);
```

</div>

---

### highest_bars {#highest_bars}

<OverloadTabs v-model="_s2" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">highest_bars</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">highest_bars</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s2 === 0">

返回自指定 `length` 上 `source` 系列的最高值以来 bars 的数量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;int</code> — 非正偏移量（如果最高的是当前 bar，则为 0，否则为负），或者如果窗口中的任何值为 `na`，则为 `na`。

</div>

<div v-show="_s2 === 1">

返回自指定 `length` 上 `high` 系列的最高值以来 bars 的数量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;int</code>

</div>

---

### hma {#hma}

```navi
hma(source: series float, length: simple int): series float
```

船体移动平均线（HMA）。其目的是在保持平滑曲线的同时减少滞后。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::sma" href="/zh-CN/api/stdlib/ta/#sma">ta.sma</a>, <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>, <a class="stdlib-ref" data-key="ta::wma" href="/zh-CN/api/stdlib/ta/#wma">ta.wma</a>

---

### kc {#kc}

```navi
kc(
    series: series float,
    length: simple int,
    mult: simple float,
    use_true_range: simple bool = true
  )
```

肯特纳通道 (KC)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | KC 计算的输入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用于计算的 bars 数量。 |
| `mult` | <code>simple&nbsp;float</code> |  | 通道频带的乘数。 |
| `use_true_range` | <code>simple&nbsp;bool</code> | `true` | 是否使用真实范围。 |

**返回:** `[basis, upper, lower]` 的元组，其中基础是 EMA，上限/下限是基础 ± 乘数 × 范围 EMA。

**参见:** <a class="stdlib-ref" data-key="ta::kcw" href="/zh-CN/api/stdlib/ta/#kcw">ta.kcw</a>, <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>, <a class="stdlib-ref" data-key="ta::atr" href="/zh-CN/api/stdlib/ta/#atr">ta.atr</a>

---

### kcw {#kcw}

```navi
kcw(
    series: series float,
    length: simple int,
    mult: simple float,
    use_true_range: simple bool = true
  ): series float
```

肯特纳通道宽度 (KCW)。它测量肯特纳通道相对于移动平均线的宽度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | KCW 计算的输入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用于计算的 bars 数量。 |
| `mult` | <code>simple&nbsp;float</code> |  | 通道频带的乘数。 |
| `use_true_range` | <code>simple&nbsp;bool</code> | `true` | 是否使用真实范围。 |

**返回:** <code>series&nbsp;float</code> — 通道宽度的比率：`(upper - lower) / basis`。

**参见:** <a class="stdlib-ref" data-key="ta::kc" href="/zh-CN/api/stdlib/ta/#kc">ta.kc</a>

---

### linreg {#linreg}

```navi
linreg(
    source: series float,
    length: series int,
    offset: simple int
  ): series float
```

线性回归 (LINREG)。它在指定的 `length` 上将线性回归线拟合到 `source` 系列，并返回给定 `offset` 处的值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 回归的 bars 数量。 |
| `offset` | <code>simple&nbsp;int</code> |  | 回归线的偏移量（未来的 bar 偏移量）。 |

**返回:** <code>series&nbsp;float</code>

---

### lowest {#lowest}

<OverloadTabs v-model="_s3" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">lowest</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">lowest</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s3 === 0">

返回指定 `length` 上 `low` 系列的最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

</div>

<div v-show="_s3 === 1">

返回指定 `length` 上 `source` 系列的最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

</div>

---

### lowest_bars {#lowest_bars}

<OverloadTabs v-model="_s4" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">lowest_bars</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">lowest_bars</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(length</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s4 === 0">

返回自指定 `length` 上 `source` 系列的最低值以来 bars 的数量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;int</code> — 非正偏移（如果最低值是当前 bar，则为 0，否则为负），或者如果窗口中的任何值为 `na`，则为 `na`。

</div>

<div v-show="_s4 === 1">

返回自指定 `length` 上 `low` 系列的最低值以来 bars 的数量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;int</code>

</div>

---

### macd {#macd}

```navi
macd(
    source: series float,
    fast_length: simple int,
    slow_length: simple int,
    signal_length: simple int
  )
```

移动平均收敛分歧 (MACD)。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `fast_length` | <code>simple&nbsp;int</code> |  | 快速 EMA 的长度。 |
| `slow_length` | <code>simple&nbsp;int</code> |  | 慢速 EMA 的长度。 |
| `signal_length` | <code>simple&nbsp;int</code> |  | 信号线 EMA 的长度。 |

**返回:** `[macd_line, signal_line, histogram]` 的元组，其中直方图 = macd_line − signal_line。

**示例**

```navi
let (macdLine, signalLine, histLine) = ta.macd(close, 12, 26, 9);
plot(macdLine,   title: "MACD",     color: Color.BLUE);
plot(signalLine, title: "Signal",   color: Color.ORANGE);
plot(histLine, title: "Hist", color: Color.GRAY, style: PlotStyle.Histogram);
```

**参见:** <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>

---

### max {#max}

```navi
max(source: series float): series float
```

返回 `source` 系列的最大值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |

**返回:** <code>series&nbsp;float</code>

---

### median {#median}

```navi
median(source: series float, length: series int): series float
```

返回指定 `length` 上 `source` 系列的中值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::mode" href="/zh-CN/api/stdlib/ta/#mode">ta.mode</a>

---

### mfi {#mfi}

```navi
mfi(series: series float, length: series int): series float
```

资金流量指数（MFI）。它衡量指定 `length` 内资产的资金流入和流出。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `series` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 0 到 100 之间的值。高于 80 的值表示超买状态，低于 20 表示超卖。

---

### min {#min}

```navi
min(source: series float): series float
```

返回 `source` 系列的最小值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |

**返回:** <code>series&nbsp;float</code>

---

### mode {#mode}

```navi
mode(source: series float, length: series int): series float
```

返回指定 `length` 上 `series` 系列的众数（最常出现的值）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::median" href="/zh-CN/api/stdlib/ta/#median">ta.median</a>

---

### mom {#mom}

```navi
mom(source: series float, length: series int): series float
```

计算 `source` 系列在指定 `length` 上的动量。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::change" href="/zh-CN/api/stdlib/ta/#change">ta.change</a>, <a class="stdlib-ref" data-key="ta::roc" href="/zh-CN/api/stdlib/ta/#roc">ta.roc</a>

---

### percent_rank {#percent_rank}

```navi
percent_rank(source: series float, length: series int): series float
```

返回 `source` 系列中当前值相对于指定 `length` 的百分位数排名。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 0 到 100 之间的值，指示小于或等于当前值的值的百分比。

---

### percentile_linear_interpolation {#percentile_linear_interpolation}

```navi
percentile_linear_interpolation(
    source: series float,
    length: series int,
    percentage: simple float
  ): series float
```

使用线性插值返回 `source` 系列相对于指定 `length` 的百分位值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |
| `percentage` | <code>simple&nbsp;float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::percentile_nearest_rank" href="/zh-CN/api/stdlib/ta/#percentile_nearest_rank">ta.percentile_nearest_rank</a>

---

### percentile_nearest_rank {#percentile_nearest_rank}

```navi
percentile_nearest_rank(
    source: series float,
    length: series int,
    percentage: simple float
  ): series float
```

使用最近排名方法返回 `source` 系列相对于指定 `length` 的百分位数值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |
| `percentage` | <code>simple&nbsp;float</code> |  | 百分位值 (0-100)。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::percentile_linear_interpolation" href="/zh-CN/api/stdlib/ta/#percentile_linear_interpolation">ta.percentile_linear_interpolation</a>

---

### pivot_high {#pivot_high}

<OverloadTabs v-model="_s5" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pivot_high</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, left_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pivot_high</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(left_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s5 === 0">

返回枢轴高点的价格。

如果没有枢轴高点，则返回“NaN”。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要分析的输入系列。 |
| `left_bars` | <code>series&nbsp;int</code> |  | 要检查的左侧 bars 的数量。 |
| `right_bars` | <code>series&nbsp;int</code> |  | 要检查的右侧 bars 的数量。 |

**返回:** <code>series&nbsp;float</code> — 枢轴最高价格（由 `rightbars` 抵消），如果在该点未找到枢轴，则为 `na`。

</div>

<div v-show="_s5 === 1">

返回枢轴高点的价格。

如果没有枢轴高点，则返回“NaN”。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `left_bars` | <code>series&nbsp;int</code> |  | 要检查的左侧 bars 的数量。 |
| `right_bars` | <code>series&nbsp;int</code> |  | 要检查的右侧 bars 的数量。 |

**返回:** <code>series&nbsp;float</code> — 枢轴高点价格（按 `rightbars` 偏移），如果未找到则返回 `na`。

</div>

---

### pivot_low {#pivot_low}

<OverloadTabs v-model="_s6" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pivot_low</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, left_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">pivot_low</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(left_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, right_bars</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s6 === 0">

返回枢轴低点的价格。

如果没有枢轴低点，则返回“NaN”。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要分析的输入系列。 |
| `left_bars` | <code>series&nbsp;int</code> |  | 要检查的左侧 bars 的数量。 |
| `right_bars` | <code>series&nbsp;int</code> |  | 要检查的右侧 bars 的数量。 |

**返回:** <code>series&nbsp;float</code> — 枢轴低价（由 `rightbars` 抵消），如果在该点未找到枢轴，则为 `na`。

</div>

<div v-show="_s6 === 1">

返回枢轴低点的价格。

如果没有枢轴低点，则返回“NaN”。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `left_bars` | <code>series&nbsp;int</code> |  | 要检查的左侧 bars 的数量。 |
| `right_bars` | <code>series&nbsp;int</code> |  | 要检查的右侧 bars 的数量。 |

**返回:** <code>series&nbsp;float</code> — 枢轴低点价格（按 `rightbars` 偏移），如果未找到则返回 `na`。

</div>

---

### pivot_point_levels {#pivot_point_levels}

```navi
pivot_point_levels(
    type: series PivotType,
    change: series bool
  ): series Array<float>
```

返回指定枢轴类型的枢轴点价格水平数组。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `type` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/ta/PivotType">PivotType</a></code> |  | The pivot calculation method. |
| `change` | <code>series&nbsp;bool</code> |  | `true` on the first bar of a new pivot period. |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;float&gt;</code>

---

### range {#range}

```navi
range(source: series float, length: series int): series float
```

返回指定 `length` 上 `source` 系列的范围（最高和最低之间的差）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要评估的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

---

### rci {#rci}

```navi
rci(source: series float, length: simple int): series float
```

排名相关指数（RCI）。它测量指定 `length` 上两个变量的排名之间的线性关系的强度和方向。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>simple&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 值介于 -100 和 100 之间。+100 表示价格完全上涨，-100 表示价格完全下跌。

---

### rising {#rising}

```navi
rising(source: series float, length: series int): series bool
```

检查 `source` 系列是否上升到超过指定的 `length`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 要检查的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 要检查的 bars 数量。 |

**返回:** <code>series&nbsp;bool</code>

**参见:** <a class="stdlib-ref" data-key="ta::falling" href="/zh-CN/api/stdlib/ta/#falling">ta.falling</a>

---

### rma {#rma}

```navi
rma(source: series float, length: series int): series float
```

递归移动平均线 (RMA)。它类似于指数移动平均线 (EMA)，但使用不同的平滑因子。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | RMA 计算的长度。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>

---

### roc {#roc}

```navi
roc(source: series float, length: series int): series float
```

变化率 (ROC)。它测量当前值与 `length` bars 之前的值之间的百分比变化。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于比较的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 百分比变化：`100 × (source − source[length]) / source[length]`。

**参见:** <a class="stdlib-ref" data-key="ta::change" href="/zh-CN/api/stdlib/ta/#change">ta.change</a>, <a class="stdlib-ref" data-key="ta::mom" href="/zh-CN/api/stdlib/ta/#mom">ta.mom</a>

---

### rsi {#rsi}

```navi
rsi(source: series float, length: series int): series float
```

相对强弱指数（RSI）。它测量指定 `length` 内价格变动的速度和变化。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 介于 0 和 100 之间的值。高于 70 的值通常表示超买，低于 30 的值通常表示超卖。

**示例**

```navi
let rsiValue = ta.rsi(close, 14);
plot(rsiValue, title: "RSI", color: Color.PURPLE);
hline(70, "Overbought", color: Color.RED);
hline(30, "Oversold", color: Color.GREEN);
```

**参见:** <a class="stdlib-ref" data-key="ta::rma" href="/zh-CN/api/stdlib/ta/#rma">ta.rma</a>, <a class="stdlib-ref" data-key="ta::stoch" href="/zh-CN/api/stdlib/ta/#stoch">ta.stoch</a>

---

### sar {#sar}

```navi
sar(start: simple float, inc: simple float, max: simple float): series float
```

抛物线转向指标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `start` | <code>simple&nbsp;float</code> |  | 启动加速因子。 |
| `inc` | <code>simple&nbsp;float</code> |  | 加速因子的增量。 |
| `max` | <code>simple&nbsp;float</code> |  | 最大加速系数。 |

**返回:** <code>series&nbsp;float</code> — 当前 bar 的 SAR 值。

---

### sma {#sma}

```navi
sma(source: series float, length: series int): series float
```

简单移动平均线 (SMA)。计算指定 `length` 上 `source` 系列的平均值。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**示例**

```navi
let sma20 = ta.sma(close, 20);
plot(sma20, title: "SMA 20", color: Color.BLUE);
```

**参见:** <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>, <a class="stdlib-ref" data-key="ta::wma" href="/zh-CN/api/stdlib/ta/#wma">ta.wma</a>, <a class="stdlib-ref" data-key="ta::rma" href="/zh-CN/api/stdlib/ta/#rma">ta.rma</a>, <a class="stdlib-ref" data-key="ta::hma" href="/zh-CN/api/stdlib/ta/#hma">ta.hma</a>

---

### stdev {#stdev}

```navi
stdev(
    source: series float,
    length: series int,
    biased: series bool = true
  ): series float
```

计算 `source` 系列相对于指定 `length` 的标准差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |
| `biased` | <code>series&nbsp;bool</code> | `true` | 如果为 true，函数将使用整个总体的有偏估计进行计算，如果为 false，则使用样本的无偏估计进行计算。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::variance" href="/zh-CN/api/stdlib/ta/#variance">ta.variance</a>, <a class="stdlib-ref" data-key="ta::bb" href="/zh-CN/api/stdlib/ta/#bb">ta.bb</a>

---

### stoch {#stoch}

```navi
stoch(
    source: series float,
    high: series float,
    low: series float,
    length: series int
  ): series float
```

随机振荡指标 (STOCH)。它将 `source` 系列与其指定 `length` 上的价格范围进行比较。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `high` | <code>series&nbsp;float</code> |  | 该系列的高级系列。 |
| `low` | <code>series&nbsp;float</code> |  | 该系列的低系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 0 到 100 之间的值，表示源在高低范围内的位置。

**参见:** <a class="stdlib-ref" data-key="ta::rsi" href="/zh-CN/api/stdlib/ta/#rsi">ta.rsi</a>, <a class="stdlib-ref" data-key="ta::wpr" href="/zh-CN/api/stdlib/ta/#wpr">ta.wpr</a>

---

### supertrend {#supertrend}

```navi
supertrend(factor: series float, atr_period: simple int)
```

超级趋势指标。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `factor` | <code>series&nbsp;float</code> |  | SuperTrend 计算中 ATR 的乘数。 |
| `atr_period` | <code>simple&nbsp;int</code> |  | ATR 计算的周期。 |

**返回:** `[super_trend, direction]` 的元组，其中方向为 -1（上升趋势/看涨）或 1（下降趋势/看跌）。

**参见:** <a class="stdlib-ref" data-key="ta::atr" href="/zh-CN/api/stdlib/ta/#atr">ta.atr</a>

---

### swma {#swma}

```navi
swma(source: series float): series float
```

平滑加权移动平均线 (SWMA)。它将加权移动平均平滑应用于 `source` 系列。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |

**返回:** <code>series&nbsp;float</code>

---

### tema {#tema}

```navi
tema(source: series float, length: simple int): series float
```

三重指数移动平均线（TEMA）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The series to smooth. |
| `length` | <code>simple&nbsp;int</code> |  | The smoothing period. |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>, <a class="stdlib-ref" data-key="ta::dema" href="/zh-CN/api/stdlib/ta/#dema">ta.dema</a>

---

### tr {#fn-tr}

```navi
tr(handle_na: simple bool): series float
```

真实波幅 ​​(TR)。通过考虑 bars 之间的差距来衡量波动性。 TR 是以下各项中最大的一个：（最高价 - 最低价）、|最高价 - 前收盘价|、|最低价 - 前收盘价|。这捕捉了隔夜差距并限制了仅高低点会错过的走势。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `handle_na` | <code>simple&nbsp;bool</code> |  | 如果为 true 并且上一次收盘价为 `na`（第一个 bar），则使用 `high - low` 作为 TR。如果为 false，则在这种情况下返回 `na`。 |

**返回:** <code>series&nbsp;float</code>

---

### tsi {#tsi}

```navi
tsi(
    source: series float,
    short_length: simple int,
    long_length: simple int
  ): series float
```

真实强度指数（TSI）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `short_length` | <code>simple&nbsp;int</code> |  | 用于 TSI 计算的短 EMA 长度。 |
| `long_length` | <code>simple&nbsp;int</code> |  | 用于 TSI 计算的长 EMA 长度。 |

**返回:** <code>series&nbsp;float</code> — -1.0 和 1.0 之间的值表示动量强度和方向。

---

### value_when {#value_when}

```navi
value_when(
    condition: series bool,
    source: series T,
    occurrence: simple int
  ): series T
```

返回当指定的 `occurrence` 的 `condition` 为 true 时 `source` 系列的值。 `occurrence` 参数选择要返回的匹配项：0 表示最近的匹配项，1 表示之前的匹配项，等等。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `condition` | <code>series&nbsp;bool</code> |  | 评估的条件。 |
| `source` | <code>series&nbsp;T</code> |  | 要从中检索值的系列。 |
| `occurrence` | <code>simple&nbsp;int</code> |  | 要检索的事件（0 表示最近的事件）。 |

**返回:** <code>series&nbsp;T</code> — 指定出现处的 `source` 值，如果出现的匹配项较少，则为 `na`。

---

### variance {#variance}

```navi
variance(
    source: series float,
    length: series int,
    biased: series bool = true
  ): series float
```

`source` 系列相对于指定 `length` 的方差。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |
| `biased` | <code>series&nbsp;bool</code> | `true` | 如果为真，则使用有偏估计；如果为 false，则使用无偏估计。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::stdev" href="/zh-CN/api/stdlib/ta/#stdev">ta.stdev</a>

---

### vhf {#vhf}

```navi
vhf(source: series float, length: simple int): series float
```

垂直水平过滤器（VHF）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | The price series to analyze. |
| `length` | <code>simple&nbsp;int</code> |  | The lookback period. |

**返回:** <code>series&nbsp;float</code>

---

### vwap {#fn-vwap}

<OverloadTabs v-model="_s7" :labels='["<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">vwap</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, anchor</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, stdev_mult</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#6F42C1;--shiki-dark:#B392F0\">vwap</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(source</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, anchor</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> timeframe.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">change</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\">\"1D\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">))</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s7 === 0">

具有可选标准偏差范围的成交量加权平均价格。 VWAP 自锚定重置（通常每天）以来不断累积，并按交易量对价格进行加权，从而提供机构经常使用的基准。返回 [vwap, upper_band, lower_band] 的元组，其中 band 为 vwap +/- stdev_mult * stddev。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 价格系列（通常为hlc3）。 |
| `anchor` | <code>series&nbsp;bool</code> |  | 如果为 true，则重置 VWAP 计算。通常为 `timeframe.change(\"1D\")`。 |
| `stdev_mult` | <code>series&nbsp;float</code> |  | 标准偏差带的乘数。使用 `na` 禁用频段。 |

**返回:** `[vwap, upper_band, lower_band]` 的元组。当 `stdev_mult` 为 `na` 时，条带为 `na`。

</div>

<div v-show="_s7 === 1">

无区间的成交量加权平均价格。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 价格系列（通常为hlc3）。 |
| `anchor` | <code>series&nbsp;bool</code> | `timeframe.change("1D")` | 如果为 true，则重置 VWAP。默认为每日重置 (`timeframe.change(\"1D\")`)。 |

**返回:** <code>series&nbsp;float</code> — 当 `anchor` 为 true 时重置的单个 VWAP 系列。

</div>

---

### vwma {#vwma}

```navi
vwma(source: series float, length: series int): series float
```

成交量加权移动平均线（VWMA）。它赋予交易量较大的时段更大的权重。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

---

### wma {#wma}

```navi
wma(source: series float, length: series int): series float
```

加权移动平均线（WMA）。它为最近的数据点分配更多的权重。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `source` | <code>series&nbsp;float</code> |  | 用于计算的输入系列。 |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code>

**参见:** <a class="stdlib-ref" data-key="ta::sma" href="/zh-CN/api/stdlib/ta/#sma">ta.sma</a>, <a class="stdlib-ref" data-key="ta::ema" href="/zh-CN/api/stdlib/ta/#ema">ta.ema</a>, <a class="stdlib-ref" data-key="ta::hma" href="/zh-CN/api/stdlib/ta/#hma">ta.hma</a>

---

### wpr {#wpr}

```navi
wpr(length: series int): series float
```

威廉姆斯百分比范围 (WPR)。它通过将 `close` 价格与指定 `length` 上的高低范围进行比较来衡量超买和超卖水平。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `length` | <code>series&nbsp;int</code> |  | 用于计算的 bars 数量。 |

**返回:** <code>series&nbsp;float</code> — 介于 -100 和 0 之间的值。高于 -20 的值表示超买，低于 -80 的值表示超卖。

**参见:** <a class="stdlib-ref" data-key="ta::stoch" href="/zh-CN/api/stdlib/ta/#stoch">ta.stoch</a>
