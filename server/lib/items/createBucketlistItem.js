const models = require('../../models/index')

/**
 * @function createBuckelistItem
 * creates a bucketlist
 * @param {Object} body
 * @return {Object} bucketlist
 */

module.exports = async body => {
  try {
    const newItem = await models.BucketlistItems.findOrCreate({
      where: { name: body.name, bucketlistId: body.bucketlistId },
      defaults: body,
    })
    return newItem
  } catch (err) {
    throw new Error(err)
  }
}
