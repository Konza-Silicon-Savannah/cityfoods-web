"use client";

import React, { useState, useEffect } from "react";
import { AxiosError } from "axios";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import api from "@/utils/api"; // Import the configured axios instance
import { toast } from "sonner";

interface MenuCategory {
  id: number;
  name: string;
  image: string | null;
}

interface ErrorResponse {
  detail?: string;
}

function showToast(message: string) {
  toast(message, {
    description: "You can now close the dialog",
  });
}

const Categories = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await api.get("api/v1/menu-categories/");
      setCategories(response.data);
    } catch (error) {
      const err = error as AxiosError<ErrorResponse>;
      setError(err.response?.data?.detail || "Error fetching categories");
      console.error("Error fetching categories:", error);
      showToast("Failed to fetch menu categories");
    }
  };

  if (error) {
    return <div className="text-red-500"></div>;
  }

  return (
    <section className="w-full mt-4 mb-4">
      <div className="p-6">
        <p className="font-semibold text-gray-800 capitalize">
          popular categories
        </p>
        <div className="md:grid gap-4 md:gap-16 mt-6 xl:mt-10 md:grid-cols-5 overflow-x-auto md:overflow-x-none flex sm:space-x-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="grid grid-flow-row border-none shadow-none"
            >
              <CardContent className="grid items-center place-items-center p-0 md:mt-2">
                <div className="rounded-full w-32 md:w-32 h-32">
                  {category?.image ? (
                    <Image
                      src={category.image}
                      alt={category.name}
                      className="object-cover h-32 w-32 rounded-full"
                      height={32}
                      width={32}
                      sizes="100"
                      priority
                    />
                  ) : (
                    <p className="p-6">No image available</p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="grid justify-center">
                <div className="md:px-2">
                  <h1 className="font-bold">{category.name}</h1>
                </div>
                <p className="font-extralight md:px-2 text-sm">
                  Rating <span className="text-yellow-900 font-bold">4.5</span>{" "}
                  {/* Placeholder rating */}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
