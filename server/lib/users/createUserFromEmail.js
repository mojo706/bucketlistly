const crypto = require('crypto-random-string')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { sendVerificationEmail } = require('../../helpers/sendGridEmailHelper')
const models = require('../../models/')

const secret = process.env.SECRET_KEY

module.exports = async body => {
  try {
    body.password = bcrypt.hashSync(body.password, 8)
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
    const expireToken = jwt.sign({ id: user.id }, secret, { expiresIn: 86400 })
    const result = await models.VerificationTokens.create({
      userId: user.id,
      token: crypto(16),
      expireToken,
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
