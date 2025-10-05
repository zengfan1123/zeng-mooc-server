const mongodbConf = require('../config/envs/dev').mongodbConf
const mongoose = require('mongoose')

const { host, port, database, user, password } = mongodbConf
let url = `mongodb://${host}:${port}` // dev 环境
if (user && password) {
  url = `mongodb://${user}:${password}@${host}:${port}` // prd 环境
}
mongoose.set('useCreateIndex', true) // 解决 collection.ensureIndex 已废弃的告警
mongoose.set('useFindAndModify', false) // 解决 collection.findAndModify 已废弃的告警

// 开始连接（ 使用用户名和密码时，需要 `?authSource=admin` ）
mongoose.connect(`${url}/${database}?authSource=admin`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', (err) => {
  console.error('数据库连接失败', err)
})

db.once('open', () => {
  console.log('MongoDB 数据库连接成功')
})

module.exports = mongoose
