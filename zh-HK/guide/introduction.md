# 簡介

**Navi** 是一個用 Rust 編寫的開源 Navi 執行引擎。它提供完整的解析、類型檢查、編譯和逐 K 線執行流水線，可嵌入你自己的應用和服務中執行指標和策略腳本。

## Navi 語言

Navi 是一種用於編寫技術分析指標和交易策略的領域專用語言。它被設計為簡單而強大，採用逐 K 線執行模型，腳本每次處理一根 K 線。

## Navi 引擎

Navi 引擎是 Navi 語言獨立的、可嵌入的執行時。你可以：

- **運行 Navi 腳本** — 使用你自己的 K 線數據，收集輸出（繪圖、警報、策略訂單）
- **嵌入引擎** — 在 Rust、C 或 C++ 應用程式中使用
- **使用 LSP** — 獲得編輯器支援，包括診斷、補全、懸停提示、跳轉到定義等
- **擴展** — 添加自訂原生函數和庫載入器

## 架構

處理流水線如下：

  <img class="light-only" src="/architecture-pipeline.svg" alt="Navi 處理流水線" style="width:100%;max-width:660px;">
<img class="dark-only" src="/architecture-pipeline-dark.svg" alt="Navi 處理流水線" style="width:100%;max-width:660px;">

每個階段對應一個獨立的 crate：

| Crate | 作用 |
|---|---|
| `navi-parser` | 基於 nom 的解析器，生成帶 span 標註的 AST |
| `navi-visitor` | 語義分析、類型檢查、名稱解析 |
| `navi-compiler` | AST 到 VM 指令，包含 3 個優化遍 |
| `navi-vm` | 逐 K 線運行時引擎 |
| `navi-loader` | 模組解析（imports、prelude、stdlib） |
| `navi-builtins` | 內嵌的 prelude 和 stdlib Navi 源檔案 |
| `navi-lsp` | 語言伺服器協議實現 |

## 當前狀態

- **語言版本**：Navi
- **目標**：運行 Navi 腳本，生成繪圖/警報/策略事件，支援常用標準庫函數
- **狀態**：正在積極開發中；部分功能尚未完成，可能會有所調整

## 下一步

- [快速開始](/zh-HK/guide/quick-start) — 構建並運行你的第一個腳本
- [語言基礎](/zh-HK/guide/language-basics) — 學習 Navi 語法
