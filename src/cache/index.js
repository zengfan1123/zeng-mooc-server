const redisClient = require('../db/redis')

/**
 * redis set
 * @param {string} key key
 * @param {string|Object} val val
 * @param {number} timeout 过期时间，单位 s ，默认 1h
 */
const cacheSet = (key, val, timeout = 60 * 60) => {
  let formatVal
  if (typeof val === 'object') {
    formatVal = JSON.stringify(val)
  } else {
    formatVal = val
  }
  redisClient.set(key, formatVal)
  redisClient.expire(key, timeout)
}

const cacheGet = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, val) => {
      if (err) {
        reject(err)
        return
      }
      if (val == null) {
        resolve(null)
        return
      }
      try {
        resolve(JSON.parse(val))
      } catch (err) {
        resolve(val)
      }
    })
  })
}

module.exports = {
  cacheGet,
  cacheSet,
}
