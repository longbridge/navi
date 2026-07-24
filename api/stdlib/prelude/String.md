---
title: "String"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
</script>

# String

An immutable sequence of Unicode characters.

## Static Methods

### format {#format}

```navi
String.format(template: String, values: any): String
```

Formats the String as a template, substituting indexed placeholders with the provided values.

**Placeholder syntax**: `{N}` or `{N, number}` or `{N, number, specifier}` where `N` is the zero-based index into `values`.

**Number specifiers** (used as `{N, number, specifier}`): - *(omitted)* — thousands separator, up to 3 decimal places - `integer`  — round to integer, thousands separator - `currency` — prefix `$`, exactly 2 decimal places, thousands separator - `percent`  — multiply by 100, append `%` - *pattern*  — custom decimal-format pattern (see below)

**Custom number pattern characters**: - `#` — optional digit (trailing zeros omitted) - `0` — required digit (decimal part padded with `0`) - `,` — grouping separator; group size = number of digits after `,` in the integer part - `.` — decimal point - `%` — multiply value by 100 and append `%` - Any other character becomes a literal prefix or suffix - `'text'` — literal text (suppresses placeholder parsing inside quotes) - `''` — literal single-quote character

`na` values render as `"Na"`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `template` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The format template string containing `{N}` placeholders. |
| `values` | <code>any</code> |  | Variable number of values to substitute into the template. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### format_time {#format_time}

```navi
String.format_time(
    time: int,
    format: String,
    timezone: String = symbol_info.timezone
  ): String
```

Formats a timestamp (in milliseconds since epoch) into a String using a pattern of format tokens and a timezone.

**Date tokens**: - `yyyy` — 4-digit year (e.g. `2024`) - `yy`   — 2-digit year (e.g. `24`) - `MM`   — month with leading zero (`01`–`12`) - `M`    — month without leading zero (`1`–`12`) - `dd`   — day of month with leading zero (`01`–`31`) - `d`    — day of month without leading zero (`1`–`31`)

**Time tokens**: - `HH`  — hour, 24-hour clock, with leading zero (`00`–`23`) - `H`   — hour, 24-hour clock, without leading zero (`0`–`23`) - `hh`  — hour, 12-hour clock, with leading zero (`01`–`12`) - `h`   — hour, 12-hour clock, without leading zero (`1`–`12`) - `a`   — AM/PM indicator - `mm`  — minutes with leading zero (`00`–`59`) - `m`   — minutes without leading zero (`0`–`59`) - `ss`  — seconds with leading zero (`00`–`59`) - `s`   — seconds without leading zero (`0`–`59`) - `S`   — tenths of a second (1 digit) - `SS`  — hundredths of a second (2 digits) - `SSS` — milliseconds (3 digits)

**Timezone token**: - `Z` — UTC offset in `±HHmm` form (e.g. `+0000`, `-0530`)

Any character that is not a format token is output as a literal (e.g. `-`, `:`, `.`, space). The characters `y`, `z` are reserved and must not be used alone (only `yy`/`yyyy` are valid; `z` is always an error).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `time` | <code>int</code> |  | The timestamp in milliseconds since epoch to format. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The format pattern string (see token table above). |
| `timezone` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `symbol_info.timezone` | The timezone for the output (e.g. `"UTC+8"`, `"UTC-5:30"`). Defaults to `symbol_info.timezone`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### from {#from}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, format</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Format)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">String.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">from</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(value</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> T)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> String</span>"]' />

<div v-show="_s0 === 0">

Converts an integer to a String using a custom number pattern. The `format` string uses the same pattern syntax as the `{N, number, pattern}` specifier in <a class="stdlib-ref" data-key="prelude::format" href="/api/stdlib/prelude/String#format">format</a>:

- `#` — optional digit (trailing zeros omitted) - `0` — required digit (decimal part padded with `0`) - `,` — grouping separator; group size = digits after `,` in the integer part - `.` — decimal point - `%` — multiply value by 100 and append `%` - Any other character becomes a literal prefix or suffix - `'text'` — literal text - `''`     — literal single-quote character

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | The integer value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The number pattern string controlling the output format. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 1">

Converts a float to a String using a custom number pattern. The `format` string uses the same pattern syntax as the `{N, number, pattern}` specifier in <a class="stdlib-ref" data-key="prelude::format" href="/api/stdlib/prelude/String#format">format</a>:

- `#` — optional digit (trailing zeros omitted) - `0` — required digit (decimal part padded with `0`) - `,` — grouping separator; group size = digits after `,` in the integer part - `.` — decimal point - `%` — multiply value by 100 and append `%` - Any other character becomes a literal prefix or suffix - `'text'` — literal text - `''`     — literal single-quote character

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The float value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The number pattern string controlling the output format. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 2">

