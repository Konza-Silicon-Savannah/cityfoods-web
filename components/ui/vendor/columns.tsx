"use client"

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrderSheet } from "@/components/ui/vendor/ordersheet";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "confirmed" | "delivered" | "canceled"
    invoice: string
    method: string
    customer: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "invoice",
        header:"Order",
    },
    {
        accessorKey: "customer",
        header:"Customer",
    },
    {
        accessorKey: "amount",
        header: () => <div className="">Amount</div>,
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("amount"))
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "KES",
          }).format(amount)
     
          return <div className="font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "method",
        header:"Method",
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Status
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        id: "actions",
        header: () => <div className="">Action</div>,
        cell: () => {
        //   const payment = row.original
     
          return (
            
            <>
              <OrderSheet/>
            </>
          )
        },
      },
]