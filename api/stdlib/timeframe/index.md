---
title: "timeframe"
---

# timeframe

## Properties

### isdaily {#isdaily}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if current resolution is a daily resolution, `false` otherwise.

---

### isdwm {#isdwm}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if current resolution is a daily or weekly or monthly resolution, `false` otherwise.

---

### isintraday {#isintraday}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if current resolution is an intraday (minutes or seconds) resolution, `false` otherwise.

---

### isminutes {#isminutes}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if current resolution is a minutes resolution, `false` otherwise.

---

### ismonthly {#ismonthly}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if current resolution is a monthly resolution, `false` otherwise.

---

### isseconds {#isseconds}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if current resolution is a seconds resolution, `false` otherwise.

---

### isticks {#isticks}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if current resolution is a ticks resolution, `false` otherwise.

---

### isweekly {#isweekly}

**Type:** <code>simple&nbsp;bool</code>

Returns `true` if current resolution is a weekly resolution, `false` otherwise.

---

### main_period {#main_period}

**Type:** <code>simple&nbsp;string</code>

Returns the base timeframe chosen for the script itself.

Inside `request.*()` expressions this value still points to the outer script's timeframe rather than the temporary request timeframe.

---

### multiplier {#multiplier}

**Type:** <code>simple&nbsp;int</code>

Multiplier of resolution, e.g. '60' - 60, 'D' - 1, '5D' - 5, '12M' - 12.

**Type:** <code>simple&nbsp;int</code>

Multiplier of resolution, e.g. '60' - 60, 'D' - 1, '5D' - 5, '12M' - 12.

---

### period {#period}

**Type:** <code>simple&nbsp;string</code>

A string representation of the script's main timeframe.

If the script is an <a class="stdlib-ref" data-key="prelude::indicator" href="/api/stdlib/prelude/#indicator">indicator</a> that specifies a `timeframe` value in its declaration statement, this variable holds that value. Otherwise, its value represents the chart's timeframe. The string's format is "&lt;quantity&gt;[&lt;unit&gt;]", where &lt;unit&gt; is "T" for ticks, "S" for seconds, "D" for days, "W" for weeks, and "M" for months, but is absent for minutes. No &lt;unit&gt; exists for hours: hourly timeframes are expressed in minutes. The variable's value is: "10S" for 10 seconds, "30" for 30 minutes, "240" for four hours, "1D" for one day, "2W" for two weeks, and "3M" for one quarter.

**Type:** <code>simple&nbsp;string</code>

A string representation of the script's main timeframe or a requested timeframe.

## Functions

### change {#change}

```navi
timeframe.change(timeframe: string): bool
```

Detects changes in the specified timeframe.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timeframe` | <code>string</code> |  |  |

**Returns:** <code>bool</code>

---

### from_seconds {#from_seconds}

```navi
timeframe.from_seconds(seconds: int): string
```

Converts seconds into a timeframe string.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `seconds` | <code>int</code> |  | The number of seconds to convert. |

**Returns:** <code>string</code> — A timeframe string (e.g., 3600 returns "60", 86400 returns "D").

---

### in_seconds {#in_seconds}

```navi
timeframe.in_seconds(timeframe: string = timeframe.period): simple int
```

Converts a timeframe string into seconds.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `timeframe` | <code>string</code> | `timeframe.period` | The timeframe string to convert. Defaults to the chart's timeframe. |

**Returns:** <code>simple&nbsp;int</code> — The number of seconds in one bar of the given timeframe. For example, "D" returns 86400, "60" returns 3600.
