"use client"

import { useAuth } from '@/app/hooks/use-auth';
import React from 'react';

const WalletPage = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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