// Nuxtent config.

module.exports = {
  content: {
    permalink: ':slug',
    page: '/_page',
    isPost: false,
  },

  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000',
  }
};