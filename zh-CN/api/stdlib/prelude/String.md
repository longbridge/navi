---
title: "String"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
</script>

# String

不可变的 Unicode 字符序列。

## 静态方法

### format {#format}

```navi
String.format(template: String, values: any): String
```

将字符串作为模板进行格式化，用提供的值替换带索引的占位符。

**占位符语法**：`{N}`、`{N, number}` 或 `{N, number, 说明符}`，其中 `N` 是 `values` 中从零开始的索引。

**数字说明符**（用法：`{N, number, 说明符}`）：
- （省略）— 千位分隔符，最多 3 位小数
- `integer` — 取整，带千位分隔符
- `currency` — 前缀 `$`，精确 2 位小数，带千位分隔符
- `percent` — 乘以 100，添加 `%`
- *模式* — 自定义格式模式（见下）

**自定义数字模式字符**：
- `#` — 可选数字（省略尾随零）
- `0` — 必需数字（小数部分用 `0` 补齐）
- `,` — 分组分隔符；分组大小由整数部分 `,` 后的数字个数决定
- `.` — 小数点
- `%` — 将值乘以 100 并添加 `%`
- 其他字符作为字面量前缀或后缀
- `'text'` — 字面量文本（引号内不解析占位符）
- `''` — 字面量单引号字符

`na` 值显示为 `"Na"`。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `template` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 包含 `{N}` 占位符的格式模板字符串。 |
| `values` | <code>any</code> |  | 要替换到模板中的可变数量的值。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### format_time {#format_time}

```navi
String.format_time(
    time: int,
    format: String,
    timezone: String = symbol_info.timezone
  ): String
```

使用格式令牌模式和时区，将时间戳（自纪元以来的毫秒数）格式化为字符串。

**日期令牌**：
- `yyyy` — 4 位年份（如 `2024`）
- `yy`   — 2 位年份（如 `24`）
- `MM`   — 带前导零的月份（`01`–`12`）
- `M`    — 不带前导零的月份（`1`–`12`）
- `dd`   — 带前导零的日期（`01`–`31`）
- `d`    — 不带前导零的日期（`1`–`31`）

**时间令牌**：
- `HH`  — 24 小时制小时，带前导零（`00`–`23`）
- `H`   — 24 小时制小时，不带前导零（`0`–`23`）
- `hh`  — 12 小时制小时，带前导零（`01`–`12`）
- `h`   — 12 小时制小时，不带前导零（`1`–`12`）
- `a`   — AM/PM 标识
- `mm`  — 分钟，带前导零（`00`–`59`）
- `m`   — 分钟，不带前导零（`0`–`59`）
- `ss`  — 秒，带前导零（`00`–`59`）
- `s`   — 秒，不带前导零（`0`–`59`）
- `S`   — 十分之一秒（1 位）
- `SS`  — 百分之一秒（2 位）
- `SSS` — 毫秒（3 位）

**时区令牌**：
- `Z` — UTC 偏移量，格式为 `±HHmm`（如 `+0000`、`-0530`）

非格式令牌的字符（如 `-`、`:`、`.`、空格）作为字面量输出。
`y` 和 `z` 为保留字符，不能单独使用（仅 `yy`/`yyyy` 有效；`z` 始终报错）。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  | 要格式化的时间戳（自纪元以来的毫秒数）。 |
| `format` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 格式模式字符串（参见函数说明中的令牌表）。 |
| `timezone` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | 输出使用的时区（如 `"UTC+8"`、`"UTC-5:30"`）。默认为 `symbol_info.timezone`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### from {#from}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>"]' />

<div v-show="_s0 === 0">

使用自定义数字模式将整数转换为字符串。

`format` 字符串与 <a class="stdlib-ref" data-key="prelude::format" href="/zh-CN/api/stdlib/prelude/String#format">format</a> 中 `{N, number, pattern}` 说明符使用相同的模式语法：
`#` 可选数字、`0` 必需数字、`,` 分组分隔符、`.` 小数点、`%` 百分比、
其他字符作为字面量前缀/后缀、`'text'` 字面量文本、`''` 字面量单引号。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | 要转换的整数值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 控制输出格式的数字模式字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 1">

使用自定义数字模式将浮点数转换为字符串。

`format` 字符串与 <a class="stdlib-ref" data-key="prelude::format" href="/zh-CN/api/stdlib/prelude/String#format">format</a> 中 `{N, number, pattern}` 说明符使用相同的模式语法：
`#` 可选数字、`0` 必需数字、`,` 分组分隔符、`.` 小数点、`%` 百分比、
其他字符作为字面量前缀/后缀、`'text'` 字面量文本、`''` 字面量单引号。


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 要转换的浮点值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 控制输出格式的数字模式字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 2">

使用 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format</a> 常量将整数转换为字符串。

- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Inherit</a>  — 继承所在系列上下文的格式
- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Price</a>    — 以价格形式呈现（精度取决于交易品种）
- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Volume</a>   — 以成交量形式呈现（大数字使用紧凑表示法）
- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Percent</a>  — 以百分比形式呈现
- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Mintick</a>  — 四舍五入到交易品种的 mintick，保留尾部零


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | 要转换的整数值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> |  | 控制格式化的 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format</a> 常量。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 3">

