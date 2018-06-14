<template>
  <section class="container">
    <div>
      <!-- <app-logo/> -->
      <h1 class="title">
        oliverread
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>

      <h2>Pages</h2>
      <ul>
        <li v-for="page in pages" :key="page.title">
          {{ page.title }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

// export default {
//   components: {
//     AppLogo
//   }
// }

  export default {
    async asyncData ({ app }) {
      return {
        pages: await app.$content('pages').getAll()
      }
    }
  }
</script>
