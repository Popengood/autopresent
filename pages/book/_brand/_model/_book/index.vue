<template>
  <div class="w100p">
    <p v-if="Object.keys(book).length === 0">Book not found</p>
    <AppBook v-else :book="book" />
  </div>
</template>

<script>
export default {
  validate({ params, store }) {
    return store.state.brands.some(
      brand => brand.parent === params.brand && brand.url === params.model
    );
  },
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
    const path = `/api/book/${this.paramsBrand}/${this.paramsModel}/${this.paramsBook}`;
    await this.$axios
      .$get(path)
      .then(res => {
        if (Object.keys(res.book).length === 0) {
          throw new Error('Book not found');
        } else {
          this.book = res.book;
        }
      })
      .catch(() => this.$nuxt.error({ statusCode: 404 }));
  },
};
</script>
