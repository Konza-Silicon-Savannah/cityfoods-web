import React from 'react'
import Image from 'next/image'

const Steps = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
            <p className="text-2xl font-semibold text-gray-800 capitalize lg:text-2xl dark:text-white">How to order</p>
            <p className="max-w-2xl my-4 text-dark">
                In four simple steps.
            </p>
            <div className="grid grid-cols-1 gap-12 mt-8 xl:mt-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group bg-gradient-to-r from-yellow-500 via-yellow-500 to-green-500 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded" 
                        src="/icons/store.gif" 
                        alt=""
                        width={60}
                        height={60}
                        unoptimized
                    />
                    <p className="mt-4  capitalize dark:text-white text-white">Select a Vendor</p>
                </div>

                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-400 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded" 
                        src="/icons/menu.gif" 
                        alt=""
                        width={60}
                        height={60}
                        unoptimized
                    />
                    <p className="mt-4  capitalize dark:text-white group-hover:text-white">Select Menu</p>
                </div>

                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-400 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded" 
                        src="/icons/checkout.gif" 
                        alt=""
                        width={60}
                        height={60}
                        unoptimized
                    />
                    <p className="mt-4 capitalize dark:text-white group-hover:text-white">Checkout Order</p>
                </div>

                <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-400 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded" 
                        src="/icons/food-delivery.gif" 
                        alt=""
                        width={60}
                        height={60}
                        unoptimized
                    />
                    <p className="mt-4 capitalize dark:text-white group-hover:text-white">Wait for delivery</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps