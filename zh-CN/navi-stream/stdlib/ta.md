---
order: 2
---

# Ta

`ta` 包提供了一些常见的技术分析函数。

## between & range

`between(a: number, b: number, c: number): bool`

> 别名：range

当 `a` 在 `b` 和 `c` 之间时，返回 `true`，否则返回 `false`。

```nv
ta.between(3, 1, 4);
// true

ta.between(0, 1, 4);
// false
```

## cross

`cross(a: number, b: number): bool`

当 `a` 从下方穿过 `b` 时，返回 `true`，否则返回 `false`。

## longcross

`longcross(a: number, b: number, n: number): bool`

当 `a` 在 `n` 个周期内小于 `b`，并且在这个周期 `a` 从下方穿过 `b` 时，返回 `true`，否则返回 `false`。

## valuewhen

`valuewhen(x: bool, n: any): any`

当 `x` 为 `true` 时，返回 `n` 的当前值，否则返回 `n` 的前一个值。

## select

`select(x1: bool, n1: any, x2: bool, n2: any, ...): any`

当 `x1` 为 `true` 时，返回 `n1`，当 `x2` 为 `true` 时，返回 `n2`，依此类推。

## orelse

`orelse(x: any?, y: any): any`

当 `x` 不为 `nil` 时，返回 `x`，否则返回 `y`。

## all

`all(x: bool, n: number): bool`

当 `x` 的 `n` 个周期都为 `true` 时，返回 `true`，否则返回 `false`。`n` 为 `0` 表示从第一个有效值开始。

## any

`any(x: bool, n: number): bool`

当 `x` 的 `n` 个周期中有至少一个为 `true` 时，返回 `true`，否则返回 `false`。`n` 为 `0` 表示从第一个有效值开始。

## relate

`relate(x: number, y: number, n: number): number`

获取 `x` 和 `y` 的 `n` 期相关系数。

## sar

`sar(n: number, s: number, m: number): number`

获取 `n` 期的抛物线 SAR，`s` 是步长，`m` 是最大步长。

## sarturn

`sarturn(n: number, s: number, m: number): number`

获取 `n` 期的抛物线 SAR，`s` 是步长，`m` 是最大步长。如果 SAR 向上转，返回 `1`，如果 SAR 向下转，返回 `-1`，否则返回 `0`。
