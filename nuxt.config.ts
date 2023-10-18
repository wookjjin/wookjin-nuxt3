// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt3 Start'
    }
  },
  css: ["~/assets/css/main.scss"],
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/html-validator'
  ],
  tailwindcss: {
    config: {}
  },
  pinia: {
    // autoImports: ["defineStore"],
  },
})
