// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt3 Start'
    }
  },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Add cors headers on API routes
    // '/api/**': { cors: true },
  },
  css: ['~/assets/css/main.scss'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
    '@nuxtjs/eslint-module'
  ],
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  tailwindcss: {
    config: {}
  },
  pinia: {
    // Auto imports: https://pinia.vuejs.org/ssr/nuxt.html#Auto-imports
    // storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  typescript: {
    typeCheck: true
  }
})
