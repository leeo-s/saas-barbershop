import React from "react"
import { Card, CardContent } from "./ui/card"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Barbershop, BarbershopService } from "@/generated/prisma"

interface BookingSummaryProps {
  service: Pick<BarbershopService, "name" | "price">
  barbershop: Pick<Barbershop, "name">
  selectedDate: Date
  showName: boolean
}

const BookingSummary = ({
  service,
  barbershop,
  selectedDate,
  showName,
}: BookingSummaryProps) => {
  return (
    <>
      <Card>
        <CardContent className="space-y-3 p-3">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">{service.name}</h2>
            <p className="text-sm font-bold">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-400">Data</h2>
            <p className="text-sm">
              {format(selectedDate, "d 'de' MMMM", {
                locale: ptBR,
              })}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-sm text-gray-400">Horário</h2>
            <p className="text-sm">
              {format(selectedDate, "HH:mm", {
                locale: ptBR,
              })}
            </p>
          </div>

          {showName && (
            <div className="flex items-center justify-between">
              <h2 className="text-sm text-gray-400">Barbearia</h2>
              <p className="text-sm">{barbershop.name}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}

export default BookingSummary
