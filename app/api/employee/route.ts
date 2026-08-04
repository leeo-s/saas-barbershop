import prisma from "@/config/prisma"
import { NextRequest, NextResponse } from "next/server"

interface CreateEmployee {
  userId: string
  barbershopId: string
}

export async function POST(request: NextRequest) {
  const data: CreateEmployee = await request.json()

  const employee = await prisma.barbershopEmployees.create({
    data: {
      userId: data.userId,
      barbershopId: data.barbershopId,
    },
  })

  return NextResponse.json(employee, { status: 201 })
}
