import React from 'react'
import Link from 'next/link'
import { Button } from '../button'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 font-bold text-lg text-slate-50">
            City <span className="text-green-500">Foods</span>
        </a>
      </div>
      <div className="flex lg:hidden">
        <Button variant="ghost" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>
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