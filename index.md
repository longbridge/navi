---
layout: home

hero:
  name: Navi
  text: Indicators. Strategies. Scripts.
  tagline: A scripting language for trading charts — clean syntax, strong typing, and a powerful standard library.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
    - theme: alt
      text: Playground
      link: /playground

features:
  - title: Indicators & Strategies
    details: Write bar-by-bar indicators and backtested strategies. Declare inputs, plot series, and emit orders with minimal boilerplate.
  - title: High Performance
    details: Scripts compile to optimized bytecode and run in a tight bar-by-bar loop. JIT compilation available for hot paths.
  - title: Streaming & Realtime
    details: First-class support for realtime bar updates. The var/varip model and rollback mechanism keep state consistent across confirmed and forming bars.
  - title: Rich Standard Library
    details: Built-in ta, math, str, array, map, matrix modules with everything you need for technical analysis and data manipulation.
  - title: Cross-Symbol & Multi-Timeframe
    details: Use request.security to fetch data from other symbols or timeframes and combine them in a single script.
  - title: Editor Support
    details: VS Code extension with completions, hover docs, go-to-definition, rename, diagnostics, semantic tokens, and inlay hints.
---
