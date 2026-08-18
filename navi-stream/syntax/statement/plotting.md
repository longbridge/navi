# Plotting

Navi Stream provides two plotting statements for rendering chart elements: `plot` and `hline`.

> Both `plot` and `hline` can only be used at the top-level scope. They cannot be used inside functions.

## plot

`plot` draws a data series on the chart. It takes one required positional argument (the value to plot) and several optional named arguments.

### Syntax

```nv
plot(<value>, title: <string>, color: <color>, style: <plotstyle>, key: <string>, hidden: <bool>, format_number: <bool>);
```

### Arguments

| Argument        | Type        | Required | Default          | Description                                                                              |
| --------------- | ----------- | -------- | ---------------- | ---------------------------------------------------------------------------------------- |
| `value`         | `number`    | Yes      |                  | The numeric value to plot.                                                               |
| `title`         | `string`    | No       |                  | The display name of the series in the legend.                                            |
| `color`         | `color`     | No       |                  | The color of the series. Can be a color literal (e.g. `#red`, `#ff8d1e`) or a variable.  |
| `style`         | `plotstyle` | No       | `plotstyle.line` | The drawing style of the series.                                                         |
| `key`           | `string`    | No       |                  | A unique identifier for the series, used for programmatic reference.                     |
| `hidden`        | `bool`      | No       | `false`          | If `true`, the series is hidden by default.                                              |
| `format_number` | `bool`      | No       | `false`          | If `true`, the value will be formatted with number formatting (e.g. thousand separators). |

### Plot Styles

The `plotstyle` enum provides the following styles:

| Value                  | Description                        |
| ---------------------- | ---------------------------------- |
| `plotstyle.line`       | Draws a line chart (default).      |
| `plotstyle.histogram`  | Draws a histogram (bar) chart.     |
| `plotstyle.circles`    | Draws individual circle markers.   |
| `plotstyle.stick`      | Draws vertical stick lines.        |

### Examples

Basic line plot:

```nv
plot(close, title: "Close", color: #blue);
```

Multiple series with different colors:

```nv
plot(ma(close, 5), title: "MA5", color: #ffbb53, key: "MA1");
plot(ma(close, 10), title: "MA10", color: #4781ff, key: "MA2");
plot(ma(close, 20), title: "MA20", color: #fc6ebc, key: "MA3");
```

Dynamic color with a variable:

```nv
let colors = close >= open ? #up : #down;
plot(volume, title: "Volume", color: colors, style: plotstyle.histogram);
```

Using different plot styles:

```nv
plot(volume, title: "VOL", color: #blue, style: plotstyle.histogram, format_number: true);
plot(macd, title: "MACD", color: #yellow, style: plotstyle.stick);
plot(sline, title: "SAR", color: #red, style: plotstyle.circles);
```

Hidden series:

```nv
plot(ma(close, 120), title: "MA120", color: #d858ff, key: "MA6", hidden: true);
```

## hline

`hline` draws a horizontal line at a fixed value on the chart. It is typically used to mark reference levels such as overbought/oversold thresholds.

### Syntax

```nv
hline(<value>, color: <color>, style: <linestyle>, width: <number>, show_label: <bool>);
```

### Arguments

| Argument     | Type        | Required | Default          | Description                                              |
| ------------ | ----------- | -------- | ---------------- | -------------------------------------------------------- |
| `value`      | `number`    | Yes      |                  | The y-axis value at which to draw the horizontal line.   |
| `color`      | `color`     | No       |                  | The color of the line.                                   |
| `style`      | `linestyle` | No       | `linestyle.solid`| The line drawing style.                                  |
| `width`      | `number`    | No       |                  | The width of the line.                                   |
| `show_label` | `bool`      | No       | `false`          | If `true`, displays the value label on the line.         |

### Line Styles

The `linestyle` enum provides the following styles:

| Value              | Description                          |
| ------------------ | ------------------------------------ |
| `linestyle.solid`  | Draws a solid line (default).        |
| `linestyle.dash`   | Draws a dashed line.                 |

### Examples

Simple horizontal line:

```nv
hline(50, color: #494138, style: linestyle.dash, width: 1, show_label: true);
```

Marking overbought and oversold levels:

```nv
hline(30, color: #494138, style: linestyle.dash, width: 1, show_label: true);
hline(50, color: #494138, style: linestyle.dash, width: 1, show_label: true);
hline(70, color: #494138, style: linestyle.dash, width: 1, show_label: true);
```

Using solid line style:

```nv
hline(100, color: #red, style: linestyle.solid, width: 2);
```
