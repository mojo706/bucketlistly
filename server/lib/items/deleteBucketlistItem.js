const models = require('../../models/index')

/**
 * @function deleteBucketlistItem
 * deletes a bucketlist item
 * @param {String} id
 * @return {Object}
 */
module.exports = async id => {
  try {
    await models.Bucketlists.destroy({
      where: { id },
    })
    return { message: 'Bucketlist item successfully deleted', statusCode: 200 }
  } catch (err) {
    throw new Error(err)
  }
}
