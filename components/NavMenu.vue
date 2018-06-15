<template>
  <aside class="menu">
    <h2 class="menu-label">Pages</h2>
    <ul class="menu-list">
      <li v-for="(item, index) in items" :key="index">
        <nuxt-link :to="item.permalink">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    props: {
      items: {
        default: () => ([])
      }
    }
  }
</script>
