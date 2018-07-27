const createBucketlist = require('./createBucketlist')
const listBucketlists = require('./listBucketlists')
const models = require('../../models')

const correctPayload = {
  id: '236hygvnbhj',
  name: 'New One',
  description: 'Some bucketlist',
  createdBy: 'basedHokage',
}

const anotherGoodPayload = {
  id: '436hygvnbhj',
  name: 'Another One',
  description: 'Some bucketlist',
  createdBy: 'basedHokage',
}

describe('####ListBucketlists', () => {
  beforeEach(async () => {
    models.Bucketlists.destroy({
      where: {},
      truncate: true,
    })
    await createBucketlist(correctPayload)
    await createBucketlist(anotherGoodPayload)
  })
  afterEach(async () => {
    models.Bucketlists.destroy({
      where: {},
      truncate: true,
    })
  })
  test('Should list all bucketlists', async () => {
    const response = await listBucketlists()
    expect(response).toHaveLength(2)
  })
})
