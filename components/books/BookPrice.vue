<template>
  <div class="book-price">
    <p>Цена: <span class="price">{{ book.price }}</span> руб.<br />
    <slot v-if="book.instock == 1">Наличие: <span class="success">На складе</span></slot>
    <slot v-else><span class="danger">Нет в наличии</span></slot>
    </p>
    <button class="btn btn-success mb-2" @click="createOrder">
      Купить в 1 клик
    </button>
    <div>
      или<br />
      <span class="link" @click="addCart(book.id)">Положить в корзину</span>
    </div>
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
        title: this.book.title,
        articul: this.book.articul,
        price: this.book.price,
        quantity: 1,
      };
      localStorage.setItem('order', JSON.stringify(data));
      this.$router.push({ name: 'order' });
    },
    addCart(id) {
      const data = {
        id,
        title: this.book.title,
        url: this.book.url,
        articul: this.book.articul,
        thumb: this.book.thumb,
        price: this.book.price,
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
}
</script>
