---
order: 2
---

# DateTime

We can use `time` package to create a `DateTime` object.
Time for create a time object.

## Usage

```nv
let t = time.parse("2023-04-13 09:45:26")
// t is a DateTime object

t.year
// 2023
t.month
// 4
t.day
// 13

let t1 = time.parse("invalid time")
// t1 is nil
```

## Class Methods

### new

Create a new DateTime object.

```nv
let t = time.new(2023, 1, 11, 0, 0, 0);
// t is a DateTime object

export let t_str = t.to_string();
// t_str is "2023-01-11T00:00:00Z"
```

### parse (time)

Parse a string to a DateTime object, default time format is [RFC3339].

If the time format is invalid, it will return `nil`.

If there not timezone, use `UTC` as default.

```nv
let t = time.parse("2023-04-13T14:08:33-11:00");

```

Or it compibility to supports `%Y-%m-%d %H:%M:%S` format.

```nv
let t = time.parse("2023-04-13 09:45:26");

```

### parse (time, format)

You can use `parse` to pass 2 arguments, the first is the time string, the second is the time format.

```nv
time.parse("2023-04-13 09:45:26", "%Y-%m-%d %H:%M:%S");

time.parse("2023-04-13 09:45:26", "%Y-%m-%d %H:%M:%S %z");

time.parse("04/13/2023 09:45:26", "%m/%d/%Y %H:%M:%S");
```

More details of the time format, see [Time Format].

## Instance Methods

### year

Return the year of the time.

```nv
let t = time.parse("2023-04-13 09:45:26")
t.year
// 2023
```

### month

Return the month of the time.

```nv
let t = time.parse("2023-04-13 09:45:26");
t.month;
// 4
```

### day

Return the day of the time.

```nv
let t = time.parse("2023-04-13 09:45:26");
t.day;
// 13
```

### hour

Return the hour of the time.

```nv
let t = time.parse("2023-04-13 09:45:26");
t.hour;
// 9
```

### minute

Return the minute of the time.

```nv
let t = time.parse("2023-04-13 09:45:26");
t.minute;
// 45
```

### second

Return the second of the time.

```nv
let t = time.parse("2023-04-13 09:45:26");
t.second;
// 26
```

### timestamp

Return the [Unix Timestamp] (in second) of the time.

```nv
let t = time.parse("2023-04-13 09:45:26 +08:00");
t.timestamp;
// 1681350326
```

### format

Return the time string with the [Time Format] format.

```nv
let t = time.parse("2023-04-13 09:45:26 +08:00");

t.format("%Y-%m-%d %H:%M:%S %z");
// 2023-04-13 09:45:26 +0800

t.format("%m/%d/%Y %H:%M");
// 04/13/2023 09:45
```

### iso8601

> alias: [to_string](#to_string)

Return the time string with the [RFC3339] format.

```nv
let t = time.parse("2023-04-13 09:45:26 +08:00");
t.iso8601;
// 2023-04-13T09:45:26+08:00
```

### to_string

> alias: [iso8601](#iso8601)

Return the time string with the [RFC3339] format.

## Time Format

| Code | Example                   | Description                                                                                                                                                                      |
| ---- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `%a` | `Sun`                     | Weekday as locale’s abbreviated name.                                                                                                                                            |
| `%A` | `Sunday`                  | Weekday as locale’s full name.                                                                                                                                                   |
| `%w` | `0`                       | Weekday as a decimal number, where 0 is Sunday and 6 is Saturday.                                                                                                                |
| `%d` | `08`                      | Day of the month as a zero-padded decimal number.                                                                                                                                |
| `%b` | `Sep`                     | Month as locale’s abbreviated name.                                                                                                                                              |
| `%B` | `September`               | Month as locale’s full name.                                                                                                                                                     |
| `%m` | `09`                      | Month as a zero-padded decimal number.                                                                                                                                           |
| `%y` | `13`                      | Year without century as a zero-padded decimal number.                                                                                                                            |
| `%Y` | `2013`                    | Year with century as a decimal number.                                                                                                                                           |
| `%H` | `07`                      | Hour (24-hour clock) as a zero-padded decimal number.                                                                                                                            |
| `%I` | `07`                      | Hour (12-hour clock) as a zero-padded decimal number.                                                                                                                            |
| `%p` | `AM`                      | Locale’s equivalent of either AM or PM.                                                                                                                                          |
| `%M` | `06`                      | Minute as a zero-padded decimal number.                                                                                                                                          |
| `%S` | `05`                      | Second as a zero-padded decimal number.                                                                                                                                          |
| `%f` | `000000`                  | Microsecond as a decimal number, zero-padded on the left.                                                                                                                        |
| `%z` | `+0000`                   | UTC offset in the form ±HHMM\[SS\[.ffffff\]\] (empty string if the object is naive).                                                                                             |
| `%Z` | `UTC`                     | Time zone name (empty string if the object is naive).                                                                                                                            |
| `%j` | `251`                     | Day of the year as a zero-padded decimal number.                                                                                                                                 |
| `%U` | `36`                      | Week number of the year (Sunday as the first day of the week) as a zero padded decimal number. All days in a new year preceding the first Sunday are considered to be in week 0. |
| `%W` | `35`                      | Week number of the year (Monday as the first day of the week) as a decimal number. All days in a new year preceding the first Monday are considered to be in week 0.             |
| `%c` | `Sun Sep 8 07:06:05 2013` | Locale’s appropriate date and time representation.                                                                                                                               |
| `%x` | `09/08/13`                | Locale’s appropriate date representation.                                                                                                                                        |
| `%X` | `07:06:05`                | Locale’s appropriate time representation.                                                                                                                                        |
| `%%` | `%`                       | A literal `%` character.                                                                                                                                                         |

[rfc3339]: https://tools.ietf.org/html/rfc3339
[time format]: #time-format
[unix timestamp]: https://en.wikipedia.org/wiki/Unix_time
