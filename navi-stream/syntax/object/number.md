---
order: -99
---

# Number

In Navi Stream, `number` type to define a int or float number.

::: info
In internal, `number` actually is not a object, it's a primitive type. But we will plan to change it to a object in the future.
:::

```nv
let a = 1;
let b = 2;

let c = a + b + 3;
// 6

c.to_string();
// "6"
```

## Methods

### to_string

Convert a number to a string.

```nv
let a = 1;
a.to_string();
// "1"
```

### to_fixed

Convert a number to a string with a specified number of decimal places.

```nv
let a = 3.14159;
a.to_fixed(2);
// "3.14"
```
