<template>
  <nav class="navbar is-dark" role="navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/test">Test page</nuxt-link>
        <nuxt-link class="navbar-item" to="/posts">Posts</nuxt-link>
      </div>
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/test">
          <span class="icon">
            <i class="fab fa-lg fa-github"></i>
          </span>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>