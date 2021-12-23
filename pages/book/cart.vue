<template>
  <div class="content">
    <h1>Корзина покупателя</h1>
    <form v-if="goods.length !== 0" @submit.prevent="createOrder()">
      <table class="tabcart table-striped" cellpadding="1" cellspacing="1">
        <thead>
          <tr>
            <th style="width: 120px">Обложка</th>
            <th>Название руководства</th>
            <th style="width: 73px">Артикул</th>
            <th style="width: 73px">Цена</th>
            <th style="width: 73px">Кол-во</th>
            <th style="width: 73px">Сумма</th>
            <th style="width: 73px">Удалить</th>
          </tr>
        </thead>
        <tbody class="">
          <ListCartItem
            v-for="(book, index) of goods"
            :key="book.id"
            :book="book"
            :index="index"
            @remove="removeFromCart(index)"
          />
        </tbody>
        <tfoot>
          <tr>
            <td colspan="7">
              Общая стоимость товаров без учёта услуг по доставке:
              {{ total }} руб.
            </td>
          </tr>
        </tfoot>
      </table>
      <button
        type="submit"
        class="btn btn-success btn-sm mr-3"
        @click="createOrder"
      >
        Оформить заказ
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm"
        @click="removeCart"
      >
        Очистить корзину
      </button>
    </form>
    <div v-else class="flex ai-center alert">
      В Вашей корзине пока ничего нет.
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  head() {
    return {
      title: 'Корзина покупателя',
    };
  },
  components: {
    ListCartItem: () => import('~/components/cart/ListCartItem'),
  },
  computed: {
    ...mapState({
      goods: state => state.cart.goods,
    }),
    total() {
      return this.goods.reduce(
        (accum, book) => accum + book.price * book.quantity,
        0
      );
    },
  },
  methods: {
    removeFromCart(index) {
      const goods = JSON.parse(localStorage.getItem('cart'));
      goods.splice(index, 1);
      this.$store.dispatch('cart/setLocalStorage', goods);
    },
    removeCart() {
      const goods = [];
      this.$store.dispatch('cart/setLocalStorage', goods);
    },
    createOrder() {
      const data = {
        name: [],
        articul: [],
        quantity: [],
        price: [],
      };
      const goods = JSON.parse(localStorage.getItem('cart'));
      for (let book of goods) {
        data.name.push(book.name);
        data.articul.push(book.articul);
        data.quantity.push(book.quantity);
        data.price.push(book.price);
      }
      localStorage.setItem('order', JSON.stringify(data));
      this.$router.push({ name: 'order' });
    },
  },
};
</script>
