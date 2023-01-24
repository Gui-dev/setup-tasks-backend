import { FastifyInstance } from 'fastify'
import { DayController } from '../controllers/DayController'

import { HabitController } from '../controllers/HabitController'

const habitController = new HabitController()
const dayController = new DayController()

export const appRoutes = async (app: FastifyInstance) => {
  app.post('/habits', habitController.store)
  app.get('/day', dayController.index)
}
