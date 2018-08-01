<template>
  <div class="container">
    <h1 class="title">People</h1>

    <div class="columns is-multiline">
      <div class="column is-half" v-for="(person, index) in populatedPeople" :key="index">
        <person-card :person="person" />
      </div>
    </div>
    
  </div>
</template>

<script>
import PersonCard from '~/components/PersonCard.vue';

export default {
  asyncData: async({ app, route, payload }) => {
    return {
      companies: await app.$content('companies').getAll(),
      people: await app.$content('people').getAll(),
    }
  },

  computed: {
    // Populate relationships.
    populatedPeople () {
      return this.people.map(person => {
        if (person.companySlug) {
          const company = this.companies.find(c => { return c.slug === person.companySlug; });
          if (company) {
            person.company = company;
          }
        }
        return person;
      });
    }
  },

  components: { PersonCard },
}
</script>

<style>

</style>
