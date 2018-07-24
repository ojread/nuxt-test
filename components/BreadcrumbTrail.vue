<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <li v-for="crumb in breadcrumbs" :key="crumb.path" v-bind:class="{ 'is-active': path === crumb.path }">
        <nuxt-link :to="crumb.path">{{ crumb.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [ 'pages', 'path' ],

  computed: {
    breadcrumbs: function () {

      const paths = this.path.split('/').map((section, index, sections) => {
        // Split the path into sections and recreate the path for each.
        const path = sections.slice(0, index+1).join('/');
        return path || '/';
      });

      // Map breadcrumb paths
      return paths.map(path => {
        // Find the page with this permalink.
        const page = this.pages.find(p => {
          return p.permalink === path; 
        });
        // Breadcrumb object with path and page title.
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
