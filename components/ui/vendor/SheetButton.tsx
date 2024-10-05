import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import VendorLinks from './vendorlinks'
import BottomLinks from './bottomnav'
import { Separator } from "@/components/ui/separator"

export function SheetButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Menu</Button>
      </SheetTrigger>
      <SheetContent>
        <div className='h-screen justify-between py-4 px-2'>
          <div className=''>
            <div className='flex justify-items-center'>
                <Link
                    className='flex justify-center px-5 pb-4'
                    href='/'
                    key="logo"
                >
                    <div className='flex items-center w-32 font-extrabold md:w-40 '>
                      City<span className="text-green-500">Foods</span>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col items-start ">
                <Separator/>
                <VendorLinks />
            </div>
          </div>
          <div className="flex flex-col items-start justify-end">
            <BottomLinks />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
