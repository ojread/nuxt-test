<template>
  <main class="container">
    <div class="columns">
      <div class="column is-one-third">
        <nav-menu v-bind:items="pages" />
      </div>
      <div class="column">
        <section>
          <h1>Page: {{ page.title }}</h1>
          <nuxtent-body :body="page.body" />
        </section>
      </div>
    </div>
  </main>
</template>

<script>
  import NavMenu from '~/components/NavMenu.vue';

  export default {
    asyncData: async({ app, route, payload }) => ({
      // Current page
      page: await app.$content('pages').get(route.path) || payload,

      // All pages foe menu.
      // Can only be accessed from a 'page' component?
      pages: await app.$content('pages')
        .query({ exclude: ['body'] })
        .getAll(),
    }),

    components: {
      NavMenu
    }
  }
</script>