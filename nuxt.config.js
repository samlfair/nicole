export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: process.env.TARGET || "server",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Nunito:wght@600;800&display=swap"
      }
    ],
    script: [
      {
        src:
          "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
      }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/resetr.css", "@/assets/common.css"],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "@nuxtjs/prismic",
      {
        endpoint: "https://nicolegiaco.cdn.prismic.io/api/v2",
        preview: "/preview",
        linkResolver: "@/plugins/link-resolver",
        apiOptions: {
          routes: [
            {
              type: "post",
              path: "/:uid"
            }
          ]
        }
      }
    ],
    ["nuxt-sm"]
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  }
};
