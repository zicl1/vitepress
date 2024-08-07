import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Zichen 文档",
  description: "A VitePress Site",
  base: '/vitepress/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',

    nav: [
      { text: '首页', link: '/' },
      { text: '软件', link: '/markdown-examples' },
      { text: '编程', link: '/api-examples' },
      { 
        text: '相关链接', 
        items: [
          { text: 'vitepress', link: 'https://vitepress.dev/' },
          { text: '关于我', link: 'https://zicl1.github.io/about' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://github.com/zicl1/vitepress' },
      { icon: 'twitter', link: 'https://github.com/zicl1/vitepress' },
      { icon: 'github', link: 'https://github.com/zicl1/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Zichen'
    }
  }
})
