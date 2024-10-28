"use client"

import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormDescription,
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
import { Checkbox } from "@/components/ui/checkbox"
import api from '@/utils/api'; // Import the configured axios instance

interface MenuCategory {
    id: number;
    name: string;
  }

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    price: z.string().min(2, {
        message: "Price must be at least 2 characters.",
    }),
    description: z.string().optional(),
    menu_category: z.string(),
    days_available: z.array(z.string()),
    image: z.any().optional(),
    available: z.boolean().default(true), // Add this line
});

function showToast(message: string) {
    toast(message, {
      description: "You can now close the dialog"
    });
}

export default function FoodAdd() {
    const [categories, setCategories] = useState<MenuCategory[]>([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await api.get('/api/v1/menu-categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
            showToast('Failed to fetch menu categories');
        }
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          price: "",
          description: "",
          menu_category: "",
          days_available: [],
          image: undefined,
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('description', values.description || '');
            formData.append('menu_category', values.menu_category);
            formData.append('days_available', values.days_available.join(', ')); // Join array into string
            formData.append('available', String(values.available)); // Add this line
            if (values.image) {
                formData.append('image', values.image);
            }

            // Log the FormData contents
            console.log("FormData contents:");
            formData.forEach((value, key) => {
                console.log(key, value);
            });

            const response = await api.post('api/v1/food-items', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Food item created:', response.data);
            showToast('Food Item Created Successfully');
            form.reset();
        } catch (error) {
            console.error('Error creating food item:', error);
            showToast('Failed to create food item');
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='rounded-lg bg-green-600'>Add Food Item</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Food Item</DialogTitle>
                        <DialogDescription>
                            Add a food Item to the menu.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-2 py-2">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                                <FormField 
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder='eg. fish fillets' {...field}/>
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
                                                <Input placeholder='eg. 100' {...field}/>
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
                                                    placeholder='short description' {...field}
                                                    className="col-span-2 h-16"
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
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder='select' />
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
                                                <Combobox value={field.value} onChange={field.onChange} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="available"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    Available
                                                </FormLabel>
                                                <FormDescription>
                                                    Is this item currently available?
                                                </FormDescription>
                                            </div>
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
                                <Button 
                                    variant="default" 
                                    className="w-full" 
                                    type="submit"
                                >
                                    Add
                                </Button>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}