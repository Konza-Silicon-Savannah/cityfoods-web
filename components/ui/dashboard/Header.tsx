import React from 'react'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';
import Cart from './cart';

const Header = () => {
  return (
    <header className="w-full md:container flex justify-between items-center py-4 px-4">
        <div className="flex items-center border-b border-gray-300">
          <SearchIcon className="text-black" />
          <input
            type="text"
            placeholder="Search for food, and more"
            className="ml-2 p-1 outline-none bg-transparent"
          />
        </div>
        <div className="justify-between items-center flex">
            {/* <p className="font-extrabold font-sm px-4">Welcome</p> */}
            <Cart />
            <div className="relative w-8 h-8 border-2 border-green-700 rounded-full overflow-hidden">
                <Image
                    alt="nice dish of food"
                    src="/images/home/avatar.png"
                    className="object-cover"
                    fill
                />
            </div>
        </div>
      </header>
  )
}

export default Header