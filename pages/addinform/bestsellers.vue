<template>
  <div>
    <h1>Бестселлеры</h1>
    <ListBookItem v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import leaders from 'raw-loader!@/static/lider.txt';
export default {
  data() {
    return {
      leaders,
      books: [],
    };
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
      const res = await this.$axios.$get('/api/addinform/bestsellers', {
        params: { leaders: this.leaders },
      });
      this.books = res.books;
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
