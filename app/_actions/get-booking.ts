"use server"

import prisma from "@/config/prisma"
import { endOfDay, startOfDay } from "date-fns"

interface GetBookingsProps {
  serviceId: string
  date: Date
  employeeId: string
}

export const getBookings = async ({ date, employeeId }: GetBookingsProps) => {
  const bookings = await prisma.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
      employeeId,
    },
  })

  return bookings
}
