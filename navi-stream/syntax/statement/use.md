# Use

`use` statement is used to import functions from standard library “package” into the current scope, so we can use the functions directly.

::: info
Unlike Navi's package, in Navi Stream, all of the stdlib has been default imported, so you can use them directly with out `use`.
:::

## With `use`

When using the `use` statement to import a namespace, we can directly use the `ma` function, as well as all functions in [ta]:

```nv
use ta;

let avg = ma(value, 10);
```

You also can import multiple packages at once:

```nv
use ta, quote, math;

let avg = abs(-1);
// avg = 1
```

## Without `use`

By default, we can use `<package>.<fn>` to call functions in the standard library without using `use`. For example, the following statement calls the `ma` function in the [ta] namespace.

```nv
let avg = ta.ma(value, 10);

```

[ta]: ../../stdlib/ta.md
