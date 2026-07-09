# 語言基礎

Navi。每個腳本都以聲明語句開頭。

## 腳本結構

```navi
indicator("My Indicator")

// 你的代碼
plot(close)
```

第一行聲明腳本類型 — `indicator()`、`strategy()` 或 `library()`。

## 註釋

```navi
// 單行註釋
float a = 10  // 行尾註釋

//@description A library for math utilities
```

Navi 沒有多行註釋。以 `//@` 開頭的特殊註釋是文件標籤（`//@function`、`//@param`、`//@returns`、`//@type`、`//@enum`、`//@field`、`//@variable`）或 `@description` 等描述性註解。

## 語句

語句以換行符分隔。不使用分號。多條語句可以用逗號寫在同一行：

```navi
a = 1
b = 2
c = a + b

// 同一行多條語句
a = 1, b:  2, c:  3
```

空行和僅包含註釋的行會被忽略。

## 縮排

Navi 使用縮排來定義代碼塊（類似 Python）。一個縮排級別等於 **4 個空格** 或 **1 個 Tab**：

```navi
// 正確：4 個空格
if close > open {
    let color = color.GREEN;
    label.new(bar_index, high, "Up")
} else {
    let color = color.RED
}

// 正確：Tab
if close > open {
    doSomething()
}

// 錯誤：2 個空格 — 不會被識別為代碼塊
if close > open {}
doSomething(); // 這不是 if 塊的一部分！
```

巢狀塊需要累加縮排：

```navi
if condition1 {
    if condition2 {
        for i = 0 to 10 {
            doSomething(i) // 級別 3（12 個空格）
        } // 級別 3（12 個空格）
    } // 級別 3（12 個空格）
}
```

空格和 Tab 可以混用，但每個縮排單位必須是完整的 4 個空格或 1 個 Tab。

## 續行

長運算式可以跨行。**在括號內**（圓括號、方括號），允許任意縮排：

```navi
plot(series:  close, title:  "Close", color:  color.RED, linewidth:  2);

let arr: array<int> = [1, 2, 3];
```

**在括號外**，續行必須有額外的空白（比當前塊級別至少多 1 個空格或 tab）：

```navi
// 正確：續行帶額外空格
float result = longVariableName
 + anotherLongVariable
 - someOtherValue

// 錯誤：沒有額外空格 — 會被解析為新語句！
float result = a
+ b  // 這是一個獨立的語句！
```

## 基本類型

### 原始類型

| 類型 | 描述 | 示例 |
|---|---|---|
| `int` | 整數。範圍：**−9,007,199,254,740,992 至 9,007,199,254,740,992**（±2⁵³）。 | `42`, `-123`, `+5` |
| `float` | 浮點數。近似範圍：**±1.8 × 10³⁰⁸**；精度：約 15～17 位有效十進制數字。 | `3.14`, `.5`, `3.`, `1e-3`, `1.2E+5` |
| `bool` | 布林值 | `true`, `false` |
| `string` | 文字 | `"hello"`, `'world'` |
| `color` | RGBA 顏色 | `#FF0000`, `#FF000080` |
| `na` | 缺失/未定義值 | `na` |

### `int` 和 `float`

```navi
// 整數
a = 42
b = -123
c = +5

// 浮點數 — 十進制表示
d = 3.14
e = .14        // 前導點
f = 3.         // 尾隨點

// 浮點數 — 科學記數法
g = 314e-2     // 3.14
h = 0.00314E+2 // 0.314
```

### `string`

字串可以使用單引號或雙引號，語義完全相同：

```navi
a = "Hello, World!"
b = 'Hello, World!'
full = "Hello, " + "World!"  // 用 + 連接字串
```

支援的轉義序列：

| 轉義 | 含義 |
|---|---|
| `\\` | 反斜槓 |
| `\n` | 換行 |
| `\r` | 回車 |
| `\t` | Tab |
| `\"` 或 `""` | 雙引號（在雙引號字串中） |
| `\'` 或 `''` | 單引號（在單引號字串中） |

### `color`

顏色字面量使用 `#` 的十六進制表示法：

- `#RRGGBB` — 6 位十六進制，完全不透明（alpha = FF）
- `#RRGGBBAA` — 8 位十六進制，顯式 alpha 通道

```navi
red = #FF0000          // 完全不透明的紅色
semiRed = #FF000080    // 半透明紅色
```

命名顏色常量可透過 `color` 模組取得：`color.RED`、`color.BLUE`、`color.GREEN` 等。使用 `color.new()` 建立自訂透明度的顏色。

### `na`

`na` 表示缺失或未定義的值。它與任何類型兼容，但單獨使用時需要顯式類型註解：

