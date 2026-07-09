---
title: "Linefill"
---

# Linefill

兩行之間的行填充句柄。

## 靜態方法

### new {#new}

```navi
Linefill.new(
    line1: series Line,
    line2: series Line,
    color: series color
  ): series Linefill
```

創建一個新的行填充對象並將其顯示在圖表上，用 `color` 中指定的顏色填充 `line1` 和 `line2` 之間的空間。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `line1` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `line2` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `color` | <code>series&nbsp;color</code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Linefill">Linefill</a></code>

## 靜態屬性

### all {#all}

**類型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Array">Array&lt;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Linefill">Linefill</a>&gt;</a></code>

傳回一個陣列，其中填充了腳本繪製的所有當前行填充。

## 方法

### delete {#delete}

```navi
Linefill.delete(id: series Linefill)
```

從圖表中刪除指定的線條填充。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

---

### get_line1 {#get_line1}

```navi
Linefill.get_line1(id: series Linefill): series Line
```

傳回行填充的第一行。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code>

---

### get_line2 {#get_line2}

```navi
Linefill.get_line2(id: series Linefill): series Line
```

傳回換行符的第二行。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Line">Line</a></code>

---

### set_color {#set_color}

```navi
Linefill.set_color(id: series Linefill, color: series color)
```

設定線條填充的顏色。

**參數**

| 名稱 | 類型 | 預設值 | 說明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-HK/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |
| `color` | <code>series&nbsp;color</code> |  |  |
