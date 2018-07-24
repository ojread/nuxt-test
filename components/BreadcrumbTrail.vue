<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="crumb in breadcrumbs" :key="crumb.path">
        <nuxt-link :to="crumb.path">{{ crumb.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [ 'pages', 'paths' ],

  computed: {
    breadcrumbs: function () {
      // Map breadcrumb paths
      return this.paths.map(path => {
        // Find the page with this permalink.
        const page = this.pages.find(p => {
          return p.permalink === path; 
        });
        return {
          path: path || '/',
          title: page ? page.title : 'Home',
        }
      });
    }
  },
}
</script>

<style>

</style>
