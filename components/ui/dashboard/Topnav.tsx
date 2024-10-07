import React from 'react'
import Image from 'next/image'
import Header from './Header'

const Topnav = () => {
  return (
    <>
      {/* Header Section */}
      <Header/>

      {/* Main Content */}
      <main className="w-full container mt-6 px-6">
        <section className="bg-black rounded-lg">
            <div className="py-4 mx-12 lg:flex lg:items-center lg:justify-between">
                <div className="lg:items-start lg:justify-start text-left px-4">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Craving something delicious?</h2>
                    <p className="mb-4 text-white">
                        Choose from a wide variety of cuisines and get the delivery conveniently <br /> at your location.
                    </p>
                </div>
                <div className=" mt-2 md:mt-0">
                    <div className="relative w-full h-12 md:h-16 px-4">
                        <Image
                            alt="nice dish of food"
                            src="/icons/eating.png"
                            className="object-cover h-12 w-12 md:h-24 md:w-24"
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default Topnav