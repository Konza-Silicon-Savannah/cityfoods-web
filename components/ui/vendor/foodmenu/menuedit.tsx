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
        },
      })
    return (
        <div className=''>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className='rounded-full'>edit</Button>
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
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                                        <SelectValue placeholder='previous description' {...field} />
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
                                <Button 
                                    variant="default" 
                                    className="w-full" 
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </form>
                        </Form>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
