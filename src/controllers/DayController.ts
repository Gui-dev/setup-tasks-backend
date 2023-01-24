import { FastifyReply, FastifyRequest } from 'fastify'

import { GetHabitDays } from '../use-cases/days/GetHabitDays'
import { getHabitDay } from '../validations/getHabitDay'

export class DayController {
  public async index (request: FastifyRequest, response: FastifyReply): Promise<FastifyReply> {
    const { date } = getHabitDay.parse(request.query)
    const getHabitDays = new GetHabitDays()
    const habitDays = await getHabitDays.execute({ date })
    return response.code(201).send({ habitDays })
  }
}
