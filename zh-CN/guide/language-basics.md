# 语言基础

Navi。每个脚本都以声明语句开头。

## 脚本结构

```navi
indicator("My Indicator")

// 你的代码
plot(close)
```

第一行声明脚本类型 — `indicator()`、`strategy()` 或 `library()`。

## 注释

```navi
// 单行注释
float a = 10  // 行尾注释

//@description A library for math utilities
```

Navi 没有多行注释。以 `//@` 开头的特殊注释是文档标签（`//@function`、`//@param`、`//@returns`、`//@type`、`//@enum`、`//@field`、`//@variable`）或 `@description` 等描述性注解。

## 语句

语句以换行符分隔。不使用分号。多条语句可以用逗号写在同一行：

```navi
a = 1
b = 2
c = a + b

// 同一行多条语句
a = 1, b:  2, c:  3
```

空行和仅包含注释的行会被忽略。

## 缩进

Navi 使用缩进来定义代码块（类似 Python）。一个缩进级别等于 **4 个空格** 或 **1 个 Tab**：

```navi
// 正确：4 个空格
if close > open {
    let color = color.GREEN;
    label.new(bar_index, high, "Up")
} else {
    let color = color.RED
}

// 正确：Tab
if close > open {
    doSomething()
}

// 错误：2 个空格 — 不会被识别为代码块
if close > open {}
doSomething(); // 这不是 if 块的一部分！
```

嵌套块需要累加缩进：

```navi
if condition1 {
    if condition2 {
        for i = 0 to 10 {
            doSomething(i) // 级别 3（12 个空格）
        } // 级别 3（12 个空格）
    } // 级别 3（12 个空格）
}
```

空格和 Tab 可以混用，但每个缩进单位必须是完整的 4 个空格或 1 个 Tab。

## 续行

长表达式可以跨行。**在括号内**（圆括号、方括号），允许任意缩进：

```navi
plot(series:  close, title:  "Close", color:  color.RED, linewidth:  2);

let arr: array<int> = [1, 2, 3];
```

**在括号外**，续行必须有额外的空白（比当前块级别至少多 1 个空格或 tab）：

```navi
// 正确：续行带额外空格
float result = longVariableName
 + anotherLongVariable
 - someOtherValue

// 错误：没有额外空格 — 会被解析为新语句！
float result = a
+ b  // 这是一个独立的语句！
```

## 基本类型

### 原始类型

| 类型 | 描述 | 示例 |
|---|---|---|
| `int` | 整数。范围：**−9,007,199,254,740,992 至 9,007,199,254,740,992**（±2⁵³）。 | `42`, `-123`, `+5` |
| `float` | 浮点数。近似范围：**±1.8 × 10³⁰⁸**；精度：约 15～17 位有效十进制数字。 | `3.14`, `.5`, `3.`, `1e-3`, `1.2E+5` |
| `bool` | 布尔值 | `true`, `false` |
| `string` | 文本 | `"hello"`, `'world'` |
| `color` | RGBA 颜色 | `#FF0000`, `#FF000080` |
| `na` | 缺失/未定义值 | `na` |

### `int` 和 `float`

```navi
// 整数
a = 42
b = -123
c = +5

// 浮点数 — 十进制表示
d = 3.14
e = .14        // 前导点
f = 3.         // 尾随点

// 浮点数 — 科学记数法
g = 314e-2     // 3.14
h = 0.00314E+2 // 0.314
```

### `string`

字符串可以使用单引号或双引号，语义完全相同：

```navi
a = "Hello, World!"
b = 'Hello, World!'
full = "Hello, " + "World!"  // 用 + 连接字符串
```

支持的转义序列：

| 转义 | 含义 |
|---|---|
| `\\` | 反斜杠 |
| `\n` | 换行 |
| `\r` | 回车 |
| `\t` | Tab |
| `\"` 或 `""` | 双引号（在双引号字符串中） |
| `\'` 或 `''` | 单引号（在单引号字符串中） |

### `color`

颜色字面量使用 `#` 的十六进制表示法：

- `#RRGGBB` — 6 位十六进制，完全不透明（alpha = FF）
- `#RRGGBBAA` — 8 位十六进制，显式 alpha 通道

```navi
red = #FF0000          // 完全不透明的红色
semiRed = #FF000080    // 半透明红色
```

命名颜色常量可通过 `color` 模块获取：`color.RED`、`color.BLUE`、`color.GREEN` 等。使用 `color.new()` 创建自定义透明度的颜色。

### `na`

`na` 表示缺失或未定义的值。它与任何类型兼容，但单独使用时需要显式类型注解：

