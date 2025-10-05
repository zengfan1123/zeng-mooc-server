const mysql = require('mysql2/promise')
const { mysqlConf } = require('../config/envs/dev')
const testMysql = async function () {
  const connection = await mysql.createConnection(mysqlConf)
  const [rows] = await connection.execute('select now()')

  return rows
}

module.exports = testMysql
