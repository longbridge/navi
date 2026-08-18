---
order: 3
---

# Stdlib

Navi Stream 内置了一系列的标准库函数，用于快速开发策略。

你可以直接以 `<module>.<function>` 的形式调用标准库中的函数，例如 `math.sin`。

或者你可以使用 `use <module>` 来导入整个包，然后直接调用函数，例如 `use math;`，然后你就可以在 Navi Stream 中直接使用整个 [Math](./math.md) 库中的函数，例如：`sign`，`abs`...

## 示例

```nv
use math;

let a = 10;
let b = max(a, 100);
```

或者你可以直接调用 `math.max`：

```nv
let a = 10;
let b = math.max(a, 100);
```
