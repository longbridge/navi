---
order: 3
---

# StdLib

Navi Stream built-in a series of standard library functions for quick development of strategies.

You can directly call functions in the standard library in the form of `<module>.<function>`, for example `math.sin`.

Or you can use `use <module>` to import the entire package and then call the function directly, for example `use math;`, then you can use the functions in the entire [Math](./math.md) library directly in Navi Stream, such as: `sign`, `abs`...

## Example

```nv
use math;

let a = 10;
let b = max(a, 100);
```

Or you can directly to call `math.max`:

```nv
let a = 10;
let b = math.max(a, 100);
```
