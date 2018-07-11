const createBucketlist = require('./createBucketlist')
const updateBucketlist = require('./updateBucketlist')
const deleteBucketlist = require('./deleteBucketlist')
const getBucketlist = require('./getBucketlist')
const listBucketlists = require('./listBucketlists')

class BucketlistRepository {
  static createBucketlist(body) {
    return createBucketlist(body)
  }

  static updateBucketlist(id, body) {
    return updateBucketlist(id, body)
  }

  static deleteBucketlist(id) {
    return deleteBucketlist(id)
  }

  static getBucketlist(id) {
    return getBucketlist(id)
  }

  static listBucketlists() {
    return listBucketlists()
  }
}

module.exports = BucketlistRepository
