---
title: "display"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# display

## 属性

### ALL {#ALL}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code>

`display` 标志组合，启用每个可用的输出位置。

---

### DATA_WINDOW {#DATA_WINDOW}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志公开数据窗口中的值。

---

### NONE {#NONE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code>

`display` 标志组合，隐藏各处的值或视觉效果。

---

### PANE {#PANE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

在图表窗格中绘制输出的 `display` 标志。

---

### PRICE_SCALE {#PRICE_SCALE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志，当图表设置允许时显示价格刻度上的值。

---

### SCREENER {#SCREENER}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志，使 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-CN/api/stdlib/prelude/#plot">plot</a> 值可用于 Screener 集成。

---

### STATUS_LINE {#STATUS_LINE}

**类型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 标志，启用后在图表状态行中显示值。

## 函数

### operator+ {#operator+}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>"]' />

<div v-show="_s0 === 0">

组合两个显示标志（按位或）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 1">

组合显示标志（按位或）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 2">

组合显示标志（按位或）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 3">

组合显示标志（按位或）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

---

### operator- {#operator-}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>"]' />

<div v-show="_s1 === 0">

从第一个操作数中删除显示标志（按位差异）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 1">

删除显示标志（按位差异）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 2">

删除显示标志（按位差异）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 3">

删除显示标志（按位差异）。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>
