<template>
  <ul class="flex top-menu">
    <li>
      <nuxt-link exact active-class="active" to="/">главная</nuxt-link>
    </li>
    <li>
      <nuxt-link no-prefetch active-class="active" to="/inform/howorder">как заказать</nuxt-link>
    </li>
    <li>
      <nuxt-link no-prefetch active-class="active" to="/inform/delivery">доставка</nuxt-link>
    </li>
    <li>
      <nuxt-link no-prefetch active-class="active" to="/inform/faq">вопросы и ответы</nuxt-link>
    </li>
    <li>
      <nuxt-link no-prefetch active-class="active" to="/inform/contact">контакты</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {}
</script>
