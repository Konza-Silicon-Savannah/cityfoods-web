"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    email: z.string().min(2, {
        message:"Enter a valid email"
    }),
    password: z.string().min(8, {
        message:"Enter a valid password"
    }),
})


export function UserLoginForm() {
    // 1. Define the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",  
        }
    })
    // 2. Define a submit handler
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        //Do something with the form values
        // This will be typesafe and validated
        console.log(values)
    }


    return (
        <Form {...form}>
            <div className="w-full max-w-sm">
              <h1 className="text-3xl font-bold text-gray-900">
                  City<span className="text-green-600">Foods</span>
              </h1>
              <h2 className="mt-2 text-lg text-gray-700">Welcome back 👋</h2>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control} 
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email@domain.com" {...field}/>
                            </FormControl>
                            <FormDescription>
                                Enter your email address.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}                   
                />
                <FormField
                    control={form.control} 
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <div className="mt-4 flex items-center justify-between">
                                <FormLabel>Password</FormLabel>
                                <div className="text-sm">
                                    <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                                </div>
                            </div>
                            <FormControl>
                                <Input placeholder="*************" {...field}/>
                            </FormControl>
                            <FormDescription>
                                Enter your password.
                            </FormDescription>
                            <FormMessage/>
                            
                        </FormItem>

                    )}                   
                />
                <Button type="submit" className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition duration-300">Submit</Button>
            </form>
            {/* signup instead link */}
            <div className="mt-4">
                <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className="text-blue-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </Form>
    )
}