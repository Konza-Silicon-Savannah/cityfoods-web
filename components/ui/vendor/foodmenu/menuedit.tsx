"use client";

import React from 'react';
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
    menucategory: z.string().min(2, {
        message: "category must be selected.",
      }),
    days: z.array(z.string()).optional(),
    image: z.any()
        .refine((file) => file instanceof File, {
            message: "Please upload a valid file",
        })
        .refine((file) => ["image/jpeg", "image/png"].includes(file?.type), {
            message: "Only .jpg and .png files are accepted.",
        })
        .refine((file) => file?.size <= 5 * 1024 * 1024, {
            message: "File size should be less than 5MB.",
        }),
  })

// Separate toast function
function showToast() {
    toast("Food Item Updated Successfully", {
      description: "You can now close the dialog",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo action triggered"),
      },
    });
  }

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Form Submitted", values);  // Debugging log
    // Call the toast function after form submission
    showToast();

  }

export default function FoodEdit() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          price:"",
          description:"",
          menucategory:"",
          days:[],
          image: undefined,
        },
      })
    return (
        <div className=''>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='rounded-full' size="sm">edit</Button>
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
                                    name="menucategory"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Menu Category</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder='Main Course' {...field} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                        <SelectLabel>Menu Categories</SelectLabel>
                                                        <SelectItem value="Main Course">Main Course</SelectItem>
                                                        <SelectItem value="Desert">Desert</SelectItem>
                                                        <SelectItem value="Cold Drinks">Cold Drinks</SelectItem>
                                                        <SelectItem value="Side-Dish">Side Dish</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="days"
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
                                    <Button variant="destructive" className="rounded-lg">Delete</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

