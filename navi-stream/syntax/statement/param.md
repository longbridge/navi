# Param

`param` use for define external parameters for Navi Stream, external parameters can be passed in when instantiating, thus changing the behavior of the script.

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

Use `@meta` decorator to define the options of this parameter.

### Value Range

**NOTE: Only `number` type parameters can specify a range.**

The following code specifies that the value of parameter `a` must be **greater than or equal to** `50` and **less than or equal to** `100`, default is `50`.

```nv
param {
    @meta(range = 50..100)
    a = 50,
};
```

### choices

`choices` is used to specify the available values for a parameter (Like a enum).

The following code specifies that the value of parameter `a` must be one of `3`, `6`, `9`, default is `3`.

```nv
param {
    @meta(choices = [3, 6, 9])
    a = 3,
}
```

You can also specify a name for each choice, which is used to give users a clearer parameter description in the client.

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
