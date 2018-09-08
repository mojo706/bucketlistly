const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const env = process.env.NODE_ENV || 'development'
const config = require('../../config/config.json')[env]

const sendVerificationEmail = (to, token) => {
  const { hostUrl } = config
  const msg = {
    to,
    from: process.env.EMAIL_SENDER,
    subject: 'Please verify your email',
    html: `Click on this link to verify your email ${hostUrl}users/verification?token=${token}&email=${to}`,
  }
  sgMail.send(msg, error => {
    if (error) {
      throw new Error(`Execution Errors: ${error}`)
    }
  })
}

module.exports = { sendVerificationEmail }
