---
order: -99
---

# 标识符

标识符是变量（[let]）或函数（[fn]）的名称。它必须以字母或下划线开头，后面可以跟任意数量的字母、数字或下划线。

## 有效的示例

```
var1
_var1
_var_1
_Var1
```

## 无效的示例

```
1var
var 1
var-1
```

## 关键字

你必须避免使用 Navi Stream 的关键字，否则会导致语法错误。

以下是关键字列表（并非全部），请遵循编译器的检查结果。

```
let
var
varip
nil
true
false
for
to
step
while
continue
break
if
else
fn
return
param
meta
export
import
use
switch
case
default
plot
```

[let]: statement/assign.md
[fn]: statement/function.md
