"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CardForm } from "@/components/ui/dashboard/CardForm"

type CardProps = React.ComponentProps<typeof Card>

export function PaymentCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Pay with card</CardTitle>
        <hr />
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardForm/>
      </CardContent>
    </Card>
  )
}
