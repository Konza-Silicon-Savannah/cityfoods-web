import React from 'react'
import FoodItem from './FoodItem'

const Foodcard = () => {
  return (
    <section className="rounded-lg">
        <div className=" px-6">
            <p className='font-semibold'>Menu Items</p>
            <FoodItem />
        </div>
    </section>
  )
}

export default Foodcard