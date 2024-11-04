import React from 'react'
import Link from 'next/link'
import { Dropdownlinks } from './dropDown'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 font-bold text-lg text-slate-50">
            City <span className="text-green-500">Foods</span>
        </a>
      </div>
      <div className="flex md:hidden">
        <Dropdownlinks/>
      </div>
      <div className="hidden lg:flex lg:gap-x-12 ">
        <Link href="#" className="text-lg font-semibold leading-4 text-slate-50">Features</Link>
        <Link href="#" className="text-lg font-semibold leading-4 text-slate-50">sponsors</Link>
        <Link href="#" className="text-lg font-semibold leading-4 text-slate-50">investments</Link>
        <Link href="#" className="text-lg font-semibold leading-4 text-slate-50">FAQ&apos;s</Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end text-slate-50">
        <Link href="/signin" className="px-4 py-2">Log in</Link>
        <Link href="/signup" className="px-4 py-2 border border-yellow-200 rounded-full hover:text-black hover:bg-gray-100">Sign Up <span aria-hidden="true">&rarr;</span></Link>
      </div>
    </nav>
  )
}

export default Nav