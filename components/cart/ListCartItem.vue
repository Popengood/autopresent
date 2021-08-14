<template>
  <tr>
    <td class="thumb">
      <nuxt-link :to="`/book/${brand.parent}/${book.parent}/${book.url}`">
        <img
          class="img-sm"
          :src="`${$config.pathFiles}/${book.id}/${book.titlethumb}.jpg`"
          alt=""
        />
      </nuxt-link>
    </td>
    <td>
      <nuxt-link :to="`/book/${brand.parent}/${book.parent}/${book.url}`">{{
        book.name
      }}</nuxt-link>
    </td>
    <td>{{ book.articul }}</td>
    <td>{{ book.price }}</td>
    <td class="count">
      <input
        type="text"
        name="count"
        maxlength="1"
        :value="book.quantity"
        @input="updateCart"
      />
    </td>
    <td>{{ sum }}</td>
    <td>
      <span class="btn-delete" @click="removeBook">×</span>
    </td>
  </tr>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['book', 'index'],
  computed: {
    ...mapGetters(['fetchBrand']),
    brand() {
      return this.fetchBrand(this.book.parent);
    },
    sum() {
      return this.book.price * this.book.quantity;
    },
  },
  methods: {
    removeBook() {
      this.$emit('remove');
    },
    updateCart(e) {
      const quantity = Number(e.target.value);
      if (e.target.value == '' || quantity === 0) return;

      const goods = JSON.parse(localStorage.getItem('cart'));
      goods[this.index].quantity = quantity;
      this.$store.dispatch('cart/setLocalStorage', goods);
    },
  },
};
</script>
