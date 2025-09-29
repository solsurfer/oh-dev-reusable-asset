// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxt/fonts',
    '@nuxt/eslint'
  ],
  devServer: {
    host: '0.0.0.0'
  },
  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from Owls Head 👋'
    }
  },
  
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {},

  build: {
  babel: {
    presets({isServer}) {
      const targets = isServer ? { node: 'current' } : { ie: 11 }
      return [
        [ require.resolve("@babel/preset-env"), { targets }  ]
      ]
    },
    plugins: [
      "@babel/syntax-dynamic-import",
      "@babel/transform-runtime",
      "@babel/transform-async-to-generator"
    ]
  }},

  // Development config
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  }
})
