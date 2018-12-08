module.exports = {
  // 默认标题，会被地区标题覆盖
  title: "紫妹语言概念",
  // 默认描述，会被地区描述覆盖
  description: "一颗满怀期待的种子",
  base: "/",
  dest: "build",
  port: "8080",
  serviceWorker: "true",
  locales: {
    "/": {
      lang: "zh"
    }
  },
  markdown: {
    // Vuepress已经内置了markdown-it及一些模块
    // 详见Vuepress的package。json
    // md为markdown-it的实例对象
    // 添加数学公式支持
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  // 公共头部CSS
  head: [
    // 添加数学公式样式
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.bootcss.com/KaTeX/0.6.0/katex.min.css"
      }
    ],
    // 标签上显示的ico标志
    [
      "link",
      {
        rel: "icon",
        href: "favicon.ico"
      }
    ]
  ],
  themeConfig: {
    sidebarDepth: 2,
    sidebar: "auto",
    lastUpdated: "最后更新于",
    nav: [
      {
        text: "主页",
        link: "/"
      },
      {
        text: "紫妹概念",
        link: "/basic/"
      },
      // {
      //   text: "中文Ecmascript",
      //   link: "/Ecmascript/"
      // },
      // {
      //   text: "中文Python",
      //   link: "/Python/"
      // },
      // {
      //   text: "中文C#",
      //   link: "/CSharp/"
      // },
      // {
      //   text: "中文C/C++",
      //   link: "/CPlusPlus/"
      // },
      {
        text: "Github",
        link: "https://github.com/program-in-chinese/zimei"
      },
      {
        text: "关于",
        link: "/about"
      }
    ],
    sidebar: {
      "/": [
        {
          title: "紫妹概念",
          collapsable: false,
          children: ["/basic/"]
        }
        // {
        //   title: "中文Ecmascript",
        //   collapsable: false,
        //   children: ["/Ecmascript/"]
        // },

        // {
        //   title: "中文Python",
        //   collapsable: false,
        //   children: ["/Python/"]
        // },
        // {
        //   title: "中文C#",
        //   collapsable: false,
        //   children: ["/CSharp/"]
        // },
        // {
        //   title: "中文C/C++",
        //   collapsable: false,
        //   children: ["/CPlusPlus/"]
        // }
      ]
    }
  }
};
