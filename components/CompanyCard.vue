<template>
  <div class="section">
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{ company.name }}</p>
      <p class="subtitle is-6">{{ company.description }}</p>
      <div class="content">
        <nuxtent-body :body="company.body" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['company'],
}
</script>

<style>

</style>
