<template>
  <div class="book-price" :class="{ noinstock: !book.instock }">
    <p>
      Цена: <span class="price">{{ book.price }}</span> руб.<br />
    </p>

    <div v-if="book.instock == 1">
      <p>Наличие: <span class="success">На складе</span></p>
      <button type="button" class="btn btn-danger" @click="createOrder">
        Купить в 1 клик
      </button>
      <div>
        или<br />
        <span class="link" @click="addCart(book.id)">Положить в корзину</span>
      </div>
    </div>

    <div v-else><p class="danger">Нет в наличии</p></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  props: ['book'],
  methods: {
    createOrder() {
      const data = {
        name: this.book.name,
        articul: this.book.articul,
        price: this.book.price,
        quantity: 1,
      };
      localStorage.setItem('databook', JSON.stringify(data));
      this.$router.push({ path: '/service/order', query: { source: 'book' } });
    },
    addCart(id) {
      const data = {
        id: id || null,
        name: this.book.name,
        url: this.book.url,
        articul: this.book.articul,
        titlethumb: this.book.titlethumb,
        price: this.book.price,
        parent: this.book.parent,
        quantity: 1,
      };
      let isBook = false;

      const goods = JSON.parse(localStorage.getItem('cart')) || [];
      for (let book of goods) {
        if (book.articul == data.articul) {
          book.quantity++;
          isBook = true;
          break;
        }
      }
      if (!isBook) {
        goods.push(data);
      }
      this.$store.dispatch('cart/setLocalStorage', goods);
    },
  },
};
</script>
