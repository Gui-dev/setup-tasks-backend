import { z } from 'zod'

export const getHabitDay = z.object({
  date: z.coerce.date()
})
