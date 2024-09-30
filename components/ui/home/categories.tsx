import React from 'react'
import Image from 'next/image'

const Categories = () => {
  return (
    <section className="rounded-lg container w-full mt-4 mb-4">
        <div className="p-6">
            <p className="font-semibold text-gray-800 capitalize  dark:text-white">Popular Categories</p>
            <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-10 md:grid-cols-2 xl:grid-cols-5">
                <div className="flex flex-col items-center p-4 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-400 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded-full " 
                        src="/images/home/image copy.png" 
                        alt=""
                        width={100}
                        height={100}
                    />
                    <p className="mt-4 font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Meat</p>
                </div>

                <div className="flex flex-col items-center p-4 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-400 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded-full " 
                        src="/images/home/image copy.png" 
                        alt=""
                        width={100}
                        height={100}
                    />
                    <p className="mt-4 font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Vegetables</p>
                </div>

                <div className="flex flex-col items-center p-4 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-400 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded-full " 
                        src="/images/home/image copy.png" 
                        alt=""
                        width={100}
                        height={100}
                    />
                    <p className="mt-4 font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Chicken</p>
                </div>

                <div className="flex flex-col items-center p-4 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-400 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded-full " 
                        src="/images/home/image copy.png" 
                        alt=""
                        width={100}
                        height={100}
                    />
                    <p className="mt-4 font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Fruits</p>
                </div>
                <div className="flex flex-col items-center p-4 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-yellow-400 dark:border-gray-700 dark:hover:border-transparent">
                    <Image 
                        className="object-cover rounded-full " 
                        src="/images/home/image copy.png" 
                        alt=""
                        width={100}
                        height={100}
                    />
                    <p className="mt-4 font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Salad</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories