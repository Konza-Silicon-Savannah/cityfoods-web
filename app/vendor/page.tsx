import React from 'react'
import { Payment, columns } from "@/components/ui/vendor/columns";
import { DataTable } from "@/components/ui/vendor/data-table";
import { CardAnalytics } from '@/components/ui/vendor/BusinessCard';

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        customer: "Justin Su",
        invoice:"#728ed52f",
        method:"M-pesa"
      },
      {
        id: "728ed52k",
        amount: 1425,
        status:"canceled",
        customer: "Amina Nzioka",
        invoice:"#628rd31y",
        method:"Card"
      },
      {
        id: "728ed52j",
        amount: 900,
        status: "confirmed",
        customer: "Stewie Grifin",
        invoice:"#628rd31y",
        method:"Card"
      },
      {
        id: "728ed52i",
        amount: 140,
        status: "delivered",
        customer: "James Blue",
        invoice:"#118zd94x",
        method:"M-pesa"
      },
      // ...
    ]
  }

export default async function Page() {
    const data = await getData()
   
    return (
      <div className="py-6 px-10 border">
        <CardAnalytics />
        <DataTable columns={columns} data={data} />
      </div>
    )
  }
