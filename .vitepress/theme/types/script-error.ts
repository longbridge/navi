/**
 * The `navi_types::Error` wire shape.
 *
 * Internally tagged: the discriminator is `type`, and a variant's payload sits
 * alongside it rather than nested under the variant name. `Compile` and
 * `Exception` wrap a struct, so that struct's own fields are flattened onto the
 * object.
 */

/** One compile diagnostic, as carried by `CompileErrors`. */
export interface CompileDiagnostic {
  severity: string
  message: string
  startLine: number
  startCharacter: number
  endLine: number
  endCharacter: number
  filePath?: string
}

/** One frame of a runtime backtrace, outermost first. */
export interface BacktraceFrame {
  funcName: string | null
  filePath: string
  line: number
  column: number
  endLine: number
  endColumn: number
  moduleKind: string
}

/** A source file referenced by a diagnostic or span. */
export interface SourceFile {
  source: string
}

/** The script failed to compile. */
export interface CompileError {
  type: 'compile'
  diagnostics: CompileDiagnostic[]
  sourceFiles: Record<string, SourceFile>
}

/** The script threw at runtime. */
export interface RuntimeException {
  type: 'exception'
  message: string
  spans: unknown[]
  backtrace: BacktraceFrame[]
  sourceFiles: Record<string, SourceFile>
}

/**
 * The remaining variants. The playground reads none of their payloads, so only
 * the discriminator is modelled — enough for `type` to narrow the union, and
 * `Error` is `#[non_exhaustive]` on the Rust side anyway.
 */
export interface OtherScriptError {
  type:
    | 'missingScriptType'
    | 'inputValueNotFound'
    | 'setInputValue'
    | 'unsupportedTimeFrame'
    | 'sessionNotAllowed'
    | 'invalidSymbol'
    | 'unknownMarket'
    | 'libraryScriptNotExecutable'
    | 'dataProvider'
    | 'confirmedBarUpdate'
    | 'jitCompilation'
}

export type ScriptError = CompileError | RuntimeException | OtherScriptError
