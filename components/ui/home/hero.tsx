import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='mt-16'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-full overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                    <Image
                        alt="nice dish of food"
                        src="/images/home/image.png"
                        className="object-cover"
                        width={800}
                        height={800}
                        sizes='100'
                        priority
                    />
                    
                </div>
                <div className="grid items-center justify-center lg:py-12">
                    <h2 className="text-4xl font-bold md:text-7xl text-green-700">Where taste <br />meets the myth</h2>

                    <p className="mt-4 text-gray-600 text-sm  md:text-2xl">
                        Satisfy your cravings with fast <br />and convenient food delivery <br />service.
                    </p>

                    <div>
                        <a
                        href="#"
                        className="mt-8 inline-block rounded-full bg-black px-12 py-3 text-lg font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Order Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero