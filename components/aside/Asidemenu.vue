<template>
  <div class="aside">
    <div class="white-box">
      <div class="flex ai-center jc-center title">Каталог автолитературы</div>
      <ul class="aside-menu">
        <li v-for="brand of brands" :key="brand.id">          
          <span @click="activeLink">{{ brand.name }}</span>
          <app-submenu :parent="brand.url" hidden />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  async fetch() {
    try {
      if (this.$store.state.brands.length == 0) {
        await this.$store.dispatch('loadStateBrands');
      }
    } catch (err) {
      error(err);
    }
  },
  data() {
    return {
      // isActive: false,
    }
  },
  components: {
    AppSubmenu: () => import('~/components/aside/Submenu'),
  },
  computed: {
    ...mapGetters(['fetchBrands']),
    brands() {
      return this.fetchBrands('leftmenu');
    },
  },
  methods: {
    activeLink(e) {
      if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        e.target.nextElementSibling.hidden = true;
      } else {
        e.target.classList.add('active');
        e.target.nextElementSibling.hidden = false;
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>