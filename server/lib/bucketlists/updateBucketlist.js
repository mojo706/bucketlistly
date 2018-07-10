const models = require('../../models/index')

/**
 * @function updateBucketlist
 * updates a bucketlist
 * @param {Object} body
 * @return {Object} bucketlist
 */
module.exports = async (id, body) => {
  try {
    let errorMessage = ''
    const bucketlistToUpdate = await models.Bucketlist.findById(id)
    if (!bucketlistToUpdate) {
      errorMessage = 'That Buckelist Does not exist'
      return { error: errorMessage }
    }
    const updatedBucketlist = await models.Bucketlist.update(body, {
      where: { id },
    })
    return { bucketlist: updatedBucketlist }
  } catch (err) {
    throw new Error(err)
  }
}
