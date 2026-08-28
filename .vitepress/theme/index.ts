import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { h } from "vue";
import { createI18n } from "vue-i18n";
import DocActions from "./components/DocActions.vue";
import LatestVersion from "./components/LatestVersion.vue";
import OverloadTabs from "./components/OverloadTabs.vue";
import QuickStartSmaChart from "./components/QuickStartSmaChart.vue";
import "./styles/playground.css";
import "./styles/design.css";
import en from "../i18n/en";
import zhCN from "../i18n/zh-CN";
import zhHK from "../i18n/zh-HK";

/** The locales `messages` below defines; anything else falls back to English. */
const SUPPORTED_LOCALES = ["en", "zh-CN", "zh-HK"] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

function isSupportedLocale(lang: string): lang is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(lang);
}

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    "zh-CN": zhCN,
    "zh-HK": zhHK,
  },
});

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "home-hero-info-after": () => h(LatestVersion),
    });
  },
  enhanceApp({ app, router }) {
    app.use(i18n);
    app.component("DocActions", DocActions);
    app.component("OverloadTabs", OverloadTabs);
    app.component("QuickStartSmaChart", QuickStartSmaChart);

    if (typeof window !== "undefined") {
      // Sync vue-i18n locale with VitePress lang on route change.
      router.onAfterRouteChanged = () => {
        const lang = document.documentElement.lang;
        i18n.global.locale.value = isSupportedLocale(lang) ? lang : "en";
      };
    }
  },
} satisfies Theme;
