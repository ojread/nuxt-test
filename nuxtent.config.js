// Nuxtent config.

module.exports = {
  content: [
    [
      'pages', {
        page: '_page',
        permalink: ':section*/:slug', // * allows nested sections
        isPost: false,
        generate: [
          'get',
          'getAll',
        ]
      }
    ], [
      'posts', {
        page: 'posts/_post',
        permalink: 'posts/:year/:month/:day/:slug',
        generate: [
          'get',
          'getAll',
        ]
      }
    ], [
      'companies', {
        page: 'companies/_company',
        permalink: 'companies/:slug',
        isPost: false,
        generate: [
          'get',
          'getAll',
        ]
      }
    ], [
      'people', {
        page: 'people/_person',
        permalink: 'people/:slug',
        isPost: false,
        generate: [
          'get',
          'getAll',
        ]
      }

    ]
  ],

  api: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    browserBaseURL: process.env.BASE_URL || 'http://localhost:3000',
  }
};