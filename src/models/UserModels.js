const seq = require('../db/seq/seq.js')
const { STRING, DATE, BOOLEAN } = require('../db/seq/types.js')

const User = seq.define('User', {
  userName: {
    type: STRING,
    allowNull: false,
    unique: 'userName',
    comment: '用户名，唯一',
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: '密码',
  },
  // nickName: {
  //   type: STRING,
  //   allowNull: false,
  //   comment: '昵称',
  //   defaultValue: '游客',
  // },
  // phoneNumber: {
  //   type: STRING,
  //   allowNull: true,
  //   unique: 'phoneNumber',
  //   comment: '手机号，唯一',
  // },
  // email: {
  //   type: STRING,
  //   allowNull: true,
  //   unique: 'email',
  //   comment: '邮箱，唯一',
  // },
  // gender: {
  //   type: STRING,
  //   allowNull: true,
  //   comment: '性别',
  //   defaultValue: '保密',
  //   comment: '性别（1 男性，2 女性，0 保密）',
  // },
  // picture: {
  //   type: STRING,
  //   comment: '头像，图片地址',
  // },
  // city: {
  //   type: STRING,
  //   comment: '城市',
  // },
  // latestLoginAt: {
  //   type: DATE,
  //   defaultValue: null,
  //   comment: '最后登录时间',
  // },
  // isFrozen: {
  //   type: BOOLEAN,
  //   defaultValue: false,
  //   comment: '用户是否冻结',
  // },
})
module.exports = User
