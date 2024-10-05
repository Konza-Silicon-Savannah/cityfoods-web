import React from 'react'
import Link from 'next/link'
import VendorLinks from './vendorlinks'
import BottomLinks from './bottomnav'
import { Separator } from "@/components/ui/separator"
import { SheetButton } from './SheetButton'

const VendorNav = () => {
  return (
    <>
      <div className='hidden md:grid h-screen justify-between py-4 md:px-2'>
        <div className=''>
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
          <div className="flex flex-col items-start ">
              <Separator/>
              <VendorLinks />
          </div>
        </div>
        <div className="flex flex-col items-start justify-end">
          <Separator/>
          <BottomLinks />
        </div>
      </div>
      <div className='block md:hidden justify-end '>
        <SheetButton/>
      </div>
    </>
  )
}

export default VendorNav