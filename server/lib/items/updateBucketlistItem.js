const models = require('../../models/index')

/**
 * @function updateBucketlistItem
 * updates a bucketlist item
 * @param {Object} body
 * @return {Object} bucketlistItem
 */
module.exports = async (id, body) => {
  try {
    const updatedBucketlistItem = await models.BucketlistItems.update(body, {
      where: { id },
    })
    return { bucketlist: updatedBucketlistItem }
  } catch (err) {
    throw new Error(err)
  }
}
