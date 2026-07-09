---
title: "Linefill"
---

# Linefill

Handle for a linefill between two lines.

## Static Methods

### new {#new}

```navi
Linefill.new(
    line1: series Line,
    line2: series Line,
    color: series color
  ): series Linefill
```

Creates a new linefill object and displays it on the chart, filling the space between `line1` and `line2` with the color specified in `color`.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `line1` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `line2` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `color` | <code>series&nbsp;color</code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Linefill">Linefill</a></code>

## Static Properties

### all {#all}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Linefill">Linefill</a>&gt;</a></code>

Returns an array filled with all the current linefills drawn by the script.

## Methods

### delete {#delete}

```navi
Linefill.delete(id: series Linefill)
```

Deletes the specified linefill from the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

---

### get_line1 {#get_line1}

```navi
Linefill.get_line1(id: series Linefill): series Line
```

Returns the first line of the linefill.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code>

---

### get_line2 {#get_line2}

```navi
Linefill.get_line2(id: series Linefill): series Line
```

Returns the second line of the linefill.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Line">Line</a></code>

---

### set_color {#set_color}

```navi
Linefill.set_color(id: series Linefill, color: series color)
```

Sets the color of the linefill.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |
| `color` | <code>series&nbsp;color</code> |  |  |
