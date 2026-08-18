# Break

`break` use for exit current loop.

The following example shows how to use `break` to find the first K line where `close` is greater than `open`:

> `quote` is from stdlib.

```nv
let i = 0;

while (true) {
    if (quote.close[i] > quote.open[i]) {
        break;
    }

    i = i + 1;
}
```
