const path = require('path')
const simpleGit = require('simple-git')
const seq = require('../seq.js')
const { isDev } = require('../../../utils/env')

require('require-all')({
  // // src/models 中可能会有 mongoose 的 model ，不过这里获取了也没关系
  dirname: path.join(__dirname, '../../../models'),
  filter: /(.+Models)\.js$/,
  // 递归获取子文件夹
  recursive: true,
  // 忽略 .git 或者 .svn 文件夹
  excludeDirs: /^\.(git|svn)$/,
})

const syncDb = async () => {
  let needToSyncDb = true

  // 只适用于开发环境！！！
  if (isDev) {
    // 开发环境下，修改频繁，每次重启都同步数据表，消耗太大
    // 所以，开发环境下，判断是否修改了 src/models 中的内容？
    // 如果是，则同步数据表。否则，不用同步数据表。
    const git = simpleGit()
    // 获取 git status 修改的文件，modified 格式如  [ '.gitignore', 'package.json', 'src/models/README.md' ]
    const {
      modified,
      not_added: notAdded,
      created,
      deleted,
      renamed,
    } = await git.status()
    const fileChanged = modified
      .concat(notAdded)
      .concat(created)
      .concat(deleted)
      .concat(renamed)
    if (fileChanged.length > 0) {
      const changedDbFiles = fileChanged.some((f) => {
        if (f.indexOf('src/models/') === 0) return true
        if (f.indexOf('src/db/seq/') === 0) return true
        return false
      })
      if (!changedDbFiles) needToSyncDb = false
    }
  }
  if (needToSyncDb) {
    await seq.sync({ alter: true })
    console.log('数据表同步成功')
  } else {
    console.log('数据表无需同步')
  }
}
module.exports = syncDb
