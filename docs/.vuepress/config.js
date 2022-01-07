const sidebar = require('./sidebar');
const nav = require('./nav');


module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  base: '/notes/',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',

    sidebar: sidebar,
    navbar: nav,
  },

  bundler:
    // specify bundler via environment variable
    process.env.DOCS_BUNDLER ??
    // use vite by default
    '@vuepress/vite',
    // '@vuepress/webpack'
}