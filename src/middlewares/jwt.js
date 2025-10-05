const jwtKoa = require('koa-jwt')
const { JWT_SECRET, JWT_IGNORE_PATH } = require('../config/constant')
module.exports = jwtKoa({
  secret: JWT_SECRET,
  cookie: 'jwt_token',
}).unless({
  // jwt 忽略的路由
  path: JWT_IGNORE_PATH,
})
