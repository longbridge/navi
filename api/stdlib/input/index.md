---
title: "input"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# input

## Functions

### bool {#bool}

```navi
input.bool(
    defval: const bool,
    title: const string = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input bool
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;bool</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;bool</code>

---

### color {#color}

```navi
input.color(
    defval: const color,
    title: const string = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input color
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;color</code> |  | The default color value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;color</code>

---

### enum {#enum}

```navi
input.enum(
    defval: const T,
    title: const string = na,
    options: const Array<T> = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input T
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;T</code> |  | The default enum value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;T&gt;</a></code> | `na` | An array of allowed enum values. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;T</code>

---

### float {#float}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, options</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Array</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, confirm</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, maxval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, step</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, confirm</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s0 === 0">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;float&gt;</a></code> | `na` | An array of allowed values for the input. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;float</code>

</div>

<div v-show="_s0 === 1">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `minval` | <code>const&nbsp;float</code> | `na` | The minimum allowed value. |
| `maxval` | <code>const&nbsp;float</code> | `na` | The maximum allowed value. |
| `step` | <code>const&nbsp;float</code> | `na` | The step size for value increments. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;float</code>

</div>

---

### int {#int}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, options</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Array</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, confirm</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, maxval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, step</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, confirm</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s1 === 0">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;int&gt;</a></code> | `na` | An array of allowed values for the input. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;int</code>

</div>

<div v-show="_s1 === 1">

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | The default value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `minval` | <code>const&nbsp;int</code> | `na` | The minimum allowed value. |
| `maxval` | <code>const&nbsp;int</code> | `na` | The maximum allowed value. |
| `step` | <code>const&nbsp;int</code> | `na` | The step size for value increments. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;int</code>

</div>

---

### price {#price}

```navi
input.price(
    defval: const float,
    title: const string = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input float
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | The default price value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;float</code>

---

### session {#session}

```navi
input.session(
    defval: const string,
    title: const string = na,
    options: const Array<string> = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input string
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | The default session value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code> | `na` | An array of allowed session values. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;string</code>

---

### source {#source}

```navi
input.source(
    defval: const expression,
    title: const string = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    display: const PlotDisplay = display.ALL,
    active: input bool = true,
    confirm: const bool = false
  ): input float
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;expression</code> |  | The default series expression value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |

**Returns:** <code>input&nbsp;float</code>

---

### string {#string}

```navi
input.string(
    defval: const string,
    title: const string = na,
    options: const Array<string> = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input string
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | The default string value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code> | `na` | An array of allowed values for the input. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;string</code>

---

### symbol {#symbol}

```navi
input.symbol(
    defval: const string,
    title: const string = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input string
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | The default symbol value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;string</code>

---

### text_area {#text_area}

```navi
input.text_area(
    defval: const string,
    title: const string = na,
    tooltip: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input string
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | The default text value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;string</code>

---

### time {#time}

```navi
input.time(
    defval: const int,
    title: const string = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input int
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | The default time value of the input as UNIX timestamp. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;int</code>

---

### timeframe {#timeframe}

```navi
input.timeframe(
    defval: const string,
    title: const string = na,
    options: const Array<string> = na,
    tooltip: const string = na,
    inline: const string = na,
    group: const string = na,
    confirm: const bool = false,
    display: const PlotDisplay = display.ALL,
    active: input bool = true
  ): input string
```

Creates an input value exposed in the script settings UI.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | The default timeframe value of the input. |
| `title` | <code>const&nbsp;string</code> | `na` | The label for the input in the settings. |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code> | `na` | An array of allowed timeframe values. |
| `tooltip` | <code>const&nbsp;string</code> | `na` | The tooltip text for the input. |
| `inline` | <code>const&nbsp;string</code> | `na` | The inline group name for layout. |
| `group` | <code>const&nbsp;string</code> | `na` | The input group name for organization. |
| `confirm` | <code>const&nbsp;bool</code> | `false` | If true, a confirmation dialog is shown. |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | The display mode for the input. |
| `active` | <code>input&nbsp;bool</code> | `true` | If true, the input is active. |

**Returns:** <code>input&nbsp;string</code>
