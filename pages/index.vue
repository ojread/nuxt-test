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

      <aside class="menu">
        <h2 class="menu-label">Pages</h2>
        <ul class="menu-list">
          <li v-for="page in pages" :key="page.title">
            <nuxt-link :to="page.permalink">{{ page.title }}</nuxt-link>
          </li>
        </ul>
      </aside>

      <aside class="menu">
        <h2 class="menu-label">Posts</h2>
        <ul class="menu-list">
          <li v-for="post in posts" :key="post.title">
            <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
          </li>
        </ul>
      </aside>

    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'

  export default {
    async asyncData ({ app }) {
      console.log(app.$content('pages').getAll());
      return {
        pages: await app.$content('pages').getAll(),
        posts: await app.$content('posts').getAll()
      }
    },

    components: {
      AppLogo
    }
  }
</script>
