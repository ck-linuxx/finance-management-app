import fastify from 'fastify'
import { App as app } from './src/routes/index.routes'
import fastifyCors from '@fastify/cors'

const server = fastify()

server.register(app, { prefix: "/" })
server.register(fastifyCors, { origin: "*" })

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)  
    process.exit(1)
  }
  console.log(`<-- Server is running at ${address} 🚀 -->`)
})
