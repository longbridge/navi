# AI 助手

**navi** skill 為 AI 編碼助手提供 Navi 語言的專用知識——語法、執行模型、標準庫和常用模式——使其無需每次會話重新學習，即可編寫正確、地道的 `.nv` 指標和策略腳本。

## 包含內容

Skill 包含四個按需載入的參考文件：

| 文件 | 用途 |
|---|---|
| `syntax.md` | 語言語法——聲明、控制流、函數、struct/enum/newtype、導入 |
| `execution-model.md` | 逐 bar 執行、類型限定符（`const`/`input`/`simple`/`series`）、`var`/`varip`、`na`、歷史引用、避免重繪 |
| `stdlib.md` | 內置函數——prelude、`ta`/`math`/`str`、`Array`/`Map`/`Matrix`、繪圖、`strategy` |
| `patterns.md` | 經典模式——indicator/strategy/library 框架、預熱守衛、有狀態累加器、交叉邏輯、常見陷阱 |

## 安裝

使用 Skills CLI 從 `longbridge/navi` 倉庫安裝：

```bash
npx skills add longbridge/navi
```

如需先查看倉庫中可安裝的 skill：

```bash
npx skills add longbridge/navi --list
```

如果安裝器要求選擇 skill，請選擇 `navi`。也可以顯式安裝：

```bash
npx skills add longbridge/navi --skill navi
```

也可以[下載打包後的 skill](/navi-skill.zip)，並將它解壓到 AI 編碼助手的 skills 目錄。

同時安裝獨立的 `navi` CLI，讓 AI 編碼助手可以編譯並執行它編寫的腳本。

macOS 或 Linux：

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell：

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

確認 CLI 可用：

```bash
navi --version
```

Navi 文件或 API 更新後，可更新已安裝的 skill：

```bash
npx skills update navi
```

CLI 不包含行情數據。下方驗證流程會把模擬或真實 OHLCV 數據以 NDJSON 從 stdin 餵給 `navi run`。

## 使用

安裝後，兼容的 AI 編碼助手在處理 `.nv` 文件或你詢問 Navi 相關問題時即可使用該 skill。

```text
用 Navi 編寫一個完整的 VWAP 指標，支援設定上下軌。
儲存為 vwap_bands.nv，並使用 navi CLI 完成驗證。
```

為了獲得更準確的結果，建議說明：

- 腳本類型：指標、策略或庫
- 輸入參數，以及預期的繪圖、訊號或訂單
- 標的和週期假設
- 是否允許重繪，以及預熱要求
- 目標 `.nv` 文件名

## 推薦工作流程

1. 要求 AI 返回完整的 `.nv` 文件，而不是孤立代碼片段。
2. 文件名、變量、參數和函數統一使用 `snake_case`。
3. 要求 AI 使用獨立的 `navi` CLI 驗證文件：

   ```bash
   navi check path/to/script.nv
   ```

4. 讓 AI 用 `navi fmt path/to/script.nv` 套用規範格式，或用 `navi fmt --check` 驗證而不改動檔案。
5. 涉及多個檔案時一起校驗——兩個命令都接受檔案、目錄和 glob 模式：

   ```bash
   navi check "src/**/*.nv"
   navi fmt src
   ```

6. 將驗證後的腳本用於 Longbridge CLI、App 或桌面端。獨立的 `navi` CLI 主要用於開發和除錯。

只有 AI 成功執行 CLI 才能稱為「已驗證」；僅返回程式碼區塊不代表完成驗證。

### 執行行為

`navi run` 會用你提供的數據執行腳本，因此不依賴任何行情服務也能確認執行行為。它本身不含數據——由你以 NDJSON 從 stdin 提供，每行一個 JSON 物件；每根 K 線的 `plot()` 數值和告警以同樣的形式回到 stdout。按以下順序選擇：

- `navi run`，餵入模擬或此前擷取的 OHLCV 數據。不需要帳號和網路，數值可重現。
- 已安裝並登入的 Longbridge CLI：`longbridge quant run` 可直接基於 Longbridge 歷史數據執行腳本。
- AI 環境中的 Longbridge MCP：透過其行情工具請求歷史 K 線。
- [Playground](/playground)：在瀏覽器中基於範例 K 線執行腳本。

給 `navi run` 寫驅動程式前，有三點是猜不出來的：

- **stdout 是腳本的輸出，stderr 是 navi 自己的話。** plot 數值、告警、以及腳本自己的 `log.*()` 都走 stdout，每一行都是合法 JSON；編譯診斷、協議錯誤、逾時走 stderr 的純文字。分開讀——用 `2>&1` 合併會破壞 JSON 流。
- **發完數據要關閉 stdin。** 歷史邊界之後執行會繼續等待即時數據，不會自行結束。
- **沒人應答的流是錯誤，不是空結果。** 要表示某個標的確實沒有股息，應答一個空陣列，而不是保持沉默。

腳本用到 `request.security` / `request.dividends` / `request.data` 時，navi 會為每條流寫一行 `request`，驅動程式按 `id` 應答。完整線協議見 `navi run --help`：每種行類型都有字面量例子、路由規則，以及一份完整的請求/應答記錄。

### 線上預覽

驗證完成後，AI 可以將完整 UTF-8 腳本編碼為不帶填充的 Base64URL，並放入 `code` 查詢參數，生成 Playground 預覽：

```text
https://navi-lang.org/playground?code=<base64url-source>
```

開啟連結後，Playground 會將腳本作為未儲存文件載入並添加到圖表。Base64URL 使用 `-`、`_` 代替 `+`、`/`，並移除末尾的 `=`。瀏覽器和聊天工具會限制 URL 長度，因此仍需同時保留源文件。

## 提問示例

```text
檢查 momentum_strategy.nv 是否存在重繪或 series 狀態錯誤。
修復文件並保持原有行為，完成後執行 navi check。
```

```text
建立一個 Navi 庫，匯出 EMA 和交叉判斷輔助函數。
遵循 Navi 命名規範，儲存為 moving_average_helpers.nv，
並返回實際的 navi check 結果。
```

Skill 將 [navi-lang.org](/zh-HK/docs/) 及其標準庫文件作為目前 API 的權威來源。
