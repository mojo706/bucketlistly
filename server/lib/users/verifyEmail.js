const models = require('../../models/index')

module.exports = async query => {
  try {
    const user = await models.Users.find({
      where: { email: query.email },
    })
    if (!user) {
      return {
        message: 'Email not found',
        statusCode: 404,
      }
    }
    if (user.isVerified) {
      return {
        message: 'That email has already been verified',
        statusCode: 202,
      }
    }
    const foundToken = await models.VerificationTokens.find({
      where: { token: query.token },
    })
    if (foundToken) {
      const updatedUser = await user.update({ isVerified: true })
      if (updatedUser) {
        return {
          message: `User with ${user.email} has been verified`,
          statusCode: 200,
        }
      }
      return {
        message: 'Verification failed',
        statusCode: 403,
      }
    }
    return {
      message: 'Token Expired',
      statusCode: 400,
    }
  } catch (error) {
    throw new Error(`Execution Errors: ${error}`)
  }
}
