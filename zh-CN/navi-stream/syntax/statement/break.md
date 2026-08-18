# Break

`break` 用于退出当前循环。

下面的例子展示了如何使用 `break` 来找到第一个 `close` 大于 `open` 的 K 线，当满足条件时，退出循环。

> `quote` is from stdlib.

```nv
let i = 0;

while (true) {
    if (quote.close[i] > quote.open[i]) {
        break;
    }

    i = i + 1;
}
```
