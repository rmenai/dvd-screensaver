// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  imports: { dirs: ["stores"] },
  modules: [
    "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org
    "@nuxtjs/i18n", // https://v8.i18n.nuxtjs.org
    "@nuxtjs/tailwindcss", // https://tailwindcss.com
    "@pinia/nuxt", // https://pinia.vuejs.org
    "@vueuse/nuxt", // https://vueuse.org/guide
    "nuxt-font-loader", // https://github.com/ivodolenc/nuxt-font-loader
    "nuxt-icon", // https://github.com/nuxt-modules/icon
  ],

  colorMode: { classSuffix: "", storageKey: "theme" },

  i18n: {
    baseUrl: process.env.SITE_URL || "", // For SEO.
    detectBrowserLanguage: { cookieKey: "locale" },
    langDir: "assets/locales",
    defaultLocale: "en",
    locales: [{ code: "en", iso: "en-US", name: "English", file: "en.json" }],
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || "",
    },
  },
});
