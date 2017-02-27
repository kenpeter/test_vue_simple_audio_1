// webpack merge
// merge items in array or objects then create a new obj
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

// https://survivejs.com/blog/webpack-merge-interview/
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
