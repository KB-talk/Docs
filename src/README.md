---
home: true
icon: home
title: 主页
heroImage: https://github.com/KB-talk/picx-images-hosting/raw/master/img/logo.1p5rqa10pxsw.webp
bgImage: https://github.com/KB-talk/picx-images-hosting/raw/master/picture/D4.1xm4es90r1c0.webp
bgImageDark: https://github.com/KB-talk/picx-images-hosting/raw/master/picture/D1.1kz7vl8z6xb4.png
bgImageStyle:
  background-attachment: fixed
heroFullScreen: true
heroText: 资料库
tagline: 使用资料库中记录学习、实验的过程，进行沉淀。方便后续查找。
actions:
  - text: 博客
    icon: lightbulb
    link: https://kb-talk.github.io/
    type: primary

  - text: STM32
    link: ./STM32F103ZET6/1.开发环境搭建/1.开发板介绍.md

  - text: Linux
    link: ./RK3588/1.开发环境搭建/1.开发板介绍.md

highlights:
  # - header: 易于安装
  #   image: /assets/image/box.svg
  #   bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
  #   bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
  #   highlights:
  #     - title: 运行 <code>pnpm create vuepress-theme-hope hope-project</code> 以创建一个新的主题项目。
  #     - title: 在已有项目根目录下运行 <code>pnpm create vuepress-theme-hope add .</code> 以在项目中添加主题。

  - header: STM32F103ZET6开发指南
    description: 本教程使用120实验室制作的STM32F103ZET6核心板与底板。
    image: /image/STM32.png
    bgImage: 
    bgImageDark: 
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 开发环境搭建
        icon: clipboard-check
        details: 搭建STM32开发环境
        link: ./STM32F103ZET6/1.开发环境搭建/1.开发板介绍.md

      - title: 点亮LED
        icon: box-archive
        details: 使用GPIO点亮LED小灯
        link: ./STM32F103ZET6/2.LED/1.硬件设计.md

      - title: 蜂鸣器
        icon: bell
        details: GFM 风格的警告容器
        link: ./STM32F103ZET6/3.蜂鸣器/1.硬件设计.md

      - title: 串口通信
        icon: table-columns
        details: 使用选项卡对相似内容进行分组
        link: ./STM32F103ZET6/4.串口/1.硬件设计.md

      - title: 独立按键
        icon: code
        details: 使用选项卡对相似代码进行分组
        link: ./STM32F103ZET6/5.KEY/1.硬件设计.md

      - title: OLED显示
        icon: align-center
        details: Markdown 中对内容进行自定义对齐
        link: ./STM32F103ZET6/6.OLED/1.硬件设计.md

      - title: RTC时钟
        icon: code
        details: 为 Markdown 元素添加属性
        link: ./STM32F103ZET6/7.RTC时钟/1.硬件设计.md

      - title: EEPROM存储
        icon: superscript
        details: 轻松在 Markdown 中添加上下角标
        link: ./STM32F103ZET6/8.EEPROM/1.硬件设计.md

      - title: 触摸屏显示
        icon: quote-left
        details: 在内容中插入脚注
        link: ./STM32F103ZET6/9.TFTLCD/1.硬件设计.md

      - title: 2.4G通信
        icon: highlighter
        details: 标记并高亮内容
        link: ./STM32F103ZET6/10.NRF24L01/1.硬件设计.md

      # - title: 剧透
      #   icon: eraser
      #   details: 添加剧透标记支持
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html

      # - title: 任务列表
      #   icon: square-check
      #   details: 轻松插入任务列表
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html

      # - title: 图片语法
      #   icon: image
      #   details: 使用改进的语法指定图片大小与颜色模式
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html

      # - title: 组件支持
      #   icon: puzzle-piece
      #   details: 在 Markdown 中轻松插入组件
      #   link: https://theme-hope.vuejs.press/zh/guide/component/grammar.html

      # - title: 组件
      #   icon: puzzle-piece
      #   details: 开箱即用的常用组件
      #   link: https://theme-hope.vuejs.press/zh/guide/component/built-in.html

      # - title: Chart.js 支持
      #   icon: chart-simple
      #   details: 在 Markdown 中展示 Chart.js 图表
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html

      # - title: 流程图支持
      #   icon: route
      #   details: 在 Markdown 中直接写出流程图
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html

      # - title: Mermaid 支持
      #   icon: chart-pie
      #   details: 在 Markdown 中添加 Mermaid 图例
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html

      # - title: Plantuml 支持
      #   icon: diagram-project
      #   details: 在 Markdown 中添加 Plant UML 图表
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html

      # - title: Tex 支持
      #   icon: square-root-variable
      #   details: Markdown 现在也可以支持 Tex 语法以显示公式
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tex.html

      # - title: 导入文件支持
      #   icon: fab fa-markdown
      #   details: 将你的文档分段，并在 Markdown 中导入
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html

      # - title: 交互演示支持
      #   icon: code
      #   details: 你可以在 Markdown 中添加交互演示
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html

      # - title: Kotlin 交互演示支持
      #   icon: fab fa-kickstarter
      #   details: 响应式的 Kotlin 演示
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html

      # - title: Vue 交互演示支持
      #   icon: fab fa-vuejs
      #   details: 在交互演示中展示 Vue 组件
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html

      # - title: Sandpack 交互演示支持
      #   icon: code
      #   details: Sandpack 驱动的实时的编码环境
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html

      # - title: 代码案例支持
      #   icon: laptop-code
      #   details: 你可以很方便的插入代码案例
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html

      # - title: 幻灯片支持
      #   icon: person-chalkboard
      #   details: 通过 Reveal.js 在 Markdown 中插入幻灯片
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html

  - header: RK3588学习笔记
    description: 使用RK3588学习Linux驱动开发，对Linux驱动开发学习过程进行记录
    image: /image/Linux-Kernel.png
    bgImage: 
    bgImageDark: 
    highlights:
      - title: 开发环境搭建
        icon: circle-half-stroke
        details: 介绍了RK3588的开发环境和开发软件
        link: ./RK3588/1.开发环境搭建/1.开发板介绍.md

      - title: SDK
        icon: palette
        details: 介绍了RK3588的SDK以及SDK的一些基本操作
        link: ./RK3588/2.SDK/1.SDK介绍.md

      # - title: 更多
      #   icon: ellipsis
      #   details: RTL 布局，打印支持，全局按钮等
      #   link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

  # - header: Linux软件开发
  #   description: 对Linux软件开发学习过程进行记录
  #   image: /image/Linux-Kernel.png
  #   bgImage: 
  #   bgImageDark: 
  #   highlights:
  #     - title: 导航栏
  #       icon: window-maximize
  #       details: 完全可定制的导航栏以及改进的移动端外观
  #       link: https://theme-hope.vuejs.press/zh/guide/layout/navbar.html

  #     - title: 侧边栏
  #       icon: fas fa-window-maximize fa-rotate-270
  #       details: 从文档标题或文件结构中自动生成侧边栏
  #       link: https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html

  #     - title: 幻灯片页面
  #       icon: person-chalkboard
  #       details: 添加幻灯片页面以显示你喜欢的内容
  #       link: https://theme-hope.vuejs.press/zh/guide/layout/slides.html

  #     - title: 布局增强
  #       icon: object-group
  #       details: 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
  #       link: https://theme-hope.vuejs.press/zh/guide/layout/

  #     - title: 更多
  #       icon: ellipsis
  #       details: RTL 布局，打印支持，全局按钮等
  #       link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

  # - header: 新功能
  #   image: /assets/image/features.svg
  #   bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
  #   bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
  #   features:
  #     - title: 目录页面
  #       icon: network-wired
  #       details: 自动生成目录页以及开箱即用的目录组件
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/catalog.html

  #     - title: 浏览量与评论
  #       icon: comment-dots
  #       details: 配合 4 个评论服务开启阅读量统计与评论支持
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

  #     - title: 文章信息
  #       icon: circle-info
  #       details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

  #     - title: 文章加密
  #       icon: lock
  #       details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

  #     - title: 搜索支持
  #       icon: search
  #       details: 支持 docsearch 和基于客户端的搜索
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/search.html

  #     - title: 代码块
  #       icon: code
  #       details: 自定义代码块主题、行号、行高亮、复制按钮等
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/code-block.html

  #     - title: 图片预览
  #       icon: image
  #       details: 像相册一样允许你浏览、缩放并分享你的页面图片
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

  # - header: 博客
  #   description: 通过主题创建个人博客
  #   image: /assets/image/blog.svg
  #   bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
  #   bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
  #   highlights:
  #     - title: 博客功能
  #       icon: blog
  #       details: 通过文章的日期、标签和分类展示文章
  #       link: https://theme-hope.vuejs.press/zh/guide/blog/intro.html

  #     - title: 博客主页
  #       icon: home
  #       details: 全新博客主页
  #       link: https://theme-hope.vuejs.press/zh/guide/blog/home.html

  #     - title: 博主信息
  #       icon: home
  #       details: 自定义名称、头像、座右铭和社交媒体链接
  #       link: https://theme-hope.vuejs.press/zh/guide/blog/blogger.html

  #     - title: 时间线
  #       icon: home
  #       details: 在时间线中浏览和通读博文
  #       link: https://theme-hope.vuejs.press/zh/guide/blog/timeline.html

  # - header: 高级
  #   description: 增强站点与用户体验的高级功能
  #   image: /assets/image/advanced.svg
  #   bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
  #   bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
  #   highlights:
  #     - title: SEO 增强
  #       icon: dumbbell
  #       details: 将最终生成的网页针对搜索引擎进行优化。
  #       link: https://theme-hope.vuejs.press/zh/guide/advanced/seo.html

  #     - title: Sitemap
  #       icon: sitemap
  #       details: 自动为你的网站生成 Sitemap
  #       link: https://theme-hope.vuejs.press/zh/guide/advanced/sitemap.html

  #     - title: Feed 支持
  #       icon: rss
  #       details: 生成你的 Feed，并通知你的用户订阅它
  #       link: https://theme-hope.vuejs.press/zh/guide/advanced/feed.html

  #     - title: PWA 支持
  #       icon: mobile-screen
  #       details: 让你的网站更像一个 APP
  #       link: https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html

copyright: false
footer: 版权所有 © 2023-至今 张凯博
