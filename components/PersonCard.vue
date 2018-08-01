<template>
  <div class="card">

    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <nuxt-link :to="'/people/' + person.slug">
            <figure class="image is-128x128">
              <img :src="person.avatar" :alt="name">
            </figure>
          </nuxt-link>
        </div>
        <div class="media-content">
          <p class="title is-4">
            <nuxt-link :to="'/people/' + person.slug">
              {{ person.firstName }} {{ person.lastName }}
            </nuxt-link>
          </p>
          <p class="subtitle is-6">
            {{ person.job }}
          </p>
          <p class="subtitle is-6" v-if="person.company">
            <nuxt-link :to="'/companies/' + person.company.slug">
              {{ person.company.name }}
            </nuxt-link>
          </p>
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
