/**
 * @function buildBucketlistBody
 * creates body from the request oet
 * @param {Object} req
 * @return {Object} body
 */

module.exports = req => {
  const { bucketlistId } = req.params
  const { body } = req
  body.bucketlistId = bucketlistId
  return body
}
