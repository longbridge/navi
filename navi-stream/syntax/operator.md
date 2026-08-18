---
order: 0
---

# Operator

Like as many programming languages, Navi Stream supports basic arithmetic and logical operators.

Navi Stream also follows the precedence of traditional programming languages, so you can continue to use it in Navi Stream syntax according to your previous programming habits.

```nv
let a = 100 + 2 - 10 * 5 / 2 % 3;
// 101
```

## Operators

| Operator                      | Description                              |
| ----------------------------- | ---------------------------------------- |
| `!a`                          | Bitwise or logical complement            |
| `a + b`                       | Arithmetic addition                      |
| `a += b`                      | Arithmetic addition and assignment       |
| `-a`                          | Arithmetic negation                      |
| `a - b`                       | Arithmetic subtraction                   |
| `a -= b`                      | Arithmetic subtraction and assignment    |
| `a * b`                       | Arithmetic multiplication                |
| `a *= b`                      | Arithmetic multiplication and assignment |
| `a / b`                       | Arithmetic division                      |
| `a /= b`                      | Arithmetic division and assignment       |
| `a % b`                       | Arithmetic remainder                     |
| `a %= b`                      | Arithmetic remainder and assignment      |
| `a < b`                       | Less than comparison                     |
| `a <= b`                      | Less than or equal to comparison         |
| `a = 1`                       | Assignment/equivalence                   |
| `a == b`                      | Equality comparison                      |
| `a > b`                       | Greater than comparison                  |
| `a >= b`                      | Greater than or equal to comparison      |
| `a != n`                      | Nonequality comparison                   |
| `a && b`                      | `AND` logical                            |
| <code>a &#124;&#124; b</code> | `OR` logical                             |
| `expr.ident`                  | Member access                            |
| `a[n]`                        | Ref preview `n` period data              |

## Ref preview data

We can use `quote.close[n]` to reference the data of the previous.

For example, we have data of K line (1m):

| idx | time  | close |
| --- | ----- | ----- |
| 1   | 10:00 | 10.25 |
| 2   | 10:01 | 10.50 |
| 3   | 10:02 | 10.75 |
| 4   | 10:03 | 11.00 |
| 5   | 10:04 | 11.25 |

If now we at the period of idx 5:

- `quote.close[0]` is the current data.
- `quote.close[1]` is the data of the previous 1 period, value is `11.00`.
- `quote.close[2]` is the data of the previous 2 period, value is `10.75`.
- `quote.close[3]` is the data of the previous 3 period, value is `10.50`.
