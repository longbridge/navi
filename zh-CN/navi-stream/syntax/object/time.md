---
order: 2
---

# 日期时间

我们可以使用 `time` 包来创建一个 `DateTime` 对象。

## 使用

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

## 类方法

### new

创建一个新的 DateTime 对象。

```nv
let t = time.new(2023, 1, 11, 0, 0, 0);
// t is a DateTime object

export let t_str = t.to_string();
// t_str is "2023-01-11T00:00:00Z"
```

### parse (time)

解析一个字符串为 DateTime 对象，默认时间格式为 [RFC3339]。
如果时间格式无效，将返回 `nil`。
如果字符串内没有包含时区信息，将会默认采用 `UTC` 时区。

```nv
let t = time.parse("2023-04-13T14:08:33-11:00");

```

或者也兼容支持 `%Y-%m-%d %H:%M:%S` 格式。

```nv
let t = time.parse("2023-04-13 09:45:26");

```

### parse (time, format)

你可以采用 `parse` 方法传递两个参数，第一个是时间字符串，第二个是时间格式。

```nv
time.parse("2023-04-13 09:45:26", "%Y-%m-%d %H:%M:%S");

time.parse("2023-04-13 09:45:26", "%Y-%m-%d %H:%M:%S %z");

time.parse("04/13/2023 09:45:26", "%m/%d/%Y %H:%M:%S");
```

更多细节的时间格式，参见 [Time Format]。

## 实例方法

### year

返回时间的年份。

```nv
let t = time.parse("2023-04-13 09:45:26")
t.year
// 2023
```

### month

返回月份。

```nv
let t = time.parse("2023-04-13 09:45:26");
t.month;
// 4
```

### day

返回时间的日期。

```nv
let t = time.parse("2023-04-13 09:45:26");
t.day;
// 13
```

### hour

返回时间的小时。

```nv
let t = time.parse("2023-04-13 09:45:26");
t.hour;
// 9
```

### minute

返回时间的分钟。

```nv
let t = time.parse("2023-04-13 09:45:26");
t.minute;
// 45
```

### second

返回时间的秒数。

```nv
let t = time.parse("2023-04-13 09:45:26");
t.second;
// 26
```

### timestamp

返回时间的 Unix 时间戳（秒）格式的数字。

```nv
let t = time.parse("2023-04-13 09:45:26 +08:00");
t.timestamp;
// 1681350326
```

### format

基于参数的 [Time Format] 返回时间字符串。

```nv
let t = time.parse("2023-04-13 09:45:26 +08:00");

t.format("%Y-%m-%d %H:%M:%S %z");
// 2023-04-13 09:45:26 +0800

t.format("%m/%d/%Y %H:%M");
// 04/13/2023 09:45
```

### iso8601

> alias: [to_string](#to_string)

返回时间字符串，格式为 [RFC3339]。

```nv
let t = time.parse("2023-04-13 09:45:26 +08:00");
t.iso8601;
// 2023-04-13T09:45:26+08:00
```

### to_string

> alias: [iso8601](#iso8601)

返回时间字符串，格式为 [RFC3339]。

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
