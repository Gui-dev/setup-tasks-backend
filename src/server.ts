import Fastify from 'fastify'
import cors from '@fastify/cors'

import { prisma } from './services/prisma'

const app = Fastify()
const PORT = 3333 || process.env.PORT

app.register(cors)

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({
  port: PORT
}).then(() => console.log(`Server running at http://localhost:${PORT}`))
