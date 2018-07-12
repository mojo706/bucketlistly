const bucketlistRouter = require('./bucketlistRoute')

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the Todos API!',
    }),
  )

  app.use('/api/bucketlists', bucketlistRouter())
}
