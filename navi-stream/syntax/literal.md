---
order: -98
---

# Literal

## bool

The `bool` is a built-in type, you can use it to define a variable, `true` and `false` is boolean value.

```nv
let a: bool = true;
let b = false;
```

## number

In Navi Stream, we use `number` for all numeric values, including integer and floating point numbers.

```nv
let a: number = 1;
let a = 3.1415;
```

## string

We can use double quotes `"` and `` ` `` to create a string literal.

```nv
let a = "hello world";
let b: string = `你好世界`;
```

## nil

`nil` is a special value, it means nothing, it is used to represent a null value.

```nv
let a = nil;
```

## color

Unlike most programming languages, we have a `color` type in Navi Stream, which is used to represent colors for chart drawing.

It is like CSS syntax, we can use `#` to define a color, and then use HEX color or predefined color names like `red`, `blue`, `green` that CSS supports.

::: info

You can free to use any color, Navi Stream will not process the color, it will output the color to the chart directly.

:::

```nv
let a: color = #ff00ff;
let b = #red;
```
