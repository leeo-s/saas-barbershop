import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <Card className="px-5 py-6">
      <CardContent>
        <p className="text-sm text-gray-400">
          @ 2026 Copyright <span className="font-bold">FSW Barber</span>
        </p>
      </CardContent>
    </Card>
  )
}

export default Footer
