import React from 'react'
import Topnav from '@/components/ui/dashboard/Topnav'
import Categories from '@/components/ui/home/categories'
import Foodcard from '@/components/ui/dashboard/Foodcard'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-green-50 flex flex-col p-8'>
        <Topnav />
        <div className='p-4'></div>
        <Categories />
        <Foodcard />
    </div>
  )
}

export default HomePage