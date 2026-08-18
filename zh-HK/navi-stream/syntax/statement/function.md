# Function

## 函数声明

Navi Stream 的函数定义与 Navi 非常相似，也支持 keyword arguments.

```nv
fn foo(count: number): number {
    return count + 1;
}

let a = foo(1);
```

## 函数调用

下面的例子调用 [math] 中的 `max` 函数来计算 `5` 和 `10` 的最大值。

::: info
更多内容，可以查阅 [Stdlib] 文档。
:::

```nv
let a = math.max(5, 10);
```

::: info
在 Navi Stream 中，函数调用与 Navi 有一点不同，Navi Stream 中可以像 Ruby 一样在函数调用的时候省略 `()`，但在 Navi 中，必须写 `()`。
:::

下面的例子调用 `open` 函数来获取当前周期的开盘价。

```nv
let a = quote.open;
```

也等于这样写：

```nv
let a = quote.open();
```

[stdlib]: ../../stdlib/index.md
