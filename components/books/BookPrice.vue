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
  props: ['book'],
}
</script>
