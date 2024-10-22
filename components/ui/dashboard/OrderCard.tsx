import React, { useState, useEffect } from "react";
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
import api from "@/app/api/axios";

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  vendor: number; // Add vendor ID to the CartItem interface
}

interface OrderCardProps extends React.ComponentProps<typeof Card> {
  items: CartItem[];
  onRemoveItem: (itemId: number) => void;
  onUpdateQuantity: (itemId: number, newQuantity: number) => void;
}

export function OrderCard({
  className,
  items,
  onRemoveItem,
  onUpdateQuantity,
  ...props
}: OrderCardProps) {
  const [transactionCode, setTransactionCode] = useState("");
  const [orderId, setOrderId] = useState<number | null>(null);
  const [userId, setUserId] = useState<number | null>(null);
  const [checkoutRequestId, setCheckoutRequestId] = useState("");
  const [merchantRequestId, setMerchantRequestId] = useState("");

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/user");
        const data = await response.json();

        if (!data.user) {
          console.error("No user ID found");
          return;
        }

        setUserId(data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  const subtotal = items.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );
  const tax = subtotal * 0.06;
  const total = subtotal + tax;

  // Get unique vendors from items
  const getUniqueVendors = () => {
    const vendorIds = items.map((item) => item.vendor);
    return [...new Set(vendorIds)];
  };

  const createOrder = async () => {
    if (!userId) {
      console.error("Please log in to create an order");
      return;
    }

    try {
      const response = await api.post("/orders/", {
        customer: userId,
        vendor: getUniqueVendors(), // Array of unique vendor IDs from the items
        status: "pending",
        payment_status: "pending",
        total_amount: total.toFixed(2),
        transaction_id: transactionCode || "", // Empty string if no transaction code yet
        checkout_request_id: checkoutRequestId || "",
        merchant_request_id: merchantRequestId || "",
      });

      const { id } = response.data.data;
      setOrderId(id);
      await appendCartItems(id);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const appendCartItems = async (orderId: number) => {
    try {
      const orderItems = items.map((item) => ({
        order: orderId,
        food_item: item.id,
        quantity: item.quantity,
        price: parseFloat(item.price),
        vendor: item.vendor, // Include vendor ID in order items
      }));

      const requests = orderItems.map((orderItem) =>
        api.post("/order-items/", orderItem)
      );

      await Promise.all(requests);
    } catch (error) {
      console.error("Error adding items to order:", error);
    }
  };

  // const initiatePayment = async () => {
  //   if (!userId || !orderId) {
  //     console.error("Missing user ID or order ID");
  //     return;
  //   }

  //   try {
  //     // You would typically make a request to your MPesa integration endpoint here
  //     const mpesaResponse = await api.post("/mpesa/initiate-payment/", {
  //       order_id: orderId,
  //       amount: total.toFixed(2),
  //       phone_number: "YOUR_PHONE_NUMBER", // You might want to get this from user input
  //     });

  //     // Update the request IDs from MPesa response
  //     setCheckoutRequestId(mpesaResponse.data.CheckoutRequestID);
  //     setMerchantRequestId(mpesaResponse.data.MerchantRequestID);

  //     // Update the order with the request IDs
  //     await api.patch(`/orders/${orderId}/`, {
  //       checkout_request_id: mpesaResponse.data.CheckoutRequestID,
  //       merchant_request_id: mpesaResponse.data.MerchantRequestID,
  //     });
  //   } catch (error) {
  //     console.error("Error initiating payment:", error);
  //   }
  // };

  const handlePayment = async () => {
    if (!userId) {
      console.error("Please log in to complete the order");
      return;
    }

    if (!orderId) {
      await createOrder();
    }

    try {
      await api.patch(`/orders/${orderId}/`, {
        transaction_id: transactionCode,
        checkout_request_id: checkoutRequestId,
        merchant_request_id: merchantRequestId,
        payment_status: "completed", // Update payment status when transaction code is provided
      });

      // Handle successful payment (e.g., show success message, redirect)
    } catch (error) {
      console.error("Error updating order with payment details:", error);
    }
  };

  // Rest of the component remains the same...
  return (
    <Card className={cn("w-full", className)} {...props}>
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
                <p className="text-sm font-medium leading-none">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  Kes {item.price} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  className="rounded-lg"
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="rounded-lg"
                >
                  +
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onRemoveItem(item.id)}
                  className="rounded-lg"
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
            <p>Tax (6%)</p>
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
              <Button
                variant="outline"
                className="bg-green-800 text-white"
                onClick={createOrder}
              >
                M-Pesa
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Follow these steps to pay</DialogTitle>
                <DialogDescription>
                  <p className="font-bold">Go to Lipa na Mpesa </p>
                  <p className="font-bold">Enter 52234 as Pay-Bill No.</p>
                  <p className="font-bold">Enter 0756743123 as Account No.</p>
                  <p className="font-bold">
                    Enter {total.toFixed(2)} for Amount.
                  </p>
                  This is to confirm your order.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2 ">
                  <Label htmlFor="transactionCode">
                    Enter transaction code
                  </Label>
                  <Input
                    id="transactionCode"
                    value={transactionCode}
                    onChange={(e) => setTransactionCode(e.target.value)}
                    placeholder="Enter transaction code."
                  />
                </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="px-3 w-1/3 mt-5"
                    onClick={handlePayment}
                    // variant="outline"
                  >
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
  );
}
