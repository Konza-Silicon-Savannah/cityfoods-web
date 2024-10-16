import React from 'react'
import Image from 'next/image'
// import SearchIcon from '@mui/icons-material/Search';
import Cart from './cart';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-3 px-4">
        <div className="flex items-center mx-2">
          <Input
            type="text"
            placeholder="Search for food, and more "
            className="border-slate-900 w-64"
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