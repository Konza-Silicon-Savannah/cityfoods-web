import React from "react";
import Image from "next/image";
import Vendor from "./Vendor";
import Topnav from "./Topnav";

const VendorSelectPage = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-2">
      {/* Header Section */}
      <Topnav />

      {/* Main Content */}
      <div className="w-full max-w-4xl mt-6 text-left">
          <Vendor/>
      </div>
    </div>
  );
};

export default VendorSelectPage;
