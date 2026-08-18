# While

`while` statement is used to repeat a block of statements while a condition is true.

This code show up how many periods are needed to fully turn over the capital.

```nv
let i = 1;
let total_vol = 0;

while (total_vol <= capital) {
    total_vol = total_vol + vol[i];
    i = i + 1;
}
```

:::warning
In a `while` block, you can't use stateful functions, such as `ma`, `sum`.
:::
