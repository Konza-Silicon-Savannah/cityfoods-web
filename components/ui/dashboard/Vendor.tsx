import React from 'react'

const Vendor = () => {
  return (
    <div className='px-6'>
        <h3 className="text-lg font-semibold mb-2 mt-4">Available Vendors</h3>
        <p className="mb-6">Select a vendor to view available menu items</p>

        {/* Vendor List (Placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replace with dynamic vendor data */}
            <div className="bg-white shadow-md rounded-lg p-4 h-32 transition-colors duration-300 transform border cursor-pointer hover:border-transparent group hover:bg-green-200 dark:border-gray-700 dark:hover:border-transparent">
                <h4 className="text-lg font-semibold">Vendor 1</h4>
                <p className="text-gray-500">Explore our menu</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h4 className="text-lg font-semibold">Vendor 2</h4>
                <p className="text-gray-500">Explore our menu</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h4 className="text-lg font-semibold">Vendor 3</h4>
                <p className="text-gray-500">Explore our menu</p>
            </div>
        </div>
    </div>
  )
}

export default Vendor