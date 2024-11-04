import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import api from '@/utils/api';; // Import the configured axios instance


interface Foods {
    id: number;
    name: string;
    price: string;
    description: string;
    menu_category: string;
    image: string;
    vendor: number;
}

interface FoodItemProps {
    onAddToCart: (item: Foods) => void;
}

const FoodItem: React.FC<FoodItemProps> = ({ onAddToCart }) => {
    const [foodItems, setFoodItems] = useState<Foods[]>([]);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const response = await api.get('api/v1/food-items');
                setFoodItems(response.data);
            } catch (error) {
                console.error('Error fetching food items:', error);
            }
        };

        fetchFoodItems();
    }, []);

    function showToast(message: string) {
        toast(message, {
            description: 'food item added to cart'
        });
    }
    

    const handleAddToCart = (item: Foods) => {
        onAddToCart(item);
        showToast(`${item.name} added to cart`);
    };

    return (
      <div className="md:grid gap-4 md:gap-12 mt-4 xl:mt-4 md:grid-cols-2 xl:grid-cols-5 overflow-x-auto md:overflow-x-none flex sm:space-x-4 px-4">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="grid max-w-sm bg-white rounded-xl shadow-lg"
          >
            <div className="w-[220px] md:w-full h-18 md:h-32">
              <Image
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-[120px] md:w-full md:rounded"
                quality={100}
                width={100}
                height={100}
                unoptimized
                priority
              />
              <div className="flex justify-between p-2">
                <h2 className="font-semibold text-sm md:text-lg">
                  {item.name}
                </h2>
                <div className="flex items-center text-sm  space-x-1">
                  <span className="flex items-center space-x-1">
                    <span className="text-black">4.5</span>
                  </span>
                  <span className="text-amber-300">★★★★</span>
                </div>
              </div>
            </div>
            <div className="p-2">
              <p className="mt-3">{item.description}</p>
            </div>

            <div className="flex items-center justify-between p-2">
              <p className="text-sm md:text-lg font-semibold text-green-600">
                Kes {item.price}
              </p>

              <Button
                className="bg-green-600 hover:bg-green-600 text-white rounded-full p-3 mb-2 transition-colors duration-300"
                onClick={() => handleAddToCart(item)}
              >
                <p className="text-sm">Add to cart</p>
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default FoodItem;