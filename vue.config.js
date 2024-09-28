const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`
      },
      scss: {
        // Para SCSS también puedes usar la clave `scss` (opcional)
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/interactive-rating-component-vue'
  : '/'
})
