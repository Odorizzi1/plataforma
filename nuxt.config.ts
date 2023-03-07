// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  apollo: {
    autoImports: true,
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    proxyCookies: true,
    clients: {
      default: {
        httpEndpoint: "https://pescarte.uenf.br/api",
      },
      local: {
        httpEndpoint: "http://localhost:4000/api",
      },
    },
  },
  components: true,
  css: ["@/assets/css/main.scss"],
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/apollo",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "nuxt-purgecss",
    "magic-regexp/nuxt",
    "nuxt-lodash",
    "nuxt-typed-router",
    "@vite-pwa/nuxt",
    "nuxt-viewport",
  ],
});
