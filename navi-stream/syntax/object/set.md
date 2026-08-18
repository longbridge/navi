---
order: 4
---

# Set

Set for storage a set of unique collection of items.

## Usage

```nv
let items = set.new_string();
items.insert("a");
items.insert("b");
items.insert("c");
items.insert("a");
items.len();
// 3
items.contains("a");
// true
```

Same behavior as [Array], we can init a set with a different type.

```nv
// init a number set
let items = set.new_number();

// init a string set
let items = set.new_string();

// init a boolean set
let items = set.new_bool();

// init a color set
let items = set.new_color();
```

## Methods

### insert

Insert an item into the set.

- If the set did not previously contain this value, `true` is returned.
- If the set already contained this value, `false` is returned.

```nv
let items = set.new_string();
items.insert("a");
// true
items.insert("b");
// true
items.insert("a");
// false

items.len();
// 2
```

### remove

Remove an item from the set, return `true` if the item was removed, otherwise `false`.

```nv
let items = set.new_string();
items.insert("a");
items.insert("b");
items.len();
// 2

items.remove("a");
// true
items.len();
// 1
items.remove("a");
// false
```

### contains

Check if the set contains an item.

```nv
let items = set.new_string();
items.insert("a");
items.contains("a");
// true
items.contains("b");
// false
```

### len

Return the number of items in the set.

```nv
let items = set.new_string();
items.insert("a");
items.insert("b");
items.len();
// 2
```

### clear

Remove all items from the set.

```nv
let items = set.new_string();
items.insert("a");
items.insert("b");
items.len();
// 2

items.clear();
items.len();
// 0
```

### iter

Return a [Iterator] for the set.

```nv
let items = set.new_string();
items.insert("a");
items.insert("b");

let iter = items.iter();
iter.next();
// "a"
iter.next();
// "b"
```

### to_array

Convert the set to an array.

```nv
let items = set.new_string();
items.insert("a");
items.insert("b");

items.to_array();
// ["a", "b"]
```
