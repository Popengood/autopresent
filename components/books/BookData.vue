<template>
  <div class="book-data">
    <p class="articul-row">
      Артикул: <span class="price">{{ book.articul }}</span>
    </p>
    <p>
      Издательство: «{{ book.publishing }}»,<br />
      <slot v-if="book.series">Серия: «{{ book.series }}»,<br /></slot>
      Цветность: {{ book.color }},<br />
      Количество страниц: {{ book.numpages }},<br />
      <slot v-if="book.isbn">ISBN: {{ book.isbn }}</slot>
    </p>
    <slot v-if="isbook">
      <p class="title" v-if="book.tabcontents || book.electrical">
        Вы можете посмотреть:
      </p>
      <slot v-if="book.tabcontents"
        ><span class="link" @click="showTitle">Содержание книги</span><br
      /></slot>
      <slot v-if="book.electrical"
        ><span class="link" @click="showScheme">Пример электросхемы</span></slot
      >
    </slot>
  </div>
</template>

<script>
export default {
  props: ['book', 'pathFiles', 'isbook'],
  methods: {
    showTitle() {
      window.open(`${this.pathFiles}/${this.book.id}/title.pdf`, '_blank');
    },
    showScheme() {
      window.open(`${this.pathFiles}/${this.book.id}/scheme.pdf`, '_blank');
    },
  },
};
</script>
