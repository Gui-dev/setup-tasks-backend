import Fastify from 'fastify'

const app = Fastify()
const PORT = 3333 || process.env.PORT

app.get('/', () => {
  return 'Hello World'
})

app.listen({
  port: PORT
})
