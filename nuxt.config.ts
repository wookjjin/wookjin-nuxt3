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
    '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vee-validate/nuxt',
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
    autoImports: ['defineStore'],
  },
})
