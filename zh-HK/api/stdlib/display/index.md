---
title: "display"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# display

## 屬性

### ALL {#ALL}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code>

`display` 標誌組合，啓用每個可用的輸出位置。

---

### DATA_WINDOW {#DATA_WINDOW}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌公開資料窗口中的值。

---

### NONE {#NONE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code>

`display` 標誌組合，隱藏各處的值或視覺效果。

---

### PANE {#PANE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

在圖表窗格中繪製輸出的 `display` 標誌。

---

### PRICE_SCALE {#PRICE_SCALE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌，當圖表設定允許時顯示價格刻度上的值。

---

### SCREENER {#SCREENER}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌，使 <a class="stdlib-ref" data-key="prelude::plot" href="/zh-HK/api/stdlib/prelude/#plot">plot</a> 值可用於 Screener 集成。

---

### STATUS_LINE {#STATUS_LINE}

**類型:** <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

`display` 標誌，啓用後在圖表狀態行中顯示值。

## 函數

### operator+ {#operator+}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator+</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>"]' />

<div v-show="_s0 === 0">

組合兩個顯示標誌（按位或）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 1">

組合顯示標誌（按位或）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 2">

組合顯示標誌（按位或）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s0 === 3">

組合顯示標誌（按位或）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

---

### operator- {#operator-}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">display.</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">operator-</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(a</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay, b</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotSimpleDisplay)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay</span>"]' />

<div v-show="_s1 === 0">

從第一個操作數中刪除顯示標誌（按位差異）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 1">

刪除顯示標誌（按位差異）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 2">

刪除顯示標誌（按位差異）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>

<div v-show="_s1 === 3">

刪除顯示標誌（按位差異）。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `a` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |
| `b` | <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotSimpleDisplay">PlotSimpleDisplay</a></code> |  |  |

**返回:** <code><a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code>

</div>
