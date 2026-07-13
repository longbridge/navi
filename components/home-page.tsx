import Link from "next/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { FlickeringGrid } from "@/components/flickering-grid";

// Category labels are intentionally shared (English) across locales,
// matching the DESIGN.md badge convention (e.g. "CLI", "AI SKILL").
const featureLabels = [
  "CORE",
  "RUNTIME",
  "REALTIME",
  "STDLIB",
  "COMPAT",
  "TOOLING",
] as const;

const copy = {
  en: {
    badge: "Navi · Trading DSL",
    titleHead: "Indicators. Strategies. ",
    titleAccent: "Scripts.",
    description:
      "A scripting language for trading charts — clean syntax, strong typing, and a powerful standard library.",
    start: "Get Started",
    play: "Playground",
    features: [
      "Indicators & Strategies",
      "High Performance",
      "Streaming & Realtime",
      "Rich Standard Library",
      "Pine Script V6 Compatible",
      "Editor Support",
    ],
  },
  "zh-CN": {
    badge: "Navi · 交易脚本语言",
    titleHead: "指标、策略、",
    titleAccent: "脚本。",
    description:
      "面向交易图表的脚本语言——语法清晰、类型严谨，并配备强大的标准库。",
    start: "开始使用",
    play: "演练场",
    features: [
      "指标与策略",
      "高性能",
      "流式与实时",
      "丰富标准库",
      "兼容 Pine Script V6",
      "编辑器支持",
    ],
  },
  "zh-HK": {
    badge: "Navi · 交易腳本語言",
    titleHead: "指標、策略、",
    titleAccent: "腳本。",
    description:
      "面向交易圖表的腳本語言——語法清晰、類型嚴謹，並配備強大的標準庫。",
    start: "開始使用",
    play: "練習場",
    features: [
      "指標與策略",
      "高效能",
      "串流與即時",
      "豐富標準庫",
      "相容 Pine Script V6",
      "編輯器支援",
    ],
  },
} as const;

export function HomePage({ locale }: { locale: string }) {
  const text = copy[locale as keyof typeof copy] ?? copy.en;
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <HomeLayout {...baseOptions(locale)}>
      <main className="relative isolate flex flex-1 flex-col">
        {/* Hero content */}
        <section className="container mx-auto flex flex-col items-center px-4 py-20 text-center md:py-32">
          <span className="lb-badge-label mb-5">{text.badge}</span>
          <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            {text.titleHead}
            <span className="text-fd-primary">{text.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fd-muted-foreground">
            {text.description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link className="lb-btn-primary" href={`${prefix}/guide/`}>
              {text.start}
            </Link>
            <Link className="lb-btn-secondary" href={`${prefix}/playground`}>
              {text.play}
            </Link>
          </div>
        </section>

        {/* Feature cards (DESIGN.md §4 Card / Feature, §5 3-column grid) */}
        <section className="container mx-auto grid w-full max-w-6xl gap-8 px-4 pb-24 text-left sm:grid-cols-2 lg:grid-cols-3">
          {text.features.map((feature, i) => (
            <div
              className="rounded-2xl border border-fd-border bg-fd-card p-6 transition-all duration-200 hover:border-fd-primary/40 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              key={feature}
            >
              <span className="lb-badge-label mb-3.5">{featureLabels[i]}</span>
              <h3 className="text-lg font-semibold text-fd-card-foreground">
                {feature}
              </h3>
            </div>
          ))}
        </section>
      </main>
    </HomeLayout>
  );
}
