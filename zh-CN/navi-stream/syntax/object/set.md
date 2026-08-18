---
order: 4
---

# 集合

集合用于存储一组唯一的项目。

## 使用

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

与 [Array] 的行为相同，我们可以用不同的类型初始化一个集合。

```nv
// 初始化一个数字集合
let items = set.new_number();

// 初始化一个字符串集合
let items = set.new_string();

// 初始化一个布尔集合
let items = set.new_bool();

// 初始化一个颜色集合
let items = set.new_color();
```

## 方法

### insert

将一个项目插入到集合中。

- 如果集合之前没有包含这个值，返回 `true`。
- 如果集合已经包含了这个值，返回 `false`。

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

从集合中移除一个项目，如果项目被移除则返回 `true`，否则返回 `false`。

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

检查集合是否包含一个项目。

```nv
let items = set.new_string();
items.insert("a");
items.contains("a");
// true
items.contains("b");
// false
```

### len

返回集合中的项目数量。

```nv
let items = set.new_string();
items.insert("a");
items.insert("b");
items.len();
// 2
```

### clear

从集合中移除所有项目。

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
