<template>
  <ul class="preview">
    <app-book v-for="book of books" :key="book.id" :book="book" />
  </ul>
</template>

<script>
export default {
  props: [book],
  components: {
    AppBook: () => import('~/components/books/Book'),
  }
}
</script>
