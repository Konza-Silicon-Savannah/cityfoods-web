"use client"

import React from 'react';
import { useAuth } from '@/app/hooks/use-auth';

const OrdersPage = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; //or a custom unauthorised component
  }
  return (
    <div>Orders</div>
  )
};

export default OrdersPage