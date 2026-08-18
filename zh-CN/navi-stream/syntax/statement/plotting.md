# 绘图

Navi Stream 提供了两个绘图语句用于在图表上渲染图形元素：`plot` 和 `hline`。

> `plot` 和 `hline` 只能在顶层作用域中使用，不能在函数内部使用。

## plot

`plot` 在图表上绘制一个数据序列。它接受一个必选的位置参数（要绘制的值）以及多个可选的命名参数。

### 语法格式

```nv
plot(<value>, title: <string>, color: <color>, style: <plotstyle>, key: <string>, hidden: <bool>, format_number: <bool>);
```

### 参数

| 参数            | 类型        | 必选 | 默认值           | 说明                                                                        |
| --------------- | ----------- | ---- | ---------------- | --------------------------------------------------------------------------- |
| `value`         | `number`    | 是   |                  | 要绘制的数值。                                                               |
| `title`         | `string`    | 否   |                  | 序列在图例中的显示名称。                                                      |
| `color`         | `color`     | 否   |                  | 序列的颜色。可以是颜色字面量（如 `#red`、`#ff8d1e`）或变量。                    |
| `style`         | `plotstyle` | 否   | `plotstyle.line` | 序列的绘制样式。                                                              |
| `key`           | `string`    | 否   |                  | 序列的唯一标识符，用于程序化引用。                                              |
| `hidden`        | `bool`      | 否   | `false`          | 如果为 `true`，则该序列默认隐藏。                                              |
| `format_number` | `bool`      | 否   | `false`          | 如果为 `true`，数值将使用数字格式化显示（如千位分隔符）。                         |

### 绘制样式

`plotstyle` 枚举提供以下样式：

| 值                     | 说明                      |
| ---------------------- | ------------------------ |
| `plotstyle.line`       | 绘制折线图（默认）。       |
| `plotstyle.histogram`  | 绘制柱状图。              |
| `plotstyle.circles`    | 绘制圆点标记。            |
| `plotstyle.stick`      | 绘制垂直棒线。            |

### 示例

基本折线图：

```nv
plot(close, title: "Close", color: #blue);
```

多个序列使用不同颜色：

```nv
plot(ma(close, 5), title: "MA5", color: #ffbb53, key: "MA1");
plot(ma(close, 10), title: "MA10", color: #4781ff, key: "MA2");
plot(ma(close, 20), title: "MA20", color: #fc6ebc, key: "MA3");
```

使用变量动态设置颜色：

```nv
let colors = close >= open ? #up : #down;
plot(volume, title: "Volume", color: colors, style: plotstyle.histogram);
```

使用不同的绘制样式：

```nv
plot(volume, title: "VOL", color: #blue, style: plotstyle.histogram, format_number: true);
plot(macd, title: "MACD", color: #yellow, style: plotstyle.stick);
plot(sline, title: "SAR", color: #red, style: plotstyle.circles);
```

隐藏序列：

```nv
plot(ma(close, 120), title: "MA120", color: #d858ff, key: "MA6", hidden: true);
```

## hline

`hline` 在图表上绘制一条固定值的水平线。通常用于标记超买/超卖等参考水平线。

### 语法格式

```nv
hline(<value>, color: <color>, style: <linestyle>, width: <number>, show_label: <bool>);
```

### 参数

| 参数         | 类型        | 必选 | 默认值            | 说明                                    |
| ------------ | ----------- | ---- | ----------------- | --------------------------------------- |
| `value`      | `number`    | 是   |                   | 水平线的 y 轴数值。                      |
| `color`      | `color`     | 否   |                   | 线条的颜色。                             |
| `style`      | `linestyle` | 否   | `linestyle.solid` | 线条的绘制样式。                          |
| `width`      | `number`    | 否   |                   | 线条的宽度。                             |
| `show_label` | `bool`      | 否   | `false`           | 如果为 `true`，在线条上显示数值标签。      |

### 线条样式

`linestyle` 枚举提供以下样式：

| 值                 | 说明                      |
| ------------------ | ------------------------ |
| `linestyle.solid`  | 绘制实线（默认）。         |
| `linestyle.dash`   | 绘制虚线。                |

### 示例

简单水平线：

```nv
hline(50, color: #494138, style: linestyle.dash, width: 1, show_label: true);
```

标记超买和超卖水平线：

```nv
hline(30, color: #494138, style: linestyle.dash, width: 1, show_label: true);
hline(50, color: #494138, style: linestyle.dash, width: 1, show_label: true);
hline(70, color: #494138, style: linestyle.dash, width: 1, show_label: true);
```

使用实线样式：

```nv
hline(100, color: #red, style: linestyle.solid, width: 2);
```
