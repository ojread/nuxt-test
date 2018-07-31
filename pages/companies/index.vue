<template>
  <div class="container">
    <h1 class="title">Companies</h1>

    <div v-for="(company, index) in companies" :key="index">
      <company-card :company="company" />
    </div>
    
  </div>
</template>

<script>
import CompanyCard from '~/components/CompanyCard.vue';

export default {
  asyncData: async({ app, route, payload }) => {
    return {
      companies: await app.$content('companies').getAll(),
    }
  },

  components: { CompanyCard },
}
</script>

<style>

</style>
