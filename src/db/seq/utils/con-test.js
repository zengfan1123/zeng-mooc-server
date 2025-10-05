const seq = require('../seq')

async function conTest() {
  try {
    await seq.authenticate()
    console.log('数据库连接成功')
    return 'ok'
  } catch (err) {
    console.error('连接失败:', err.message)
    return 'fail'
  }
}
module.exports = conTest
