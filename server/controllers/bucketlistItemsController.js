const fancyID = require('pushid')
const bucketlistItemRepository = require('../lib/items')
const buildBucketlistItemBody = require('../lib/adapters/buildBucketlistItemBody')

class BucketlistItemController {
  static async createBucketlistItem(request, response) {
    const body = buildBucketlistItemBody(request)
    body.id = fancyID()
    const resp = await bucketlistItemRepository.createBucketlistItem(body)
    if (resp.error) {
      return response.status(resp.statusCode).json(resp)
    }
    return response.status(201).json(resp)
  }

  static async deletBucketlistItem(request, response) {
    const { itemId } = request.params
    const resp = await bucketlistItemRepository.deleteBucketlistItem(itemId)
    return response.status(resp.statusCode).json({ message: resp.message })
  }

  static async updateBucketlistItem(request, response) {
    const { itemId } = request.params
    const body = buildBucketlistItemBody(request)
    const resp = await bucketlistItemRepository.updateBucketlistItem(
      itemId,
      body,
    )
    if (resp.error) {
      return response.status(resp.statusCode).json(resp)
    }
    return response.status(204).json(resp)
  }
}

module.exports = BucketlistItemController
