---
title: "Linefill"
---

# Linefill

两行之间的行填充句柄。

## 静态方法

### new {#new}

```navi
Linefill.new(
    line1: series Line,
    line2: series Line,
    color: series color
  ): series Linefill
```

创建一个新的行填充对象并将其显示在图表上，用 `color` 中指定的颜色填充 `line1` 和 `line2` 之间的空间。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `line1` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `line2` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code> |  |  |
| `color` | <code>series&nbsp;color</code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Linefill">Linefill</a></code>

## 静态属性

### all {#all}

**类型:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Array">Array&lt;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Linefill">Linefill</a>&gt;</a></code>

返回一个数组，其中填充了脚本绘制的所有当前行填充。

## 方法

### delete {#delete}

```navi
Linefill.delete(id: series Linefill)
```

从图表中删除指定的线条填充。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

---

### get_line1 {#get_line1}

```navi
Linefill.get_line1(id: series Linefill): series Line
```

返回行填充的第一行。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code>

---

### get_line2 {#get_line2}

```navi
Linefill.get_line2(id: series Linefill): series Line
```

返回换行符的第二行。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |

**返回:** <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Line">Line</a></code>

---

### set_color {#set_color}

```navi
Linefill.set_color(id: series Linefill, color: series color)
```

设置线条填充的颜色。

**参数**

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/zh-CN/api/stdlib/prelude/Linefill">Linefill</a></code> |  |  |
| `color` | <code>series&nbsp;color</code> |  |  |
