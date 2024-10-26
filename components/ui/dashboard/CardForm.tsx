"use client"

// form imports
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/components/ui/hooks/use-toast"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Combo } from "@/components/ui/dashboard/Combo";

const formSchema = z.object({
    Card: z.string().min(10, {
        message: "card information must be valid number"
    }),
    cardmonth: z.string().min(5, {
        message: "month must not be in the past"
    }),
    cardcvc: z.string().min(10, {
        message: "card information must be valid number"
    }),
    cardholder: z.string().min(10, {
        message: "card information must be fullname"
    }),
    cardbilling: z.string().min(10, {
        message: "Must be the country card was issued"
    }),
    cardaddress: z.string().min(10, {
        message: "address must be as linked in the card"
    }),
})

export function CardForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Card: "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        showToast();
        console.log("form submitted", data);
    }

    function showToast() {
        toast({
            title: "You are paying 1000"
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField 
                    control={form.control}
                    name="Card"
                    render={({ field })=> (
                        <FormItem>
                            <FormLabel>
                                Card information
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="**** **** **** 5968" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} 
                />
                <div className="flex flex-1 gap-3">
                    <FormField 
                        control={form.control}
                        name="cardmonth"
                        render={({ field })=> (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="mm/yy" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} 
                    />
                    <FormField 
                        control={form.control}
                        name="cardcvc"
                        render={({ field })=> (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="CVC" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )} 
                    />
                </div>
                <FormField 
                    control={form.control}
                    name="cardholder"
                    render={({ field })=> (
                        <FormItem>
                            <FormLabel>
                                Cardholder name
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Full name on card" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} 
                />
                <FormField 
                    control={form.control}
                    name="cardbilling"
                    render={()=> (
                        <FormItem className="grid">
                            <FormLabel>
                                Billing address
                            </FormLabel>
                            <Combo />
                            <FormMessage/>
                        </FormItem>
                    )} 
                />
                <FormField 
                    control={form.control}
                    name="cardaddress"
                    render={({ field })=> (
                        <FormItem className="grid">
                            <FormLabel className="text-blue-600 text-sm font-bold">
                                Enter address manually(optional)
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Address" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )} 
                />
                <Button type='submit' className="w-full">Pay Now</Button>
            </form>
        </Form>
    )
    }

