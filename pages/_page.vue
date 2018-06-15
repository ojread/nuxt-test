<template>
  <section>
    <h1>Page: {{ page.title }}</h1>
    <nuxtent-body :body="page.body" />
  </section>
</template>

<script>
  // export default {
  //   asyncData: async({ app, route, payload }) => ({
  //     page: await app.$content('pages').get(route.path) || payload
  //   })
  // }
  export default {
    asyncData: async({ app, route, payload }) => {
      console.log('asyncData', app, route, payload);
      return {
        page: await app.$content('pages').get(route.path) || payload
      }
    }
  }
</script>