---
order: 3
---

# 数组

数组用于在单个变量中存储多个值。

## 语法

要初始化数组，使用 `[]` 操作符（更像 Go 语言）。

```nv
let items = [number] { 1, 2, 3 };

items.sum();
// 6

items.len();
// 3
```

## 初始化数组

你也可以定义多种类型的数组。

```nv
// 数字数组
let number_items = [number] { 1, 2, 3 };

// 字符串数组
let string_items = [string] { "hello", "world" };

// 结构体数组
struct Item {
  name: string,
  value: number,
}

let struct_items = [Item] {
    Item { name: "hello", value: 1 },
    Item { name: "world", value: 2 },
};

// 颜色数组
let color_items = [color] { #ff0000, #00ff00, #purple };

```

## 方法

### len

获取数组的长度。

```nv
let items = [number] { 1, 2, 3 };
items.len();
// 3
```

### slice

获取数组的切片（与 JavaScript 相同）。

```nv
let items = [number] { 1, 2, 3, 4, 5 };
items.slice(1, 3);
// [2, 3]
```

### clear

删除数组中的所有项。

```nv
let items = [number] { 1, 2, 3 };
items.clear();
// 0
```

### reverse

反转数组成员的顺序。

```nv
let items = [number] { 1, 2, 3 };
items.reverse();
// [3, 2, 1]

let str_items = [string] { "a", "b", "c" };
str_items.reverse();
// ["c", "b", "a"]
```

### push

添加一个元素到数组的末尾。

```nv
let items = []number{1, 2, 3};
items.push(4);
items;
// [1, 2, 3, 4]
```

### pop

从数组的末尾删除一个元素，并返回该元素。

```nv
let items = [number]{ 1, 2, 3 };
items.pop();
// 3
items;
// [1, 2]
```

### unshift

在数组的开头插入一个元素。

```nv
let items = [number] { 1, 2, 3 };
items.unshift(0);
items;
// [0, 1, 2, 3]
```

### shift

从数组的开头删除一个元素，并返回该元素。

```nv
let items = [number]{ 1, 2, 3 };
items.shift();
// 1
items;
// [2, 3]
```

### remove

删除数组汇总指定位置的元素，并返回该元素。

```nv
let items = [string] { "a", "b", "c" };
items.remove(1);
// "b"
items;
// ["a", "c"]
```

### get

获取给定索引处的项。

```nv
let items = [string] { "a", "b", "c" };
items.get(1);
// "b"
```

### set

将指定索引处的项替换为新值。

```nv
let items = [string] { "a", "b", "c" };
items.set(1, "d");
items;
// ["a", "d", "c"]
```

### iter

创建一个数组的 [Iterator]。

```nv
let items = [number] { 1, 2, 3 };
let iter = items.iter();
iter.next();
// 1
```

### clone

Clone 一个数组，成为一个新的集合。

```nv
let items = []number{ 1, 2, 3 };

let items1 = items.clone();
// items1 is [1, 2, 3]

items.clear()
// items is [], items1 still is [1, 2, 3]
```

## Methods for `[number]`

### sum

对数组成员进行 sum 运算。

```nv
let items = [number] { 1, 2, 3 };
items.sum();
// 6
```

[iterator]: ./iterator

### avg

对数组成员进行 avg 运算。

```nv
let items = [number] { 1, 2, 3 };
items.avg();
// 2
```

### min

返回数组的最小值。

```nv
let items = [number] { 1, 2, 3 };
items.min();
// 1
```

### max

返回数组的最大值。

```nv
let items = [number] { 1, 2, 3 };
items.max();
// 3
```

### sort

对数组进行排序，返回一个新的数组。

```nv
let items = [number] { 2, 4, 3, 1 };
items.sort();
// items is [1, 2, 3, 4]
```

## Methods for `[string]`

### join

用给定的分隔符连接数组，并返回一个字符串。

```nv
let items = [string] { "hello", "world" };
let a1 = items.join(" ");
// a1 is "hello world"

let items1 = "hello world".split(" ").join(",");
// items1 is "hello,world"
```
