<template>
  <div class="header">
    <div class="flex wrap">
      <div class="flex ai-center header-row">
        <nuxt-link to="/" class="navbar-brand">AutoPresent</nuxt-link>
        <app-addmenu />
        <app-cartview />
      </div>
      <div class="flex nav-row ai-center">
        <app-topmenu />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
   AppAddmenu: () => import('~/components/header/Addmenu'),
   AppCartview: () => import('~/components/header/Cartview'),
   AppTopmenu: () => import('~/components/header/Topmenu'),
  }
}
</script>
