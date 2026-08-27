# AI 助手

**navi** skill 为 AI 编码助手提供 Navi 语言的专用知识——语法、执行模型、标准库和常用模式——使其无需每次会话重新学习，即可编写正确、地道的 `.nv` 指标和策略脚本。

## 包含内容

Skill 包含四个按需加载的参考文件：

| 文件 | 用途 |
|---|---|
| `syntax.md` | 语言语法——声明、控制流、函数、struct/enum/newtype、导入 |
| `execution-model.md` | 逐 bar 执行、类型限定符（`const`/`input`/`simple`/`series`）、`var`/`varip`、`na`、历史引用、避免重绘 |
| `stdlib.md` | 内置函数——prelude、`ta`/`math`/`str`、`Array`/`Map`/`Matrix`、绘图、`strategy` |
| `patterns.md` | 经典模式——indicator/strategy/library 框架、预热守卫、有状态累加器、交叉逻辑、常见陷阱 |

## 安装

使用 Skills CLI 从 `longbridge/navi` 仓库安装：

```bash
npx skills add longbridge/navi
```

如需先查看仓库中可安装的 skill：

```bash
npx skills add longbridge/navi --list
```

如果安装器要求选择 skill，请选择 `navi`。也可以显式安装：

```bash
npx skills add longbridge/navi --skill navi
```

也可以[下载打包后的 skill](/navi-skill.zip)，并将它解压到 AI 编码助手的 skills 目录。

同时安装独立的 `navi` CLI，让 AI 编码助手可以编译并运行它编写的脚本。

macOS 或 Linux：

```bash
curl -fsSL https://navi-lang.org/install.sh | sh
```

Windows PowerShell：

```powershell
irm https://navi-lang.org/install.ps1 | iex
```

确认 CLI 可用：

```bash
navi --version
```

Navi 文档或 API 更新后，可更新已安装的 skill：

```bash
npx skills update navi
```

CLI 不包含行情数据。下方验证流程会把模拟或真实 OHLCV 数据以 NDJSON 从 stdin 喂给 `navi run`。

## 使用

安装后，兼容的 AI 编码助手在处理 `.nv` 文件或你询问 Navi 相关问题时即可使用该 skill。

```text
用 Navi 编写一个完整的 VWAP 指标，支持配置上下轨。
保存为 vwap_bands.nv，并使用 navi CLI 完成验证。
```

为了获得更准确的结果，建议说明：

- 脚本类型：指标、策略或库
- 输入参数，以及预期的绘图、信号或订单
- 标的和周期假设
- 是否允许重绘，以及预热要求
- 目标 `.nv` 文件名

## 推荐工作流

1. 要求 AI 返回完整的 `.nv` 文件，而不是孤立代码片段。
2. 文件名、变量、参数和函数统一使用 `snake_case`。
3. 要求 AI 使用独立的 `navi` CLI 验证文件：

   ```bash
   navi check path/to/script.nv
   ```

4. 让 AI 用 `navi fmt path/to/script.nv` 应用规范格式，或用 `navi fmt --check` 验证而不改动文件。
5. 涉及多个文件时一起校验——两个命令都接受文件、目录和 glob 模式：

   ```bash
   navi check "src/**/*.nv"
   navi fmt src
   ```

6. 将验证后的脚本用于 Longbridge CLI、App 或桌面端。独立的 `navi` CLI 主要用于开发和调试。

只有 AI 成功运行 CLI 才能称为“已验证”；仅返回代码块不代表完成验证。

### 运行行为

`navi run` 会用你提供的数据执行脚本，因此不依赖任何行情服务也能确认运行行为。它自身不含数据——由你以 NDJSON 从 stdin 提供，每行一个 JSON 对象；每根 K 线的 `plot()` 数值和告警以同样的形式回到 stdout。按以下顺序选择：

- `navi run`，喂入模拟或此前抓取的 OHLCV 数据。不需要账号和网络，数值可复现。
- 已安装并登录的 Longbridge CLI：`longbridge quant run` 可直接基于 Longbridge 历史数据运行脚本。
- AI 环境中的 Longbridge MCP：通过其行情工具请求历史 K 线。
- [Playground](/playground)：在浏览器中基于示例 K 线运行脚本。

给 `navi run` 写驱动程序前，有三点是猜不出来的：

- **stdout 是脚本的输出，stderr 是 navi 自己的话。** plot 数值、告警、以及脚本自己的 `log.*()` 都走 stdout，每一行都是合法 JSON；编译诊断、协议错误、超时走 stderr 的纯文本。分开读——用 `2>&1` 合并会破坏 JSON 流。
- **发完数据要关闭 stdin。** 历史边界之后运行会继续等待实时数据，不会自行结束。
- **没人应答的流是错误，不是空结果。** 要表示某个标的确实没有分红，应答一个空数组，而不是保持沉默。

脚本用到 `request.security` / `request.dividends` / `request.data` 时，navi 会为每条流写一行 `request`，驱动程序按 `id` 应答。完整线协议见 `navi run --help`：每种行类型都有字面量例子、路由规则，以及一份完整的请求/应答记录。

### 在线预览

验证完成后，AI 可以将完整 UTF-8 脚本编码为不带填充的 Base64URL，并放入 `code` 查询参数，生成 Playground 预览：

```text
https://navi-lang.org/playground?code=<base64url-source>
```

打开链接后，Playground 会将脚本作为未保存文件载入并添加到图表。Base64URL 使用 `-`、`_` 代替 `+`、`/`，并移除末尾的 `=`。浏览器和聊天工具会限制 URL 长度，因此仍需同时保留源文件。

## 提问示例

```text
检查 momentum_strategy.nv 是否存在重绘或 series 状态错误。
修复文件并保持原有行为，完成后运行 navi check。
```

```text
创建一个 Navi 库，导出 EMA 和交叉判断辅助函数。
遵循 Navi 命名规范，保存为 moving_average_helpers.nv，
并返回实际的 navi check 结果。
```

Skill 将 [navi-lang.org](/zh-CN/docs/) 及其标准库文档作为当前 API 的权威来源。
