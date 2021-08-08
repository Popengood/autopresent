<template>
  <div class="mb31">
    <div class="flex title-row title-row_gallery">
      <h2>Новинки автолитературы</h2>
      <nuxt-link class="link" to="/addinform/novetly"
        >Все новинки автолитературы</nuxt-link
      >
    </div>
    <div class="white-box white-box_gallery">
      <div class="gallery">
        <div class="slider">
          <div class="flex stage">
            <GalleryItem v-for="book in books" :key="book.id" :book="book" />
          </div>
        </div>
        <div class="control">
          <div class="flex jc-between nav-ctrl" data-hidden="true">
            <span class="flex prev" data-shift="prev"></span>
            <span class="flex next" data-shift="next"></span>
          </div>
          <ul class="dots-ctrl" data-hidden="true"></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    };
  },
  async fetch() {
    try {
      const res = await this.$axios.$get('/api/addinform/novetly');
      this.books = res.books.slice(0, 10);
    } catch (e) {
      throw new Error('Book novetly not found');
    }
  },
  components: {
    GalleryItem: () => import('~/components/books/GalleryItem'),
  },
};
</script>
