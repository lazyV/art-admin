'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl: '"http://10.155.195.226:3000/admin"',
  imgUrl: '"http://10.155.195.226:3000"'
})
