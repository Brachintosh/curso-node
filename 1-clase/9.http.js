const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3001

const server = http.createServer((req, res) => {
  console.log('Request received!')
  res.end('Hello brachintosh!')
})

// server.listen(0, () => {
//   console.log(`Server listening on port >> http://localhost:${server.address().port}`)
// })

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
