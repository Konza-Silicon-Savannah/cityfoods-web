"use client";

import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Combobox } from './multiselect';
import api from '@/utils/api'; // Import the configured axios instance



const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    price: z.string().min(2, {
        message: "price must be at least 2 characters.",
      }),
    description: z.string().min(2, {
        message: "description must be at least 2 characters.",
      }),
    menu_category: z.string().min(1, {
        message: "category must be selected.",
      }),
    days_available: z.array(z.string()).optional(),
    image: z.any().optional(),
  })

function showToast(message: string) {
    toast(message, {
      description: "You can now close the dialog",
    });
}

interface MenuCategory {
    id: number;
    name: string;
  }

interface FoodEditProps {
    foodItem: {
        id: number;
        menu_category: string; // Ensure this is a correct type
        name: string;
        price: string;
        description: string;
        available: boolean;
        image: string | null;
        days_available: string;
    };
    onUpdate: () => void;
}

export default function FoodEdit({ foodItem, onUpdate }: FoodEditProps) {

    const [categories, setCategories] = useState<MenuCategory[]>([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await api.get('api/v1/menu-categories/');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
            showToast('Failed to fetch menu categories');
        }
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: foodItem.name,
          price: foodItem.price,
          description: foodItem.description,
          menu_category: foodItem.menu_category,
          days_available: foodItem.days_available.split(', '),
          image: undefined,
        },
      })

    useEffect(() => {
      form.reset({
        name: foodItem.name,
        price: foodItem.price,
        description: foodItem.description,
        menu_category: foodItem.menu_category,
        days_available: foodItem.days_available.split(', '),
        image: foodItem.image,
      });
    }, [foodItem, form]);

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        const formData = new FormData();
        for (const [key, value] of Object.entries(values)) {
          if (key === 'image' && value instanceof File) {
            formData.append(key, value);
          } else if (key === 'days_available') {
            formData.append(key, (value as string[]).join(', '));
          } else {
            formData.append(key, value as string);
          }
        }

        await api.patch(`api/v1/food-items/${foodItem.id}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        showToast("Food Item Updated Successfully");
        onUpdate();
      } catch (error) {
        console.error('Error updating food item:', error);
        showToast("Failed to update food item");
      }
    }

    const handleDelete = async () => {
      if (window.confirm("Are you sure you want to delete this food item?")) {
        try {
          await api.delete(`api/v1/food-items/${foodItem.id}/`);
          showToast("Food Item Deleted Successfully");
          onUpdate();
        } catch (error) {
          console.error('Error deleting food item:', error);
          showToast("Failed to delete food item");
        }
      }
    }

    return (
        <div className=''>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='rounded-full ' size="sm">edit</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Food Item</DialogTitle>
                        <DialogDescription>
                            Update the food Item content.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                                <FormField 
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder='Main dish' {...field}/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="price"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Price</FormLabel>
                                            <FormControl>
                                                <Input placeholder='100' {...field}/>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder='previous description' {...field}
                                                    className="col-span-2 h-8"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="menu_category"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Menu Category</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value} >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder='Select category' />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                        <SelectLabel>Menu Categories</SelectLabel>
                                                        {categories.map((category) => (
                                                            <SelectItem key={category.id} value={category.id.toString()}>
                                                                {category.name}
                                                            </SelectItem>
                                                        ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="days_available"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Available on ?</FormLabel>
                                            <FormControl>
                                                <Combobox value={field.value ?? []} onChange={field.onChange} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Upload Image</FormLabel>
                                            <FormControl>
                                            <Input 
                                                type="file" 
                                                accept="image/jpeg, image/png" 
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        field.onChange(file);
                                                    }
                                                }} 
                                            />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className='grid grid-flow-col gap-8'>
                                    <Button 
                                        variant="outline" 
                                        className="w-full bg-green-600 text-white" 
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                    <Button variant="destructive" className="rounded-lg" onClick={handleDelete} type="button">Delete</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}