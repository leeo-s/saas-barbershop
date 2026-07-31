import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Sheet, SheetTrigger } from "./ui/sheet"
import SiderbarSheetContent from "./sidebar-sheet-content"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href={"/"}>
          <Image src="/logo.png" width={120} height={18} alt="Barber" />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SiderbarSheetContent />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
