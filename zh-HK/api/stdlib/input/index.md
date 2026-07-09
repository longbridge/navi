---
title: "input"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# input

## 函數

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;bool</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;bool</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;color</code> |  | 輸入的默認顏色值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;color</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;T</code> |  | 輸入的默認枚舉值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;T&gt;</a></code> | `na` | 允許的枚舉值的陣列。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;T</code>

---

### float {#float}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, options</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Array</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, confirm</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, maxval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, step</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, confirm</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span>"]' />

<div v-show="_s0 === 0">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;float&gt;</a></code> | `na` | 輸入允許值的陣列。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;float</code>

</div>

<div v-show="_s0 === 1">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `minval` | <code>const&nbsp;float</code> | `na` | 最小允許值。 |
| `maxval` | <code>const&nbsp;float</code> | `na` | 最大允許值。 |
| `step` | <code>const&nbsp;float</code> | `na` | 值增量的步長。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;float</code>

</div>

---

### int {#int}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, options</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Array</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">&#x3C;</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">></span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, confirm</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>","<span style=\"color:#D73A49;--shiki-dark:#F97583\">input</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(defval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, title</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, minval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, maxval</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, step</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, inline</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, group</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, confirm</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, display</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> PlotDisplay </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> display.ALL, active</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> true</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> input</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span>"]' />

<div v-show="_s1 === 0">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;int&gt;</a></code> | `na` | 輸入允許值的陣列。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;int</code>

</div>

<div v-show="_s1 === 1">

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 輸入的默認值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `minval` | <code>const&nbsp;int</code> | `na` | 最小允許值。 |
| `maxval` | <code>const&nbsp;int</code> | `na` | 最大允許值。 |
| `step` | <code>const&nbsp;int</code> | `na` | 值增量的步長。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;int</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;float</code> |  | 輸入的默認價格值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;float</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | 輸入的默認會話值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code> | `na` | 允許的會話值的陣列。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;string</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;expression</code> |  | 輸入的默認系列表達式值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |

**返回:** <code>input&nbsp;float</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | 輸入的默認字符串值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code> | `na` | 輸入允許值的陣列。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;string</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | 輸入的默認符號值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;string</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | 輸入的默認文本值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;string</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;int</code> |  | 輸入的默認時間值作為 UNIX 時間戳。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;int</code>

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

創建在腳本設定 UI 中公開的傳入值。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `defval` | <code>const&nbsp;string</code> |  | 輸入的默認時間範圍值。 |
| `title` | <code>const&nbsp;string</code> | `na` | 設定中輸入的標籤。 |
| `options` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;string&gt;</a></code> | `na` | 允許的時間範圍值的陣列。 |
| `tooltip` | <code>const&nbsp;string</code> | `na` | 輸入的工具提示文本。 |
| `inline` | <code>const&nbsp;string</code> | `na` | 佈局的內聯組名稱。 |
| `group` | <code>const&nbsp;string</code> | `na` | 輸入組織的組名稱。 |
| `confirm` | <code>const&nbsp;bool</code> | `false` | 如果為 true，則會顯示確認對話框。 |
| `display` | <code>const&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/PlotDisplay">PlotDisplay</a></code> | `display.ALL` | 輸入的顯示模式。 |
| `active` | <code>input&nbsp;bool</code> | `true` | 如果為 true，則輸入處於活動狀態。 |

**返回:** <code>input&nbsp;string</code>
