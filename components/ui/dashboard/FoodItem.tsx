import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import api from '@/app/api/axios'; // Import the configured axios instance


interface Food {
    id: number;
    name: string;
    price: string;
    description: string;
    menu_category: string;
    image: string;
    vendor: string;
}

interface FoodItemProps {
    onAddToCart: (item: Food) => void;
}

const FoodItem: React.FC<FoodItemProps> = ({ onAddToCart }) => {
    const [foodItems, setFoodItems] = useState<Food[]>([]);

    useEffect(() => {
        const fetchFoodItems = async () => {
            try {
                const response = await api.get('food-items/');
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
    

    const handleAddToCart = (item: Food) => {
        onAddToCart(item);
        showToast(`${item.name} added to cart`);
    };

    return (
        <div className="md:grid grid-cols-1 gap-4 md:gap-12 mt-4 xl:mt-4 md:grid-cols-2 xl:grid-cols-4 overflow-x-auto md:overflow-x-none flex sm:space-x-4 px-4">
            {foodItems.map((item) => (
                <div key={item.id} className="max-w-sm bg-white rounded-xl shadow-lg">
                    <div className="grid md:flex items-center w-[220px] md:w-full md:h-32">
                        <Image
                            src={item.image || "/images/fishmealhero.png"}
                            alt={item.name}
                            className="object-cover w-full h-32 md:h-32 md:w-32 md:rounded-full "
                            quality={100}
                            width={100}
                            height={100}
                            priority
                        />
                        <div className="md:ml-4 px-2">
                            <h4 className="text-sm text-gray-400">{item.menu_category}</h4>
                            <h2 className="font-semibold text-sm md:text-lg">{item.name}</h2>
                            <div className="flex items-center text-sm text-green-500 space-x-1">
                                <span className="flex items-center space-x-1">
                                    <span>4.5</span>
                                </span>
                                <span className="text-gold-600">★★★★</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-2 md:px-4">
                        <p className="text-sm md:text-lg font-semibold text-green-600">Kes {item.price}</p>
                        <Button
                            className="bg-black hover:bg-green-600 text-white rounded-full p-2 mb-2 transition-colors duration-300"
                            onClick={() => handleAddToCart(item)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4v16m8-8H4"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodItem;