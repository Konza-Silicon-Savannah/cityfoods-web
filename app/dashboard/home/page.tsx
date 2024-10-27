"use client";

import React, { useState } from "react";
import Categories from "@/components/ui/home/categories";
import FoodItem from "@/components/ui/dashboard/FoodItem";
import Cart from "@/components/ui/dashboard/Cart";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface Food {
  id: number;
  name: string;
  price: string;
  description: string;
  menu_category: string;
  image: string;
  vendor: number; // Add vendor ID to the CartItem interface
}

interface CartItem extends Food {
  quantity: number;
  
}

const HomePage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <div className="w-full min-h-screen bg-green-50 flex flex-col">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center py-3 px-4">
        <div className="flex items-center mx-2">
          <Input
            type="text"
            placeholder="Search for food, and more "
            className="border-slate-900 md:w-64"
          />
        </div>
        <div className="justify-between items-center flex">
          {/* <p className="font-extrabold font-sm px-4">Welcome</p> */}
          <Cart
            cartItems={cartItems}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
          <div className="relative w-8 h-8 border-2 border-green-700 rounded-full overflow-hidden">
            <Image
              alt="nice dish of food"
              src="/images/home/avatar.png"
              className="object-cover"
              fill
              sizes="100"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full mt-6 px-6">
        <section className="bg-black rounded-lg">
          <div className="py-4 mx-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:items-start lg:justify-start text-left px-4">
              <h2 className="text-2xl font-semibold mb-2 text-white">
                Craving something delicious?
              </h2>
              <p className="mb-4 text-white">
                Choose from a wide variety of cuisines and get the delivery
                conveniently <br /> at your location.
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
                  sizes="100"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="">
        <Categories />
      </div>
      <div className="">
        <FoodItem onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default HomePage;
