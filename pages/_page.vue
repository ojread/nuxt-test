<template>
  <div>
    <section class="hero is-primary">
      <div class="container">
        <div class="hero-body">
          <h1 class="title">{{ page.title }}</h1>
          <h2 class="subtitle">{{ page.subtitle }}</h2>
      </div>
      </div>
    </section>

    <main class="container">
      <div class="columns">

        <div class="column is-one-third">
          <nav-menu v-bind:items="pages" v-bind:currentPath="path" />
        </div>

        <div class="column">
          <section>
            <h1>Page: {{ page.title }}</h1>
            <nuxtent-body :body="page.body" />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import NavMenu from '~/components/NavMenu.vue';

  export default {
    asyncData: async({ app, route, payload }) => {
      console.log(app, route, payload);
      return {
        // Current page
        page: await app.$content('pages').get(route.path) || payload,

        // All pages for menu.
        // Can only be accessed from a 'page' component?
        pages: await app.$content('pages')
          .query({ exclude: ['body'] })
          .getAll(),

        path: await app.context.route.path,
      }
    },

    components: {
      NavMenu
    }
  }
</script>