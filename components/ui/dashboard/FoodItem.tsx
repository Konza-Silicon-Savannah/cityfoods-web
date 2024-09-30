import React from 'react'

const FoodItem = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center p-4">
            <img 
            src="/path-to-image.jpg" 
            alt="Dish Image" 
            className="w-16 h-16 rounded-full object-cover" 
            />
            <div className="ml-4">
            <h4 className="text-sm text-gray-400">Callitos</h4> {/* Restaurant or description */}
            <h2 className="font-semibold text-lg">Main Course</h2> {/* Food name */}
            <div className="flex items-center text-sm text-green-500 space-x-1">
                <span className="flex items-center space-x-1">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 17.27l3.18 1.674a.51.51 0 00.742-.564l-.609-3.55L17.992 13a.51.51 0 00-.283-.87l-3.563-.518-1.6-3.22a.51.51 0 00-.916 0l-1.6 3.22-3.563.518a.51.51 0 00-.283.87l2.584 2.53-.609 3.55a.51.51 0 00.742.564L12 17.27z" 
                    />
                </svg>
                <span>4.5</span>
                </span>
                <span className="text-gray-400">★</span> {/* Star symbol */}
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