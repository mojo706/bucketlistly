const models = require('../../models/index')

/**
 * @function updateBucketlistItem
 * updates a bucketlist item
 * @param {Object} body
 * @return {Object} bucketlistItem
 */
module.exports = async (id, body) => {
  try {
    let errorMessage = ''
    const bucketlistItemToUpdate = await models.BucketlistItem.findById(id)
    if (!bucketlistItemToUpdate) {
      errorMessage = 'That buckelist item does not exist'
      return { error: errorMessage }
    }
    const updatedBucketlistItem = await models.BucketlistItem.update(body, {
      where: { id },
    })
    return { bucketlist: updatedBucketlistItem }
  } catch (err) {
    throw new Error(err)
  }
}
