<template>
  <div>
    <nuxt-link
      :to="`/book/${brand.parent}/${book.parent}/${book.url}`"
      :prefetch="false"
    >
      <img
        :src="`${pathFiles}/${book.id}/${book.titlethumb}.jpg`"
        :alt="`${book.name}`"
      />
    </nuxt-link>
    <p class="price-row">
      Цена <span class="price">{{ book.price }}</span> руб.
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      pathFiles: 'http://www.autopresent.ru/files',
      isStripeLoaded: false,
    };
  },
  props: ['book'],
  head() {
    return {
      script: [
        {
          hid: 'stripe',
          src: '/js/_slider.js',
          async: true,
          callback: () => (this.isStripeLoaded = true),
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['fetchBrand']),
    brand() {
      return this.fetchBrand(this.book.parent);
    },
  },
};
</script>
