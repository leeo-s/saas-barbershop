import { Spinner } from "@/app/_components/ui/spinner"

// app/bookings/loading.tsx
const Loading = () => {
  return (
    <div className="mt-[50%] flex justify-center">
      <Spinner className="size-8" />
    </div>
  )
}

export default Loading
