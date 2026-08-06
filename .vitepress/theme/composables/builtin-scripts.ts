/** Built-in example scripts bundled with the app (read-only). */

// Vite glob import: eagerly load all .nv files as raw text
const indicatorModules = import.meta.glob('/example/indicators/*.nv', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const strategyModules = import.meta.glob('/example/strategies/*.nv', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

const chartTestModules = import.meta.glob('/example/chart_tests/**/*.nv', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

/** A localized string keyed by language (e.g. `default`, `zh-CN`, `zh-HK`). */
export type LocaleMap = Record<string, string>

export interface BuiltinScript {
  id: string
  name: string
  /** Default-locale title — fallback for display, and the sort/search key. */
  title: string
  /** Full locale map parsed from `@locale { ... }`, or null for a plain string. */
  titleLocales: LocaleMap | null
  shortTitle: string | null
  shortTitleLocales: LocaleMap | null
  source: string
  category: 'indicator' | 'strategy' | 'chart-test'
  /** Sub-directory group path, e.g. "seriesgraph/plot". Only set for chart-test category. */
  group?: string
}

/**
 * Pick the localized string for the current UI language, falling back to the
 * map's `default` entry, then to `fallback`.
 */
export function localize(locales: LocaleMap | null, fallback: string, lang: string): string {
  if (!locales) return fallback
  return locales[lang] ?? locales.default ?? fallback
}

function nameFromPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.nv$/, '')
}

/**
 * Extract the group from a chart_tests path, e.g.:
 *   /example/chart_tests/seriesgraph/plot/style_line.nv → "seriesgraph/plot"
 */
function groupFromChartTestPath(path: string): string {
  // Strip prefix up to and including "chart_tests/"
  const match = path.match(/chart_tests\/(.+)\/[^/]+\.nv$/)
  return match ? match[1] : ''
}

/** Unescape a Navi string literal body (`\"` → `"`, `\\` → `\`, etc.). */
function unescapeStr(s: string): string {
  return s.replace(/\\(.)/g, '$1')
}

/**
 * Extract the argument text of the first indicator/strategy/library call.
 * Scans with paren-balance while respecting string literals, so a title
 * containing `)` does not truncate the match. Returns null if no call found.
 */
function extractFirstCallArgs(source: string): string | null {
  const m = source.match(/(?:^|[^A-Za-z0-9_$])(?:indicator|strategy|library)\s*\(/)
  if (!m) return null
  const open = m.index! + m[0].length - 1 // index of the '('
  let depth = 0
  let inStr = false
  for (let i = open; i < source.length; i++) {
    const c = source[i]
    if (inStr) {
      if (c === '\\') i++
      else if (c === '"') inStr = false
      continue
    }
    if (c === '"') inStr = true
    else if (c === '(') depth++
    else if (c === ')') {
      depth--
      if (depth === 0) return source.slice(open + 1, i)
    }
  }
  return null
}

/**
 * Split a call's argument text into top-level segments, respecting `()[]{}`
 * nesting and string literals (so commas inside `@locale { ... }` don't split).
 */
function splitArgs(args: string): string[] {
  const segs: string[] = []
  let depth = 0
  let inStr = false
  let start = 0
  for (let i = 0; i < args.length; i++) {
    const c = args[i]
    if (inStr) {
      if (c === '\\') i++
      else if (c === '"') inStr = false
      continue
    }
    if (c === '"') inStr = true
    else if (c === '(' || c === '[' || c === '{') depth++
    else if (c === ')' || c === ']' || c === '}') depth--
    else if (c === ',' && depth === 0) {
      segs.push(args.slice(start, i))
      start = i + 1
    }
  }
  segs.push(args.slice(start))
  return segs.map((s) => s.trim()).filter((s) => s.length > 0)
}

/**
 * Turn an argument value into a locale map. Handles a plain string literal
 * (`"Foo"` → `{ default: "Foo" }`) and a `@locale { default: "...", "zh-CN": "..." }`
 * block. Returns null if the value is neither.
 */
function valueToLocaleMap(value: string): LocaleMap | null {
  const v = value.trim()
  if (v.startsWith('@locale')) {
    const brace = v.match(/@locale\s*\{([\s\S]*)\}/)
    if (!brace) return null
    const map: LocaleMap = {}
    // key: "value" pairs; key is a bare ident (default) or a "quoted" tag.
    const re = /(?:([A-Za-z_]\w*)|"((?:[^"\\]|\\.)*)")\s*:\s*"((?:[^"\\]|\\.)*)"/g
    let mm: RegExpExecArray | null
    while ((mm = re.exec(brace[1])) !== null) {
      const key = mm[1] ?? unescapeStr(mm[2])
      map[key] = unescapeStr(mm[3])
    }
    return Object.keys(map).length > 0 ? map : null
  }
  const s = v.match(/^"((?:[^"\\]|\\.)*)"$/)
  return s ? { default: unescapeStr(s[1]) } : null
}

/**
 * Parse title and short_title (each as a locale map) from the first
 * indicator/strategy/library call in a Navi source. Supports named args
 * (`title: ...`, `short_title: ...`), positional args, `@locale { ... }`
 * values, and mixed/multi-line forms.
 */
function parseTitleAndShortTitle(source: string): {
  title: LocaleMap | null
  shortTitle: LocaleMap | null
} {
  const args = extractFirstCallArgs(source)
  if (args === null) return { title: null, shortTitle: null }

  let title: LocaleMap | null = null
  let shortTitle: LocaleMap | null = null
  const positional: string[] = []

  for (const seg of splitArgs(args)) {
    // Named argument? `ident: value` — but not the `@locale` block itself.
    const named = seg.match(/^([A-Za-z_]\w*)\s*:\s*([\s\S]*)$/)
    if (named) {
      if (named[1] === 'title') title = valueToLocaleMap(named[2])
      else if (named[1] === 'short_title') shortTitle = valueToLocaleMap(named[2])
      // other named args (overlay, format, ...) are ignored
    } else {
      positional.push(seg)
    }
  }

  // Positional fallbacks: 1st positional is title, 2nd is short_title.
  if (title === null && positional[0]) title = valueToLocaleMap(positional[0])
  if (shortTitle === null && positional[1]) shortTitle = valueToLocaleMap(positional[1])

  return { title, shortTitle }
}

/**
 * Resolve parsed locale maps into the four display fields. `fallback` (the file
 * name) is used when no title could be parsed. short_title is dropped when it
 * equals the title, to avoid showing it twice.
 */
function resolveTitleFields(
  source: string,
  fallback: string,
): Pick<BuiltinScript, 'title' | 'titleLocales' | 'shortTitle' | 'shortTitleLocales'> {
  const { title, shortTitle } = parseTitleAndShortTitle(source)
  const titleDefault = title?.default ?? fallback
  const shortDefault = shortTitle?.default ?? null
  const dropShort = shortDefault === null || shortDefault === titleDefault
  return {
    title: titleDefault,
    titleLocales: title,
    shortTitle: dropShort ? null : shortDefault,
    shortTitleLocales: dropShort ? null : shortTitle,
  }
}

function buildScripts(
  modules: Record<string, string>,
  category: 'indicator' | 'strategy',
): BuiltinScript[] {
  return Object.entries(modules)
    .map(([path, source]) => {
      const name = nameFromPath(path)
      return {
        id: `builtin:${category}:${name}`,
        name,
        ...resolveTitleFields(source, name),
        source,
        category,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

function buildChartTestScripts(modules: Record<string, string>): BuiltinScript[] {
  return Object.entries(modules)
    .map(([path, source]) => {
      const name = nameFromPath(path)
      const group = groupFromChartTestPath(path)
      // Use "group/name" as unique id to avoid collisions across sub-directories
      const uniqueName = group ? `${group}/${name}` : name
      return {
        id: `builtin:chart-test:${uniqueName}`,
        name: uniqueName,
        ...resolveTitleFields(source, uniqueName),
        source,
        category: 'chart-test' as const,
        group,
      }
    })
    .sort((a, b) => {
      const gCmp = (a.group ?? '').localeCompare(b.group ?? '')
      return gCmp !== 0 ? gCmp : a.title.localeCompare(b.title)
    })
}

const chartTestsEnabled = typeof window !== 'undefined' &&
  new URLSearchParams(window.location.search).has('chart_tests')

export const builtinIndicators: BuiltinScript[] = buildScripts(indicatorModules, 'indicator')
export const builtinStrategies: BuiltinScript[] = buildScripts(strategyModules, 'strategy')
export const builtinChartTests: BuiltinScript[] = chartTestsEnabled
  ? buildChartTestScripts(chartTestModules)
  : []
export const builtinScripts: BuiltinScript[] = [...builtinIndicators, ...builtinStrategies, ...builtinChartTests]

export function isBuiltinId(id: string | null): boolean {
  return id != null && id.startsWith('builtin:')
}

export function getBuiltinScript(id: string): BuiltinScript | undefined {
  return builtinScripts.find((s) => s.id === id)
}
