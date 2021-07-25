<template>
  <div>
    <h1>{{ book.name }}</h1>
    <div class="white-box preview">
      <div class="flex book">
        <div class="book-img">
          <span v-if="book.novetly" class="newbook"></span>
          <img
            :src="`${pathFiles}/${book.id}/${book.titlethumb}.jpg`"
            :alt="`${book.name}`"
            class="img-lg"
          />
        </div>

        <BookData :book="book" :pathFiles="pathFiles" :isbook="true" />
        <BookPrice :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `Руководства по ремонту и эксплуатации ${this.book.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.book.description,
        },
      ],
    };
  },
  data() {
    return {
      pathFiles: 'http://www.autopresent.ru/files',
    };
  },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  components: {
    BookPrice: () => import('~/components/books/BookPrice'),
    BookData: () => import('~/components/books/BookData'),
  },
};
</script>