Converts an integer to a String using a <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant. The `format` constant controls how the number is presented: - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Inherit</a>  — inherits formatting from the enclosing series context - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Price</a>    — formatted as a price (symbol-dependent precision) - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Volume</a>   — formatted as a volume figure (compact notation for large numbers) - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Percent</a>  — formatted as a percentage - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Mintick</a>  — rounded to the symbol's mintick with trailing zeros preserved

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>int</code> |  | The integer value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 3">

Converts a float to a String using a <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant. The `format` constant controls how the number is presented: - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Inherit</a>  — inherits formatting from the enclosing series context - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Price</a>    — formatted as a price (symbol-dependent precision) - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Volume</a>   — formatted as a volume figure (compact notation for large numbers) - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Percent</a>  — formatted as a percentage - <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format.Mintick</a>  — rounded to the symbol's mintick with trailing zeros preserved

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>float</code> |  | The float value to convert. |
| `format` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/Format">Format</a></code> |  | The <a class="stdlib-ref" data-key="prelude::Format" href="/api/stdlib/prelude/Format">Format</a> constant controlling formatting. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

</div>

<div v-show="_s0 === 4">

Converts any value to its String representation.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | <code>T</code> |  | The value to convert to String. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

</div>

## Methods

### contains {#contains}

```navi
String.contains(self: String, str: String): bool
```

Checks if the String contains the specified substring.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The substring to search for. |

**Returns:** <code>bool</code>

---

### ends_with {#ends_with}

```navi
String.ends_with(self: String, str: String): bool
```

Checks if the String ends with the specified suffix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The suffix to search for. |

**Returns:** <code>bool</code>

---

### index_of {#index_of}

```navi
String.index_of(self: String, str: String): int
```

Returns the zero-based index of the first occurrence of a substring, or `na` if not found.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The substring to search for. |

**Returns:** <code>int</code>

---

### length {#length}

```navi
String.length(self: String): int
```

Returns the length of the String.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code>int</code>

---

### lower {#lower}

```navi
String.lower(self: String): String
```

Converts all characters in the String to lowercase.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### match {#match}

```navi
String.match(self: String, regex: String): String
```

Returns the matched substring if the String matches a regex pattern, or an empty String otherwise.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `regex` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The regular expression pattern to match. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### pad_end {#pad_end}

```navi
String.pad_end(self: String, len: int, fill: String = " "): String
```

Right-pads the String with `fill` until it reaches at least `len` characters.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `len` | <code>int</code> |  | The minimum target length in characters. |
| `fill` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `" "` | The padding String. Defaults to `" "`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### pad_start {#pad_start}

```navi
String.pad_start(self: String, len: int, fill: String = " "): String
```

Left-pads the String with `fill` until it reaches at least `len` characters.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `len` | <code>int</code> |  | The minimum target length in characters. |
| `fill` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> | `" "` | The padding String. Defaults to `" "`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### repeat {#repeat}

```navi
String.repeat(self: String, repeat: int): String
```

Returns a new String consisting of the String repeated a specified number of times.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `repeat` | <code>int</code> |  | The number of times to repeat the String. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### replace {#replace}

```navi
String.replace(
    self: String,
    target: String,
    replacement: String,
    occurrence: int = 0
  ): String
```

Replaces the N-th occurrence of a target substring with a replacement.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `target` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The substring to be replaced. |
| `replacement` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The replacement substring. |
| `occurrence` | <code>int</code> | `0` | N-th occurrence to replace (0-indexed). Defaults to `0`. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### replace_all {#replace_all}

```navi
String.replace_all(self: String, target: String, replacement: String): String
```

Replaces all occurrences of a target substring with a replacement.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `target` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The substring to be replaced. |
| `replacement` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The replacement substring. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### split {#split}

```navi
String.split(self: String, separator: String): Array<String>
```

Splits the String into an array of substrings based on a separator.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `separator` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The separator String to split on. |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array</a>&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a>&gt;</code>

---

### starts_with {#starts_with}

```navi
String.starts_with(self: String, str: String): bool
```

Checks if the String starts with the specified prefix.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `str` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  | The prefix to search for. |

**Returns:** <code>bool</code>

---

### substring {#substring}

```navi
String.substring(self: String, begin_pos: int, end_pos: int): String
```

Returns a substring from `begin_pos` to `end_pos` (exclusive).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |
| `begin_pos` | <code>int</code> |  | The starting position (inclusive). |
| `end_pos` | <code>int</code> |  | The ending position (exclusive). |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### to_number {#to_number}

```navi
String.to_number(self: String): float
```

Converts the String to a floating-point number.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code>float</code> — The parsed float value, or `na` if the String cannot be parsed.

---

### trim {#trim}

```navi
String.trim(self: String): String
```

Trims leading and trailing whitespace from the String.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### trim_end {#trim_end}

```navi
String.trim_end(self: String): String
```

Trims trailing whitespace from the String.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### trim_start {#trim_start}

```navi
String.trim_start(self: String): String
```

Trims leading whitespace from the String.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>

---

### upper {#upper}

```navi
String.upper(self: String): String
```

Converts all characters in the String to uppercase.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `self` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/String">String</a></code>
