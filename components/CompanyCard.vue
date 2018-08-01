<template>
  <div class="section">
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{ company.name }}, {{ company.city }}</p>
      <p class="subtitle is-6">{{ company.description }}</p>
      <div class="content">
        <nuxtent-body :body="company.body" />

        <h3>Employees</h3>

        <div class="columns is-multiline">
          <div class="column is-half" v-for="(person, index) in company.employees" :key="index">
            <person-card :person="person" />
          </div>
        </div>

      </div>
    </div>
  </div>
  </div>
</template>

<script>
import PersonCard from '~/components/PersonCard';

export default {
  props: ['company'],

  components: {
    PersonCard
  },
}
</script>

<style>

</style>
