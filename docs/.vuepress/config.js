module.exports = {
  base: '/docs/',
  title: "慢下来~享受当下~",
  head: [
    ['link', { rel: 'icon', href:'/assets/img/favicon.ico'}],
    ['meta', { name: 'keywords', content:'网站关键词'}],
    ['meta', { name: 'author', content:'zch1337'}]
  ],
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    // 第一种
    // sidebar: 'auto', // 自动生成侧栏

    // 第二种
    // sidebar: [
    //   '',
    //   '/about/',
    // ],

    // 第三种
    // sidebar: [
    //   {
    //     title: 'css',   // 必要的
    //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: true, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/css/css-a',
    //       '/css/css-b',
    //       '/css/css-c',
    //     ]
    //   },
    // ],

    // 第四种
    sidebar: {
      '/css/': [
        'css-a',     /* /foo/ */
        'css-b',  /* /foo/one.html */
        'css-c'   /* /foo/two.html */
      ],
      '/js/': [
        'css-a',     /* /foo/ */
        'css-b',  /* /foo/one.html */
      ],
      // fallback
      '/': [
        '',
      ]
    },


    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于我', link: '/about/' },

      // 分组
      {
        text: '后端',
        items: [
          {
            text: "第一阶段",
            items: [
              { text: 'mysql', link: '/houduan/mysql/' },
              { text: 'servlet', link: '/houduan/servlet/' }
            ]
          },
          {
            text: "第二阶段",
            items: [
              { text: 'Chinese', link: '/houduan/Chinese/' },
              { text: 'Japanese', link: '/houduan/Japanese/' }
            ]
          }
        ]
      },


      { text: '博客', link: 'http://www.zch1337.xyz/#/' }
    ]
  }
}