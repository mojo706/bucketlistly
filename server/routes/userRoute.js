const express = require('express')

const userRouter = express.Router()

const usersController = require('../controllers/usersController')

const router = () => {
  // POST /signup
  userRouter.route('/signup').post(usersController.createUserFromEmail)
  // POST /verification?token=[string]&email=[string]
  userRouter.route('/verification').post(usersController.verifyEmail)
  return userRouter
}

module.exports = router
