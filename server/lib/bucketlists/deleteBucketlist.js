const models = require('../../models/index')

/**
 * @function deleteBucketlist
 * deletes bucketlist
 * @param {String} id
 * @return {Object}
 */
module.exports = async id => {
  try {
    let message = ''
    const bucketlistToDelete = await models.Bucketlist.findById(id)
    if (!bucketlistToDelete) {
      message = 'That buckelist does not exist'
      return { error: message }
    }
    await models.Bucketlist.destroy({
      where: { id },
    })
    message = 'Bucketlist successfully deleted'
    return { message }
  } catch (err) {
    throw new Error(err)
  }
}
