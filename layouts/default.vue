<template>
  <div class="wrapper">
    <app-header />
    <div class="flex container">
      <app-aside />
      <Nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('~/components/header/Header'),
    AppAside: () => import('~/components/aside/Asidemenu'),
    AppFooter: () => import('~/components/footer/Footer'),
  },
};
</script>
