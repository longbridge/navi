# Continue

`continue` 语句用于跳过循环体中的剩余语句。

下面的例子统计了最近 10 个周期中的上涨周期数。当遇到 `quote.close[i] <= quote.open[i]` 时，跳过不进行相加，继续下一个周期。

```nv
let n = 0;

for (let i = 0 to 10) {
    if (quote.close[i] <= quote.open[i]) {
        continue;
    }

    n = n + 1;
}
```
