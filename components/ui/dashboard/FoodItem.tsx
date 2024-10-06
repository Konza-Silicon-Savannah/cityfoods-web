import Image from 'next/image'
import React from 'react'

const FoodItem = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center p-4">
            <Image
                src="/images/fishmealhero.png" 
                alt="Dish Image" 
                className="w-32 h-16 rounded-full object-cover"
                width={100} 
                height={100}
            />
            <div className="ml-4">
            <h4 className="text-sm text-gray-400">Callitos</h4> {/* Restaurant or description */}
            <h2 className="font-semibold text-lg">Main Course</h2> {/* Food name */}
            <div className="flex items-center text-sm text-green-500 space-x-1">
                <span className="flex items-center space-x-1">
                    <span>4.5</span>
                </span>
                <span className="text-gold-600">★</span> {/* Star symbol */}
            </div>
            </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2">
            <p className="text-lg font-semibold text-green-600">Kes 450</p> {/* Price */}
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-2 transition-colors duration-300">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 4v16m8-8H4" 
                    />
                </svg>
            </button>
        </div>
    </div>

  )
}

export default FoodItem