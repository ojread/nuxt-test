<template>
  <div class="container">
    <h1 class="title">Companies</h1>

    <div v-for="(company, index) in populatedCompanies" :key="index">
      <company-card :company="company" />
    </div>
    
  </div>
</template>

<script>
import CompanyCard from '~/components/CompanyCard.vue';

export default {
  asyncData: async({ app, route, payload }) => {
    // Should filter people into companies here...
    return {
      companies: await app.$content('companies').getAll(),
      people: await app.$content('people').getAll(),
    }
  },

  computed: {
    // Populate relationships.
    populatedCompanies () {
      return this.companies.map(company => {
        company.employees = this.people.filter(person => { return person.companySlug === company.slug; });
        return company;
      });
    }
  },

  components: { CompanyCard },
}
</script>

<style>

</style>
