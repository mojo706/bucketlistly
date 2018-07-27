const models = require('../../models/index')

/**
 * @function createBuckelistItem
 * creates a bucketlist
 * @param {Object} body
 * @return {Object} bucketlist
 */

module.exports = async body => {
  try {
    const [newItem, created] = await models.BucketlistItems.findOrCreate({
      where: { name: body.name, bucketlistId: body.bucketlistId },
      defaults: body,
    })
    if (created === false) {
      return {
        error: 'A bucketlist item with that name already exists',
        statusCode: 409,
      }
    }
    return newItem
  } catch (err) {
    throw new Error(err)
  }
}
