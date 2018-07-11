const bucketlistItemRepository = require('../lib/items')
const formatCreateBucketlistItemPayload = require('../lib/adapters/formatCreateBucketlistItemPayload')

class BucketlistItemController {
  static async createBucketlist(request, response) {
    const body = formatCreateBucketlistItemPayload(request)
    response = await bucketlistItemRepository.createBucketlistItem(body)
    return response
  }

  static async deletBucketlistItem(request, response) {
    const { itemId } = request
    response = await bucketlistItemRepository.deleteBucketlistItem(itemId)
    return response
  }

  static async updateBucketlistItem(request, response) {
    const { itemId } = request
    const body = formatCreateBucketlistItemPayload(request)
    response = await bucketlistItemRepository.updateBucketlistItem(itemId, body)
    return response
  }
}

module.exports = BucketlistItemController
