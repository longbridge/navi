---
order: 3
---

# Array

Array for storing multiple values in a single variable.

## Syntax

To initialize an array, use the `[]` operator (It more like Go).

```nv
let items = [number] { 1, 2, 3 };

items.sum();
// 6

items.len();
// 3
```

## Init array

And you can also to define multiple types of arrays.

```nv
// a number array
let number_items = [number] { 1, 2, 3 };

// a string array
let string_items = [string] { "hello", "world" };

// a struct array
struct Item {
  name: string,
  value: number,
}

let struct_items = [Item] {
    Item { name: "hello", value: 1 },
    Item { name: "world", value: 2 },
};

// a color array
let color_items = [color] { #ff0000, #00ff00, #purple };

```

## Methods

### len

Get the length of the array.

```nv
let items = [number] { 1, 2, 3 };
items.len();
// 3
```

### slice

Get a slice (Same like JavaScript) of the array.

```nv
let items = [number] { 1, 2, 3, 4, 5 };
items.slice(1, 3);
// [2, 3]
```

### clear

Remove all items from the array.

```nv
let items = [number] { 1, 2, 3 };
items.clear();
// 0
```

### reverse

Reverse the array.

```nv
let items = [number] { 1, 2, 3 };
items.reverse();
// [3, 2, 1]

let str_items = [string] { "a", "b", "c" };
str_items.reverse();
// ["c", "b", "a"]
```

### push

Push an item to the end of the array.

```nv
let items = [number]{1, 2, 3};
items.push(4);
items;
// [1, 2, 3, 4]
```

### pop

Pop an item from the end of the array.

```nv
let items = [number]{ 1, 2, 3 };
items.pop();
// 3
items;
// [1, 2]
```

### unshift

Insert an item to the beginning of the array.

```nv
let items = [number] { 1, 2, 3 };
items.unshift(0);
items;
// [0, 1, 2, 3]
```

### shift

Remove an item from the beginning of the array, and return the removed item.

```nv
let items = [number]{ 1, 2, 3 };
items.shift();
// 1
items;
// [2, 3]
```

### remove

Remove an item from the array, and return the removed item.

```nv
let items = [string] { "a", "b", "c" };
items.remove(1);
// "b"
items;
// ["a", "c"]
```

### get

Get an item at the given index.

```nv
let items = [string] { "a", "b", "c" };
items.get(1);
// "b"
```

### set

Set an item in the array.

```nv
let items = [string] { "a", "b", "c" };
items.set(1, "d");
items;
// ["a", "d", "c"]
```

### iter

Create a [Iterator] for the array.

```nv
let items = [number] { 1, 2, 3 };
let iter = items.iter();
iter.next();
// 1
```

### clone

Returns a copy of the array.

```nv
let items = [number]{ 1, 2, 3 };

let items1 = items.clone();
// items1 is [1, 2, 3]

items.clear()
// items is [], items1 still is [1, 2, 3]
```

## Methods for `[number]`

### sum

Get the sum of the array.

```nv
let items = [number] { 1, 2, 3 };
items.sum();
// 6
```

[iterator]: ./iterator

### avg

Get the average of the array.

```nv
let items = [number] { 1, 2, 3 };
items.avg();
// 2
```

### min

Get the minimum value of the array.

```nv
let items = [number] { 1, 2, 3 };
items.min();
// 1
```

### max

Get the maximum value of the array.

```nv
let items = [number] { 1, 2, 3 };
items.max();
// 3
```

### sort

Sort the array.

```nv
let items = [number] { 2, 4, 3, 1 };
items.sort();
// items is [1, 2, 3, 4]
```

## Methods for `[string]`

### join

Join the array with the given separator.

```nv
let items = [string] { "hello", "world" };
let a1 = items.join(" ");
// a1 is "hello world"

let items1 = "hello world".split(" ").join(",");
// items1 is "hello,world"
```
