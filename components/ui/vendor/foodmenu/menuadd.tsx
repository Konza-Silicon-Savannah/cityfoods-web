"use client";

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { Combobox } from './multiselect';

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    price: z.string().min(2, {
        message: "price must be at least 2 characters.",
      }),
    description: z.string().min(2, {
        message: "price must be at least 2 characters.",
      }),
    menucategory: z.string().min(2, {
        message: "price must be at least 2 characters.",
      }),
    days: z.array(z.string()).optional(),
    image: z.any()
        .refine((file) => file instanceof File, {
            message: "Please upload a file",
        })
        .refine((file) => ["image/jpeg", "image/png"].includes(file?.type), {
            message: "Only .jpg and .png files are accepted.",
        })
        .refine((file) => file?.size <= 5 * 1024 * 1024, {
            message: "File size should be less than 5MB.",
        })
  });

// Separate toast function
function showToast() {
    toast("Food Item Created Successfully", {
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

export default function FoodAdd() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          price:"",
          description:"",
          menucategory:"",
          days: [],
          image: undefined,
        },
      })
    return (
        <div className=''>
            <Dialog>
                <DialogTrigger asChild>
                    <Button  className='rounded-lg bg-green-600'>Add Food Item</Button>
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
                                    name="menucategory"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Menu Category</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder='select' {...field} />
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
    )
}

