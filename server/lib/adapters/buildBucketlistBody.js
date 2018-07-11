/**
 * @function buildBucketlistBody
 * creates body from the request oet
 * @param {Object} req
 * @return {Object} body
 */

module.exports = req => {
  const { name } = req
  const { description } = req
  const body = {
    name,
    description,
  }
  return body
}
