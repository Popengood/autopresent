<template>
  <div class="aside">
    <div class="white-box">
      <div class="flex ai-center jc-center am-title">Каталог автолитературы</div>
      <ul class="aside-menu">
        <li v-for="brand of brands" :key="brand.id">
          <span>brand.name</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    async brands() {
      if (!this.$store.getters['brands/brands'] === false) {
        await this.$store.dispatch('brands/fetch');
      }
      return this.$store.getters['brands/brands'];
    },
  },
}
</script>

<style lang="scss" scoped></style>