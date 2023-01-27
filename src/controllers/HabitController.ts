import { FastifyReply, FastifyRequest } from 'fastify'

import { CreateHabit } from '../use-cases/habits/CreateHabit'
import { SummaryHabits } from '../use-cases/habits/SummaryHabits'
import { ToggleHabit } from '../use-cases/habits/ToggleHabit'
import { createHabitsBody } from '../validations/createHabits'
import { toggleHabitParams } from '../validations/toggleHabit'

export class HabitController {
  public async index (request: FastifyRequest, response: FastifyReply): Promise<FastifyReply> {
    const summaryHabits = new SummaryHabits()
    const summaries = await summaryHabits.execute()
    return response.code(201).send({ summaries })
  }

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
