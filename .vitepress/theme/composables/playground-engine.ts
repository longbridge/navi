/**
 * PlaygroundEngine wraps the Chart and Analyzer WASM instances together,
 * providing a single object to pass between composables and components.
 *
 * StaticCandlestickAdapter implements the JsDataProvider.candlesticks()
 * interface expected by the WASM Chart constructor, backed by StaticDataProvider.
 */

import type { Chart } from '../../../wasm-pkg/chart/navi_chart_wasm'
import type { Analyzer } from '../../../wasm-pkg/lsp/navi_lsp_wasm'

export type { Chart, Analyzer }

/** Pairs the chart renderer with the language analyzer. */
export class PlaygroundEngine {
  constructor(
    public readonly chart: Chart,
    public readonly analyzer: Analyzer,
  ) {}
}

/**
 * Static K-line store.
 *
 * `time` is a plain JS number (not BigInt). serde_wasm_bindgen deserializes
 * i64 via `as_f64()` which works for all timestamps in the safe integer range.
 */
export class StaticDataProvider {
  private store = new Map<string, any[]>()

  register(symbol: string, tf: string, bars: any[]) {
    this.store.set(`${symbol}:${tf}`, bars)
  }

  barsFor(symbol: string, tf: string, fromTime = 0): any[] {
    return (this.store.get(`${symbol}:${tf}`) ?? []).filter(
      (b: any) => (b.time ?? 0) >= fromTime,
    )
  }
}

/** How far back the script reads before its values are right. Advice only. */
type RequiredHistory =
  | { type: 'exact'; bars: number }
  | { type: 'atLeast'; bars: number }
  | { type: 'unknown' }

/**
 * Which bars a stream should load — mirrors the engine's `HistoryRange`.
 *
 * The two shapes that leave room for extra history carry the depth as
 * `warmup`: `covering`, which may reach back past its anchor, and `latest`,
 * which sets no cap. The other two are bounds with nothing to spend it on.
 */
type HistoryRange =
  | { type: 'startingAt'; time: number }
  | { type: 'covering'; time: number; warmup: RequiredHistory }
  | { type: 'recent'; bars: number }
  | { type: 'latest'; warmup: RequiredHistory }

/**
 * Implements the JsDataProvider interface expected by the WASM Chart
 * constructor, backed by StaticDataProvider.
 *
 * `candlesticks` yields CandlestickItem values (serde internally tagged,
 * camelCase): `{ type: 'bar', ... }` for each bar, then `{ type: 'historyEnd' }`.
 * It honours `range`: `startingAt` never reaches back past its time, while
 * `covering` may — that stream is a secondary series that needs warm-up, and
 * this store holds it all anyway.
 *
 * `historyBarsBefore` returns a plain array of Candlestick objects with
 * `time < beforeTime`, newest-of-old last, for incremental history extension.
 */
export class StaticCandlestickAdapter {
  constructor(private readonly data: StaticDataProvider) {}

  async *candlesticks(symbol: string, tf: string, range: HistoryRange) {
    // `range` says which bars; the `warmup` two of its shapes carry is advice
    // this static store has nothing extra to offer against.
    const allBars = this.data.barsFor(symbol, tf, 0)
    const bars =
      range.type === 'startingAt'
        ? allBars.filter((b: any) => (b.time ?? 0) >= range.time)
        : range.type === 'recent' && range.bars > 0
          ? allBars.slice(-range.bars)
          : // 'covering' and 'latest': everything held. Reaching back is
            // invited for 'covering', and it costs nothing here.
            allBars
    for (const b of bars) {
      yield {
        type: 'bar',
        tradeSession: 'regular',
        ask: NaN,
        bid: NaN,
        ...b,
      }
    }
    yield { type: 'historyEnd' }
  }

  async historyBarsBefore(
    symbol: string,
    tf: string,
    beforeTime: number,
    count: number,
  ): Promise<object[]> {
    const allBars = this.data.barsFor(symbol, tf, 0)
    const filtered = allBars.filter((b: any) => (b.time ?? 0) < beforeTime)
    const slice = filtered.slice(-count)
    return slice.map((b: any) => ({
      tradeSession: 'regular',
      ask: NaN,
      bid: NaN,
      turnover: 0,
      turnoverRate: NaN,
      ...b,
    }))
  }
}
