"use client"

import React from "react";
import HomeDash from "@/components/ui/dashboard/Home";
import { useAuth } from '@/app/hooks/use-auth';


const Home = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; //or a custom unauthorised component
  }
  return (
      <HomeDash/>
  );
}


export default Home