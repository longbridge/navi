import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("", "en");

export const en: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  lang: string;
} = {
  label: "English",
  lang: "en",
  themeConfig: {
    nav: [
      { text: "Docs", link: "/docs/" },
      { text: "Skill", link: "/skill" },
      { text: "API", link: "/api/stdlib/" },
      { text: "Playground", link: "/playground" },
    ],
    sidebar: {
      "/api/": api,
      // NOTE: temporary Navi Stream docs — remove this block and the
      // `website/navi-stream/` folder when it is no longer needed.
      "/navi-stream/": [
        {
          text: "Navi Stream",
          items: [
            { text: "Introduction", link: "/navi-stream/" },
            { text: "Getting Started", link: "/navi-stream/getting-started" },
            {
              text: "Syntax",
              link: "/navi-stream/syntax/",
              collapsed: false,
              items: [
                { text: "Identifier", link: "/navi-stream/syntax/identifier" },
                { text: "Literal", link: "/navi-stream/syntax/literal" },
                { text: "Operator", link: "/navi-stream/syntax/operator" },
                { text: "Variables", link: "/navi-stream/syntax/variable" },
                { text: "Comment", link: "/navi-stream/syntax/comment" },
                {
                  text: "Object",
                  link: "/navi-stream/syntax/object/",
                  collapsed: false,
                  items: [
                    { text: "Number", link: "/navi-stream/syntax/object/number" },
                    { text: "Bool", link: "/navi-stream/syntax/object/bool" },
                    { text: "DateTime", link: "/navi-stream/syntax/object/time" },
                    { text: "String", link: "/navi-stream/syntax/object/string" },
                    { text: "Array", link: "/navi-stream/syntax/object/array" },
                    { text: "Set", link: "/navi-stream/syntax/object/set" },
                    { text: "Struct", link: "/navi-stream/syntax/object/struct" },
                    { text: "Color", link: "/navi-stream/syntax/object/color" },
                    { text: "OpenTrade", link: "/navi-stream/syntax/object/opentrade" },
                    { text: "ClosedTrade", link: "/navi-stream/syntax/object/closetrade" },
                    { text: "Iterator", link: "/navi-stream/syntax/object/iterator" },
                    { text: "Range", link: "/navi-stream/syntax/object/range" },
                  ],
                },
                {
                  text: "Statement",
                  link: "/navi-stream/syntax/statement/",
                  collapsed: false,
                  items: [
                    { text: "Assign", link: "/navi-stream/syntax/statement/assign" },
                    { text: "Break", link: "/navi-stream/syntax/statement/break" },
                    { text: "Continue", link: "/navi-stream/syntax/statement/continue" },
                    { text: "For", link: "/navi-stream/syntax/statement/for" },
                    { text: "Function", link: "/navi-stream/syntax/statement/function" },
                    { text: "If", link: "/navi-stream/syntax/statement/if" },
                    { text: "Meta", link: "/navi-stream/syntax/statement/meta" },
                    { text: "Param", link: "/navi-stream/syntax/statement/param" },
                    { text: "Plotting", link: "/navi-stream/syntax/statement/plotting" },
                    { text: "Return", link: "/navi-stream/syntax/statement/return" },
                    { text: "Switch", link: "/navi-stream/syntax/statement/switch" },
                    { text: "Use", link: "/navi-stream/syntax/statement/use" },
                    { text: "While", link: "/navi-stream/syntax/statement/while" },
                  ],
                },
                { text: "I18n", link: "/navi-stream/syntax/i18n" },
              ],
            },
            {
              text: "StdLib",
              link: "/navi-stream/stdlib/",
              collapsed: false,
              items: [
                { text: "math", link: "/navi-stream/stdlib/math" },
                { text: "ta", link: "/navi-stream/stdlib/ta" },
                { text: "quote", link: "/navi-stream/stdlib/quote" },
                { text: "barstate", link: "/navi-stream/stdlib/barstate" },
                { text: "strategy", link: "/navi-stream/stdlib/strategy" },
              ],
            },
          ],
        },
      ],
      "/docs/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/docs/" },
            { text: "Install", link: "/docs/install" },
            { text: "Quick Start", link: "/docs/quick-start" },
            { text: "AI Assistant", link: "/docs/ai" },
          ],
        },
        {
          text: "Language",
          items: [
            { text: "Language Basics", link: "/docs/language-basics" },
            { text: "History Reference", link: "/docs/history-reference" },
            { text: "Collections", link: "/docs/collections" },
            {
              text: "Variables & Qualifiers",
              link: "/docs/types-and-variables",
            },
            { text: "Control Structures", link: "/docs/control-structures" },
            {
              text: "Functions & Methods",
              link: "/docs/functions-and-methods",
            },
            { text: "Custom Types & Enums", link: "/docs/custom-types" },
            {
              text: "Cross-Symbol & Multi-Timeframe",
              link: "/docs/request-security",
            },
            { text: "Doc Annotations", link: "/docs/doc-annotations" },
            { text: "Examples", link: "/docs/examples" },
          ],
        },
      ],
    },
    footer: {
      message:
        "Navi is created and maintained by <a href='https://longbridge.com'>Longbridge</a>.",
      copyright:
        "Copyright 2024-present <a href='https://longbridge.com'>Longbridge</a>",
    },
  },
};
