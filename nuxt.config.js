module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Руководства по ремонту и эксплуатации, руководства по техническому обслуживанию автомобилей',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Руководства по ремонту, эксплуатации, руководства по техническому обслуживанию автомобилей. Электросхемы и каталоги запчастей.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'Roboto',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:400,500&amp;subset=cyrillic',
      },
    ],
    script: [
      {
        src: '/js/function.js',
        type: 'text/javascript',
        async: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  pwa: {
    icon: false, // disables the icon module
  },

  axios: {},

  generate: {
    fallback: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty',
        tls: 'empty',
        child_process: 'empty',
        iconv: 'empty',
      };
    },
  },

  telemetry: false,
  target: 'static',

  publicRuntimeConfig: {
    pathFiles: 'http://autopresent/files',
  },
};
