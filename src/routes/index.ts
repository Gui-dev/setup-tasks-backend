import { FastifyInstance } from 'fastify'
import { HabitController } from '../controllers/HabitController'

const habitController = new HabitController()

export const appRoutes = async (app: FastifyInstance) => {
  app.post('/habits', habitController.store)
}
