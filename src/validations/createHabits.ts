import { z } from 'zod'

export const createHabitsBody = z.object({
  title: z.string(),
  weekDays: z.array(
    z.number().min(0).max(6)
  )
})
