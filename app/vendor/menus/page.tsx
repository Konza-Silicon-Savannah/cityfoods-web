"use client"


import withAuth from '@/withAuth';
import React from 'react'
import { TabsMenu } from '@/components/ui/vendor/foodmenu/menutab';
import FoodAdd from '@/components/ui/vendor/foodmenu/menuadd';

const MenusPage = () => {
  return (
    <div className='py-6 px-2 md:px-10 md:border h-full'>
        <div className='mb-4'>
          <h1>Hello, Doe.</h1>
          <p className='font-extrabold text-2xl'>Discover your menus and add more.</p>
        </div>
        <div className='text-right'>
          <FoodAdd />
        </div>
        <TabsMenu />
    </div>
  )
}

export default withAuth(MenusPage);