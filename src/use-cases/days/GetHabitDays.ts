import dayjs from 'dayjs'
import { prisma } from '../../services/prisma'

interface IGetHabitDays {
  date: Date
}

export class GetHabitDays {
  public async execute ({ date }: IGetHabitDays) {
    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day')
    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date
        },
        habitWeekDays: {
          some: {
            week_day: weekDay
          }
        }
      }
    })
    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate()
      },
      include: {
        dayHabits: true
      }
    })

    const completedHabits = day?.dayHabits.map(dayHabit => {
      return dayHabit.habit_id
    })

    return {
      possibleHabits,
      completedHabits
    }
  }
}
