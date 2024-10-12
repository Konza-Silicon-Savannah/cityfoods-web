"use client"

import { useAuth } from '@/app/hooks/use-auth';
import React from 'react'
import Topnav from '@/components/ui/dashboard/Topnav'
import Categories from '@/components/ui/home/categories'
import Foodcard from '@/components/ui/dashboard/Foodcard'

const HomePage = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; //or a custom unauthorised component
  }
  return (
    <div className='w-full min-h-screen bg-green-50 flex flex-col'>
        <Topnav />
        <div className='container'>
          <Categories />
        </div>
        <Foodcard />
    </div>
  )
}

export default HomePage