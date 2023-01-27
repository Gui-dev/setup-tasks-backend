import { FastifyInstance } from 'fastify'
import { DayController } from '../controllers/DayController'

import { HabitController } from '../controllers/HabitController'

const habitController = new HabitController()
const dayController = new DayController()

export const appRoutes = async (app: FastifyInstance) => {
  app.post('/habits', habitController.store)
  app.patch('/habits/:id/toggle', habitController.update)
  app.get('/day', dayController.index)
  app.get('/summary', habitController.index)
}
