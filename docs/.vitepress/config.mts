import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',
  base: '/PraxisNexus/',

  title: "知行小栈",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: '主页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/java/': [
        {
          text: 'Java',
          items: [
            {
              text: '一、快速入门',
              collapsed: true,
              items: [
                {
                  text: '1.1 发展历史',
                  link: '/java/001_quick_start/history',
                  collapsed: true,
                },
                {
                  text: '1.2 搭建开发环境',
                  link: '/java/001_quick_start/build_dev_env',
                  collapsed: true,
                },
                {
                  text: '1. 搭建开发环境',
                  link: '/java/000_misc/Java 线程必须了解的哪些事儿',
                  collapsed: true,
                }
              ]

            },
            {
              text: 'Java进阶',
              link: '/java/java-advanced',
              collapsed: true
            }
          ]
        }
      ],

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
