# Assign

Like most programming languages, use `=` to assign a value to a variable.

```nv
let a = 10 + 20;
// a = 30

a = a + 1;
// a = 31
```

We can also use `+=`, `-=`, `*=`, `/=` to simplify the assignment operation.

```nv
let a = 10;

a += 1;
// a = 11

a -= 1;
// a = 10

a *= 2;
// a = 20

a /= 2;
// a = 10
```

When you first declare a variable, you cannot use `let` to declare the same variable again, the compiler will report an error.

```nv
let a = 10;

let a = 20;
// Compile error
```
