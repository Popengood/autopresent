<template>
  <div class="content">
    <h1>Новинки автолитературы по ремонту и эксплуатации автомобилей.</h1>
    <app-listbook v-for="book of books" :key="book.id" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    }
  },
  components: {
    AppListbook: () => import('~/components/books/ListBook'),
  }
}
</script>
