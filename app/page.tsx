import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import prisma from "@/config/prisma"
import BarbershopItem from "./_components/barbershop-item"
import Footer from "./_components/footer"
import { quickSearchOptions } from "./_constants/QuickSearch"
import BookingItem from "./_components/booking-item"
import { BookingItem as BookingItemModel } from "./_models/booking"

const bookingItem: BookingItemModel = {
  status: "Confirmado",
  service: "Corte de Cabelo",
  barbershopName: "FSW Barber",
  barbershopImageUrl:
    "https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png",
  bookingMonth: "Julho",
  bookingDay: "28",
  bookingHour: "16:00",
}

const Home = async () => {
  // chamada do banco de dados
  const barbershops = await prisma.barbershop.findMany({})
  const popularBarbershops = await prisma.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Leonardo!</h2>
        <p>28/07/2026</p>

        {/* BUSCAR */}
        <div className="mt-2 flex items-center gap-2">
          <Input placeholder="Buscar" />

          <Button className="rounded-lg bg-purple-600">
            <SearchIcon />
          </Button>
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant={"secondary"} key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        {/* BANNER */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* AGENDAMENTO */}
        <BookingItem bookingItem={bookingItem} section="Agendamentos" />

        {/* SEÇÃO RECOMENDADOS */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {/* esse [&::-webkit-scrollbar]:hidden vai esconder a barra de scroll que ficaria abaixo dos cards*/}
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* SEÇÃO POPULARES */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {/* esse [&::-webkit-scrollbar]:hidden vai esconder a barra de scroll que ficaria abaixo dos cards*/}
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
