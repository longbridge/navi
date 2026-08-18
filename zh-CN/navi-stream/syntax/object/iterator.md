# 迭代器

> 已弃用

迭代器是一种特殊的对象，可以用来遍历对象的集合。它在 `for` 循环中使用。

## 使用

```nv
let a = [number] { 1, 2, 3, 4, 5 };
for (let i in a) {
  // i 是 1, 2, 3, 4, 5
}
```

在这种情况下，for 实际上是调用 `a.iter().next()` 来获取迭代器。

## 方法

### next

返回迭代器中的下一个值，如果没有下一个值，它将返回 `nil`。

```nv
let a = [number] { 1, 2, 3, 4, 5 };
let iter = a.iter();
while (iter.next()) {
  // iter.value 是 1, 2, 3, 4, 5
}
```

### has_next

检查迭代器中是否有下一个值。当有下一个值时返回 `true`，否则返回 `false`。

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

将迭代器中的所有值收集到一个[数组]中。

```nv
let a = [number] { 1, 2, 3, 4, 5 };
let iter = a.iter();
let b = iter.collect();
// b 是 [1, 2, 3, 4, 5]

let c = iter.collect();
// c 是 []

let d = iter.next();
// d 是 nil
```

[array]: ./array
