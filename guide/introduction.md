# Introduction

**Navi** is an open source Navi execution engine written in Rust. It provides a complete pipeline for parsing, type-checking, compiling, and running indicators and strategy scripts bar-by-bar, embeddable in your own applications and services.

## The Navi Language

Navi is a domain-specific language for writing technical analysis indicators and trading strategies. It is designed to be simple yet powerful, operating on a bar-by-bar execution model where scripts process one candlestick at a time.

## The Navi Engine

The Navi engine is an independent, embeddable runtime for the Navi language. You can:

- **Run Navi scripts** on your own candlestick data and collect outputs (plots, alerts, strategy orders)
- **Embed the engine** in Rust, C, or C++ applications
- **Use the LSP** for editor support with diagnostics, completions, hover, go-to-definition, and more
- **Extend** with custom native functions and library loaders

## Architecture

The processing pipeline is:

  <img class="light-only" src="/architecture-pipeline.svg" alt="Navi processing pipeline" style="width:100%;max-width:660px;">
<img class="dark-only" src="/architecture-pipeline-dark.svg" alt="Navi processing pipeline" style="width:100%;max-width:660px;">

Each stage is a separate crate:

| Crate | Role |
|---|---|
| `navi-parser` | nom-based parser producing span-annotated ASTs |
| `navi-visitor` | Semantic analysis, type checking, name resolution |
| `navi-compiler` | AST to VM instructions with 3 optimization passes |
| `navi-vm` | Bar-by-bar runtime engine |
| `navi-loader` | Module resolution (imports, prelude, stdlib) |
| `navi-builtins` | Embedded prelude and stdlib Navi sources |
| `navi-lsp` | Language Server Protocol implementation |

## Current Status

- **Language version**: Navi
- **Goal**: Run Navi scripts, produce plots/alerts/strategy events, support common standard library functions
- **Status**: Under active development; some features may be incomplete or subject to change

## Next Steps

- [Quick Start](/guide/quick-start) — build and run your first script
- [Language Basics](/guide/language-basics) — learn Navi syntax
- [Integration](/guide/integration/integration) — embed the engine in your Rust application
