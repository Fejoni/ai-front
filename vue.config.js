const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'app.ai.test',
    headers: { "Access-Control-Allow-Origin": "*" , "Access-Control-Allow-Credentials": true}
  }
})