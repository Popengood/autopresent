<template>
  <div>
    <h1>Бестселлеры</h1>
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
  head() {
    return {
      title: 'Самые популярные руководства по ремонту',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Самые популярные руководства по ремонту автомобилей. Лидеры продаж за последние 7 дней',
        },
      ],
    };
  },
  async fetch() {
    try {
      this.books = await this.$axios.$get('/api/addinform/bestsellers');
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  components: {
    ListBookItem: () => import('~/components/books/ListBookItem'),
  },
};
</script>
