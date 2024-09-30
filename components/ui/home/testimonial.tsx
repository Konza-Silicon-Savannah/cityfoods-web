import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className='mt-10 bg-zinc-50'>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 items-center">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative w-82 h-82 bg-blue-500 rounded-lg overflow-hidden lg:order-first ">
                <Image
                    alt="nice dish of food"
                    src="/images/home/image.png"
                    className="absolute h-full object-cover"
                    fill
                />
            </div>

            <div className="lg:py-20">
                <h2 className="text-2xl font-extrabold sm:text-2xl text-black">What the customers say about <br />City Foods</h2>
                <div className="relative w-16 h-16 bg-white-500 border rounded-full overflow-hidden mt-2">
                    <Image
                        alt="nice dish of food"
                        src="/images/home/avatar.png"
                        className="object-cover"
                        fill
                    />
                </div>
                <p className='text-sm mt-3 font-bold'>Said Abdalla</p>                    
                <p className="mt-4 text-gray-600">
                    The fish fillets are absolutely delicious, the texture is crunchy <br /> on the tongue, the sauce and seasoning are just right. The <br /> presentation is very premium. <br /> Definitely my go to for stomach centric experience..
                </p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial