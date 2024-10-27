"use client"

import { secureStorage } from '@/utils/secureStorage';
import React from 'react';

const OrdersPage = () => {
  const isAuthenticated = secureStorage.isAuthenticated();

  if (!isAuthenticated) {
    return null; //or a custom unauthorised component
  }
  return (
    <div>Orders</div>
  )
};

export default OrdersPage