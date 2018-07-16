const models = require('../../models/index')

/**
 * @function createBuckelist
 * creates a bucketlist
 * @param {Object} body
 * @return {Object} bucketlist
 */
module.exports = async body => {
  try {
    const [bucketlist, created] = await models.Bucketlists.findOrCreate({
      where: { name: body.name },
      defaults: body,
    })
    if (!created) {
      return {
        error: 'A bucketlist with that name already exists',
        statusCode: 409,
      }
    }
    return bucketlist
  } catch (err) {
    throw new Error(`Missing Required Parameters: ${err}`)
  }
}
