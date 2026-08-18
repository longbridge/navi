# Switch

我们可以用 `switch` 语句来代替多个 `if` 语句，处理多种条件的场景。

```nv
let a = 1;
let b = 0;

switch (a) {
case 1:
    b = 5;
case 2:
    b = 10;
case 3:
    b = 20;
default:
    b = 30;
}
```

上面的代码等同于下面的代码：

```nv
let a = 1;
let b = 0;

if (a == 1) {
    b = 5;
} else if (a == 2) {
    b = 10;
} else if (a == 3) {
    b = 20;
} else {
    b = 30;
}
```

[if]: ./if.md
