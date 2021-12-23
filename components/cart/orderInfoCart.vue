<template>
  <div>
    <div>
      <p
        class="order-title"
        v-for="(name, index) in dataBook.name"
        :key="index"
      >
        {{ index + 1 }}. {{ name }} - {{ dataBook.quantity[index] }} шт.
      </p>
    </div>
    <p class="order-info">
      Cтоимость заказа с учётом услуг по доставке составит:<br />
      — при доставке наложенным платежом
      <span class="price">{{ postPrice }}</span> руб.,<br />
      — при доставке курьером
      <span class="price">{{ courierPrice }}</span> руб. (только по
      Санкт-Петербургу).
    </p>
  </div>
</template>

<script>
export default {
  props: ['dataBook'],
  computed: {
    postPrice() {
      return this.dataBook.price + 500 || '';
    },
    courierPrice() {
      return this.dataBook.price + 300 || '';
    },
  },
};
</script>
