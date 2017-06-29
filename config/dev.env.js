var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_MOCK: 'http://localhost:9000',
  API_ROOT: 'http://api.smarthr.motouat.com.cn'
})
