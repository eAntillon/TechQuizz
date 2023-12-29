export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TechQuizz",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300&family=Montserrat:wght@700&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["primeflex/primeflex.css", "~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    "primevue/nuxt",
    [
      "nuxt-supabase",
      {
        supabaseUrl: "https://zbmimsbcbtvfqpnxymht.supabase.co",
        supabaseKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpibWltc2JjYnR2ZnFwbnh5bWh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNzQ3NjQsImV4cCI6MjAxNDk1MDc2NH0.xmc40DEQsn315InBYYJNSKeDtAuED-B2s0QJIeLYNbo",
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ["primevue"],
  },
  primevue: {
    theme: "lara-light-purple",
    ripple: true,
    // components: [/* What components you want */]
  },
  server: {
    host: "0.0.0.0"
  },
  env: {
    quizz_api_url: "https://quizapi.io/api/v1/questions",
    api_key: "fzxyQpq5AU7m44sDTYbD424OJ9d4cgjREwCXotAC",
  },
  generate: {
    fallback: true,
  },
};
