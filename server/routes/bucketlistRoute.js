const express = require('express')

const bucketlistRouter = express.Router()

const findBucketlistById = require('../lib/middlewares/findBucketlistById')
const findBucketlistItemById = require('../lib/middlewares/findBucketlistItemById')
const bucketlistController = require('../controllers/bucketlistController')
const bucketlistItemController = require('../controllers/bucketlistItemsController')
const usersController = require('../controllers/usersController')

const router = () => {
  bucketlistRouter.route('/').post(bucketlistController.createBucketlist)
  bucketlistRouter.route('/all').get(bucketlistController.listBucketlist)
  bucketlistRouter.use('/:bucketlistId', findBucketlistById)
  bucketlistRouter
    .route('/:bucketlistId')
    .get(bucketlistController.getBucketlist)
    .put(bucketlistController.updateBucketlist)
    .delete(bucketlistController.deleteBucketlist)
  bucketlistRouter
    .route('/:bucketlistId/items')
    .post(bucketlistItemController.createBucketlistItem)
  bucketlistRouter.use('/:bucketlistId/items/:itemId', findBucketlistItemById)
  bucketlistRouter
    .route('/:bucketlistId/items/:itemId')
    .put(bucketlistItemController.updateBucketlistItem)
    .delete(bucketlistItemController.deletBucketlistItem)
  // POST /signup
  bucketlistRouter.route('/signup').post(usersController.createUserFromEmail)
  // POST /verication?token=[string]&email=[string]
  bucketlistRouter.route('/verifiation').post(usersController.verifyEmail)
  return bucketlistRouter
}

module.exports = router
