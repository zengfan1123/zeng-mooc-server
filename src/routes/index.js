const testMysql = require('../db/mysql2')
const conTest = require('../db/seq/utils/con-test')
const router = require('koa-router')()
const { WorkModel } = require('../models/WorkModel.js')
const { cacheGet, cacheSet } = require('../cache/index')

router.get('/api/dbLinkCheck', async (ctx, next) => {
  const mysqlResult = await testMysql()
  const conResult = await conTest()
  let mongoConnected = false
  try {
    await WorkModel.findOne()
    mongoConnected = true
  } catch (error) {
    console.log(error)
  }
  // 测试 redis 连接
  cacheSet('name', 'biz editor sever OK - by redis')
  const redisTest = await cacheGet('name')
  ctx.body = {
    code: 200,
    message: 'ok',
    data: {
      mysqlConnected: mysqlResult,
      seqConnected: conResult,
      mongoConnected,
      redisTest: redisTest || null,
      SERVER_NAME: process.env.SERVER_NAME || null,
      AUTHOR_NAME: process.env.AUTHOR_NAME || null,
    },
  }
})
module.exports = router