使用 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format</a> 常量将浮点数转换为字符串。

- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Inherit</a>  — 继承所在系列上下文的格式
- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Price</a>    — 以价格形式呈现（精度取决于交易品种）
- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Volume</a>   — 以成交量形式呈现（大数字使用紧凑表示法）
- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Percent</a>  — 以百分比形式呈现
- <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format.Mintick</a>  — 四舍五入到交易品种的 mintick，保留尾部零


**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | 要转换的浮点值。 |
| `format` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Format">Format</a></code> |  | 控制格式化的 <a class="stdlib-ref" data-key="prelude::Format" href="/zh-CN/api/stdlib/prelude/Format">Format</a> 常量。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 4">

将任意类型的值转换为其字符串表示形式。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | <code>T</code> |  | 要转换为字符串的值。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

</div>

## 方法

### contains {#contains}

```navi
String.contains(self: String, str: String): bool
```

检查字符串是否包含指定的子字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要搜索的子字符串。 |

**返回:** <code>bool</code>

---

### ends_with {#ends_with}

```navi
String.ends_with(self: String, str: String): bool
```

检查字符串是否以指定的后缀结尾。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要搜索的后缀。 |

**返回:** <code>bool</code>

---

### index_of {#index_of}

```navi
String.index_of(self: String, str: String): int
```

返回子字符串第一次出现的从零开始的索引，如果未找到则返回 `na`。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要搜索的子字符串。 |

**返回:** <code>int</code>

---

### length {#length}

```navi
String.length(self: String): int
```

返回字符串的长度。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code>int</code>

---

### lower {#lower}

```navi
String.lower(self: String): String
```

将字符串中的所有字符转换为小写。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### match {#match}

```navi
String.match(self: String, regex: String): String
```

如果字符串匹配正则表达式模式，则返回匹配的子字符串，否则返回空字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `regex` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要匹配的正则表达式模式。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### pad_end {#pad_end}

```navi
String.pad_end(self: String, len: int, fill: String = " "): String
```

用 `fill` 在字符串右侧填充，直到长度至少为 `len` 个字符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `len` | <code>int</code> |  | 目标最小字符长度。 |
| `fill` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `" "` | 填充字符串，默认为 `" "`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### pad_start {#pad_start}

```navi
String.pad_start(self: String, len: int, fill: String = " "): String
```

用 `fill` 在字符串左侧填充，直到长度至少为 `len` 个字符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `len` | <code>int</code> |  | 目标最小字符长度。 |
| `fill` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> | `" "` | 填充字符串，默认为 `" "`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### repeat {#repeat}

```navi
String.repeat(self: String, repeat: int): String
```

返回将字符串重复指定次数后的新字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `repeat` | <code>int</code> |  | 重复字符串的次数。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### replace {#replace}

```navi
String.replace(
    self: String,
    target: String,
    replacement: String,
    occurrence: int = 0
  ): String
```

将目标子字符串第 N 次出现的位置替换为指定内容。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `target` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要被替换的子字符串。 |
| `replacement` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 替换内容。 |
| `occurrence` | <code>int</code> | `0` | 要替换的第 N 次出现（从 0 开始）。默认为 `0`。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### replace_all {#replace_all}

```navi
String.replace_all(self: String, target: String, replacement: String): String
```

将目标子字符串的所有出现替换为指定内容。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `target` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要被替换的子字符串。 |
| `replacement` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 替换内容。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### split {#split}

```navi
String.split(self: String, separator: String): Array<String>
```

根据分隔符将字符串拆分为子字符串数组。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `separator` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 用于拆分的分隔符字符串。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a>&gt;</code>

---

### starts_with {#starts_with}

```navi
String.starts_with(self: String, str: String): bool
```

检查字符串是否以指定前缀开头。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  | 要搜索的前缀。 |

**返回:** <code>bool</code>

---

### substring {#substring}

```navi
String.substring(self: String, begin_pos: int, end_pos: int): String
```

返回从 `begin_pos` 到 `end_pos`（不含）的子字符串。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |
| `begin_pos` | <code>int</code> |  | 起始位置（含）。 |
| `end_pos` | <code>int</code> |  | 结束位置（不含）。 |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### to_number {#to_number}

```navi
String.to_number(self: String): float
```

将字符串转换为浮点数。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code>float</code> — 解析后的浮点值，如果字符串无法解析则返回 `na`。

---

### trim {#trim}

```navi
String.trim(self: String): String
```

去除字符串首尾的空白字符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### trim_end {#trim_end}

```navi
String.trim_end(self: String): String
```

去除字符串末尾的空白字符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### trim_start {#trim_start}

```navi
String.trim_start(self: String): String
```

去除字符串开头的空白字符。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>

---

### upper {#upper}

```navi
String.upper(self: String): String
```

将字符串中的所有字符转换为大写。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/String">String</a></code>
