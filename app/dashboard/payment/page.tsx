import React from 'react'
import { PaymentCard } from '@/components/ui/dashboard/PaymentCard'
// import { OrderCard } from '@/components/ui/dashboard/OrderCard'

const Page = () => {
  return (
    <div className='w-full min-h-screen bg-green-50 pt-6'>
        <div className='flex flex-col sm:flex-row gap-6 justify-center'>
            <div>
                {/* <OrderCard /> */}
            </div>
            <PaymentCard />
        </div>
    </div>
  )
}

export default Page