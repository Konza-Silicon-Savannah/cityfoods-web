import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='mt-10'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                    alt="nice dish of food"
                    src="/images/home/image.png"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="w-24 h-24 bg-blue-500 rounded-full">
                    <Image
                        alt="nice dish of food"
                        src="/images/home/image.png"
                        className="object-cover rounded-full"
                        width={40}
                        height={40}
                    />
                </div>
            </div>

            <div className="lg:py-24">
                <h2 className="text-4xl font-bold sm:text-4xl text-green-700">Where taste <br />meets the myth</h2>

                <p className="mt-4 text-gray-600">
                Satisfy your cravings with fast <br />and convenient food delivery <br />service.
                </p>

                <a
                href="#"
                className="mt-8 inline-block rounded-full bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                Order Now
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero