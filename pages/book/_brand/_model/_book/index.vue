<template>
  <div class="w100p">
    <AppBook :book="book" />
  </div>
</template>

<script>
export default {
  components: {
    AppBook: () => import('~/components/books/Book'),
  },
  data() {
    return {
      book: {},
      paramsBrand: this.$nuxt._route.params.brand,
      paramsModel: this.$nuxt._route.params.model,
      paramsBook: this.$nuxt._route.params.book,
    };
  },
  async fetch() {
    try {
      const path = `/api/book/${this.paramsBrand}/${this.paramsModel}/${this.paramsBook}`;
      this.book = await this.$axios.$get(path);
      this.book = this.book.book;
    } catch (e) {
      throw new Error('Books not found');
    }
  },
};
</script>
