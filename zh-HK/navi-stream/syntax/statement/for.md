# For

For 循环可以遍历指定容器中的每个元素。它会调用容器的 `iter` 方法来创建一个迭代器。

下面的代码使用 `for` 循环遍历数组中的所有元素。循环结束后，`count` 等于 `45`。

```nv
let count = 0;

for (let x in [number] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }) {
    count += x;
}
```

## Range

`range` 类型实现了 `iter` 方法。你可以为它指定 `初始值`、`结束值`、`步长`。步长默认为 `1`。

下面的代码创建了 `0` 到 `9` 的 range 类型，并用 `for` 迭代这个 range。循环结束后，`count` 等于 `45`。

```nv
let count = 0;

for (let x in 0..10) {
    count += x;
}
```

然后，你可以使用 `step` 方法来设置步长。下面的代码创建了一个 `0` 到 `9` 的 range 类型，并设置步长为 `3`。循环结束后，`count` 等于 `18`。

```nv
let count = 0;
for (let x in (0..10).step(3)) {
   count += x;
}
```

::: warning
在 `for` 循环中，不能使用状态函数，例如 `ma`、`sum`。
:::
