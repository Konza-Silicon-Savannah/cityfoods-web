import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodEdit from "@/components/ui/vendor/foodmenu/menuedit";
import Image from "next/image";

interface MenuCategory {
  id: number;
  name: string;
}

interface FoodItem {
  id: number;
  menu_category: number;
  name: string;
  price: string;
  description: string;
  available: boolean;
  image: string | null;
  days_available: string;
}

// Configure axios to send credentials (cookies) with requests
const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  withCredentials: true,  // Ensure cookies (HTTP-only) are sent with requests
});

export function TabsMenu() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    fetchCategories();
    fetchFoodItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get('menu-categories/');
      setCategories(response.data);
      if (response.data.length > 0) {
        setActiveTab(response.data[0].id.toString());
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchFoodItems = async () => {
    try {
      const response = await api.get('food-items/');
      setFoodItems(response.data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-2">
      <TabsList className="grid w-full grid-cols-5 my-4">
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id.toString()} className="rounded-full">
            <span>{category.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id.toString()}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {foodItems
              .filter(item => item.menu_category === category.id)
              .map(item => (
                <Card key={item.id}>
                  <CardContent className="grid items-center place-items-center p-0 m-0 rounded-lg h-44">
                    <div className="rounded-full w-full h-32">
                      {item?.image ? (
                          <Image
                              src={item.image}
                              alt={item.name}
                              className="object-cover h-32 w-full rounded-lg"
                              width={100}
                              height={32}
                          />
                      ) : (
                          <p className='p-6'>No image available</p>
                      )}
                    </div>
                    <div className="space-y-2 w-full space-x-6 h-full">
                      <h1 className="font-bold px-6 mt-2">{item.name}</h1>
                      <p id="name" className="text-sm text-bold">
                        {item.description && item.description.length > 18 
                          ? `${item.description.substring(0, 18)}... `
                          : item.description || 'No description available'}
                        {item.description && item.description.length > 18 && (
                          <span className="text-blue-600">Read more</span>
                        )}
                      </p>

                    </div>
                  </CardContent>
                  <CardFooter className="justify-between mt-5">
                    <p className="font-extralight">Price: <span className="text-yellow-900 font-bold text-sm">{item.price}</span></p>
                    <FoodEdit foodItem={item}/>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
