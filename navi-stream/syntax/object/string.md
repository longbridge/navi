---
order: 2
---

# String

We can use double quotes `"` and `` ` `` to create a string literal.

```nv
let a = "hello world";
let b: string = `你好世界`;
```

## String Interpolation

We can use `${}` to interpolate a expression into a string, you must use backticks `` ` `` to create a string literal.

```nv
let a = 100;
let b = `hello ${a + 2}`;
// b = "hello 102"
```

## Methods

### to_number

Convert a string to a number.

```nv
let a = "100";
a.to_number();
// 100

let b = "3.1415";
b.to_number();
// 3.1415
```

### to_lowercase

Convert a string to lowercase.

```nv
let a = "Hello World";
a.to_lowercase();
// "hello world"
```

### to_uppercase

Convert a string to uppercase.

```nv
let a = "Hello World";
a.to_uppercase();
// "HELLO WORLD"
```

### substring

Get a substring from a string.

```nv
let a = "Hello World";
a.substring(0, 5);
// "Hello"
```

### replace

Replace all matches substring in a string.

```nv
let a = "Hello World";
let b = a.replace("Hello", "Hi");
// b is "Hi World"

a = "Hello World";
b = a.replace("l", "L");
// b is "HeLLo WorLd"
```

### len

Return number of chars in a string.

```nv
let a = "你好 Navi Stream 🌈";
a.len();
// 9
```

### contains

Check if a string contains a substring.

```nv
let a = "Hello World";
a.contains("Hello");
// true

a.contains("hello");
// false
```

### starts_with

Check if a string starts with a substring.

```nv
let a = "Hello World";
a.starts_with("Hello");
// true

a.starts_with("foo");
// false
```

### ends_with

Check if a string ends with a substring.

```nv
let a = "Hello World";
a.ends_with("World");

a.ends_with("foo");
// false
```

### split

Split a string into a list of strings.

```nv
let a = "Hello World";
let b = a.split(" ");
// b is ["Hello", "World"]

b.len()
// 2
```

### trim

Trim whitespace from the start and end of a string.

```nv
let a = " Hello World ";
let b = a.trim();
// b is "Hello World"
```

### trim_start

Trim whitespace from the start of a string.

```nv
let a = " Hello World ";
let b = a.trim_start();
// b is "Hello World "
```

### trim_end

Trim whitespace from the end of a string.

```nv
let a = " Hello World ";
let b = a.trim_end();
// b is " Hello World"
```

### insert

> Deprecated, this will remove.

Insert a string to this `String` at a byte offset and returns a new string.

```nv
let a = "Hello World";
let b = a.insert(5, " Navi Stream");

// a is "Hello World"
// b is "Hello Navi Stream World"
```

### push

> Deprecated, this will remove.

Push a string to this `String` at the end and returns a new string.

```nv
let a = "Hello";
let b = a.push(" World");

// a is "Hello"
// b is "Hello World"
```
