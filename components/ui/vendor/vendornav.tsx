import React from 'react'
import Link from 'next/link'
import VendorLinks from './vendorlinks'

const VendorNav = () => {
  return (
    <div className='h-screen flex flex-col py-4 md:px-2'>
        <div className='flex justify-items-center'>
          <Link
              className='flex justify-center px-5 pb-4'
              href='/'
              key="logo"
          >
              <div className='flex items-center w-32 font-extrabold md:w-40 '>
                City<span className="text-green-500">Foods</span>
              </div>
          </Link>
        </div>
        <div className="flex flex-col items-start">
            <VendorLinks />
        </div>
    </div>
  )
}

export default VendorNav