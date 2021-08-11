<template>
  <div class="aside">
    <div class="white-box">
      <div class="flex ai-center jc-center title">Каталог автолитературы</div>
      <ul class="aside-menu">
        <li v-for="brand of brands" :key="brand.id">
          <span
            @click="activeLink"
            :class="{
              active:
                $nuxt._route.params.brand &&
                $nuxt._route.params.brand == brand.url,
            }"
          >
            {{ brand.name }}
          </span>
          <app-submenu :parent="brand.url" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      submenues: null,
      links: null,
    };
  },
  async fetch() {
    try {
      if (this.$store.state.brands.length == 0) {
        await this.$store.dispatch('nuxtServerInit');
      }
    } catch (err) {
      console.log(err);
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
  updated() {
    this.showSubnemu();
  },
  mounted() {
    this.links = this.$el.querySelectorAll('.aside-menu span');
    this.showSubnemu();
  },
  methods: {
    showSubnemu() {
      for (let link of this.links) {
        link.nextElementSibling.hidden = link.classList.contains('active')
          ? false
          : true;
      }
    },
    activeLink(e) {
      const el = e.target;
      for (let link of this.links) {
        if (link == el) continue;
        link.classList.remove('active');
        link.nextElementSibling.hidden = true;
      }

      if (el.classList.contains('active')) {
        el.classList.remove('active');
        el.nextElementSibling.hidden = true;
      } else {
        el.classList.add('active');
        el.nextElementSibling.hidden = false;
      }
    },
  },
};
</script>
