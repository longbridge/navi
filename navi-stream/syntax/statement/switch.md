# Switch

If you have many conditions, using `switch` statement is more convenient and clear.

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

It same like this [if] statement:

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
