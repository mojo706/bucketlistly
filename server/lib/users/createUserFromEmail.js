const crypto = require('crypto-random-string')

const { sendVerificationEmail } = require('../../helpers/sendGridEmailHelper')
const models = require('../../models/')

module.exports = async body => {
  try {
    const [user, created] = await models.Users.findOrCreate({
      where: { email: body.email },
      defaults: body,
    })
    if (created === false) {
      return {
        error: 'A user with this email address already exists',
        statusCode: 409,
      }
    }
    const result = await models.VerificationTokens.create({
      userId: user.id,
      token: crypto(16),
    })
    sendVerificationEmail(user.email, result.token)
    return {
      message: `${user.email} account created successfully`,
      statusCode: 200,
    }
  } catch (error) {
    throw new Error(`Execution Errors: ${error}`)
  }
}