```navi
let a: float = na; // OK
let b: int = na; // OK
let a = na; // 錯誤：無法推斷變數類型

// 使用 na() 檢測 na：
if na(myValue) {}
// 處理缺失值
```

## 運算子

### 算術運算
```navi
a = 10 + 3    // 13
b = 10 - 3    // 7
c = 10 * 3    // 30
d = 10 / 3    // 3.333...
e = 10 % 3    // 1
```

### 比較運算
```navi
close > open     // 大於
close < open     // 小於
close >= 100     // 大於等於
close <= 100     // 小於等於
close == open    // 等於
close != open    // 不等於
```

### 邏輯運算
```navi
a and b    // 邏輯與
a or b     // 邏輯或
not a      // 邏輯非
```

### 三元運算
```navi
color = close > open ? color.GREEN : color.RED
```

## 歷史引用運算子

在 Navi 中，每個表達式在每根 K 線上都會求值一次，產生一個時間序列。`[]` 運算子存取的是某個表達式在前幾根 K 線上**已經計算好的結果**——不僅限於內建變數，而是適用於**任何**表達式：

```navi
// 內建 series 變數
previousClose = close[1]              // 前一根 K 線的收盤價
twoBarsAgo = high[2]                  // 兩根 K 線之前的最高價

// 函式呼叫結果——取回已計算好的值，而非重新求值
prevSma = ta.sma(close, 14)[1]       // 前一根 K 線上計算的 SMA 值
prevEma = ta.ema(close, 10)[3]       // 3 根 K 線之前的 EMA 值

// 算術表達式
prevRange = (high - low)[1]           // 前一根 K 線的振幅

// 使用者自訂變數
myValue = close * volume
prevMyValue = myValue[1]              // myValue 在前一根 K 線上的值
```

::: tip 核心概念
`ta.sma(close, 14)[1]` 並**不會**重新計算 SMA——它返回的是腳本在前一根 K 線上執行時已經算好的 SMA 值。
:::

在早期 K 線上（歷史資料不足時），結果為 `na`。偏移量可以是 series 表達式：

```navi
int lookback = input.int(5, "Lookback")
pastClose = close[lookback]
```

## 集合類型

Navi 提供三種泛型集合類型：

| 類型 | 描述 |
|---|---|
| `array<T>` | 有序、可索引序列 |
| `matrix<T>` | 列 × 欄的二維表 |
| `map<K, V>` | 鍵值儲存 |

集合是**參考類型**——將集合賦值給另一個變數只複製參考，而非內容。使用 `.copy()` 取得獨立副本。

集合通常以 `var` 宣告，使其跨 K 線持久保存，而非每根 K 線重新建立：

```navi
var array<float> highs = array.new<float>()
highs.push(high)   // 每根 K 線累積一個值
```

::: warning 即將淘汰的語法
`int[]`、`float[]` 等簡寫形式是 `array<int>`、`array<float>` 的舊式別名，將在未來版本中移除。請始終使用 `array<T>` 形式。
:::

### `array<T>`

有序的零索引序列，支援動態增刪。

**建立陣列**

```navi
// 空陣列，手動新增元素
var array<float> a = array.new<float>()

// 預配置大小，所有元素初始化為 0.0
array<float> b = array.new<float>(5, 0.0)

// 從字面量清單建立
array<int> c = array.from(10, 20, 30)

// 陣列字面量 — 類型由元素推斷
values = [1, 2, 3]               // array<int>
array<float> fs = [1, 2, 3]     // 元素拓展為 float
array<int> empty = []            // 空字面量（類型由宣告推斷）
```

**讀寫元素**

```navi
a.push(close)               // 附加到末尾
a.unshift(close)            // 插入到開頭

float last  = a.last()      // 最後一個元素
float first = a.first()     // 第一個元素
float val   = a.get(2)      // 依索引讀取（負索引從末尾計數）
a.set(2, 99.0)              // 依索引覆寫

a.insert(1, 42.0)           // 在索引處插入，後續元素右移
float removed = a.remove(1) // 刪除指定索引，傳回被刪元素
float popped  = a.pop()     // 移除並傳回最後一個元素
float shifted = a.shift()   // 移除並傳回第一個元素

int n = a.size()            // 元素個數
```

**搜尋**

```navi
bool found = a.includes(close)    // 值是否存在
int  idx   = a.indexof(close)     // 第一個符合的索引，或 -1
int  last  = a.lastindexof(close) // 最後一個符合的索引，或 -1
```

**切片與合併**

```navi
array<float> sub  = a.slice(1, 4)      // 元素 [1, 4)
array<float> both = a.concat(b)        // 新陣列，包含 b 的所有元素
array<float> dup  = a.copy()           // 獨立副本
a.reverse()                             // 原地翻轉
a.fill(0.0, 0, 3)                       // 將 [0, 3) 範圍填充為 0.0
a.clear()                               // 清空所有元素
```

