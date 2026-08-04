"use server"

import prisma from "@/config/prisma"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"
import { authOptions } from "../_lib/auth"

interface CreateBookingParams {
  serviceId: string
  userId: string
  date: Date
  employeeId: string
}

export const createBooking = async (params: CreateBookingParams) => {
  const user = await getServerSession(authOptions) //isso retorna a sessão com o usuário logado

  if (!user) {
    throw new Error("Usuário não autenticado")
  }

  if (user.user.id !== params.userId) {
    throw new Error("Usuário não autorizado")
  }

  console.log(params)

  await prisma.booking.create({
    data: params,
  })
  revalidatePath("/barbershops/[id]")
  revalidatePath("/bookings")
}
