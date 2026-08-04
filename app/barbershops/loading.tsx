import Header from "@/app/_components/header"
import { Spinner } from "@/app/_components/ui/spinner"
import Search from "../_components/search"
import { Card } from "../_components/ui/card"

// app/bookings/loading.tsx
const LoadingBarbershops = () => {
  return (
    <>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>

      <div className="mb-4 px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <Card className="flex min-h-[285px] min-w-[167px] justify-center rounded-2xl">
            <Spinner className="mt-[50%] size-8" />
          </Card>
        </div>
      </div>
    </>
  )
}

export default LoadingBarbershops
