const {
    config
} = require('vuepress-theme-hope');

const sidebar = require('./configs/sidebar/index');
const nav = require('./configs/navbar/index');

module.exports = config({
    base: '/notes/',
    dest: 'dist',
    port: 666,
    title: '前端 学习',
    description: "君子藏器于身 待时而动 天下有道则见 无道则隐",
    markdown: {
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set('core-js/library/fn', 'core-js/features')
    },
    themeConfig: {
        author: 'sy',
        sidebar,
        nav,
        iconPrefix: "icon-",
        docsBranch: 'main',
        docsDir: 'docs',
        docsRepo: 'https://github.com/sykinggg/notes',
        editLinks: true,
        prevLinks: true,
        nextLinks: true,
        mdEnhance: {
            align: true,
            flowchart: true,
            tex: false,
            lineNumbers: false,
            demo: true,
            mermaid: true
        },
        feed: false,
        hostname: ''
    },
    plugins: [
        "@vuepress/nprogress",
        "vuepress-plugin-viewer",
        ['disqus', {
            shortname: 'sycoder'
        }],
        // "code-switcher",
        "element-ui"
    ],
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
        }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }]
    ]
})