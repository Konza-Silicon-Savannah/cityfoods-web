import React from "react";
import Image from "next/image";
import AppStoreButton from "./AppstoreBtn";

const Mobile = () => {
  return (
    <section className="mt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              alt="nice dish of food"
              src="/images/home/mobile.png"
              className="absolute inset-0 object-fit"
              width={400}
              height={160}
              sizes="100"
              priority
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-4xl font-bold sm:text-4xl text-black">
              Multiple Vendors in one App.
            </h2>
            <p className="mt-4 text-2xl mb-2">
              Order, Track, and Enjoy <br /> Delightful Meals
            </p>
            <p>
              Satisfy your cravings with fast and <br /> convenient food
              ordering and delivery service.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 gap-4 mt-3">
              <AppStoreButton store="apple" />
              <AppStoreButton store="google" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
