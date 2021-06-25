<template>
  <ul class="submenu">
    <li v-for="model of models" :key="model.id">
      <nuxt-link :to="`${model.parent}/${model.url}`">{{ model.name}}</nuxt-link>
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
    ...mapGetters('aside', ['fetchBrands']),
    models() {
     return this.fetchBrands(this.parent);
    },
  },
}
</script>
