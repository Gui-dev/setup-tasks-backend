import { FastifyReply, FastifyRequest } from 'fastify'

import { CreateHabit } from '../use-cases/habits/CreateHabit'
import { ToggleHabit } from '../use-cases/habits/ToggleHabit'
import { createHabitsBody } from '../validations/createHabits'
import { toggleHabitParams } from '../validations/toggleHabit'

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

  public async update (request: FastifyRequest, response: FastifyReply): Promise<FastifyReply> {
    const { id } = toggleHabitParams.parse(request.params)
    const toggleHabit = new ToggleHabit()
    await toggleHabit.execute({ id })

    return response.code(201).send()
  }
}
