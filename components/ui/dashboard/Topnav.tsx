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
        <section className="bg-gradient-to-r from-green-700 via-yellow-300 to-green-400 rounded-lg">
            <div className="py-8 mx-12 lg:flex lg:items-center lg:justify-between">
                <div className="lg:items-start lg:justify-start text-left px-4">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Craving something delicious?</h2>
                    <p className="mb-4">
                        Choose from a wide variety of cuisines and get the delivery conveniently <br /> at your location.
                    </p>
                </div>
                <div className="mt-2 lg:mt-0">
                    <div className="relative w-full h-18 px-4">
                        <Image
                            alt="nice dish of food"
                            src="/icons/eating.png"
                            className="object-cover"
                            height={120}
                            width={120}
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