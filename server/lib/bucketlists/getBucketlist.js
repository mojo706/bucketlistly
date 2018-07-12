const models = require('../../models/index')

/**
 * @function getBucketlist
 * queries the database for a single bucketlist
 * @param {String} id
 * @return {Object} bucketlist
 */

module.exports = async id => {
  const bucketlist = await models.Bucketlists.findOne({
    where: { id },
    plain: true,
  })
  return bucketlist
}
