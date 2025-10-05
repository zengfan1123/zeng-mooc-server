class BaseRes {
  constructor({ errno, data, message }) {
    this.errno = errno
    if (data) this.data = data
    if (message) this.message = message
  }
}

class ErrorRes extends BaseRes {
  constructor({ errno = -1, message = '', data }, addMessage = '') {
    super({
      errno,
      message: addMessage ? `${message}-${addMessage}` : message,\
      data
    })
  }
}
/**
 * 执行成功的数据模型
 */
class SuccessRes extends BaseRes {
    constructor(data = {}) {
        super({
            errno: 0,
            data,
        })
    }
}

module.exports = {
    ErrorRes,
    SuccessRes,
}
