const ENV = process.env.NODE_ENV || ''
console.log('====================================')
console.log(ENV, 'ENV')
console.log('====================================')
module.exports = {
  ENV,
  isPrd: ENV === 'production',
  isPrdDev: ENV === 'prd_dev',
  isDev: ENV === 'dev',
  isTest: ENV.indexOf('test') === 0,
  isTestLocal: ENV === 'test_local',
  isTestRemote: ENV === 'test_remote',
}
