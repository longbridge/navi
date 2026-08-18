---
order: 2
---

# ta

`ta` package provides some common technical analysis functions.

## between & range

`between(a: number, b: number, c: number): bool`

> alias: range

When `a` is between `b` and `c`, return `true`, otherwise return `false`.

```nv
ta.between(3, 1, 4);
// true

ta.between(0, 1, 4);
// false
```

## cross

`cross(a: number, b: number): bool`

When `a` crosses `b` from below, return `true`, otherwise return `false`.

## longcross

`longcross(a: number, b: number, n: number): bool`

When `a` is less than `b` for `n` periods, and `a` crosses `b` from below this period, return `true`, otherwise return `false`.

## valuewhen

`valuewhen(x: bool, n: any): any`

When `x` is `true`, return `n`'s current value, otherwise return `n`'s previous value.

## select

`select(x1: bool, n1: any, x2: bool, n2: any, ...): any`

When `x1` is `true`, return `n1`, when `x2` is `true`, return `n2`, and so on.

## orelse

`orelse(x: any?, y: any): any`

When `x` is not `nil`, return `x`, otherwise return `y`.

## all

`all(x: bool, n: number): bool`

When `n` periods of `x` are all `true`, return `true`, otherwise return `false`. `n` is `0` means from the first valid value.

## any

`any(x: bool, n: number): bool`

When `n` periods of `x` have at least one `true`, return `true`, otherwise return `false`. `n` is `0` means from the first valid value.

## barslast

`barslast(x: bool): number`

Get the current period number since the **last** time `x` is `true`.

## barssince

`barssince(x: bool): number`

Get the current period number since the **first** time `x` is `true`.

## count

`count(x: bool, n: number): number`

Get the number of times `x` is `true` in `n` periods. `n` is `0` means from the first valid value.

## dma

`dma(x: number, n: number): number`

Get the dynamic moving average of `x`.

## ema

`ema(x: number, n: number): number`

Get the `n` period exponential moving average of `x`.

## filter

`filter(x: bool, n: number): bool`

Return `true` when `x` is `true` and its previous `n` periods are all `false`.

## hhv

`hhv(x: number, n: number): number`

Get the maximum value of `x` in `n` periods. `n` is `0` means from the first valid value.

## hhvbars

`hhvbars(x: number, n: number): number`

Get `n` periods of `x` maximum value to the current period number. `n` is `0` means from the first valid value.

## llv

`llv(x: number, n: number): number`

Return the minimum value of `x` in `n` periods.

## llvbars

`llvbars(x: number, n: number): number`

Get `n` periods of `x` minimum value to the current period number. `n` is `0` means from the first valid value.

## sum

`sum(x: number, n: number): number`

Get the sum of `x` in `n` periods. `n` is `0` means from the first valid value.

## mular

`mular(x: number, n: number): number`

Get the product of `x` in `n` periods. `n` is `0` means from the first valid value.

## ma

`ma(x: number, n: number): number`

Get `n` period simple average of `x`. `n` is `0` means from the first valid value.

## mema

`mema(x: number, n: number): number`

Get `n` period modified exponential moving average of `x`.

## sma

`sma(x: number, n: number): number`

Get `n` period simple moving average of `x`.

## tma

`tma(x: number, n: number): number`

Get `n` period triangular moving average of `x`.

## wma

`wma(x: number, n: number): number`

Get `n` period weighted moving average of `x`.

## last

`last(x: bool): number`

Get the last valid value of `x`.

## sumbars

`sumbars(a: number, b: number): number`

Get the period number of `a` plus `b` until `a` is greater than or equal to `b`.

## hod

`hod(x: number, n: number): number`

Get the rank of the current value of `x` among the highest values in `n` periods. Returns `1` when the current value is the highest.

## lod

`lod(x: number, n: number): number`

Get the rank of the current value of `x` among the lowest values in `n` periods. Returns `1` when the current value is the lowest.

## avedev

`avedev(x: number, n: number): number`

Get the average absolute deviation of `x` in `n` periods.

## devsq

`devsq(x: number, n: number): number`

Get the sum of the squares of the deviations of `x` in `n` periods.

## forcast

`forcast(x: number, n: number): number`

Get the `n` period linear regression forecast value of `x`.

## slope

`slope(x: number, n: number): number`

Get the `n` period linear regression slope of `x`.

## std

`std(x: number, n: number): number`

Get the `n` period standard deviation of `x`.

## stddev

`stddev(x: number, n: number): number`

Get the `n` period standard deviation of `x`.

## stdp

`stdp(x: number, n: number): number`

Get the `n` period standard deviation of `x`.

## svar

`svar(x: number, n: number): number`

Get the `n` period sample variance of `x`.

## varp

`varp(x: number, n: number): number`

Get the `n` period total variance of `x`.

## covar

`covar(x: number, y: number, n: number): number`

Get the `n` period covariance of `x` and `y`.

## relate

`relate(x: number, y: number, n: number): number`

Get the `n` period correlation coefficient of `x` and `y`.

## sar

`sar(n: number, s: number, m: number): number`

Get the parabolic SAR of `n` periods, `s` is the step length, `m` is the maximum step length.

## sarturn

`sarturn(n: number, s: number, m: number): number`

Get the parabolic SAR of `n` periods, `s` is the step length, `m` is the maximum step length. If the SAR turns up, return `1`, if the SAR turns down, return `-1`, otherwise return `0`.
