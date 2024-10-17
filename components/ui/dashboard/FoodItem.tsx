import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Define API request endpoint
const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true,
});

function showToast(message: string) {
    toast(message, {
        description: 'food item added to cart'
    });
}

interface Food {
    id: number;
    name: string;
    price: string;
    description: string;
    menu_category: string;
    image: string;
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

    const handleAddToCart = (item: Food) => {
        onAddToCart(item);
        showToast(`${item.name} added to cart`);
    };

    return (
        <div className="md:grid grid-cols-1 gap-4 md:gap-12 mt-4 xl:mt-4 md:grid-cols-2 xl:grid-cols-4 overflow-x-auto md:overflow-x-none flex sm:space-x-4">
            {foodItems.map((item) => (
                <div key={item.id} className="max-w-sm bg-white rounded-xl shadow-lg">
                    <div className="grid md:flex items-center w-[220px] md:w-full">
                        <Image
                            src={item.image || "/images/fishmealhero.png"}
                            alt={item.name}
                            className="w-full h-18 md:h-24 md:w-24 md:rounded-full "
                            width={24}
                            height={24}
                        />
                        <div className="md:ml-4 px-2">
                            <h4 className="text-sm text-gray-400">{item.menu_category}</h4>
                            <h2 className="font-semibold text-sm md:text-lg">{item.name}</h2>
                            <div className="flex items-center text-sm text-green-500 space-x-1">
                                <span className="flex items-center space-x-1">
                                    <span>4.5</span>
                                </span>
                                <span className="text-gold-600">★</span>
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