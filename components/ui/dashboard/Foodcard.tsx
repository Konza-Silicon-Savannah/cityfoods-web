import React from 'react'
import FoodItem from './FoodItem'

const Foodcard = () => {
  return (
    <section className="rounded-lg">
        <div className="container px-6 py-10">
            <p className='font-semibold'>Menu Items</p>
            <div className="grid grid-cols-1 gap-12 mt-8 xl:mt-4 md:grid-cols-2 xl:grid-cols-4">
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