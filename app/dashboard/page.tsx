"use client"

import React from "react";
import HomeDash from "@/components/ui/dashboard/Home";
import { secureStorage } from "@/utils/secureStorage";

const Home = () => {
  const isAuthenticated = secureStorage.isAuthenticated();

  if (!isAuthenticated) {
    return null; //or a custom unauthorised component
  }
  return (
      <HomeDash/>
  );
}


export default Home