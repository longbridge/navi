# While

`while` 语句用于在条件为 true 时重复执行一组语句。

下面的示例展示了 `while` 语句的基本语法：

```nv
let i = 1;
let total_vol = 0;

while (total_vol <= capital) {
    total_vol = total_vol + vol[i];
    i = i + 1;
}
```

:::warning
在 `while` 块中，不能使用状态函数，例如 `ma`、`sum`。
:::
