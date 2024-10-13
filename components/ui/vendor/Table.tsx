import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const orders = [
    {
        order: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
        customer:"John Doe",
        date:"12/09/2024",
    },
    {
        order: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "M-pesa",
        customer:"Old Paul",
        date:"12/09/2024",
      },
      {
        order: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Credit Card",
        customer:"New guy",
        date:"12/09/2024",
      },
      {
        order: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
        customer:"Ben Cho",
        date:"12/09/2024",
      },
      {
        order: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "M-pesa",
        customer:"Craig chris",
        date:"12/09/2024",
      },
      {
        order: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Credit Card",
        customer:"Allen shellby",
        date:"12/09/2024",
      },
      {
        order: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "M-pesa",
        customer:"James new",
        date:"12/09/2024",
      },
]

export function OrderTable() {
    return (
        <Table>
            <TableCaption>Recent Orders.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date created</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="">Action</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.order}>
                      <TableCell className="font-medium">{order.order}</TableCell>
                      <TableCell className="">{order.customer}</TableCell>
                      <TableCell className="">{order.date}</TableCell>
                      <TableCell>{order.paymentMethod}</TableCell>
                      <TableCell className="flex items-center justify-items-center">{order.paymentStatus}</TableCell>
                      <TableCell className="">...</TableCell>
                      <TableCell className="text-right">{order.totalAmount}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                <TableCell colSpan={6}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}