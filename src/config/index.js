const { isDev, isPrd, isPrdDev } = require('../utils/env')
let fileName = 'dev.js'
if (isPrd) fileName = 'prd.js'
const conf = require(`./envs/${fileName}`)
module.exports = conf
