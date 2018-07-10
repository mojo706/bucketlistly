const models = require('../../models/index')

/**
 * @function createBuckelistItem
 * creates a bucketlist
 * @param {Object} body
 * @return {Object} bucketlist
 */

module.exports = async body => {
  try {
    const newBucketlistItem = await models.BucketlistItem.create({
      body,
    })
    return newBucketlistItem
  } catch (err) {
    throw new Error(err)
  }
}
