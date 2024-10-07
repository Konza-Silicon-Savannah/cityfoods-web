import React from 'react'
import FoodItem from './FoodItem'

const Foodcard = () => {
  return (
    <section className="rounded-lg">
        <div className="container px-6">
            <p className='font-semibold'>Menu Items</p>
            <div className="md:grid grid-cols-1 gap-4 md:gap-12 mt-4 xl:mt-4 md:grid-cols-2 xl:grid-cols-4 overflow-x-auto md:overflow-x-none flex sm:space-x-4">
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </div>
        </div>
    </section>
  )
}

export default Foodcard