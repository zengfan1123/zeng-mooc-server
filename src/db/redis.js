const redis = require('redis')
const { redisConf } = require('../config')
const { port, host, password } = redisConf
let opt = {}
if (password) {
  opt.password = password
}
const redisClient = redis.createClient(port, host, opt)
redisClient.on('error', (err) => {
  console.log('====================================')
  console.log(err)
  console.log('====================================')
})

module.exports = redisClient
