<template>
  <aside class="box">
    <!-- {{ items }} -->
    <div class="menu">
      <!-- <h2 class="menu-label">All pages</h2>
      <ul class="menu-list">
        <li v-for="(item, index) in items" :key="index">
          <nuxt-link :to="item.path" :class="{ 'is-active': (item.path === currentRoute.path) }">
            {{ item.title }} {{ item.meta.section }}
          </nuxt-link>
        </li>
      </ul> -->

      <h2 class="menu-label">Current section: {{ currentRoute.section }}</h2>

      <h2 class="menu-label">Sibling pages</h2>
      <ul class="menu-list">
        <li v-for="(item, index) in items" v-if="item.meta.section === currentRoute.section" :key="index">
          <nuxt-link :to="item.path" :class="{ 'is-active': (item.path === currentRoute.path) }">
            {{ item.title }}
          </nuxt-link>
          <!-- <ul>
            <li v-for="(itemChild, indexChild) in items" v-if="itemChild.meta.section === currentRoute.path" :key="indexChild">
              <nuxt-link :to="itemChild.path" :class="{ 'is-active': (itemChild.path === currentRoute.path) }">
                {{ itemChild.title }}
              </nuxt-link>
            </li>
          </ul> -->
        </li>
      </ul>

      <h2 class="menu-label">Child pages</h2>
      <ul class="menu-list">
        <li v-for="(item, index) in items" v-if="item.meta.section === currentRoute.path" :key="index">
          <nuxt-link :to="item.path" :class="{ 'is-active': (item.path === currentRoute.path) }">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>

    </div>
  </aside>
</template>

<script>
  export default {
    props: [ 
      'items',
      'currentRoute',
    ],
  }
</script>
