const models = require('../../models/index')

/**
 * @function updateBucketlist
 * updates a bucketlist
 * @param {Object} body
 * @return {Object} bucketlist
 */
module.exports = async (id, body) => {
  try {
    const updatedBucketlist = await models.Bucketlists.update(body, {
      where: { id },
    })
    return { bucketlist: updatedBucketlist }
  } catch (err) {
    throw new Error(err)
  }
}
