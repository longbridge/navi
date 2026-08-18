---
order: 3
---

# Quote [WIP]

::: warning
此功能仍在开发中。我们可能会在未来更改语法。
:::

| 函数名                                               | 描述                                              |
| ---------------------------------------------------- | ------------------------------------------------- |
| open: `number`, o: `number`                          | 当前 K 线的开盘价                                 |
| high: `number`, h: `number`                          | 当前 K 线的最高价                                 |
| low: `number`, l: `number`                           | 当前 K 线的最低价                                 |
| close: `number`, c: `number`                         | 当前 K 线的收盘价                                 |
| volume: `number`, vol: `number`, v: `number`         | 当前 K 线的交易量                                 |
| amount: `number`, vola: `number`, turnover: `number` | 当前 K 线的交易金额                               |
| isup: `bool`                                         | 如果当前 K 线上涨，返回 `true`                    |
| isdown: `bool`                                       | 如果当前 K 线下跌，返回 `true`                    |
| isequal: `bool`                                      | 如果当前 K 线平盘，返回 `true`                    |
| date: `number`                                       | 返回当前 K 线或指定时间戳的日期，格式为 `YYMMDD`  |
| year: `number`                                       | 返回当前 K 线或指定时间戳的年份                   |
| month: `number`                                      | 返回当前 K 线或指定时间戳的月份                   |
| day: `number`                                        | 返回当前 K 线或指定时间戳的日期                   |
| time: `number`                                       | 返回当前 K 线或指定时间戳的时间，格式为 `HHMMSS`  |
| hour: `number`                                       | 返回当前 K 线或指定时间戳的小时                   |
| minute: `number`                                     | 返回当前 K 线或指定时间戳的分钟                   |
| second: `number`                                     | 返回当前 K 线或指定时间戳的秒数                   |
| weekday: `number`                                    | 返回当前 K 线或指定时间戳的星期几，`0` 代表星期日 |
| weekofyear: `number`                                 | 返回当前 K 线或指定时间戳的年份中的周数           |
