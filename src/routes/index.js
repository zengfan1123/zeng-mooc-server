const testMysql = require('../db/mysql2')
const conTest = require('../db/seq/utils/con-test')
const router = require('koa-router')()
const { WorkModel } = require('../models/WorkModel.js')
const { cacheGet, cacheSet } = require('../cache/index')

router.get('/api/db-check', async (ctx, next) => {
  const result = await testMysql()
  ctx.body = {
    code: 200,
    message: 'ok',
    data: result,
  }
})
router.get('/api/con-test', async (ctx, next) => {
  const result = await conTest()
  ctx.body = {
    code: 200,
    message: 'ok',
    data: result,
  }
})
router.get('/api/mongo-test', async (ctx, next) => {
  let mongoConnected = false
  try {
    await WorkModel.findOne()
    mongoConnected = true
  } catch (error) {
    console.log(error)
  }
  ctx.body = {
    code: 200,
    message: 'ok',
    data: {
      mongoConnected,
    },
  }
})

router.get('/api/redis-test', async (ctx, next) => {
  // 测试 redis 连接
  cacheSet('name', 'biz editor sever OK - by redis')
  const redisTest = await cacheGet('name')
  ctx.body = {
    code: 200,
    message: 'ok',
    data: {
      redisTest,
    },
  }
})
router.get('/api/test', async (ctx, next) => {
  ctx.body = {
    code: 200,
    message: 'ok',
    data: {
      SERVER_NAME: process.env.SERVER_NAME,
      AUTHOR_NAME: process.env.AUTHOR_NAME,
    },
  }
})
module.exports = router
