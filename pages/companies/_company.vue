<template>
  <div class="container">
    <h1 class="title">{{ person.name }}</h1>
  </div>
</template>

<script>
export default {
  asyncData: async({ app, route, payload }) => {
    return {
      person: await app.$content('people').get(route.path) || payload,
    }
  },

  components: {

  }
}
</script>

<style>

</style>
