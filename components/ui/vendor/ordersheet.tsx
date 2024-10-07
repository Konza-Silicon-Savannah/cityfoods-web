import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { Separator } from "@/components/ui/separator";

const fooditems = [
  {
    title: "Sweet Potato",
    description: "Kes 450",
    status:"paid",
  },
  {
    title: "Fruit salad",
    description: "Kes 100",
    status:"paid",
  },
]

export function OrderSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full">
          view
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='h-screen justify-between py-4 px-2'>
          <div className=''>
            <div className='flex justify-items-start'>
                <Link
                    className='flex pb-4'
                    href='/'
                    key="logo"
                >
                    <div className='flex items-center w-full font-extrabold md:w-full '>
                      City<span className="text-green-500">Foods</span>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col items-start">
                Order Items
            </div>
          </div>
          <Separator/>
          <div className="flex flex-col items-start justify-end mt-2">
            {fooditems.map((fooditem, index) => (
              <div
                key={index}
                className="mb-4 items-center p-2 last:mb-2 space-x-4 rounded-md border w-full"
              >
                <div className="grid grid-flow-col w-full">
                  <div className="text-sm font-medium leading-none">
                    {fooditem.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {fooditem.description}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {fooditem.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 ">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Accept or Reject Order.
              </p>
            </div>
            <div className="grid grid-flow-col gap-4">
              <div className="">
                <Button variant="outline" className="w-full">Accept</Button>
              </div>
              <div className="">
                <Button variant="destructive" className="w-full">Decline</Button>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
