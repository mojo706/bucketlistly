const models = require('../models/index')

/**
 * @function createBuckelist
 * creates a bucketlist
 * @param {Object} body
 * @return {Object} bucketlist
 */
module.exports = async body => {
  try {
    const newBucketlist = await models.Bucketlist.create({
      body,
    })
    return newBucketlist
  } catch (err) {
    throw new Error(err)
  }
}
