"use client"

import { secureStorage } from '@/utils/secureStorage';
import React from 'react';

const WalletPage = () => {
  const isAuthenticated = secureStorage.isAuthenticated();


  if (!isAuthenticated) {
    return null; //or a custom unauthorised component
  }
  
  return (
    <div>
      WalletPage
    </div>
  )
};

export default WalletPage