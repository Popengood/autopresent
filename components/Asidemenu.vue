<template>
  <div class="aside">
    <div class="white-box">
      <div class="flex ai-center jc-center am-title">Каталог автолитературы</div>
      <ul class="aside-menu">
        <li v-for="brand of brands" :key="brand.id">
          <span>{{ brand.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  async fetch() {
    try {
      if (this.$store.state.brands.length == 0) {
        console.log('test')
        await this.$store.dispatch('loadStateBrands');
      }
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    brands() {
      return this.$store.state.brands;
    },
  },
}
</script>

<style lang="scss" scoped></style>