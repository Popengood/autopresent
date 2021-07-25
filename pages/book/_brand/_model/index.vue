<template>
  <div>
    <h1>Руководства по ремонту и эксплуатации {{ model.name }}.</h1>
    <ListBookItem v-for="book in books.books" :key="book.id" :book="book" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  validate({ params, store }) {
    const validateParams = store.state.brands.some(
      brand => brand.parent === params.brand && brand.url === params.model
    );
    if (!validateParams) return false;
    return true;
  },
  head() {
    return {
      title: `Руководства по ремонту и эксплуатации ${this.model.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.model.description,
        },
      ],
    };
  },
  components: {
    ListBookItem: () => import('~/components/books/ListBookItem'),
  },
  data() {
    return {
      books: [],
      paramsBrand: this.$nuxt._route.params.brand,
      paramsModel: this.$nuxt._route.params.model,
    };
  },
  async fetch() {
    try {
      const path = `/api/book/${this.paramsBrand}/${this.paramsModel}`;
      this.books = await this.$axios.$get(path);
    } catch (e) {
      throw new Error('Books not found');
    }
  },
  computed: {
    ...mapGetters(['fetchBrand']),
    model() {
      return this.fetchBrand(this.$route.params.model);
    },
  },
};
</script>
