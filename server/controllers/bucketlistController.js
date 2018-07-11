const bucketlistRepository = require('../lib/bucketlists')
const formatCreateBucketlistPayload = require('../lib/adapters/formatCreateBucketlistPayload')

class BucketlistController {
  static async createBucketlist(request, response) {
    const body = formatCreateBucketlistPayload(request)
    response = await bucketlistRepository.createBucketlist(body)
    return response
  }

  static async deleteBucketlist(request, response) {
    const { id } = request
    response = await bucketlistRepository.deleteBucketlist(id)
    return response
  }

  static async getBucketlist(request, response) {
    const { id } = request
    response = await bucketlistRepository.getBucketlist(id)
    return response
  }

  static async listBucketlist(request, response) {
    response = await bucketlistRepository.listBucketlist()
    return response
  }

  static async updateBucketlist(request, response) {
    const { id } = request
    const body = formatCreateBucketlistPayload(request)
    response = await bucketlistRepository.updateBucketlist(id, body)
    return response
  }
}

module.exports = BucketlistController