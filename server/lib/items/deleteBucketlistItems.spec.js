const deleteBucketlistItem = require('./deleteBucketlistItem')
const createBucketlistItem = require('./createBucketlistItem')
const createBucketlist = require('../bucketlists/createBucketlist')
const models = require('../../models')

const testBucket = {
  id: '436hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist',
  createdBy: 'basedHokage',
}

const somethingElse = {
  id: '236hygvnbhj',
  bucketlistId: '436hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist Item',
  done: false,
}

const anotherOne = {
  id: '536hygvnbhj',
  bucketlistId: '436hygvnbhj',
  name: 'Another One',
  description: 'Some bucketlist Item',
  done: false,
}
describe('####DeleteBucketlistItem', () => {
  beforeEach(async () => {
    models.BucketlistItems.destroy({
      where: {},
      truncate: true,
    })
    await createBucketlist(testBucket)
    await createBucketlistItem(somethingElse)
    await createBucketlistItem(anotherOne)
  })
  afterEach(async () => {
    models.Bucketlists.destroy({
      where: {},
      truncate: true,
    })
  })
  test('Should notify the user if the bucketlist item was deleted', async () => {
    const id = '536hygvnbhj'
    const deletedItem = await deleteBucketlistItem(id)
    expect(deletedItem.message).toBe('Bucketlist item successfully deleted')
  })

  test('Should notify the user if the bucketlist item does not exist', async () => {
    const id = '736hygvnbhj'
    const deletedItem = await deleteBucketlistItem(id)
    expect(deletedItem.message).toBe('Bucketlist item does not exist')
  })
})
