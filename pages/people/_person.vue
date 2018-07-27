<template>
  <div>
    <h1>Person</h1>
    <p>{{ person.name }}</p>
    <p>{{ person.email }}</p>
    <p>{{ person.phone }}</p>
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
