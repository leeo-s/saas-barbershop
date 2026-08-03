"use server"

import prisma from "@/config/prisma"
import { revalidatePath } from "next/cache"

export const deleteBooking = async (bookindId: string) => {
  await prisma.booking.delete({
    where: {
      id: bookindId,
    },
  })
  revalidatePath("/bookings") //esse revalidate atualiza a página automaticamente, atualizando o que é exibido
  //para o usuário, como por exemplo nessa action, ao excluir um agendamento a página atualiza automaticamente
  //removendo da lista o agendamento excluido
}
