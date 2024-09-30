import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5 font-bold">
            City <span className="text-green-500">Foods</span>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</Link>
        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">sponsors</Link>
        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">investments</Link>
        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">FAQ's</Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link href="/signin" className="px-4 py-2">Log in</Link>
        <Link href="/signup" className="px-4 py-2 border border-gray-400 rounded-full text-dark-800 hover:bg-gray-100">Sign Up <span aria-hidden="true">&rarr;</span></Link>
      </div>
    </nav>
  )
}

export default Nav