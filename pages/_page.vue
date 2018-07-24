<template>
  <div>

    <section class="section">
      <div class="container">
        <breadcrumb-trail :pages="pages" :path="path" />
      </div>
    </section>

    <main class="container">
      <div class="columns">

        <div class="column is-one-third">
          <nav-menu :items="pages" :currentRoute="route" />
        </div>

        <div class="column">
          <section>
            <div class="hero is-primary">
              <div class="hero-body">
                <h1 class="title">{{ page.title }}</h1>
                <h2 class="subtitle">{{ page.subtitle }}</h2>
              </div>
            </div>

            <h1>Page: {{ page.title }}</h1>
            <nuxtent-body :body="page.body" />
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import BreadcrumbTrail from '~/components/BreadcrumbTrail.vue';
  import NavMenu from '~/components/NavMenu.vue';

  export default {
    asyncData: async({ app, route, payload }) => {
      console.log(app, route, payload);

/*
route.params.section is the current page's folder
route.path is the current full path

*/

      return {
        // Current page
        page: await app.$content('pages').get(route.path) || payload,

        // All pages for menu.
        pages: await app.$content('pages')
          .query({ exclude: ['body'] })
          .getAll(),

        path: await route.path,

        route: {
          path: route.path,
          section: route.params.section ? '/' + route.params.section : '/',
        },
      }
    },

    components: {
      BreadcrumbTrail,
      NavMenu,
    }
  }
</script>