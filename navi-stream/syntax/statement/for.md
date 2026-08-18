# For

For loop can traverse each element in the specified container. It will call the `iter` method of the container to create an iterator.

The following code for loop traverses all elements in the array. After the loop ends, `count` is equal to `45`.

```nv
let count = 0;

for (let x in [number] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }) {
    count += x;
}
```

## Range

`range` type also implements the `iter` method. You can specify the `initial value`, `end value`, `step value` for it. The step value defaults to `1`.

The following code for loop also calculates `count` equal to `45`.

```nv
let count = 0;

for (let x in 0..10) {
    count += x;
}
```

And when you set the step value to `3`, the loop ends and `count` is equal to `18`.

```nv
let count = 0;
for (let x in (0..10).step(3)) {
   count += x;
}
```

::: warning
In a `for` loop, you can't use stateful functions, such as `ma`, `sum`.
:::
