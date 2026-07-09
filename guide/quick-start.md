# Quick Start

## Prerequisites

- **Rust** (stable) with Cargo

## Building from Source

Clone the repository and build:

```bash
git clone https://github.com/longbridge/navi.git
cd navi
cargo build
```

## Running Tests

```bash
# All tests
cargo test --all-features

# Specific crates
cargo test -p navi-parser
cargo test -p navi-visitor
cargo test -p navi-vm
cargo test -p navi-lsp
```

## Your First Script

Add `navi-vm` to your `Cargo.toml`:

```toml
[dependencies]
navi-vm = { path = "crates/vm" }
```

Then write a simple program:

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

    // Read outputs
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

## What's Next

- [Language Basics](/guide/language-basics) — learn Navi syntax
- [Integration](/guide/integration/integration) — detailed guide on the `navi-vm` library
