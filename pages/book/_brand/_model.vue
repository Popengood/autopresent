<template>
  <div>
    <h1>Руководства по ремонту и эксплуатации BMW 3 серии.</h1>
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
      const path = `/api/book/${this.$nuxt._route.params.brand}/${this.$nuxt._route.params.model}`;
      this.books = await this.$axios.$get(path);
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
