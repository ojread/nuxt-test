<template>
  <aside class="box" v-if="menuItems.length">
    <div class="menu">
      <h2 class="menu-label">{{ title }}</h2>
      <ul class="menu-list">
        <li v-for="(item, index) in menuItems" :key="index">
          <nuxt-link :to="item.permalink" :class="{ 'is-active': (item.permalink === path) }">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  // NavMenu lists pages under the given path.
  export default {
    props: [ 
      'title',    // Widget title
      'items',    // All content items
      'section',  // The section to list content from
      'path'      // The current path
    ],

    computed: {
      menuItems () {
        // Filter menu items to the requested section.
        return this.items.filter(item => {
          return item.meta.section === this.section;
        });
      }
    }
  }
</script>
