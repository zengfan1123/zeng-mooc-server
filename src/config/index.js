const { isDev, isPrd, isPrdDev } = require('../utils/env')
console.log('====================================')
console.log(isDev, isPrd, isPrdDev, 'isDev, isPrd, isPrdDev')
console.log('====================================')
console.log('====================================')
console.log(process.env.NODE_ENV)
console.log('====================================')
let fileName = 'dev.js'
if (isPrd) fileName = 'prd.js'
if (isPrdDev) fileName = 'prd_dev.js'
const conf = require(`./envs/${fileName}`)
module.exports = conf
