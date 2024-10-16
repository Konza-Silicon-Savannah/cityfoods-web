import React from 'react'
import Image from 'next/image'
import {
    Card,
    CardContent, CardFooter
  } from "@/components/ui/card"

const Categories = () => {
  return (
    <section className="w-full mt-4 mb-4">
        <div className="p-6">
            <p className="font-semibold text-gray-800 capitalize">popular categories</p>
            <div className="md:grid gap-4 md:gap-16 mt-6 xl:mt-10 md:grid-cols-5 overflow-x-auto md:overflow-x-none flex sm:space-x-4">
                <Card className='grid grid-flow-row border-none shadow-none'>
                    <CardContent className="grid items-center place-items-center p-0 md:mt-2">
                        <div className="rounded-full w-full md:w-24">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover w-full md:h-24 md:w-24 md:rounded-full "
                            height={24}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="grid justify-center">
                        <div className="md:px-2">
                            <h1 className="font-bold">Breakfast</h1>
                        </div>
                        <p className="font-extralight md:px-2 text-sm">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                <Card className='grid grid-flow-row border-none shadow-none'>
                    <CardContent className="grid items-center place-items-center p-0 md:mt-2">
                        <div className="rounded-full w-full md:w-24">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover w-full md:h-24 md:w-24 md:rounded-full "
                            height={24}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="grid justify-center">
                        <div className="md:px-2">
                            <h1 className="font-bold">Breakfast</h1>
                        </div>
                        <p className="font-extralight md:px-2 text-sm">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                <Card className='grid grid-flow-row border-none shadow-none'>
                    <CardContent className="grid items-center place-items-center p-0 md:mt-2">
                        <div className="rounded-full w-full md:w-24">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover w-full md:h-24 md:w-24 md:rounded-full "
                            height={24}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="grid justify-center">
                        <div className="md:px-2">
                            <h1 className="font-bold">Breakfast</h1>
                        </div>
                        <p className="font-extralight md:px-2 text-sm">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                <Card className='grid grid-flow-row border-none shadow-none'>
                    <CardContent className="grid items-center place-items-center p-0 md:mt-2">
                        <div className="rounded-full w-full md:w-24">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover w-full md:h-24 md:w-24 md:rounded-full "
                            height={24}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="grid justify-center">
                        <div className="md:px-2">
                            <h1 className="font-bold">Breakfast</h1>
                        </div>
                        <p className="font-extralight md:px-2 text-sm">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                <Card className='grid grid-flow-row border-none shadow-none'>
                    <CardContent className="grid items-center place-items-center p-0 md:mt-2">
                        <div className="rounded-full w-full md:w-24">
                            <Image
                            src='/images/fishmealhero.png'
                            alt="fooditem"
                            className="object-cover w-full md:h-24 md:w-24 md:rounded-full "
                            height={24}
                            width={100}
                            />
                        </div>
                        
                    </CardContent>
                    <CardFooter className="grid justify-center">
                        <div className="md:px-2">
                            <h1 className="font-bold">Breakfast</h1>
                        </div>
                        <p className="font-extralight md:px-2 text-sm">Rating <span className="text-yellow-900 font-bold">4.5</span></p>
                    </CardFooter>
                </Card>
                
            </div>
        </div>
    </section>
  )
}

export default Categories