**排序**

```navi
a.sort()                           // 升序（預設）
a.sort(order.descending)           // 降序
array<int> idx = a.sort_indices()  // 傳回排序索引，不修改 a
```

**統計**（僅數值陣列）

```navi
float total = a.sum()
float mean  = a.avg()
float med   = a.median()
float sd    = a.stdev()
float hi    = a.max()
float lo    = a.min()
float rng   = a.range()            // max - min
```

**`for...in` 遍歷**

```navi
var vals: array<float> = array.from(1.0, 2.0, 3.0);
let total: float = 0.0;
for v in vals {
    total += v
}

// 帶索引
for (i, v) in vals {
    log.info("{0}: {1}", i, v)
}
```

### `map<K, V>`

無序的鍵值儲存。鍵必須是原始類型（`int`、`float`、`bool`、`string`、`color`）或列舉類型；值可以是任意類型。

**建立映射**

```navi
// 映射字面量 — 類型由條目推斷
counts = {"a": 1, "b": 2}              // map<string, int>
map<string, float> ratios = {"x": 1}   // 值拓展為 float
map<string, int> empty = {}            // 空字面量（類型由宣告推斷）
```

```navi
var map<string, float> m = map.new<string, float>()

m.put("open",  open)    // 插入或更新；傳回舊值，鍵不存在時傳回 na
m.put("close", close)

float o = m.get("open")       // 鍵不存在時傳回 na
bool  exists = m.contains("close")
int   count  = m.size()

float old = m.remove("open")  // 刪除鍵，傳回被刪值，鍵不存在時傳回 na

array<string> ks = m.keys()   // 所有鍵組成的陣列
array<float>  vs = m.values() // 所有值組成的陣列

m.put_all(other)              // 合併另一個 map
m.clear()                     // 清空所有項目
map<string, float> dup = m.copy()
```

**遍歷**

```navi
for (k, v) in m {
    log.info("{0} = {1}", k, v)
}
```

### `matrix<T>`

以 `[列, 欄]` 索引的二維表，均從零開始。

**建立**

```navi
// 3×4 矩陣，所有元素初始化為 0.0
matrix<float> mat = matrix.new<float>(3, 4, 0.0)
```

**讀寫元素**

```navi
mat.set(0, 0, 1.5)             // 設定第 0 列第 0 欄
float v = mat.get(0, 0)        // 讀取元素

int r = mat.rows()             // 列數
int c = mat.columns()          // 欄數

array<float> row0 = mat.row(0) // 第 0 列轉為陣列
array<float> col1 = mat.col(1) // 第 1 欄轉為陣列
```

**結構操作**

```navi
mat.add_row(na, array.from(1.0, 2.0, 3.0, 4.0)) // 附加一列
mat.add_col()                                     // 附加一欄（填充 na）
mat.remove_row()                                  // 刪除最後一列（傳回該列）
mat.remove_col(0)                                 // 刪除第 0 欄（傳回該欄）
mat.reshape(2, 6)                                 // 改變形狀（元素總數不變）
matrix<float> sub = mat.submatrix(0, 2, 0, 2)    // 列 [0,2)，欄 [0,2)
matrix<float> t   = mat.transpose()              // 列欄互換
mat.swap_rows(0, 1)
mat.swap_columns(0, 1)
mat.reverse()                                     // 原地翻轉元素順序
mat.fill(0.0)                                     // 填充整個矩陣
mat.sort()                                        // 升序排列所有元素
matrix<float> dup = mat.copy()
```

**數學運算**（僅數值矩陣）

```navi
float total = mat.avg()
float hi    = mat.max()
float lo    = mat.min()
float med   = mat.median()

matrix<float> s = mat.sum(other)   // 逐元素求和
matrix<float> d = mat.diff(other)  // 逐元素求差
matrix<float> p = mat.multi(other) // 矩陣乘法
matrix<float> i = mat.inv()        // 矩陣求逆
float         det = mat.det()      // 行列式
int           rk  = mat.rank()     // 秩
float         tr  = mat.trace()    // 跡（對角線元素之和）
matrix<float> pw  = mat.pow(2)     // 矩陣冪
```

## 元組

元組將函數的多個返回值組合在一起：

```navi
fn calculate(x, y) {
    (x + y, x - y) // 返回一個元組
}

let (sum, diff) = calculate(10, 3);
```

## 下一步

- [類型與變數](/zh-HK/guide/types-and-variables) — 類型限定符、var/varip、元組解構
- [控制結構](/zh-HK/guide/control-structures) — if、for、while、switch
- [函數與方法](/zh-HK/guide/functions-and-methods) — 定義和調用函數
