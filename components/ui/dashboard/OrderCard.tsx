import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const fooditems = [
  {
    title: "Sweet Potato",
    description: "Kes 450",
  },
  {
    title: "Fruit salad",
    description: "Kes 100",
  },
  {
    title: "Manji Biscuit",
    description: "Kes 50",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function OrderCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Your Order</CardTitle>
        <CardDescription>Ordering 3 items.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {fooditems.map((fooditem, index) => (
            <div
              key={index}
              className="mb-4 flex items-center p-2 last:mb-2 last:pb-4 space-x-4 rounded-md border"
            >
              <div className="flex-1 space-y-1 ">
                <p className="text-sm font-medium leading-none">
                  {fooditem.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {fooditem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="grid">
        <div className="mb-2">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Kes 1890.00</p>
            </div>
        </div>
        <div className="mb-2 ">
            <div className="flex justify-between">
                <p>Tax (10%)</p>
                <p>Kes 189.00</p>
            </div>
        </div>
        <div className="mb-4 ">
            <div className="flex justify-between">
                <p className="font-extrabold">Total</p>
                <p>Kes 2079.00</p>
            </div>
        </div>
        <div className="grid grid-flow-col gap-8">
          <Button className="w-full bg-green-800">
                M-pesa
          </Button>
          <Link href="/dashboard/payment">
            <Button variant="outline" className="w-full border-cyan-500">
                  Visa pay
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
