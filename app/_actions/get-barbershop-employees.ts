"use server"

import prisma from "@/config/prisma"

interface GetBarbershopEmployeesProps {
  barbershopId: string
}

export const getBarbers = async (data: GetBarbershopEmployeesProps) => {
  const barbers = prisma.barbershopEmployees.findMany({
    where: {
      barbershopId: data.barbershopId,
    },
    include: {
      user: true,
      barbershop: true,
    },
  })

  return barbers
}
