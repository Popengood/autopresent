<template>
  <div class="content">
    <h1>Новинки автолитературы по ремонту и эксплуатации автомобилей.</h1>
    <ListBookItem v-for="book in books" :key="book.id" :book="book" />
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
      title: 'Новинки автолитературы по ремонту и эксплуатации автомобилей',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Новые руководства по ремонту. Новинки издательств литературы по ремонту и эксплуатации автомобилей.',
        },
      ],
    };
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/api/addinform/novetly');
      this.books = res.books;
    } catch (e) {
      throw new Error('Book novetly not found');
    }
  },
  components: {
    ListBookItem: () => import('~/components/books/ListBookItem'),
  },
};
</script>
