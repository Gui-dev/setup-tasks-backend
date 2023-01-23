import dayjs from 'dayjs'

import { prisma } from '../../services/prisma'

interface ICreateHabit {
  title: string
  weekDays: Array<number>
}

export class CreateHabit {
  public async execute ({ title, weekDays }: ICreateHabit) {
    const today = dayjs().startOf('day').toDate()
    console.log(title, weekDays)
    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        habitWeekDays: {
          create: weekDays.map(weekDay => {
            return {
              week_day: weekDay
            }
          })
        }
      }
    })
  }
}
