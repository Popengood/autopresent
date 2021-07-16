<template>
  <ul class="submenu" hidden>
    <li v-for="model of models" :key="model.id">
      <nuxt-link :to="`/book/${model.parent}/${model.url}`">{{ model.name}}</nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    parent: {
      type: String,
    }
  },
  computed: {
    ...mapGetters(['fetchBrands']),
    models() {
     return this.fetchBrands(this.parent);
    },
  },
}
</script>
