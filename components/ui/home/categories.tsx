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
      const response = await api.get("api/v1/menu-categories");
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
        <p className="font-semibold text-slate-200 md:text-gray-800 capitalize">
          popular categories
        </p>
        <div className="md:grid gap-4 md:gap-16 mt-6 xl:mt-10 md:grid-cols-5 overflow-x-auto md:overflow-x-none flex sm:space-x-4">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="grid grid-flow-row border-none shadow-none"
            >
              <CardContent className="grid items-start p-2">
                <div className="flex items-center justify-between px-10">
                  <div className="rounded-full w-8 md:w-8 h-8 ">
                    {category?.image ? (
                      <Image
                        src={category.image}
                        alt={category.name}
                        className="object-cover h-8 w-8 rounded"
                        height={8}
                        width={8}
                        sizes="100"
                        unoptimized
                        priority
                      />
                    ) : (
                      <p className="font-bold text-sm px-2 capitalize">
                        {category.name}
                      </p>
                    )}
                  </div>
                  <div className="w-2/3">
                    <p className="font-bold text-sm px-2  capitalize">
                      {category.name}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center mb-0 p-0"></CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
