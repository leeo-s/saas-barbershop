import prisma from "@/config/prisma"
import Header from "../_components/header"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"
import { notFound } from "next/navigation"
import BookingItem from "../_components/booking-item"
import { Card, CardContent } from "../_components/ui/card"

const Bookings = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return notFound()
  }

  const [confirmedBookings, closedBookings] = await Promise.all([
    prisma.booking.findMany({
      where: {
        userId: session.user.id,
        date: {
          gte: new Date(),
        },
      },
      include: {
        service: {
          include: {
            barbershop: true,
          },
        },
      },
      orderBy: {
        date: "asc",
      },
    }),

    prisma.booking.findMany({
      where: {
        userId: session.user.id,
        date: {
          lt: new Date(),
        },
      },
      include: {
        service: {
          include: {
            barbershop: true,
          },
        },
      },
      orderBy: {
        date: "desc",
      },
    }),
  ])

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Confirmados
        </h2>

        {/* CARD DE BOOKINGS */}
        {confirmedBookings.length == 0 && (
          <Card className="flex items-center justify-center">
            <CardContent className="pt-6 text-center">
              <h2>Sem horários agendados</h2>
            </CardContent>
          </Card>
        )}
        {confirmedBookings.map((booking) => (
          <BookingItem bookingItem={booking} key={booking.id} />
        ))}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Finalizados
        </h2>

        {closedBookings.length == 0 && (
          <Card className="flex items-center justify-center">
            <CardContent className="pt-6 text-center">
              <h2>Sem horários finalizados</h2>
            </CardContent>
          </Card>
        )}
        {/* CARD DE BOOKINGS */}
        {closedBookings.map((booking) => (
          <BookingItem bookingItem={booking} key={booking.id} />
        ))}
      </div>
    </>
  )
}

export default Bookings
