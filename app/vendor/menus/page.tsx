import React from 'react'
import { TabsMenu } from '@/components/ui/vendor/foodmenu/menutab';
import FoodAdd from '@/components/ui/vendor/foodmenu/menuadd';

const MenusPage = () => {
  return (
    <div className='py-6 px-10 border'>
        <div>
          <h1>Hello, Angie.</h1>
          <p className='font-extrabold text-2xl'>Discover your menus and add more.</p>
        </div>
        <div className='text-right'>
          <FoodAdd />
        </div>
        <TabsMenu />
    </div>
  )
}

export default MenusPage