```navi
let a: float = na; // OK
let b: int = na; // OK
let a = na; // 错误：无法推断变量类型

// 使用 na() 检测 na：
if na(myValue) {}
// 处理缺失值
```

## 运算符

### 算术运算
```navi
a = 10 + 3    // 13
b = 10 - 3    // 7
c = 10 * 3    // 30
d = 10 / 3    // 3.333...
e = 10 % 3    // 1
```

### 比较运算
```navi
close > open     // 大于
close < open     // 小于
close >= 100     // 大于等于
close <= 100     // 小于等于
close == open    // 等于
close != open    // 不等于
```

### 逻辑运算
```navi
a and b    // 逻辑与
a or b     // 逻辑或
not a      // 逻辑非
```

### 三元运算
```navi
color = close > open ? color.GREEN : color.RED
```

## 历史引用运算符

在 Navi 中，每个表达式在每根 K 线上都会求值一次，产生一个时间序列。`[]` 运算符访问的是某个表达式在前几根 K 线上**已经计算好的结果**——不仅限于内置变量，而是适用于**任何**表达式：

```navi
// 内置 series 变量
previousClose = close[1]              // 前一根 K 线的收盘价
twoBarsAgo = high[2]                  // 两根 K 线之前的最高价

// 函数调用结果——取回已计算好的值，而非重新求值
prevSma = ta.sma(close, 14)[1]       // 前一根 K 线上计算的 SMA 值
prevEma = ta.ema(close, 10)[3]       // 3 根 K 线之前的 EMA 值

// 算术表达式
prevRange = (high - low)[1]           // 前一根 K 线的振幅

// 用户自定义变量
myValue = close * volume
prevMyValue = myValue[1]              // myValue 在前一根 K 线上的值
```

::: tip 核心概念
`ta.sma(close, 14)[1]` 并**不会**重新计算 SMA——它返回的是脚本在前一根 K 线上运行时已经算好的 SMA 值。
:::

在早期 K 线上（历史数据不足时），结果为 `na`。偏移量可以是 series 表达式：

```navi
int lookback = input.int(5, "Lookback")
pastClose = close[lookback]
```

## 集合类型

Navi 提供三种泛型集合类型：

| 类型 | 描述 |
|---|---|
| `array<T>` | 有序、可索引序列 |
| `matrix<T>` | 行 × 列的二维表 |
| `map<K, V>` | 键值存储 |

集合是**引用类型**——将集合赋值给另一个变量只复制引用，而非内容。使用 `.copy()` 获取独立副本。

集合通常用 `var` 声明，这样它们会跨 K 线持久保存，而不是每根 K 线重新创建：

```navi
var array<float> highs = array.new<float>()
highs.push(high)   // 每根 K 线累积一个值
```

::: warning 即将淘汰的语法
`int[]`、`float[]` 等简写形式是 `array<int>`、`array<float>` 的旧式别名，将在未来版本中移除。请始终使用 `array<T>` 形式。
:::

### `array<T>`

有序的零索引序列，支持动态增删。

**创建数组**

```navi
// 空数组，手动添加元素
var array<float> a = array.new<float>()

// 预分配大小，所有元素初始化为 0.0
array<float> b = array.new<float>(5, 0.0)

// 从字面量列表创建
array<int> c = array.from(10, 20, 30)

// 数组字面量 — 类型由元素推断
values = [1, 2, 3]               // array<int>
array<float> fs = [1, 2, 3]     // 元素宽化为 float
array<int> empty = []            // 空字面量（类型由声明推断）
```

**读写元素**

```navi
a.push(close)               // 追加到末尾
a.unshift(close)            // 插入到开头

float last  = a.last()      // 最后一个元素
float first = a.first()     // 第一个元素
float val   = a.get(2)      // 按索引读取（负索引从末尾计数）
a.set(2, 99.0)              // 按索引覆盖

a.insert(1, 42.0)           // 在索引处插入，后续元素右移
float removed = a.remove(1) // 删除指定索引，返回被删元素
float popped  = a.pop()     // 移除并返回最后一个元素
float shifted = a.shift()   // 移除并返回第一个元素

int n = a.size()            // 元素个数
```

**查找**

```navi
bool found = a.includes(close)    // 值是否存在
int  idx   = a.indexof(close)     // 第一个匹配的索引，或 -1
int  last  = a.lastindexof(close) // 最后一个匹配的索引，或 -1
```

**切片与合并**

```navi
array<float> sub  = a.slice(1, 4)      // 元素 [1, 4)
array<float> both = a.concat(b)        // 新数组，包含 b 的所有元素
array<float> dup  = a.copy()           // 独立副本
a.reverse()                             // 原地翻转
a.fill(0.0, 0, 3)                       // 将 [0, 3) 范围填充为 0.0
a.clear()                               // 清空所有元素
```

