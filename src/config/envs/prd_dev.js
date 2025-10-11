const devConf = require('./dev')

Object.assign(devConf.redisConf, {
  // 和 docker-compose Redis 配置的 service 名字一致
  // 【注意】端口依然是 6379而不是 6378，后者是宿主机的端口
  host: 'editor-redis',
})

Object.assign(devConf.mongodbConf, {
  host: 'editor-mongo',
})

Object.assign(devConf.mysqlConf, {
  host: 'editor-mysql',
})
module.exports = devConf
