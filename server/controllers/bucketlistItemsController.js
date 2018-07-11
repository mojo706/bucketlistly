const bucketlistItemRepository = require('../lib/items')
const buildBucketlistItemBody = require('../lib/adapters/buildBucketlistItemBody')

class BucketlistItemController {
  static async createBucketlist(request, response) {
    const body = buildBucketlistItemBody(request)
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
    const body = buildBucketlistItemBody(request)
    response = await bucketlistItemRepository.updateBucketlistItem(itemId, body)
    return response
  }
}

module.exports = BucketlistItemController
