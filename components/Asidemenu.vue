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
import { mapActions} from 'vuex';
export default {
  created() {
    this.loadStateBrands();
  },
  computed: {
    brands() {
      // return this.$store.getters['fetchBrands'];
      return this.$store.state.brands;
    },
  },
  methods: {
    ...mapActions(['loadStateBrands']),
  },
}
</script>

<style lang="scss" scoped></style>