# 范围

范围是一种特殊的对象，允许你创建一系列的值。它对于创建数字列表或字符列表非常有用。

## 使用

```nv
let a = 1..5;
// a 包含 [1, 2, 3, 4]，不包含 5
let iter = a.iter();
iter.next(); // 1
iter.next(); // 2
iter.next(); // 3
iter.next(); // 4
iter.next(); // nil
```

## 方法

### collect

返回一个包含范围内所有值的[数组]。

```nv
let a = 1..5;
export let b = a.collect();
// b 是 [1, 2, 3, 4]
```

### iter

返回一个可以用来遍历范围的[迭代器]。

```nv
let a = 1..5;
let iter = a.iter();
iter.next(); // 1
```

或者你可以使用 `for` 循环来遍历范围。

```nv
for (let i in 1..5) {
  // i 是 1, 2, 3, 4
}
```

### step

返回一个新的 `Range`，其中包含给定步长的范围内的值。

```nv
let a = 1..5;
export let b = a.step(2).collect();
// b 是 [1, 3]

for (let i in 1..5.step(2)) {
  // i 是 1, 3
}
```