**排序**

```navi
a.sort()                           // 升序（默认）
a.sort(order.descending)           // 降序
array<int> idx = a.sort_indices()  // 返回排序索引，不修改 a
```

**统计**（仅数值数组）

```navi
float total = a.sum()
float mean  = a.avg()
float med   = a.median()
float sd    = a.stdev()
float hi    = a.max()
float lo    = a.min()
float rng   = a.range()            // max - min
```

**`for...in` 遍历**

```navi
var vals: array<float> = array.from(1.0, 2.0, 3.0);
let total: float = 0.0;
for v in vals {
    total += v
}

// 带索引
for (i, v) in vals {
    log.info("{0}: {1}", i, v)
}
```

### `map<K, V>`

无序的键值存储。键必须是原始类型（`int`、`float`、`bool`、`string`、`color`）或枚举类型；值可以是任意类型。

**创建映射**

```navi
// 映射字面量 — 类型由条目推断
counts = {"a": 1, "b": 2}              // map<string, int>
map<string, float> ratios = {"x": 1}   // 值宽化为 float
map<string, int> empty = {}            // 空字面量（类型由声明推断）
```

```navi
var map<string, float> m = map.new<string, float>()

m.put("open",  open)    // 插入或更新；返回旧值，键不存在时返回 na
m.put("close", close)

float o = m.get("open")       // 键不存在时返回 na
bool  exists = m.contains("close")
int   count  = m.size()

float old = m.remove("open")  // 删除键，返回被删值，键不存在时返回 na

array<string> ks = m.keys()   // 所有键组成的数组
array<float>  vs = m.values() // 所有值组成的数组

m.put_all(other)              // 合并另一个 map
m.clear()                     // 清空所有条目
map<string, float> dup = m.copy()
```

**遍历**

```navi
for (k, v) in m {
    log.info("{0} = {1}", k, v)
}
```

### `matrix<T>`

以 `[行, 列]` 索引的二维表，均从零开始。

**创建**

```navi
// 3×4 矩阵，所有元素初始化为 0.0
matrix<float> mat = matrix.new<float>(3, 4, 0.0)
```

**读写元素**

```navi
mat.set(0, 0, 1.5)             // 设置第 0 行第 0 列
float v = mat.get(0, 0)        // 读取元素

int r = mat.rows()             // 行数
int c = mat.columns()          // 列数

array<float> row0 = mat.row(0) // 第 0 行转为数组
array<float> col1 = mat.col(1) // 第 1 列转为数组
```

**结构操作**

```navi
mat.add_row(na, array.from(1.0, 2.0, 3.0, 4.0)) // 追加一行
mat.add_col()                                     // 追加一列（填充 na）
mat.remove_row()                                  // 删除最后一行（返回该行）
mat.remove_col(0)                                 // 删除第 0 列（返回该列）
mat.reshape(2, 6)                                 // 改变形状（元素总数不变）
matrix<float> sub = mat.submatrix(0, 2, 0, 2)    // 行 [0,2)，列 [0,2)
matrix<float> t   = mat.transpose()              // 行列互换
mat.swap_rows(0, 1)
mat.swap_columns(0, 1)
mat.reverse()                                     // 原地翻转元素顺序
mat.fill(0.0)                                     // 填充整个矩阵
mat.sort()                                        // 升序排列所有元素
matrix<float> dup = mat.copy()
```

**数学运算**（仅数值矩阵）

```navi
float total = mat.avg()
float hi    = mat.max()
float lo    = mat.min()
float med   = mat.median()

matrix<float> s = mat.sum(other)   // 逐元素求和
matrix<float> d = mat.diff(other)  // 逐元素求差
matrix<float> p = mat.multi(other) // 矩阵乘法
matrix<float> i = mat.inv()        // 矩阵求逆
float         det = mat.det()      // 行列式
int           rk  = mat.rank()     // 秩
float         tr  = mat.trace()    // 迹（对角线元素之和）
matrix<float> pw  = mat.pow(2)     // 矩阵幂
```

## 元组

元组将函数的多个返回值组合在一起：

```navi
fn calculate(x, y) {
    (x + y, x - y) // 返回一个元组
}

let (sum, diff) = calculate(10, 3);
```

## 下一步

- [类型与变量](/zh-CN/guide/types-and-variables) — 类型限定符、var/varip、元组解构
- [控制结构](/zh-CN/guide/control-structures) — if、for、while、switch
- [函数与方法](/zh-CN/guide/functions-and-methods) — 定义和调用函数
