---
order: 3
---

# quote

| Function Name                                        | Description                                                                             |
|------------------------------------------------------|-----------------------------------------------------------------------------------------|
| open: `number`, o: `number`                          | Opening price of the current K-line                                                     |
| high: `number`, h: `number`                          | Highest price of the current K-line                                                     |
| low: `number`, l: `number`                           | Lowest price of the current K-line                                                      |
| close: `number`, c: `number`                         | Closing price of the current K-line                                                     |
| volume: `number`, vol: `number`, v: `number`         | Trading volume of the current K-line                                                    |
| amount: `number`, vola: `number`, turnover: `number` | Trading amount of the current K-line                                                    |
| isup: `bool`                                         | Returns `true` if the current K-line is rising                                          |
| isdown: `bool`                                       | Returns `true` if the current K-line is falling                                         |
| isequal: `bool`                                      | Returns `true` if the current K-line is equal                                           |
| date: `number`                                       | Returns the date of the current K-line or specified timestamp in the format of `YYMMDD` |
| year: `number`                                       | Returns the year of the current K-line or specified timestamp                           |
| month: `number`                                      | Returns the month of the current K-line or specified timestamp                          |
| day: `number`                                        | Returns the day of the current K-line or specified timestamp                            |
| time: `number`                                       | Returns the time of the current K-line or specified timestamp in the format of `HHMMSS` |
| hour: `number`                                       | Returns the hour of the current K-line or specified timestamp                           |
| minute: `number`                                     | Returns the minute of the current K-line or specified timestamp                         |
| second: `number`                                     | Returns the second of the current K-line or specified timestamp                         |
| weekday: `number`                                    | Returns the weekday of the current K-line or specified timestamp, `0` represents Sunday |
| weekofyear: `number`                                 | Returns the week of the year of the current K-line or specified timestamp               |
