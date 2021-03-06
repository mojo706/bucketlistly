// This will be the application entry
require('dotenv').config()
const http = require('http')
const app = require('../app') // The express app

const port = parseInt(process.env.PORT, 10) || 8000
app.set('port', port)
console.log(`Application started at http://localhost:${port}`)

const server = http.createServer(app)
server.listen(port)
