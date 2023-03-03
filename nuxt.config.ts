// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    vite: {
      css: { devSourcemap: true },
    },
  },
  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: 'https://pescarte.uenf.br/api',
      },
    },
  },
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts'
  ],
  css: ['@/assets/css/main.scss'],
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-purgecss',
    'magic-regexp/nuxt',
    'nuxt-lodash',
    'nuxt-typed-router',
    '@vite-pwa/nuxt',
    'nuxt-viewport',
  ],
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    families: {
      WorkSans: true,
    }
  }
})
