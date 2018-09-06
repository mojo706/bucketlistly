const userRepository = require('../lib/users')

class UsersController {
  static async createUserFromEmail(request, response) {
    const { body } = request
    const resp = await userRepository.createUserFromEmail(body)
    if (resp.error) {
      return response.status(resp.statusCode).json({ error: resp.error })
    }
    return response.status(201).json(resp)
  }

  static async verifyEmail(request, response) {
    const { query } = request
    const resp = await userRepository.verifyEmail(query)
    if (resp.statusCode === 404) {
      return response.status(resp.statusCode).json({ error: resp.message })
    }
    if (resp.statusCode === 202) {
      return response.status(resp.statusCode).json({ error: resp.message })
    }
    if (resp.statusCode === 200) {
      return response.status(resp.statusCode).json(resp.message)
    }
    if (resp.statusCode === 403) {
      return response.status(resp.statusCode).json({ error: resp.message })
    }
    return response.status(resp.statusCode).json({ error: resp.message })
  }
}

module.exports = UsersController
