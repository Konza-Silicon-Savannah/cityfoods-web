import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent, CardFooter
  } from "@/components/ui/card"

const Categories = () => {
  return (
    <section className="rounded-lg container mx-auto mt-4 mb-4">
        <div className="p-6">
            <p className="font-semibold text-gray-800 capitalize  dark:text-white">Popular Categories</p>
            <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-10 md:grid-cols-5">
                <Card className='grid grid-flow-row'>
                    <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
                        <div className="rounded-full w-full">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover h-32 w-full rounded-lg"
                            height={32}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="justify-between">
                        <div className="px-2">
                            <h1 className="font-bold">Main course</h1>
                        </div>
                        <p className="font-extralight px-2">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                <Card className='grid grid-flow-row'>
                    <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
                        <div className="rounded-full w-full">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover h-32 w-full rounded-lg"
                            height={32}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="justify-between">
                        <div className="px-2">
                            <h1 className="font-bold">Some</h1>
                        </div>
                        <p className="font-extralight px-2">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                <Card className='grid grid-flow-row'>
                    <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
                        <div className="rounded-full w-full">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover h-32 w-full rounded-lg"
                            height={32}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="justify-between">
                        <div className="px-2">
                            <h1 className="font-bold">Side Dish</h1>
                        </div>
                        <p className="font-extralight px-2">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                <Card className='grid grid-flow-row'>
                    <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
                        <div className="rounded-full w-full">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover h-32 w-full rounded-lg"
                            height={32}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="justify-between">
                        <div className="px-2">
                            <h1 className="font-bold">Soft Drinks</h1>
                        </div>
                        <p className="font-extralight px-2">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                <Card className='grid grid-flow-row'>
                    <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg">
                        <div className="rounded-full w-full">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover h-32 w-full rounded-lg"
                            height={32}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="justify-between">
                        <div className="px-2">
                            <h1 className="font-bold">Desert</h1>
                        </div>
                        <p className="font-extralight px-2">Rating <span className="text-yellow-900 font-bold">3.9</span></p>
                    </CardFooter>
                </Card>
                
            </div>
        </div>
    </section>
  )
}

export default Categories