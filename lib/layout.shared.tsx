import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

const labels: Record<string, Record<string, string>> = {
  en: {
    docs: "Docs",
    skill: "Skill",
    playground: "Playground",
    api: "API Reference",
  },
  "zh-CN": {
    docs: "文档",
    skill: "技能",
    playground: "演练场",
    api: "API 参考",
  },
  "zh-HK": {
    docs: "文件",
    skill: "技能",
    playground: "練習場",
    api: "API 參考",
  },
};

export function baseOptions(locale: string): BaseLayoutProps {
  const prefix = locale === "en" ? "" : `/${locale}`;
  const text = labels[locale] ?? labels.en;
  return {
    nav: {
      title: (
        <>
          <img
            src="/longbridge-developers-light.png"
            alt="Longbridge Developers"
            width={119}
            height={26}
            className="h-[26px] w-auto dark:hidden"
          />
          <img
            src="/longbridge-developers-dark.png"
            alt="Longbridge Developers"
            width={119}
            height={26}
            className="hidden h-[26px] w-auto dark:block"
          />
        </>
      ),
      url: `${prefix}/`,
    },
    links: [
      { text: "Navi", url: `${prefix}/` },
      { text: text.docs, url: `${prefix}/guide/` },
      { text: text.api, url: `${prefix}/api/` },
      { text: text.skill, url: `${prefix}/skill` },
      { text: text.playground, url: `${prefix}/playground` },
    ],
    githubUrl: "https://github.com/longbridge/navi",
  };
}
