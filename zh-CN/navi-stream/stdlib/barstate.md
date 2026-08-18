---
order: 4
---

# barstate


| Function Name       | Description                                                                                                                                        |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| is_history:`bool`   | Returns `true` if current bar is a historical bar, `false` otherwise.                                                                              |
| is_new:`bool`       | Returns `true` if script is currently calculating on new bar, `false` otherwise.                                                                   |
| is_confirmed:`bool` | Returns `true` if the script is calculating the last (closing) update of the current bar. The next script calculation will be on the new bar data. |
| is_realtime:`bool`  | Returns `true` if current bar is a real-time bar, `false` otherwise.                                                                               |
| is_last:`bool`      | Returns `true` if current bar is the last bar in barset, `false` otherwise. This condition is true for all real-time bars in barset.               |
