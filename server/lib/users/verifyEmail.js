const jwt = require('jsonwebtoken')
const models = require('../../models/index')

const secret = process.env.SECRET_KEY
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
    const expiredToken = jwt.verify(
      foundToken.expireToken,
      secret,
      (error, decoded) => {
        if (error) {
          return { message: 'Token expired' }
        }
        return {
          message: decoded,
          statusCode: 200,
        }
      },
    )
    if (foundToken) {
      if (expiredToken.message === 'Token expired') {
        return {
          message: 'Token Expired',
          statusCode: 400,
        }
      }
      const updatedUser = await user.update({ isVerified: true })
      if (updatedUser) {
        return {
          message: `User ${user.email} has been verified`,
          statusCode: 200,
        }
      }
      return {
        message: 'Verification failed',
        statusCode: 403,
      }
    }
  } catch (error) {
    throw new Error(`Execution Errors: ${error}`)
  }
}
