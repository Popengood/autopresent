<template>
  <div>
    <h1>Руководства по ремонту и эксплуатации {{ model[0].name }}.</h1>
    <ListBookItem v-for="book in books.books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      books: [],
    };
  },
  head() {
    return {
      title: `Руководства по ремонту и эксплуатации ${this.model[0].name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.model[0].description,
        },
      ],
    };
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
  computed: {
    ...mapGetters('aside', ['fetchBrand']),
    model() {
     return this.fetchBrand(this.$route.params.model);
    },
  },
  components: {
    ListBookItem: () => import('~/components/books/ListBookItem'),
  }
}
</script>
