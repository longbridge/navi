---
order: -98
---

# 字面量

## bool

`bool` 是一个内置类型，你可以用它来定义一个变量，`true` 和 `false` 是布尔值。

```nv
let a: bool = true;
let b = false;
```

## number

在 Navi Stream 中，我们使用 `number` 来表示所有的数值，包括整数和浮点数。

```nv
let a: number = 1;
let a = 3.1415;
```

## string

我们可以使用双引号 `"` 和 `` ` `` 来创建一个字符串字面量。

```nv
let a = "hello world";
let b: string = `你好世界`;
```

## nil

`nil` 是一个特殊的值，它表示没有任何东西，用来表示一个空值。

```nv
let a = nil;
```

## color

不同于大多数编程语言，我们在 Navi Stream 中有一个 `color` 类型，用来表示图表绘制的颜色。

它像 CSS 语法，我们可以使用 `#` 来定义一个颜色，然后使用 HEX 颜色或者预定义的颜色名字，如 `red`、`blue`、`green`。

::: info

你可以自由地使用任何颜色，Navi Stream 不会处理颜色，它会直接将颜色输出到图表。

:::

```nv
let a: color = #ff00ff;
let b = #red;
```
