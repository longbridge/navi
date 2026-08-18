# Iterator

> Deprecated

The iterator is a special object that can be used to iterate over a collection of objects. It is used in the `for` loop.

## Usage

```nv
let a = [number] { 1, 2, 3, 4, 5 };
for (let i in a) {
  // i is 1, 2, 3, 4, 5
}
```

In this case, for actually is called `a.iter().next()` to get the iterator.

## Methods

### next

Returns the next value in the iterator, if there is no next value, it will return `nil`.

```nv
let a = [number] { 1, 2, 3, 4, 5 };
let iter = a.iter();
while (iter.next()) {
  // iter.value is 1, 2, 3, 4, 5
}
```

### has_next

Check is there a next value in the iterator. Return `true` when has next value, otherwise return `false`.

```nv
let a = [number] { 1, 2 }.iter();
a.has_next(); // true
a.next();     // 1
a.has_next(); // true
a.next();     // 2
a.has_next(); // false
a.next();     // nil
```

### collect

Collect all the values in the iterator into a [Array].

```nv
let a = [number] { 1, 2, 3, 4, 5 };
let iter = a.iter();
let b = iter.collect();
// b is [1, 2, 3, 4, 5]

let c = iter.collect();
// c is []

let d = iter.next();
// d is nil
```

[array]: ./array
