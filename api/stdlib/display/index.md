---
title: "display"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# display

## Properties

### ALL {#ALL}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code>

`display` flag combination that enables every available output location.

---

### DATA_WINDOW {#DATA_WINDOW}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that exposes values in the Data Window.

---

### NONE {#NONE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code>

`display` flag combination that hides the value or visual everywhere.

---

### PANE {#PANE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that draws output in a chart pane.

---

### PRICE_SCALE {#PRICE_SCALE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that shows a value on the price scale when chart settings allow it.

---

### SCREENER {#SCREENER}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that makes a <a class="stdlib-ref" data-key="prelude::plot" href="/api/stdlib/prelude/#plot">plot</a> value available to Screener integrations.

---

### STATUS_LINE {#STATUS_LINE}

**Type:** <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` flag that shows a value in the chart status line when enabled.

## Functions

### operator+ {#operator+}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>"]' />

<div v-show="_s0 === 0">

Combines two display flags (bitwise OR).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 1">

Combines display flags (bitwise OR).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 2">

Combines display flags (bitwise OR).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 3">

Combines display flags (bitwise OR).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

---

### operator- {#operator-}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>"]' />

<div v-show="_s1 === 0">

Removes display flags from the first operand (bitwise difference).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 1">

Removes display flags (bitwise difference).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 2">

Removes display flags (bitwise difference).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 3">

Removes display flags (bitwise difference).

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**Returns:** <code><a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>
