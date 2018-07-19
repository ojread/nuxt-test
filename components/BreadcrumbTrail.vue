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
  props: [ 'breadcrumbs' ],

  // computed: {
  //   breadcrumbs: function () {
  //     // console.log(this.$route);

  //     // this.$route.matched.forEach((item) => {
  //     //   console.log(item);
  //     // });
  //     return [];
  //   }
  // },
}
</script>

<style>

</style>
