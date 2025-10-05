const { jwtVerify } = require('../utils/jwt')
const { ErrorRes } = require('../res-module/index.js')
const { loginCheckFailInfo } = require('../res-module/failInfo/index')

module.exports = async (ctx, next) => {
  // login 错误信息
  const errRes = new ErrorRes(loginCheckFailInfo)
  const token = ctx.header.authorization
  if (!token) {
    ctx.body = errRes
    return
  }
  let flag = true
  try {
    const userInfo = await jwtVerify(token)
    console.log('====================================')
    console.log(userInfo)
    console.log('====================================')
    ctx.userInfo = userInfo
  } catch (error) {
    flag = false
    ctx.body = errRes
  }
  flag && (await next())
}
