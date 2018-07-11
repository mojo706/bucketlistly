const createBucketlistItem = require('./createBucketlistItem')
const updateBucketlistItem = require('./updateBucketlistItem')
const deleteBucketlistItem = require('./deleteBucketlistItem')

class BucketlistItemRepository {
  static createBucketlistItem(body) {
    return createBucketlistItem(body)
  }

  static updateBucketlistItem(id, body) {
    return updateBucketlistItem(id, body)
  }

  static deleteBucketlistItem(id) {
    return deleteBucketlistItem(id)
  }
}

module.exports = BucketlistItemRepository
