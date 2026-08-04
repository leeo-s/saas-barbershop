import Header from "../_components/header"
import { Card, CardContent } from "../_components/ui/card"
import { Spinner } from "../_components/ui/spinner"

// app/bookings/loading.tsx
const LoadingBookings = () => {
  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Confirmados
        </h2>

        <Card className="flex items-center justify-center">
          <CardContent className="pt-6 text-center">
            <Spinner className="size-6" />
          </CardContent>
        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Finalizados
        </h2>

        <Card className="flex items-center justify-center">
          <CardContent className="pt-6 text-center">
            <Spinner className="size-6" />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default LoadingBookings
