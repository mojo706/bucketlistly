const models = require('../models/index')

/**
 * @function listBucketlist
 * lists all bucketlists for now
 * @param none
 * @return {Array} bucketlists
 */

module.exports = async () => {
  const bucketlists = await models.Bucketlist.findAll({
    plain: true,
  })
  return bucketlists
}
