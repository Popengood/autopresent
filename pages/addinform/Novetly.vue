<template>
  <div class="content">
    <h1>Новинки автолитературы по ремонту и эксплуатации автомобилей.</h1>
    <app-listbook />
  </div>
</template>

<script>
export default {
  components: {
    AppListbook: () => import('~/components/books/ListBook'),
  }
}
</script>
