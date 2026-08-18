import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { apiSidebar } from "./api-sidebar";

const api = apiSidebar("/zh-CN", "zh-CN");

export const zhCN: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string;
  lang: string;
} = {
  label: "简体中文",
  lang: "zh-CN",
  description: "Navi 语言文档与试玩区",
  themeConfig: {
    nav: [
      { text: "Docs", link: "/zh-CN/docs/" },
      { text: "Skill", link: "/zh-CN/skill" },
      { text: "API", link: "/zh-CN/api/stdlib/" },
      { text: "Playground", link: "/zh-CN/playground" },
    ],
    sidebar: {
      "/zh-CN/api/": api,
      // NOTE: 临时的 Navi Stream 文档 —— 不再需要时删除此块以及
      // `website/zh-CN/navi-stream/` 目录。
      "/zh-CN/navi-stream/": [
        {
          text: "Navi Stream",
          items: [
            { text: "介绍", link: "/zh-CN/navi-stream/" },
            { text: "快速开始", link: "/zh-CN/navi-stream/getting-started" },
            {
              text: "语法",
              link: "/zh-CN/navi-stream/syntax/",
              collapsed: false,
              items: [
                { text: "标识符", link: "/zh-CN/navi-stream/syntax/identifier" },
                { text: "字面量", link: "/zh-CN/navi-stream/syntax/literal" },
                { text: "运算符", link: "/zh-CN/navi-stream/syntax/operator" },
                { text: "变量", link: "/zh-CN/navi-stream/syntax/variable" },
                { text: "注释", link: "/zh-CN/navi-stream/syntax/comment" },
                {
                  text: "Object",
                  link: "/zh-CN/navi-stream/syntax/object/",
                  collapsed: false,
                  items: [
                    { text: "数字", link: "/zh-CN/navi-stream/syntax/object/number" },
                    { text: "布尔值", link: "/zh-CN/navi-stream/syntax/object/bool" },
                    { text: "日期时间", link: "/zh-CN/navi-stream/syntax/object/time" },
                    { text: "字符串", link: "/zh-CN/navi-stream/syntax/object/string" },
                    { text: "数组", link: "/zh-CN/navi-stream/syntax/object/array" },
                    { text: "集合", link: "/zh-CN/navi-stream/syntax/object/set" },
                    { text: "结构体", link: "/zh-CN/navi-stream/syntax/object/struct" },
                    { text: "颜色", link: "/zh-CN/navi-stream/syntax/object/color" },
                    { text: "OpenTrade", link: "/zh-CN/navi-stream/syntax/object/opentrade" },
                    { text: "ClosedTrade", link: "/zh-CN/navi-stream/syntax/object/closetrade" },
                    { text: "迭代器", link: "/zh-CN/navi-stream/syntax/object/iterator" },
                    { text: "范围", link: "/zh-CN/navi-stream/syntax/object/range" },
                  ],
                },
                {
                  text: "Statement",
                  link: "/zh-CN/navi-stream/syntax/statement/",
                  collapsed: false,
                  items: [
                    { text: "赋值", link: "/zh-CN/navi-stream/syntax/statement/assign" },
                    { text: "Break", link: "/zh-CN/navi-stream/syntax/statement/break" },
                    { text: "Continue", link: "/zh-CN/navi-stream/syntax/statement/continue" },
                    { text: "For", link: "/zh-CN/navi-stream/syntax/statement/for" },
                    { text: "Function", link: "/zh-CN/navi-stream/syntax/statement/function" },
                    { text: "If", link: "/zh-CN/navi-stream/syntax/statement/if" },
                    { text: "Meta", link: "/zh-CN/navi-stream/syntax/statement/meta" },
                    { text: "Param", link: "/zh-CN/navi-stream/syntax/statement/param" },
                    { text: "绘图", link: "/zh-CN/navi-stream/syntax/statement/plotting" },
                    { text: "Return", link: "/zh-CN/navi-stream/syntax/statement/return" },
                    { text: "Switch", link: "/zh-CN/navi-stream/syntax/statement/switch" },
                    { text: "Use", link: "/zh-CN/navi-stream/syntax/statement/use" },
                    { text: "While", link: "/zh-CN/navi-stream/syntax/statement/while" },
                  ],
                },
                { text: "I18n", link: "/zh-CN/navi-stream/syntax/i18n" },
              ],
            },
            {
              text: "标准库",
              link: "/zh-CN/navi-stream/stdlib/",
              collapsed: false,
              items: [
                { text: "math", link: "/zh-CN/navi-stream/stdlib/math" },
                { text: "ta", link: "/zh-CN/navi-stream/stdlib/ta" },
                { text: "quote", link: "/zh-CN/navi-stream/stdlib/quote" },
                { text: "barstate", link: "/zh-CN/navi-stream/stdlib/barstate" },
                { text: "strategy", link: "/zh-CN/navi-stream/stdlib/strategy" },
              ],
            },
          ],
        },
      ],
      "/zh-CN/docs/": [
        {
          text: "快速入门",
          items: [
            { text: "简介", link: "/zh-CN/docs/" },
            { text: "安装", link: "/zh-CN/docs/install" },
            { text: "快速开始", link: "/zh-CN/docs/quick-start" },
            { text: "AI 助手", link: "/zh-CN/docs/ai" },
          ],
        },
        {
          text: "语言",
          items: [
            { text: "语言基础", link: "/zh-CN/docs/language-basics" },
            { text: "历史引用", link: "/zh-CN/docs/history-reference" },
            { text: "集合类型", link: "/zh-CN/docs/collections" },
            { text: "变量与限定符", link: "/zh-CN/docs/types-and-variables" },
            { text: "控制结构", link: "/zh-CN/docs/control-structures" },
            { text: "函数与方法", link: "/zh-CN/docs/functions-and-methods" },
            { text: "自定义类型与枚举", link: "/zh-CN/docs/custom-types" },
            {
              text: "跨标的与多时间框架",
              link: "/zh-CN/docs/request-security",
            },
            { text: "文档注解", link: "/zh-CN/docs/doc-annotations" },
            { text: "示例", link: "/zh-CN/docs/examples" },
          ],
        },
      ],
    },
    outline: { label: "本页目录", level: [2, 3] },
    lastUpdated: { text: "最后更新" },
    docFooter: { prev: "上一页", next: "下一页" },
    darkModeSwitchLabel: "深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    langMenuLabel: "语言",
    footer: {
      message: "基于 MIT 许可证发布。",
      copyright: "版权所有 2024-present Navi 贡献者",
    },
  },
};
