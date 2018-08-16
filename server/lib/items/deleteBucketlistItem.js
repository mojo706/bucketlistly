const models = require('../../models/index')

/**
 * @function deleteBucketlistItem
 * deletes a bucketlist item
 * @param {String} id
 * @return {Object}
 */
module.exports = async id => {
  try {
    const deletedItem = await models.BucketlistItems.destroy({
      where: { id },
    })
    if (!deletedItem) {
      return {
        message: 'Bucketlist item does not exist',
        statusCode: 409,
      }
    }
    return { message: 'Bucketlist item successfully deleted', statusCode: 200 }
  } catch (err) {
    throw new Error(`Execution Errors: ${err}`)
  }
}
