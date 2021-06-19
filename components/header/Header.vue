<template>
  <div class="header">
    <div class="flex wrap">
      <div class="flex ai-center header-row">
        <a class="navbar-brand">AutoPresent</a>
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
