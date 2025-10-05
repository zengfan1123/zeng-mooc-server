const util = require('util')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/constant')
const { jwtExpiresIn } = require('../config/index')
const verify = util.promisify(jwt.verify)

async function jwtVerify(token) {
  const data = await verify(token.split(' ')[1])
  return data
}

async function jwtSign(data) {
  const token = jwt.sign(data, JWT_SECRET, { expiresIn: jwtExpiresIn })
}

module.exports = {
  jwtVerify,
  jwtSign,
}
