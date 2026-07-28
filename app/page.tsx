import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import prisma from "@/config/prisma"
import BarbershopItem from "./_components/barbershop-item"
import Footer from "./_components/footer"

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
          <Button className="gap-2" variant={"secondary"}>
            <Image src="/cabelo.svg" width={16} height={16} alt="Cabelo" />
            Cabelo
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image src="/barba.svg" width={16} height={16} alt="Cabelo" />
            Barba
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image src="/acabamento.svg" width={16} height={16} alt="Cabelo" />
            Acabamento
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image src="/sobrancelha.svg" width={16} height={16} alt="Cabelo" />
            Sobrancelha
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image src="/massagem.svg" width={16} height={16} alt="Cabelo" />
            Massagem
          </Button>

          <Button className="gap-2" variant={"secondary"}>
            <Image src="/hidratacao.svg" width={16} height={16} alt="Cabelo" />
            Hidratação
          </Button>
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
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA DO CARD */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA DO CARD */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Julho</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

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
