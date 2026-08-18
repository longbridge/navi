# Continue

`continue` statement is used to skip the remaining statements in the loop body.

The following example counts the number of up periods in the last 10 periods.

```nv
let n = 0;

for (let i = 0 to 10) {
    if (quote.close[i] <= quote.open[i]) {
        continue;
    }

    n = n + 1;
}
```
