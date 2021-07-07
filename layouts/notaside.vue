<template>
  <div class="wrapper">
    <app-header />
    <div class="flex container">
      <Nuxt />
    </div>
    <app-footer />
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('~/components/header/Header'),
    AppFooter: () => import('~/components/footer/Footer'),
  },
};
</script>

