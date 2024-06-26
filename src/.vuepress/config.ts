import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",

  lang: "zh-CN",
  title: "文档管理",
  description: "开发文档管理记录",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
