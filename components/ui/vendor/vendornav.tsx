import React from 'react'
import Link from 'next/link'
import VendorLinks from './vendorlinks'

const VendorNav = () => {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
        <Link
            className='mb-2 flex h-8 items-end justify-start px-4 md:h-10'
            href='/'
        >
            <div className='w-32 font-extrabold md:w-40'>
            City <span className="text-green-500">Foods</span>
            </div>
        </Link>
        <div className="flex flex-row space-x-6 md:flex-col md:space-x-0 md:space-y-2 fixed bottom-0 left-0 right-0 md:relative md:bottom-auto rounded-t-lg ">
            <VendorLinks />
        </div>
    </div>
  )
}

export default VendorNav