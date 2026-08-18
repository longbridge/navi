# If

You can execute different code branches according to the condition.

Yes, our `if` statement is similar to the `if` statement in other programming languages.

We have `if ... else` and `if ... else if ... else` statements.

The following example assigns `value` to `1` if `close` is greater than `open`, otherwise `0`.

```nv
use quote;

if (close > open) {
    value = 1;
}
```

Use `else` for the branch to execute when the condition is not met.

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

Use `else if` to execute different branches according to multiple conditions.

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
In a `if` branches, you can't use stateful functions, such as `ma`, `sum`.
:::
