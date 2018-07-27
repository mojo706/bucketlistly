const fancyID = require('pushid')

const bucketlistRepository = require('../lib/bucketlists')
const buildBucketlistBody = require('../lib/adapters/buildBucketlistBody')

class BucketlistController {
  static async createBucketlist(request, response) {
    const { body } = request
    body.id = fancyID()
    const resp = await bucketlistRepository.createBucketlist(body)
    if (resp.error) {
      return response.status(resp.statusCode).json({ error: resp.error })
    }
    return response.status(201).json(resp)
  }

  static async deleteBucketlist(request, response) {
    const { bucketlistId: id } = request.params
    const resp = await bucketlistRepository.deleteBucketlist(id)
    return response.status(200).json(resp)
  }

  static async getBucketlist(request, response) {
    const { bucketlistId: id } = request.params
    const resp = await bucketlistRepository.getBucketlist(id)
    return response.status(200).json(resp)
  }

  static async listBucketlist(request, response) {
    const resp = await bucketlistRepository.listBucketlists()
    return response.status(200).json({ bucketlist: resp })
  }

  static async updateBucketlist(request, response) {
    const { bucketlistId: id } = request.params
    const body = buildBucketlistBody(request)
    const resp = await bucketlistRepository.updateBucketlist(id, body)
    return response.status(204).json(resp)
  }
}

module.exports = BucketlistController
