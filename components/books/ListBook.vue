<template>
  <ul class="preview">
    <app-book />
  </ul>
</template>

<script>
export default {
  components: {
    AppBook: () => import('~/components/books/Book'),
  }
}
</script>
