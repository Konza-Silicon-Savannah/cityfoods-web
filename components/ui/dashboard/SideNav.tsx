import React from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SideBottomLinks from './sidelinks'
import { Separator } from "@/components/ui/separator"
import { SheetMenu } from './sheetmenu'



const SideNav = () => {
  return (
    <>
      <div className='hidden md:h-full md:grid md:justify-between md:py-4 md:px-2 bg-black text-white'>
        <div>
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
                <NavLinks />
            </div>
        </div>
        <div className="flex flex-col items-start justify-end space-y-2">
          <Separator/>
          <SideBottomLinks />
        </div>
      </div>
      <div className='md:hidden flex justify-end'>
        <SheetMenu />
      </div>
    </>
  )
}

export default SideNav