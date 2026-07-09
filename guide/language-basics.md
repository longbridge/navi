# Language Basics

Navi. Every script begins with a declaration statement.

## Script Structure

```navi
indicator("My Indicator")

// Your code here
plot(close)
```

The first line declares the script type — either `indicator()`, `strategy()`, or `library()`.

## Comments

```navi
// Single-line comment
let a: float = 10  // End-of-line comment

//@description A library for math utilities
```

There are no multi-line comments in Navi. Special comments starting with `//@` are documentation tags (`//@function`, `//@param`, `//@returns`, `//@type`, `//@enum`, `//@field`, `//@variable`, `//@description`).

## Statements

Statements are separated by newlines. Semicolons are not used. Multiple statements can appear on one line separated by commas:

```navi
let a = 1;
let b = 2;
let c = a + b;

// Multiple statements on one line
let a = 1; let b = 2; let c = 3;
```

Blank lines and comment-only lines are ignored.

## Indentation

Navi uses indentation to define code blocks (similar to Python). One indentation level equals **4 spaces** or **1 Tab**:

```navi
// Correct: 4 spaces
if close > open {
    let color = color.GREEN;
    label.new(bar_index, high, "Up");
} else {
    let color = color.RED;
}

// Correct: Tab
if close > open {
    doSomething();
}

// WRONG: 2 spaces — will NOT be recognized as a code block
if close > open {}
doSomething(); // This is NOT part of the if block!
```

Nested blocks require cumulative indentation:

```navi
if condition1 {
    if condition2 {
        for i = 0 to 10 {
            doSomething(i); // level 3 (12 spaces)
        } // level 3 (12 spaces)
    } // level 3 (12 spaces)
}
```

Spaces and Tabs can be mixed, but each indentation unit must be a complete 4 spaces or 1 Tab.

## Line Continuation

Long expressions can span multiple lines. **Inside brackets** (parentheses, square brackets), any indentation is allowed:

```navi
plot(series:  close, title:  "Close", color:  color.RED, linewidth:  2);

let arr: array<int> = [1, 2, 3];
```

**Outside brackets**, continuation lines must have extra whitespace (at least 1 space or tab more than the current block level):

```navi
// Correct: continuation with extra spaces
let result: float = longVariableName
 + anotherLongVariable
 - someOtherValue

// WRONG: no extra spaces — parsed as a new statement!
let result: float = a
+ b  // This is a separate statement!
```

## Basic Types

### Primitive Types

| Type | Description | Examples |
|---|---|---|
| `int` | Integer. Range: **−9,007,199,254,740,992 to 9,007,199,254,740,992** (±2⁵³). | `42`, `-123`, `+5` |
| `float` | Floating-point number. Approximate range: **±1.8 × 10³⁰⁸**; precision: ~15–17 significant decimal digits. | `3.14`, `.5`, `3.`, `1e-3`, `1.2E+5` |
| `bool` | Boolean | `true`, `false` |
| `string` | Text | `"hello"`, `'world'` |
| `color` | RGBA color | `#FF0000`, `#FF000080` |
| `na` | Missing/undefined value | `na` |

### `int` and `float`

```navi
// Integers
let a = 42;
let b = -123;
let c = +5;

// Floats — decimal notation
let d = 3.14;
let e = .14;        // leading dot
let f = 3.;         // trailing dot

// Floats — scientific notation
let g = 314e-2;     // 3.14
let h = 0.00314E+2; // 0.314
```

### `string`

Strings can use single or double quotes with identical semantics:

```navi
let a = "Hello, World!";
let b = 'Hello, World!';
let full = "Hello, " + "World!";  // String concatenation with +
```

Supported escape sequences:

| Escape | Meaning |
|---|---|
| `\\` | Backslash |
| `\n` | Newline |
| `\r` | Carriage return |
| `\t` | Tab |
| `\"` or `""` | Double quote (in double-quoted strings) |
| `\'` or `''` | Single quote (in single-quoted strings) |

### `color`

Color literals use hex notation with `#`:

- `#RRGGBB` — 6 hex digits, fully opaque (alpha = FF)
- `#RRGGBBAA` — 8 hex digits, explicit alpha channel

```navi
let red = #FF0000;          // fully opaque red
let semiRed = #FF000080;    // semi-transparent red
```

Named color constants are available via the `color` module: `color.RED`, `color.BLUE`, `color.GREEN`, etc. Use `color.new()` to create colors with custom transparency.

### `na`

