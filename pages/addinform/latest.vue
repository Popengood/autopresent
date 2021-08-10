<template>
  <div>
    <h1>Последние поступления</h1>
    <ListBookItem v-for="book in books.books" :key="book.id" :book="book" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    };
  },
  head() {
    return {
      title: 'Последние поступления книг по ремонту автомобилей',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Последние поступления книг по ремонту автомобилей',
        },
      ],
    };
  },
  async fetch() {
    try {
      this.books = await this.$axios.$get('/api/addinform/latest');
    } catch (e) {
      throw new Error('Book latest not found');
    }
  },
  components: {
    ListBookItem: () => import('~/components/books/ListBookItem'),
  },
};
</script>
