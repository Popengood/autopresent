<template>
  <div class="white-box preview">
    <h2>
      <nuxt-link :to="`/book/${brand.parent}/${book.parent}/${book.url}`">{{
        book.name
      }}</nuxt-link>
    </h2>
    <div class="flex book">
      <div class="book-img">
        <nuxt-link
          v-if="book.novetly"
          :to="`/book/${brand.parent}/${book.parent}/${book.url}`"
          class="newbook"
        ></nuxt-link>
        <nuxt-link :to="`/book/${brand.parent}/${book.parent}/${book.url}`"
          ><img
            :src="`${pathFiles}/${book.id}/${book.titlethumb}.jpg`"
            :alt="`${book.name}`"
            class="img-sm"
        /></nuxt-link>
      </div>

      <BookData :book="book" />
      <BookPrice :book="book" />
    </div>

    <div v-html="book.description"></div>
    <nuxt-link
      class="read-more"
      :to="`/book/${brand.parent}/${book.parent}/${book.url}`"
      title="Читать дальше"
      >Читать далее</nuxt-link
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      pathFiles: 'http://www.autopresent.ru/files',
    };
  },
  props: ['book'],
  components: {
    BookPrice: () => import('~/components/books/BookPrice'),
    BookData: () => import('~/components/books/BookData'),
  },
  computed: {
    ...mapGetters(['fetchBrand']),
    brand() {
      return this.fetchBrand(this.book.parent);
    },
  },
};
</script>
