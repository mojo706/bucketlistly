const models = require('../../models/index')

/**
 * @function deleteBucketlistItem
 * deletes a bucketlist item
 * @param {String} id
 * @return {Object}
 */
module.exports = async id => {
  try {
    let message = ''
    const bucketlistToDelete = await models.Bucketlist.findById(id)
    if (!bucketlistToDelete) {
      message = 'That buckelist item does not exist'
      return { error: message }
    }
    await models.Bucketlist.destroy({
      where: { id },
    })
    message = 'Bucketlist item successfully deleted'
    return { message }
  } catch (err) {
    throw new Error(err)
  }
}
