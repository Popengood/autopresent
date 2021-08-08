<template>
  <div class="mb31">
    <div class="flex title-row title-row_gallery">
      <h2>Популярные руководства по ремонту</h2>
      <nuxt-link class="link" to="/addinform/bestsellers"
        >Все популярные руководства</nuxt-link
      >
    </div>
    <div class="flex stage best-gallery jc-between">
      <GalleryItem v-for="book in books" :key="book.id" :book="book" />
    </div>
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
  async fetch() {
    try {
      const res = await this.$axios.$get('/api/addinform/bestsellers', {
        params: { leaders: this.leaders },
      });
      this.books = res.books.slice(0, 6);
    } catch (e) {
      throw new Error('Book bestsellers not found');
    }
  },
  components: {
    GalleryItem: () => import('~/components/books/GalleryItem'),
  },
};
</script>
