module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'GinAdmin',
      logo: {
        alt: 'gin-admin',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/README.zh-CN',
          activeBasePath: 'docs',
          label: '在线文档',
          position: 'left',
        },
        {to: 'blog/aboutus', label: '关于我们', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '项目文档',
          items: [
            {
              label: '中文文档',
              to: 'docs/README.zh-CN',
            },
            {
              label: 'ENGLISH DOCUMENTATION',
              to: 'docs/README',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'bbs社区',
              href: 'https://bbs.iznjy.cn',
            },
            {
              label: 'QQ群',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '关于我们',
              to: 'blog/aboutus',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/coderchiang/gin-admin',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.com/Chris_Chiang/gin-admin',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          path: 'blog',
          /**
           * 编辑您站点的 URL。
           * Docusaurus 将使用 "editUrl + relativeDocPath" 来自动计算最终的 editUrl
           */
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
          /**
           * 您也可以自己根据每个 Markdown 文件进行编辑 Url。
           */
        
          /**
           * 在提交本地文件至 Git 时有用。
           * 本地化 Markdown 文件后，编辑 URl 将指定为本地化后的文件，
           * 而非未本地化的原始文件。
           * 注：此选项将在 editUrl 为函数时被自动忽略
           */
          editLocalizedFiles: false,
          /**
           * 用以优化 SEO 的博客页面标题
           */
          blogTitle: 'Blog title',
          /**
           * 用以优化 SEO 的博客页面源描述
           */
          blogDescription: 'Blog',
          /**
           * 显示于博客侧边栏的博文数量，设置为
           * 'ALL' 以显示所有博文，0 则禁用此功能
           */
          blogSidebarCount: 'ALL',
          /**
           * 博客侧边栏标题
           */
          blogSidebarTitle: 'All our posts',
          /**
           * 通往您博客的 URL 路由。
           * *请务必不要*添加斜杠。
           */
          routeBasePath: 'blog',
          include: ['*.md', '*.mdx'],
          postsPerPage: 10,
          /**
           * 博客页面所使用的主题组件。
           */
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
