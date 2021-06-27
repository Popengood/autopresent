<template>
  <div class="content">
    <h1>Новинки автолитературы по ремонту и эксплуатации автомобилей.</h1>
    <ListBookItem v-for="book in books.books" :key="book.id" :book="book" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    }
  },
  async fetch() {
    try {
      this.books = await this.$axios.$get('/api/addinform/novetly');
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  components: {
    ListBookItem: () => import('~/components/books/ListBookItem'),
  }
}
</script>
