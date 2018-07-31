<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img :src="person.avatar" :alt="name">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ person.job }}</p>
        </div>
      </div>

      <div class="content">
        <!-- <nuxtent-body :body="person.body" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['person'],

  computed: {
    name() {
      return this.person.firstName + ' ' + this.person.lastName;
    }
  }
}
</script>

<style>

</style>
