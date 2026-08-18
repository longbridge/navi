# Param

`param` 用于定义 Navi Stream 的外部参数，外部参数可以在实例化时传入，从而改变脚本的行为。

## Syntax

```nv
param {
    value = 10,

    message = "hello",

    @meta(title = "Limit", range = 50..100)
    limit = 50,

    @meta(title = "Render style", choices = ["line" = "线", "bar" = "柱"])
    render_style = "line",
};
```

## Meta decorator

用 `@meta` 装饰器来定义参数的选项。

### Value Range

**NOTE: 只有 `number` 类型的参数支持 `range` 选项。**

下面的代码指定参数 `a` 的值必须**大于等于** `50` 且**小于等于** `100`，默认值为 `50`。

```nv
param {
    @meta(range = 50..100)
    a = 50,
};
```

### choices

`choices` 用于指定参数的可选值（类似于枚举）。

下面的代码指定参数 `a` 的值必须是 `3`, `6`, `9` 中的一个，如果没有指定，则默认值为 `3`。

```nv
param {
    @meta(choices = [3, 6, 9])
    a = 3,
}
```

你也可以为每个选项指定一个名称，这样在客户端中可以给用户提供更清晰的参数描述。

```nv
param {
    @meta(choices = ["短" = 3, "中" = 6, "长" = 9])
    a = 6,
}
```

### title

以下语句为 `length` 参数指定了标题 `长度`。

```nv
param {
    @meta(title = "长度")
    length = 10,
}
```
