const createUserFromEmail = require('./createUserFromEmail')
const verifyEmail = require('./verifyEmail')

class UserRepository {
  static createUserFromEmail(body) {
    return createUserFromEmail(body)
  }

  static verifyEmail(query) {
    return verifyEmail(query)
  }
}

module.exports = UserRepository
