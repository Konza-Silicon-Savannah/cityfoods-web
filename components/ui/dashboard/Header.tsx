import React from 'react'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <header className="w-full container flex justify-between items-center py-4 px-6">
        <div className="flex items-center border-b border-gray-300">
          <SearchIcon className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for food, and more"
            className="ml-2 p-1 outline-none bg-transparent"
          />
        </div>
        <div className="flex justify-between items-center">
            <p className="font-extrabold font-sm px-4">Welcome</p>
            <div className="relative w-8 h-8 bg-white-500 border rounded-full overflow-hidden mt-2">
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