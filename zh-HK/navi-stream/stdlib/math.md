---
order: 1
---

# Math

`math` 包提供了一系列的数学函数。

| 函数名                                                  | 描述                                                                                              |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| abs(n: `number`): `number`                              | 返回 `n` 的绝对值                                                                                 |
| acos(n: `number`): `number`                             | 返回 `n` 的反余弦值                                                                               |
| asin(n: `number`): `number`                             | 返回 `n` 的反正弦值                                                                               |
| atan(n: `number`): `number`                             | 返回 `n` 的反正切值                                                                               |
| ceiling(n: `number`): `number`                          | 返回大于或等于 `n` 的最小整数                                                                     |
| floor(n: `number`): `number`                            | 返回小于或等于 `n` 的最大整数                                                                     |
| round(n: `number`): `number`                            | 将 `n` 四舍五入到最近的整数                                                                       |
| cos(n: `number`): `number`                              | 返回 `n` 的余弦值                                                                                 |
| exp(n: `number`): `number`                              | 返回 `e` 的 `n` 次方                                                                              |
| fracpart(n: `number`): `number`                         | 返回 `n` 的小数部分                                                                               |
| intpart(n: `number`): `number`                          | 返回 `n` 的整数部分                                                                               |
| ln(n: `number`): `number`                               | 返回 `n` 的自然对数（底数为 `e`）                                                                 |
| log(n: `number`): `number`                              | 返回 `n` 的对数（底数为 10）                                                                      |
| sin(n: `number`): `number`                              | 返回 `n` 的正弦值（单位为弧度）                                                                   |
| sqrt(n: `number`): `number`                             | 返回 `n` 的平方根                                                                                 |
| tan(n: `number`): `number`                              | 返回 `n` 的正切值                                                                                 |
| max(n1: `number?`, n2: `number?`, ...): `number`        | 返回输入参数中的最大值                                                                            |
| min(n1: `number?`, n2: `number?`, ...): `number`        | 返回输入参数中的最小值                                                                            |
| mod(a: `number`, b: `number`): `number`                 | 返回 `a` 除以 `b` 的余数                                                                          |
| pow(a: `number`, b: `number`): `number`                 | 返回 `a` 的 `b` 次方                                                                              |
| reverse(n: `number`): `number`                          | 改变 `n` 的符号                                                                                    |
| sgn(n: `number`): `number`, sign(n: `number`): `number` | 返回 `n` 的符号。如果 `n > 0`，返回 `1`；如果 `n = 0`，返回 `0`；如果 `n < 0`，返回 `-1`          |
| isnil(n: `any?`): `bool`                                | 如果 `n` 是 `nil`，返回 `true`；否则返回 `false`                                                   |
