# 简介

**Navi** 是一个用 Rust 编写的开源 Navi 执行引擎。它提供完整的解析、类型检查、编译和逐 K 线执行流水线，可嵌入你自己的应用和服务中运行指标和策略脚本。

## Navi 语言

Navi 是一种用于编写技术分析指标和交易策略的领域专用语言。它被设计为简单而强大，采用逐 K 线执行模型，脚本每次处理一根 K 线。

## Navi 引擎

Navi 引擎是 Navi 语言独立的、可嵌入的运行时。你可以：

- **运行 Navi 脚本** — 使用你自己的 K 线数据，收集输出（绘图、警报、策略订单）
- **嵌入引擎** — 在 Rust、C 或 C++ 应用程序中使用
- **使用 LSP** — 获得编辑器支持，包括诊断、补全、悬停提示、跳转到定义等
- **扩展** — 添加自定义原生函数和库加载器

## 架构

处理流水线如下：

  <img class="light-only" src="/architecture-pipeline.svg" alt="Navi 处理流水线" style="width:100%;max-width:660px;">
<img class="dark-only" src="/architecture-pipeline-dark.svg" alt="Navi 处理流水线" style="width:100%;max-width:660px;">

每个阶段对应一个独立的 crate：

| Crate | 作用 |
|---|---|
| `navi-parser` | 基于 nom 的解析器，生成带 span 标注的 AST |
| `navi-visitor` | 语义分析、类型检查、名称解析 |
| `navi-compiler` | AST 到 VM 指令，包含 3 个优化遍 |
| `navi-vm` | 逐 K 线运行时引擎 |
| `navi-loader` | 模块解析（imports、prelude、stdlib） |
| `navi-builtins` | 内嵌的 prelude 和 stdlib Navi 源文件 |
| `navi-lsp` | 语言服务器协议实现 |

## 当前状态

- **语言版本**：Navi
- **目标**：运行 Navi 脚本，生成绘图/警报/策略事件，支持常用标准库函数
- **状态**：正在积极开发中；部分功能尚未完成，可能会有变更

## 下一步

- [快速开始](/zh-CN/guide/quick-start) — 构建并运行你的第一个脚本
- [语言基础](/zh-CN/guide/language-basics) — 学习 Navi 语法
