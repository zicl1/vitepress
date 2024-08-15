import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Zichen 文档",
  description: "软件和开发文档",
  base: '/vitepress/',
  head: [  
    ['link', { rel: 'icon', href: '/vitepress/favicon.ico' }] // 指定 favicon 图标路径  
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { // 导航栏上显示的 Logo，位于站点标题前。可以接受一个路径字符串，或者一个对象来设置在浅色/深色模式下不同的 Logo。
      light: '/favicon.ico',
      dark: '/favicon.ico',
      alt: '/favicon.ico'
    },

    siteTitle: 'Zichen 文档', // 导航中的站点标题

    nav: [ // 页面顶部的导航菜单项的配置
      { text: '软件', link: '/software/nvm' },
      { text: '开发文档', link: '/dev-document/linux-adds-environment-variables' },
      {
        text: '1.1.0',
        items: [
          {
            text: '更新日志',
            items: [{ text: '1.1.0', link: 'https://github.com/zicl1/vitepress/blob/main/CHANGELOG.md' } ]
          },
          {
            text: '官网',
            items: [
              { text: 'VitePress', link: 'https://vitepress.dev/' },
              { text: 'Vite', link: 'https://vitejs.dev/' },
              { text: 'Node.js', link: 'https://nodejs.org/' }
            ]
          },
          {
            text: '关于我',
            items: [
              { text: 'About Me', link: 'https://zicl1.github.io/about', target: '_blank' },
              { text: 'Zichen 文档(VuePress)', link: 'https://zicl1.github.io/vuepress' },
              { text: 'Zichen 文档(Docsify)', link: 'https://zicl1.github.io/creating-documents-with-docsify' },
              { text: 'Zichen 文档(VitePress)', link: 'https://zicl1.github.io/vitepress' }
            ]
          }
        ]
      }
    ],

    sidebar: { // 根据页面路径显示不同的侧边栏
      // 当用户位于 `/` 目录时，会显示此侧边栏
      '/': [
        {
          text: '软件',
          collapsed: true, // 可折叠的侧边栏组，false 展开
          items: [
            { text: 'nvm', link: '/software/nvm' }
            ,{ text: '统信服务器', link: '/software/uniontech' }
          ]
        },
        {
          text: '开发文档',
          collapsed: true,
          items: [
            { text: 'Linux 添加环境变量', link: '/dev-document/linux-adds-environment-variables' }
            ,{ text: 'Linux 创建软链接', link: '/dev-document/creating-soft-links-in-linux' }
          ]
        },
        {
          text: '示例文档',
          collapsed: true,
          items: [
            { text: 'Markdown 示例', link: '/dev-document/markdown-examples' },
            { text: 'Runtime API 示例', link: '/dev-document/api-examples' },
            {
              text: '多级菜单示例',
              collapsed: true,
              items: [
                {
                  text: 'Level 3',
                  items: [
                    {
                      text: 'Level 4',
                      items: [
                        {
                          text: 'Level 5',
                          items: [
                            { text: '侧边栏', link: 'https://vitepress.dev/reference/default-theme-sidebar#the-basics' }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    outline: { // 右侧显示的本页文章目录
      label: '本页目录'
    },

    socialLinks: [ // 页面顶部的导航带有图标的社交帐户链接
      { icon: 'twitter', link: 'https://github.com/zicl1/vitepress' },
      { icon: 'github', link: 'https://github.com/zicl1/vitepress' },
      {
        icon: {
          svg: '<svg t="1723098832985" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4278" width="16" height="16"><path d="M262.4 64h499.2C892.8 64 960 131.2 960 262.4v499.2c0 131.2-67.2 198.4-198.4 198.4H262.4C131.2 960 64 892.8 64 761.6V262.4C64 131.2 131.2 64 262.4 64z" fill="#FF5CA1" p-id="4279"></path><path d="M707.2 454.4c3.2 0 16-3.2 16-3.2l6.4 48-12.8 3.2c0-6.4-9.6-44.8-9.6-48m25.6-6.4l6.4 51.2h19.2c-3.2-19.2-9.6-51.2-9.6-51.2h-16m-12.8 70.4s28.8-6.4 38.4-3.2c6.4 19.2 16 128 16 131.2-6.4 0-28.8 3.2-28.8 3.2-3.2-6.4-25.6-124.8-25.6-131.2m105.6-64h16c0 3.2 3.2 48 0 48h-12.8c0-3.2-3.2-44.8-3.2-48m22.4 0v51.2h19.2v-51.2c-6.4 0-12.8-3.2-19.2 0m-19.2 67.2s28.8-3.2 38.4 0c3.2 22.4 3.2 128 3.2 131.2h-28.8c0-6.4-12.8-128-12.8-131.2m-67.2-131.2c16 86.4 28.8 236.8 32 246.4h28.8c-12.8-92.8-22.4-243.2-22.4-246.4-3.2-6.4-38.4 0-38.4 0m-38.4 208c-3.2-25.6-89.6-51.2-140.8-44.8 0 0-6.4-54.4-9.6-105.6-3.2-44.8 0-89.6 0-96-3.2-3.2-38.4 16-57.6 22.4 0 0 22.4 96 38.4 297.6 0 0 25.6 3.2 70.4-6.4 51.2-9.6 102.4-35.2 99.2-67.2M617.6 640l-9.6-54.4c3.2 0 48 16 54.4 19.2 0 3.2-44.8 35.2-44.8 35.2m-275.2-185.6c3.2 0 16-3.2 16-3.2l6.4 48c-3.2 0-12.8 3.2-12.8 3.2 0-6.4-9.6-44.8-9.6-48m25.6-6.4l6.4 51.2h19.2c-3.2-19.2-6.4-51.2-6.4-51.2h-19.2m-12.8 70.4s28.8-6.4 38.4-3.2c6.4 19.2 16 128 16 131.2-6.4 0-28.8 3.2-28.8 3.2-3.2-6.4-25.6-124.8-25.6-131.2m105.6-64h16c0 3.2 3.2 48 0 48h-12.8c0-3.2-3.2-44.8-3.2-48m25.6 0v51.2h19.2v-51.2c-6.4 0-12.8-3.2-19.2 0m-22.4 67.2s28.8-3.2 38.4 0c3.2 22.4 3.2 128 3.2 131.2h-28.8c0-6.4-12.8-128-12.8-131.2m-67.2-131.2c16 86.4 28.8 236.8 32 246.4h28.8c-9.6-92.8-19.2-243.2-19.2-249.6-6.4-3.2-41.6 3.2-41.6 3.2m-38.4 208c-3.2-25.6-89.6-51.2-140.8-44.8 0 0-6.4-54.4-9.6-105.6-3.2-44.8 0-89.6 0-96-3.2-3.2-38.4 16-57.6 22.4 0 0 22.4 96 38.4 297.6 0 0 25.6 3.2 70.4-6.4s105.6-35.2 99.2-67.2M252.8 640l-6.4-54.4c3.2 0 48 16 54.4 19.2-3.2 3.2-48 35.2-48 35.2" fill="#FFFFFF" p-id="4280"></path></svg>'
        },
        link: 'https://space.bilibili.com/1243821296',
        ariaLabel: 'bilibili'
      }
    ],

    footer: { // 页脚配置
      message: 'Licensed under the Apache License, Version 2.0 (the "License").',
      copyright: `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/zicl1">Zichen</a>`,
    },

    editLink: { // 文章底部编辑链接配置
      pattern: 'https://github.com/zicl1/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面' // Edit this page on GitHub!
    },

    lastUpdated: { // 最近更新时间配置
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'full'
      }
    },

    docFooter: { // 自定义出现在上一页和下一页链接上方的文本
      prev: '上一页',
      next: '下一页'
    },

    darkModeSwitchLabel: '深色模式', // 深色模式切换按钮的文本，该文本仅在移动端视图中显示

    lightModeSwitchTitle: '切换到浅色模式', // 用于自定义悬停时显示的浅色模式开关标题

    darkModeSwitchTitle: '切换到深色模式', // 用于自定义悬停时显示的深色模式开关标题

    sidebarMenuLabel: '主目录', // 用于自定义侧边栏菜单按钮的标签，该标签仅在移动端视图中显示

    returnToTopLabel: '返回顶部', // 用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示

    externalLinkIcon: true, // 是否在 markdown 中的外部链接旁显示外部链接图标

    search: { // 本地搜索
      provider: 'local',
      options: {
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
              searchByText: '搜索提供者'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
        }
      }
    }

  }
})
