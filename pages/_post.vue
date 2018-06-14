<template>
  <section>
    <h1>post: {{ post.title }}</h1>
    <nuxtent-body :body="post.body" />
  </section>
</template>

<script>
  export default {
    asyncData: async({ app, route, payload }) => ({
      post: await app.$content('posts').get(route.path) || payload
    })
  }
</script>