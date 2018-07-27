const models = require('../../models/index')

/**
 * @function findBucketlistItemById
 * updates a bucketlist
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Object}
 */

module.exports = async (request, response, next) => {
  const { itemId } = request.params
  const item = await models.BucketlistItems.findById(itemId)
  if (!item) {
    return response
      .status(404)
      .json({ error: 'That buckelist item does not exist' })
  }
  return next()
}
