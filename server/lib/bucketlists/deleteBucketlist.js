const models = require('../../models/index')

/**
 * @function deleteBucketlist
 * deletes bucketlist
 * @param {String} id
 * @return {Object} bucketlist
 */
module.exports = async id => {
  try {
    let errorMessage = ''
    let successMessage = ''
    const bucketlistToDelete = await models.Bucketlist.findById(id)
    if (!bucketlistToDelete) {
      errorMessage = 'That Buckelist Does not exist'
      return { error: errorMessage }
    }
    await models.Bucketlist.destroy({
      where: { id },
    })
    successMessage = 'Bucketlist successfully deleted'
    return successMessage
  } catch (err) {
    throw new Error(err)
  }
}
