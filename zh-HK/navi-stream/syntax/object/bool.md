---
order: 0
---

# 布尔值

Bool 是一种表示布尔值的对象类型。

## 创建布尔值

```nv
let a = true;
let b = false;
```

## 方法

### to_string

将布尔值转换为字符串。

```nv
let a = true;
a.to_string();
// "true"
```

### to_number

将布尔值转换为数字。

```nv
let a = true;
a.to_number();
// 1

a = false;
a.to_number();
// 0
```
