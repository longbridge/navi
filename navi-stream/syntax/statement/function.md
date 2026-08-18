# Function

## Define function

Navi Stream's function definition is very similar to Navi, also support keyword arguments.

```nv
fn foo(count: number): number {
    return count + 1;
}

let a = foo(1);
```

## Call a function

Here is an example of calling the `max` function in [math] to calculate the maximum value of `5` and `10`.

::: info
Checkout more [Stdlib] docs.
:::

```nv
let a = math.max(5, 10);
```

::: info
There have a little different with Navi's function call, in Navi Stream, we can call a function without `()` like Ruby, but in Navi, you must use `()`.
:::

The following example calls the `open` function to get the opening price of the current period.

```nv
let a = quote.open;
```

It same like:

```nv
let a = quote.open();
```

[stdlib]: ../../stdlib/index.md
