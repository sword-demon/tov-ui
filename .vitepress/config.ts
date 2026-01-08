import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tov UI',
  description: 'This is a vue component library',
  rewrites: {
    // 路径映射关系
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/:comp/(.*)': 'components/:comp/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
      { text: 'Git', link: '/Git' },
      { text: 'ESlint', link: '/ESlint' },
      { text: 'husky', link: '/READ' },
      { text: '样式', link: '/Style' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sword-demon/tov-ui' },
    ],
  },
})