`na` represents a missing or undefined value. It is compatible with any type but requires an explicit type annotation when used alone:

```navi
let a: float = na; // OK
let b: int = na; // OK
let a = na; // ERROR: cannot infer variable type

// Test for na with na():
if na(myValue) {}
// handle missing value
```

## Operators

### Arithmetic
```navi
let a = 10 + 3;    // 13
let b = 10 - 3;    // 7
let c = 10 * 3;    // 30
let d = 10 / 3;    // 3.333...
let e = 10 % 3;    // 1
```

### Comparison
```navi
close > open     // Greater than
close < open     // Less than
close >= 100     // Greater or equal
close <= 100     // Less or equal
close == open    // Equal
close != open    // Not equal
```

### Logical
```navi
a and b    // Logical AND
a or b     // Logical OR
not a      // Logical NOT
```

### Ternary
```navi
let col = close > open ? color.GREEN : color.RED;
```

## History Reference Operator

In Navi, every expression is evaluated once per bar, producing a time series of values. The `[]` operator accesses the value that an expression produced on a previous bar — not just built-in variables, but **any** expression:

```navi
// Built-in series variables
let previousClose = close[1];              // close price one bar ago
let twoBarsAgo = high[2];                  // high price two bars ago

// Function call results — retrieves the already-computed result, not a re-evaluation
let prevSma = ta.sma(close, 14)[1];       // the SMA value computed on the previous bar
let prevEma = ta.ema(close, 10)[3];       // the EMA value from 3 bars ago

// Arithmetic expressions
let prevRange = (high - low)[1];           // the bar range from the previous bar

// User-defined variables
let myValue = close * volume;
let prevMyValue = myValue[1];              // the value myValue had on the previous bar
```

::: tip Key concept
`ta.sma(close, 14)[1]` does **not** compute a new SMA — it returns the SMA value that was already calculated when the script ran on the previous bar.
:::

On early bars where insufficient history exists, the result is `na`. The offset can be a series expression:

```navi
let lookback: int = input.int(5, "Lookback");
let pastClose = close[lookback];
```

## Collection Types

Navi provides three generic collection types:

| Type | Description |
|---|---|
| `array<T>` | Ordered, indexable sequence |
| `matrix<T>` | 2D table of rows × columns |
| `map<K, V>` | Key-value store |

Collections are **reference types** — assigning a collection to another variable copies the reference, not the contents. Use `.copy()` to get an independent copy.

Collections are typically declared with `var` so they persist across bars rather than being recreated on every bar:

```navi
var highs: array<float> = array.new<float>();
highs.push(high);   // accumulates one value per bar
```

::: warning Deprecated syntax
The shorthand `int[]`, `float[]` etc. is a legacy alias for `array<int>`, `array<float>` and will be removed in a future version. Always use the `array<T>` form.
:::

### `array<T>`

An ordered, zero-indexed sequence that grows and shrinks dynamically.

**Creating arrays**

```navi
// Empty array, then fill manually
var a: array<float> = array.new<float>();

// Pre-sized, all elements set to 0.0
let b: array<float> = array.new<float>(5, 0.0);

// From a literal list
let c: array<int> = array.from(10, 20, 30);

// Array literal — type is inferred from elements
let values = [1, 2, 3];               // array<int>
let fs: array<float> = [1, 2, 3];     // elements widened to float
let empty: array<int> = [];            // empty literal (type from declaration)
```

**Reading and writing elements**

```navi
a.push(close);               // append to end
a.unshift(close);            // prepend to front

let last: float  = a.last();      // last element
let first: float = a.first();     // first element
let val: float   = a.get(2);      // by index (negative index counts from end)
a.set(2, 99.0);              // overwrite by index

a.insert(1, 42.0);           // insert at index, shifting right
let removed: float = a.remove(1); // remove at index, returns removed value
let popped: float  = a.pop();     // remove and return last element
let shifted: float = a.shift();   // remove and return first element

let n: int = a.size();            // number of elements
```

**Searching**

```navi
let found: bool = a.includes(close);    // true if value exists
let idx: int    = a.indexof(close);     // first index, or -1
let last: int   = a.lastindexof(close); // last index, or -1
```

**Slicing and combining**

```navi
let sub: array<float>  = a.slice(1, 4);      // elements [1, 4)
let both: array<float> = a.concat(b);        // new array with b appended
let dup: array<float>  = a.copy();           // independent copy
a.reverse();                             // reverse in place
a.fill(0.0, 0, 3);                       // fill elements [0, 3) with 0.0
a.clear();                               // remove all elements
```

