module.exports = {
  mysqlConf: {
    host: 'localhost',
    user: 'root',
    password: 'ServBay.dev',
    database: 'imooc_lego_course',
    port: '3306',
  },
  mongodbConf: {
    host: 'localhost',
    port: '27017',
    database: 'imooc_lego_course',
  },
  redisConf: {
    port: '6379',
    host: '127.0.0.1',
  },
  // jwt 过期时间
  jwtExpiresIn: '1d', // 1. 字符串，如 '1h' '2d'； 2. 数字，单位是 s
}
