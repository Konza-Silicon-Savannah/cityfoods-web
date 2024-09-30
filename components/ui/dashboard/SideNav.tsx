import React from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'

const SideNav = () => {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
        <Link
            className='mb-2 flex h-8 items-end justify-start p-4 md:h-10'
            href='/'
        >
            <div className='w-32 text-black md:w-40'>
                CityFoods
            </div>
        </Link>
        <div className='flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
            <NavLinks/>
        </div>
    </div>
  )
}

export default SideNav