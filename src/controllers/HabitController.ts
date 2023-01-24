import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateHabit } from '../use-cases/habits/CreateHabit'
import { createHabitsBody } from '../validations/createHabits'

export class HabitController {
  public async store (request: FastifyRequest, response: FastifyReply): Promise<FastifyReply> {
    const { title, weekDays } = createHabitsBody.parse(request.body)
    const createHabit = new CreateHabit()
    await createHabit.execute({
      title,
      weekDays
    })

    return response.code(201)
  }
}