**Sorting**

```navi
a.sort();                              // ascending (default)
a.sort(SortOrder.Descending);          // descending
let idx: array<int> = a.sort_indices();  // indices that would sort a, without modifying a
```

**Statistics** (numeric arrays only)

```navi
let total: float = a.sum();
let mean: float  = a.avg();
let med: float   = a.median();
let sd: float    = a.stdev();
let hi: float    = a.max();
let lo: float    = a.min();
let rng: float   = a.range();            // max - min
```

**Iterating with `for...in`**

```navi
var vals: array<float> = array.from(1.0, 2.0, 3.0);
let total: float = 0.0;
for v in vals {
    total += v;
}

// With index
for (i, v) in vals {
    log.info("{0}: {1}", i, v);
}
```

### `map<K, V>`

An unordered key-value store. Keys must be a primitive type (`int`, `float`, `bool`, `string`, `color`) or an enum; values can be any type.

**Creating maps**

```navi
// Map literal — type is inferred from entries
let counts = {"a": 1, "b": 2};              // map<string, int>
let ratios: map<string, float> = {"x": 1};   // value widened to float
let empty: map<string, int> = {};            // empty literal (type from declaration)
```

```navi
var m: map<string, float> = map.new<string, float>();

m.put("open",  open);    // insert or update; returns previous value or na
m.put("close", close);

let o: float = m.get("open");       // returns na if key absent
let exists: bool = m.contains("close");
let count: int   = m.size();

let old: float = m.remove("open");  // removes key, returns removed value or na

let ks: array<string> = m.keys();   // all keys as array
let vs: array<float>  = m.values(); // all values as array

m.put_all(other);              // merge another map in
m.clear();                     // remove all entries
let dup: map<string, float> = m.copy();
```

**Iterating**

```navi
for (k, v) in m {
    log.info("{0} = {1}", k, v);
}
```

### `matrix<T>`

A two-dimensional table indexed by `[row, column]`, both zero-based.

**Creating**

```navi
// 3×4 matrix, all elements 0.0
let mat: matrix<float> = matrix.new<float>(3, 4, 0.0);
```

**Reading and writing**

```navi
mat.set(0, 0, 1.5);             // set element at row 0, col 0
let v: float = mat.get(0, 0);        // read element

let r: int = mat.rows();             // number of rows
let c: int = mat.columns();          // number of columns

let row0: array<float> = mat.row(0); // entire row as array
let col1: array<float> = mat.col(1); // entire column as array
```

**Structural operations**

```navi
mat.add_row(na, array.from(1.0, 2.0, 3.0, 4.0)); // append a row
mat.add_col();                                     // append a column filled with na
mat.remove_row();                                  // remove last row (returns it)
mat.remove_col(0);                                 // remove column 0 (returns it)
mat.reshape(2, 6);                                 // change shape (same element count)
let sub: matrix<float> = mat.submatrix(0, 2, 0, 2);    // rows [0,2), cols [0,2)
let t: matrix<float>   = mat.transpose();              // rows ↔ columns
mat.swap_rows(0, 1);
mat.swap_columns(0, 1);
mat.reverse();                                     // reverse element order in place
mat.fill(0.0);                                     // fill entire matrix
mat.sort();                                        // sort all elements ascending
let dup: matrix<float> = mat.copy();
```

**Math operations** (numeric matrices)

```navi
let total: float = mat.avg();
let hi: float    = mat.max();
let lo: float    = mat.min();
let med: float   = mat.median();

let s: matrix<float> = mat.sum(other);   // element-wise sum
let d: matrix<float> = mat.diff(other);  // element-wise difference
let p: matrix<float> = mat.multi(other); // matrix multiplication
let i: matrix<float> = mat.inv();        // matrix inverse
let det: float       = mat.det();      // determinant
let rk: int          = mat.rank();     // rank
let tr: float        = mat.trace();    // trace (sum of diagonal)
let pw: matrix<float> = mat.pow(2);     // matrix power
```

## Tuples

Tuples group multiple return values from functions:

```navi
fn calculate(x, y) {
    (x + y, x - y) // return a tuple
}

let (sum, diff) = calculate(10, 3);
```

## Next Steps

- [Types & Variables](/guide/types-and-variables) — type qualifiers, var/varip, tuple destructuring
- [Control Structures](/guide/control-structures) — if, for, while, switch
- [Functions & Methods](/guide/functions-and-methods) — defining and calling functions
