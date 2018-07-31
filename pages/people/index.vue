<template>
  <div class="container">
    <h1 class="title">People</h1>

    <div class="columns is-multiline">
      <div class="column is-half" v-for="(person, index) in people" :key="index">
        <nuxt-link :to="person.permalink">
          <person-card :person="person" />
        </nuxt-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import PersonCard from '~/components/PersonCard.vue';

export default {
  asyncData: async({ app, route, payload }) => {
    return {
      people: await app.$content('people').getAll(),
    }
  },

  components: { PersonCard },
}
</script>

<style>

</style>
