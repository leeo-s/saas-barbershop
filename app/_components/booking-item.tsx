import { BookingItem as BookingItemInterface } from "../_models/booking"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

interface BookingItemProps {
  bookingItem: BookingItemInterface
  section: string
}

const BookingItem = ({ bookingItem, section }: BookingItemProps) => {
  return (
    <>
      <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
        {section}
      </h2>
      <Card>
        <CardContent className="flex justify-between p-0">
          {/* ESQUERDA DO CARD */}
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge className="w-fit">{bookingItem.status}</Badge>
            <h3 className="font-semibold">{bookingItem.service}</h3>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={bookingItem.barbershopImageUrl} />
              </Avatar>
              <p className="text-sm">{bookingItem.barbershopName}</p>
            </div>
          </div>

          {/* DIREITA DO CARD */}
          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">{bookingItem.bookingMonth}</p>
            <p className="text-2xl">{bookingItem.bookingDay}</p>
            <p className="text-sm">{bookingItem.bookingHour}</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
