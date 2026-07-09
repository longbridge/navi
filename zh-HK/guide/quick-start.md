# 快速開始

## 前提條件

- **Rust**（stable）及 Cargo

## 從源碼構建

克隆倉庫並構建：

```bash
git clone https://github.com/longbridge/navi.git
cd navi
cargo build
```

## 運行測試

```bash
# 所有測試
cargo test --all-features

# 特定 crate
cargo test -p navi-parser
cargo test -p navi-visitor
cargo test -p navi-vm
cargo test -p navi-lsp
```

## 你的第一個腳本

在 `Cargo.toml` 中添加 `navi-vm`：

```toml
[dependencies]
navi-vm = { path = "crates/vm" }
```

然後編寫一個簡單的程式：

```rust
use navi_vm::{Candlestick, Instance, TimeFrame};

#[tokio::main]
async fn main() -> Result<(), navi_vm::Error> {
    let source = r#"
indicator("Hello Navi")
plot(close)
plot(ta.sma(close, 5), "SMA 5")
"#;

    let timeframe = TimeFrame::days(1);
    let symbol = "NASDAQ:AAPL";

    let bars = vec![
        Candlestick::new(1700000000000, 150.0, 155.0, 149.0, 153.0, 1000.0, 0.0, Default::default()),
        Candlestick::new(1700086400000, 153.0, 158.0, 152.0, 157.0, 1200.0, 0.0, Default::default()),
        Candlestick::new(1700172800000, 157.0, 160.0, 155.0, 159.0, 900.0, 0.0, Default::default()),
    ];

    let instance = Instance::builder(bars, source, timeframe, symbol)
        .build().await?
        .run_to_end(symbol, timeframe).await?;

    // 讀取輸出
    for (_id, graph) in instance.chart().series_graphs() {
        if let Some(plot) = graph.as_plot() {
            println!("Plot: {}", plot.title.as_deref().unwrap_or("unnamed"));
            for i in 0..plot.series.len() {
                println!("  bar {}: {:?}", i, plot.series[i]);
            }
        }
    }

    Ok(())
}
```

## 下一步

- [語言基礎](/zh-HK/guide/language-basics) — 學習 Navi 語法
