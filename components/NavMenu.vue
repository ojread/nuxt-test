<template>
  <aside class="box">
    <div class="menu">
      <!-- {{items}} -->
      <h2 class="menu-label">Pages</h2>
      <ul class="menu-list">
        <li v-for="(item, index) in items" :key="index">
          {{item.path}} - {{path}}
          <nuxt-link :to="item.path" v-bind:class="{ 'is-active': (item.path === path) }">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  export default {
    props: {
      items: {
        default: () => ([])
      },
    },
    path: {}
  }
</script>
