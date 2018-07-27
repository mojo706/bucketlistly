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
      plain: true,
      returning: true,
    })
    return updatedBucketlist[1]
  } catch (err) {
    throw new Error(`Execution Errors: ${err}`)
  }
}
