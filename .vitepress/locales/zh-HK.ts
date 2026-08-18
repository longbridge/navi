import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("/zh-HK", "zh-HK");

export const zhHK: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  lang: string;
} = {
  label: "繁體中文",
  lang: "zh-HK",
  description: "Navi 語言文檔與試玩區",
  themeConfig: {
    nav: [
      { text: "Docs", link: "/zh-HK/docs/" },
      { text: "Skill", link: "/zh-HK/skill" },
      { text: "API", link: "/zh-HK/api/stdlib/" },
      { text: "Playground", link: "/zh-HK/playground" },
    ],
    sidebar: {
      "/zh-HK/api/": api,
      // NOTE: 臨時的 Navi Stream 文檔 —— 不再需要時刪除此塊以及
      // `website/zh-HK/navi-stream/` 目錄。
      "/zh-HK/navi-stream/": [
        {
          text: "Navi Stream",
          items: [
            { text: "介紹", link: "/zh-HK/navi-stream/" },
            { text: "快速開始", link: "/zh-HK/navi-stream/getting-started" },
            {
              text: "語法",
              link: "/zh-HK/navi-stream/syntax/",
              collapsed: false,
              items: [
                { text: "標識符", link: "/zh-HK/navi-stream/syntax/identifier" },
                { text: "字面量", link: "/zh-HK/navi-stream/syntax/literal" },
                { text: "運算符", link: "/zh-HK/navi-stream/syntax/operator" },
                { text: "變量", link: "/zh-HK/navi-stream/syntax/variable" },
                { text: "註釋", link: "/zh-HK/navi-stream/syntax/comment" },
                {
                  text: "Object",
                  link: "/zh-HK/navi-stream/syntax/object/",
                  collapsed: false,
                  items: [
                    { text: "數字", link: "/zh-HK/navi-stream/syntax/object/number" },
                    { text: "布爾值", link: "/zh-HK/navi-stream/syntax/object/bool" },
                    { text: "日期時間", link: "/zh-HK/navi-stream/syntax/object/time" },
                    { text: "字符串", link: "/zh-HK/navi-stream/syntax/object/string" },
                    { text: "數組", link: "/zh-HK/navi-stream/syntax/object/array" },
                    { text: "集合", link: "/zh-HK/navi-stream/syntax/object/set" },
                    { text: "結構體", link: "/zh-HK/navi-stream/syntax/object/struct" },
                    { text: "顏色", link: "/zh-HK/navi-stream/syntax/object/color" },
                    { text: "OpenTrade", link: "/zh-HK/navi-stream/syntax/object/opentrade" },
                    { text: "ClosedTrade", link: "/zh-HK/navi-stream/syntax/object/closetrade" },
                    { text: "迭代器", link: "/zh-HK/navi-stream/syntax/object/iterator" },
                    { text: "範圍", link: "/zh-HK/navi-stream/syntax/object/range" },
                  ],
                },
                {
                  text: "Statement",
                  link: "/zh-HK/navi-stream/syntax/statement/",
                  collapsed: false,
                  items: [
                    { text: "賦值", link: "/zh-HK/navi-stream/syntax/statement/assign" },
                    { text: "Break", link: "/zh-HK/navi-stream/syntax/statement/break" },
                    { text: "Continue", link: "/zh-HK/navi-stream/syntax/statement/continue" },
                    { text: "For", link: "/zh-HK/navi-stream/syntax/statement/for" },
                    { text: "Function", link: "/zh-HK/navi-stream/syntax/statement/function" },
                    { text: "If", link: "/zh-HK/navi-stream/syntax/statement/if" },
                    { text: "Meta", link: "/zh-HK/navi-stream/syntax/statement/meta" },
                    { text: "Param", link: "/zh-HK/navi-stream/syntax/statement/param" },
                    { text: "繪圖", link: "/zh-HK/navi-stream/syntax/statement/plotting" },
                    { text: "Return", link: "/zh-HK/navi-stream/syntax/statement/return" },
                    { text: "Switch", link: "/zh-HK/navi-stream/syntax/statement/switch" },
                    { text: "Use", link: "/zh-HK/navi-stream/syntax/statement/use" },
                    { text: "While", link: "/zh-HK/navi-stream/syntax/statement/while" },
                  ],
                },
                { text: "I18n", link: "/zh-HK/navi-stream/syntax/i18n" },
              ],
            },
            {
              text: "標準庫",
              link: "/zh-HK/navi-stream/stdlib/",
              collapsed: false,
              items: [
                { text: "math", link: "/zh-HK/navi-stream/stdlib/math" },
                { text: "ta", link: "/zh-HK/navi-stream/stdlib/ta" },
                { text: "quote", link: "/zh-HK/navi-stream/stdlib/quote" },
                { text: "barstate", link: "/zh-HK/navi-stream/stdlib/barstate" },
                { text: "strategy", link: "/zh-HK/navi-stream/stdlib/strategy" },
              ],
            },
          ],
        },
      ],
      "/zh-HK/docs/": [
        {
          text: "快速入門",
          items: [
            { text: "簡介", link: "/zh-HK/docs/" },
            { text: "安裝", link: "/zh-HK/docs/install" },
            { text: "快速開始", link: "/zh-HK/docs/quick-start" },
            { text: "AI 助手", link: "/zh-HK/docs/ai" },
          ],
        },
        {
          text: "語言",
          items: [
            { text: "語言基礎", link: "/zh-HK/docs/language-basics" },
            { text: "歷史引用", link: "/zh-HK/docs/history-reference" },
            { text: "集合類型", link: "/zh-HK/docs/collections" },
            { text: "變量與限定符", link: "/zh-HK/docs/types-and-variables" },
            { text: "控制結構", link: "/zh-HK/docs/control-structures" },
            { text: "函數與方法", link: "/zh-HK/docs/functions-and-methods" },
            { text: "自定義類型與枚舉", link: "/zh-HK/docs/custom-types" },
            {
              text: "跨標的與多時間框架",
              link: "/zh-HK/docs/request-security",
            },
            { text: "文檔注解", link: "/zh-HK/docs/doc-annotations" },
            { text: "示例", link: "/zh-HK/docs/examples" },
          ],
        },
      ],
    },
    outline: { label: "本頁目錄", level: [2, 3] },
    lastUpdated: { text: "最後更新" },
    docFooter: { prev: "上一頁", next: "下一頁" },
    darkModeSwitchLabel: "深色模式",
    sidebarMenuLabel: "選單",
    returnToTopLabel: "返回頂部",
    langMenuLabel: "語言",
    footer: {
      message: "基於 MIT 許可證發佈。",
      copyright: "版權所有 2024-present Navi 貢獻者",
    },
  },
};
