const models = require('../../models/index')

/**
 * @function deleteBucketlist
 * deletes bucketlist
 * @param {String} id
 * @return {Object}
 */
module.exports = async id => {
  try {
    await models.Bucketlists.destroy({
      where: { id },
    })
    return { message: 'Bucketlist successfully deleted' }
  } catch (err) {
    throw new Error(err)
  }
}
