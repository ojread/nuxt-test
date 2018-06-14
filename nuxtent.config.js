// Nuxtent config.

module.exports = {
  content: [
    [
      'pages', {
        page: '_page',
        permalink: ':section/:slug',
        isPost: false,
        generate: [
          'get',
          'getAll',
        ]
      }
    ], [
      'posts', {
        page: '_post',
        permalink: 'posts/:year/:month/:day/:slug',
      }
    ]
  ],

  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000',
  }
};