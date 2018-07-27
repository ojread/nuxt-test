<template>
  <div>
    <h1>People index</h1>
    
    <ul class="menu-list">
      <li v-for="(person, index) in people" :key="index">
        <nuxt-link :to="person.permalink">
          {{ person.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData: async({ app, route, payload }) => {
    return {
      people: await app.$content('people').getAll(),
    }
  },
}
</script>

<style>

</style>
