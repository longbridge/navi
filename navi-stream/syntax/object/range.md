# Range

Range is a special object that allows you to create a range of values. It is useful for creating a list of numbers, or a list of characters.

## Usage

```nv
let a = 1..5;
// a is contains [1, 2, 3, 4], not 5
let iter = a.iter();
iter.next(); // 1
iter.next(); // 2
iter.next(); // 3
iter.next(); // 4
iter.next(); // nil
```

## Methods

### collect

Return a [Array] that contains all the values in the range.

```nv
let a = 1..5;
export let b = a.collect();
// b is [1, 2, 3, 4]
```

### iter

Return an [Iterator] that can be used to iterate over the range.

```nv
let a = 1..5;
let iter = a.iter();
iter.next(); // 1
```

Or you can use the `for` loop to iterate over the range.

```nv
for (let i in 1..5) {
  // i is 1, 2, 3, 4
}
```

### step

Return a new `Range` that contains the values in the range with the given step.

```nv
let a = 1..5;
export let b = a.step(2).collect();
// b is [1, 3]

for (let i in 1..5.step(2)) {
  // i is 1, 3
}
```
