<template>
  <div style="margin-left: auto">
    <div v-if="$fetchState.pending" class="flex cart-box">
      <div class="loading"></div>
    </div>
    <div v-else>
      <div v-if="goods.length" class="flex cart-box">
        <div class="cart-info">
            В Вашей корзине<br />
            {{ quantity }} книг{{ endword }} на {{ total }} руб.
        </div>
        <span><router-link to="/cart">Перейти в корзину</router-link></span>
      </div>
      <div v-else class="flex cart-box">
        <div class="cart-info">В Вашей корзине пока<br />ничего нет.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  fetchOnServer: false,
  fetch() {
    if (this.$store.state.cart.goods.length == 0) {
      const data = JSON.parse(localStorage.getItem('cart')) || [];
      this.$store.commit('cart/setGoods', data);
    }
  },
  data() {
    return {
      cases: [2, 0, 1, 1, 1, 2],
      ending: ['а', 'и', ''],
    };
  },
  computed: {
    ...mapState({ goods: state => state.cart.goods }),
    ...mapMutations('cart', ['loadState']),
    ...mapGetters('cart', ['fetchQuantity', 'fetchTotal']),
    quantity() {
      return this.fetchQuantity;
    },
    total() {
      return this.fetchTotal;
    },
    endword() {
      return this.endWord(this.quantity);
    },
  },
  methods: {
    endWord(n) {
      let i =
        n % 100 > 4 && n % 100 < 20 ? 2 : this.cases[n % 10 < 5 ? n % 10 : 5];
      return this.ending[i];
    },
    loadStorage() {
      if (this.$store.state.cart.goods.length == 0) {
        const data = JSON.parse(localStorage.getItem('cart')) || [];
        this.$store.commit('cart/setGoods', data);
      }
    }
  },
};
</script>
