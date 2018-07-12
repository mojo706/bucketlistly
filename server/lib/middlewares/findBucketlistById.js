const models = require('../../models/index')

/**
 * @function findBucketlistById
 * updates a bucketlist
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Object}
 */

module.exports = async (request, response, next) => {
  const { bucketlistId } = request.params
  const bucketlist = await models.Bucketlists.findById(bucketlistId)
  if (!bucketlist) {
    response.status(404).json({ error: 'That buckelist does not exist' })
  }
  next()
}
