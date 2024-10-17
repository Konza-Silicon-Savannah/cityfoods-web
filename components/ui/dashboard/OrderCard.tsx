import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface OrderCardProps extends React.ComponentProps<typeof Card> {
    items: CartItem[];
    onRemoveItem: (itemId: number) => void;
    onUpdateQuantity: (itemId: number, newQuantity: number) => void;
}


export function OrderCard({ className, items, onRemoveItem, onUpdateQuantity, ...props }: OrderCardProps) {
  const subtotal = items.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  return (
    <Card className={cn("w-[350px] ", className)} {...props}>
      <CardHeader>
        <CardTitle>Your Order</CardTitle>
        <CardDescription>Ordering {items.length} items.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
          <div>
              {items.map((item) => (
                  <div
                      key={item.id}
                      className="mb-4 flex items-center p-2 last:mb-2 last:pb-4 space-x-4 rounded-md border"
                  >
                      <div className="flex-1 space-y-1 ">
                          <p className="text-sm font-medium leading-none">
                              {item.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                              Kes {item.price} x {item.quantity}
                          </p>
                      </div>
                      <div className="flex items-center space-x-2">
                          <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          >
                              -
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                              size="sm"
                              variant="outline"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                              +
                          </Button>
                          <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => onRemoveItem(item.id)}
                          >
                              Remove
                          </Button>
                      </div>
                  </div>
              ))}
          </div>
      </CardContent>
      <CardFooter className="grid">
        <div className="mb-2">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>Kes {subtotal.toFixed(2)}</p>
            </div>
        </div>
        <div className="mb-2 ">
            <div className="flex justify-between">
                <p>Tax (10%)</p>
                <p>Kes {tax.toFixed(2)}</p>
            </div>
        </div>
        <div className="mb-4 ">
            <div className="flex justify-between">
                <p className="font-extrabold">Total</p>
                <p>Kes {total.toFixed(2)}</p>
            </div>
        </div>
        <div className="grid grid-flow-col gap-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-green-800 text-white">M-Pesa</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Follow these steps to pay</DialogTitle>
                <DialogDescription>
                  <p className="font-bold">Go to Lipa na Mpesa </p>
                  <p className="font-bold">Enter 52234 as Pay-Bill No.</p>
                  <p className="font-bold">Enter 0756743123 as Account No.</p>
                  <p className="font-bold">Enter 2079 for Amount.</p>
                  This is to confirm your order.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Enter transaction code
                  </Label>
                  <Input
                    id="link"
                    defaultValue="Enter transaction code."
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  confirm
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
