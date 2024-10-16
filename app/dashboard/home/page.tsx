"use client"

import React from 'react'
import Topnav from '@/components/ui/dashboard/Topnav'
import Categories from '@/components/ui/home/categories'
import Foodcard from '@/components/ui/dashboard/Foodcard'
import withAuth from '@/withAuth';

const HomePage = () => {

  return (
    <div className='w-full min-h-screen bg-green-50 flex flex-col'>
        <Topnav />
        <div className=''>
          <Categories />
        </div>
        <Foodcard />
    </div>
  )
}

export default withAuth(HomePage);