<template>
  <section>
    <h1>{{ page.title }}</h1>
    <nuxtent-body :body="page.body" />
  </section>
</template>

<script>
  export default {
    asyncData: async({ app, route, payload }) => ({
      page: await app.$content('/').get(route.path) || payload
    })
  }
</script>