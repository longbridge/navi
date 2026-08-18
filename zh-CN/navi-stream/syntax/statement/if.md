# If

你可以根据条件执行不同的代码分支。

是的，我们的 `if` 语句与其他编程语言中的 `if` 语句类似。

我们有 `if ... else` 和 `if ... else if ... else` 语句。

下面的示例将 `value` 赋值为 `1`，如果 `close` 大于 `open`，否则赋值为 `0`。

```nv
use quote;

if (close > open) {
    value = 1;
}
```

用 `else` 来执行条件不满足时的分支。

```nv
use quote;

let a = 1;
let b = 2;

if (close > open) {
    a = 2 + a;
    b = 1 + b;
} else {
    b = 2 + b;
}
```

用 `else if` 来根据多个条件执行不同的分支。

```nv
if (close > open) {
    value = 1;
} else if (close > prev_close) {
    value = 2;
} else {
    value = 3;
}
```

:::warning
在 `if` 分支中，不能使用状态函数，例如 `ma`、`sum`。
:::
