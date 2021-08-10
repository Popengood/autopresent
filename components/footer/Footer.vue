<template>
  <div class="footer">
    <div class="flex wrap ai-center">
      <div class="brand-col">
        <nuxt-link class="footer-brand" to="/">AutoPresent</nuxt-link>
        <div class="copyright-row">
          Copyright © 2006-<span>{{ year }}</span
          >, Санкт-Петербург
        </div>
      </div>
      <div class="contacts-col">
        Телефон: +7 (921) 303-96-06 (г. Cанкт-Петербург),<br />
        Skype: autopresent,<br />
        E-mail: <a href="mailto:admin@autopresent.ru">admin@autopresent.ru</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
