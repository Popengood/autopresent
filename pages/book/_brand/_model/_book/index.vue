<template>
  <div>
    <h1>Book</h1>
    <!-- <ListBookItem
      :book="book" /> -->
    {{ book }}
  </div>
</template>

<script>
export default {
  components: {
    ListBookItem: () => import('~/components/books/ListBookItem'),
  },
  data() {
    return {
      book: [],
    };
  },
  async fetch() {
    try {
      const path = `/api/book/${this.$nuxt._route.params.brand}/${this.$nuxt._route.params.model}/${this.$nuxt._route.params.book}`;
      console.log('path=', path);
      this.book = await this.$axios.$get(path);
    } catch (e) {
      throw new Error('Books not found');
    }
  },
}
</script>
