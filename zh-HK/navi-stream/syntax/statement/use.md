# Use

`use` 语句用于将标准库“module”中的函数导入到当前作用域中，这样我们就可以直接使用这些函数。

::: info
与 Navi 的 module 略有不同，在 Navi Stream 中，所有的 stdlib 都已经默认导入，所以你可以直接使用它们，无需 `use`。
而使用 `use` 是会将 module 内部的函数直接导入到当前作用域，这样你就可以直接使用这些函数，而不需要使用 `<module>.<function>` 的形式。
:::

## With `use`

当你使用 `use` 语句导入一个 namespace 时，我们可以直接使用 `ma` 函数，以及 [ta] 中的所有函数：

```nv
use ta;

let avg = ma(value, 10);
```

你也可以一次导入多个包：

```nv
use ta, quote, math;

let avg = abs(-1);
// avg = 1
```

## Without `use`

我们也可以直接使用 `<module>.<function>` 的形式来调用标准库中的函数，而不使用 `use`。例如，下面的语句调用了 [ta] 命名空间中的 `ma` 函数。

```nv
let avg = ta.ma(value, 10);

```

[ta]: ../../stdlib/ta.md
