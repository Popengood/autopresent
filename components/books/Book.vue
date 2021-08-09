<template>
  <div>
    <h1>{{ book.name }}</h1>
    <div class="white-box">
      <div class="flex book">
        <div class="book-img">
          <span v-if="book.novetly" class="newbook"></span>
          <img
            v-if="book.instock_tmb"
            ref="thumb"
            :src="`${pathFiles}/${book.id}/${book.titlethumb}.jpg`"
            :alt="`${book.name}`"
            @click="showCover"
            class="img-lg img-zoom"
          />
          <img
            v-else
            :src="`${pathFiles}/${book.id}/${book.titlethumb}.jpg`"
            :alt="`${book.name}`"
            class="img-lg"
          />
        </div>

        <BookData :book="book" :pathFiles="pathFiles" :isbook="true" />
        <BookPrice :book="book" />
      </div>
      <div class="description" v-html="description"></div>
    </div>

    <slot v-if="book.instock_tmb">
      <div
        class="overlay"
        :class="[{ fadeOut: isFadeOut }, { fadeIn: isFadeIn }]"
        @click="hideCover"
      ></div>
      <div
        class="flex wrapper-cover"
        :class="[{ fadeOut: isFadeOut }, { fadeIn: isFadeIn }]"
      >
        <span class="flex closer" @click="hideCover">×</span>
        <img
          class="img-cover"
          :src="`${pathFiles}/${book.id}/${book.titlethumb}_b.jpg`"
        />
      </div>
    </slot>
  </div>
</template>

<script>
const iconv = require('iconv-lite');

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
      pathFiles: 'http://autopresent/files',
      thumb: null,
      isFadeIn: false,
      isFadeOut: false,
      status: false,
      description: '',
    };
  },
  async fetch() {
    try {
      const res = await this.$axios.$get(
        `${this.pathFiles}/${this.book.id}/content.tpl`,
        {
          responseType: 'arraybuffer',
          responseEncoding: 'binary',
        }
      );
      const text = new Buffer(res, 'binary');
      this.description = iconv.decode(Buffer.from(text), 'win1251');
    } catch (e) {
      throw new Error("Book's description not found", e);
    }
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
  mounted() {
    if (this.$refs.thumb) {
      document.addEventListener('keydown', this.hideCover);
    }
  },
  methods: {
    showCover() {
      this.isFadeIn = true;
      this.isFadeOut = false;
      this.status = true;
    },
    hideCover(event) {
      if (this.status && (event.type != 'keydown' || event.keyCode === 27)) {
        this.isFadeIn = false;
        this.isFadeOut = true;
        this.status = false;
      }
    },
  },
};
</script>
